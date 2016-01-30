/**
 * Newest playlists
 */

Template.lastPlaylistsContainer.onCreated(function () {
  var instance = this;

  instance.autorun(function () {
    var subscription = instance.subscribe('playlists.newest');
  });
});

Template.lastPlaylistsContainer.helpers({
  playlists: function () {
    // TODO: use the same query as on the server
    const selector = {
      privacy: 'public'
    };
    const options = {
      fields: {title: 1, cover: 1, createdAt: 1, owner: 1, privacy: 1, songs: 1},
      sort: {createdAt: -1},
      limit: 10
    };

    return Playlists.find(selector, options);
  },
});

/**
 * Followed playlists
 */

Template.followedPlaylistsContainer.onCreated(function () {
  var instance = this;

  instance.autorun(function () {
    var subscription = instance.subscribe('playlists.followed');
  });
});

Template.followedPlaylistsContainer.helpers({
  playlists: function () {
    // TODO: use the same query as on the server
    const selector = {
      privacy: 'public'
    };
    const options = {
      fields: {title: 1, cover: 1, createdAt: 1, owner: 1, privacy: 1, songs: 1},
      sort: {createdAt: -1},
    };

    return Playlists.find(selector, options);
  },
});

/**
 * Own playlists
 */

Template.ownPlaylistsContainer.onCreated(function () {
  var instance = this;

  instance.autorun(function () {
    var subscription = instance.subscribe('playlists.fromUser');
  });
});

Template.ownPlaylistsContainer.helpers({
  playlists: function () {
    // TODO: use the same query as on the server
    const selector = {
    };
    const options = {
      fields: {title: 1, cover: 1, createdAt: 1, owner: 1, privacy: 1, songs: 1},
      sort: {createdAt: -1},
    };

    return Playlists.find(selector, options);
  },
});
