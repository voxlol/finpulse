Template.headlines.helpers({
  'headlines' : function(){
    var symbol = Session.get('symbol') ? Session.get('symbol') : 'SPY';
    return Headlines.findOne({symbol:symbol}).items;
  }
})
