Template.playlistContainer.onCreated(function () {
  var instance = this;

  instance.autorun(function () {
    var dataContext = Template.currentData();
    // console.log(dataContext);

    return;

    // subscribe to the posts publication
    var subscription = instance.subscribe('playlists.single', 1);

    // if subscription is ready, set limit to newLimit
    if (subscription.ready()) {
      console.log("> Received "+limit+" posts. \n\n")
      instance.loaded.set(limit);
    } else {
      console.log("> Subscription is not ready yet. \n\n");
    }
  });

  // 3. Cursor

  instance.playlist = function() {
    return Playlists.find({}, {limit: instance.loaded.get()});
  }

});
