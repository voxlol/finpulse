Template.headlines.helpers({
  'headlines' : function(){
    var symbol = Session.get('symbol') ? Session.get('symbol') : 'SPY';
    var currentHeadline = Headlines.findOne({symbol:symbol});
    return currentHeadline ? currentHeadline.items : null;
  },

  'description' : function(){
    var description = Session.get('symbolDescription');
    return description ? description : "Latest Financial News for SPDR S&P 500";
  }
})
