import {Mongo} from 'meteor/mongo';

export var Songs = global.Songs = new Mongo.Collection('songs');
export var PlaylistItems = global.PlaylistItems = new Mongo.Collection('playlistitems');
export var Playlists = global.Playlists = new Mongo.Collection('playlists');
export var RadioItems = global.RadioItems = new Mongo.Collection('radioitems');
export var Radios = global.Radios = new Mongo.Collection('radios');

// export default {Songs, PlaylistItems, Playlists, RadioItems, Radios};
