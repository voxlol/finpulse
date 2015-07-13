Meteor.methods({
    fetchHeadlines: function (symbol) {
        this.unblock();
        var url = "http://finance.yahoo.com/rss/headline?s=" + symbol;
        return Scrape.feed(url)
    },

    fetchWiki: function(search){
      search = search.split(' ').join('+'); // a little bit of url parsing

      return Scrape.wikipedia(search);
    },

});
