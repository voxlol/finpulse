if (Meteor.isServer) {

  // Accounts is built into Meteor
  // http://docs.meteor.com/#/basic/accounts_oncreateuser
  Accounts.onCreateUser(function(options, user) {

    // Here is the data this package gives you
    var mks = user.services.makerpass

    // OPTIONAL: Restrict this app to "official" members of MakerPass
    if (mks.memberships.length === 0) {
      throw new Meteor.Error(401, "Sorry, you are not a member of any MakerPass groups.")
    }


    // WARNING: user.profile is writable by user.
    // Don't put something in user.profile if you don't want the user to change it.
    user.profile = options.profile || {}
    user.profile.name       = mks.name
    user.profile.avatarUrl  = mks.avatarUrl

    return user
  })
}
