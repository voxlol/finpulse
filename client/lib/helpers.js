mksServices = function(){
  return Meteor.user().services;
}
Template.registerHelper('mksServices', mksServices)
