import {Mongo} from 'meteor/mongo';

Posts         = new Mongo.Collection('posts');
Comments      = new Mongo.Collection('comments');
Songs         = new Mongo.Collection('songs');
PlaylistItems = new Mongo.Collection('playlistitems');
Playlists     = new Mongo.Collection('playlists');
RadioItems    = new Mongo.Collection('radioitems');
Radios        = new Mongo.Collection('radios');

export default {Posts, Comments, Songs, PlaylistItems, Playlists, RadioItems, Radios};
