Template.form.events({
  'submit #symbolform' : function(e){
    e.preventDefault();
    var symbol = $(e.target).find('[name=symbol]').val()

    // Validation
    $(e.target).find('[name=symbol]').val('')

    Session.set('symbol', symbol);

    // meteor server-side method call
    Meteor.call('fetchHeadlines', symbol, function(err, result){
      if(err){
        console.log(err);
        return;
      }

      Session.set('symbolDescription',result.description);

      var targetCollection = Headlines.findOne({symbol: symbol});

      if(!targetCollection){
        // Create a new collection for the symbol
        if(result.description === "Yahoo! Finance: RSS feed not found"){
          return;
        }else{
          console.log('not found for ' + symbol);
          Headlines.insert({
            symbol: symbol,
            description : result.description,
            items : result.items,
          });
        }
      }
      else{
        // Update existing collection's items
        console.log('found collection for ' + symbol)
        var id = targetCollection._id;
        Headlines.update({_id: id}, {$set: {items : result.items}})
      }

    });
  },
})
