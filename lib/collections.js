import {Mongo} from 'meteor/mongo';
import {SimpleSchema} from 'meteor/aldeed:simple-schema';

export var Songs = global.Songs = new Mongo.Collection('songs');
export var PlaylistItems = global.PlaylistItems = new Mongo.Collection('playlistitems');
export var Playlists = global.Playlists = new Mongo.Collection('playlists');
export var RadioItems = global.RadioItems = new Mongo.Collection('radioitems');
export var Radios = global.Radios = new Mongo.Collection('radios');

export var PlaylistSchema = new SimpleSchema({
  title: {
    type: String,
    max: 200
  },
  cover: {
    type: SimpleSchema.RegEx.Url,
    optional: true
  },
  createdAt: {
    type: Date
  },
  owner: {
    type: String
  },
  privacy: {
    type: String,
    allowedValues: ['public', 'private'],
    defaultValue: 'public'
  },
  songs: {
    type: [SimpleSchema.RegEx.Id],
    optional: true
  }
});
