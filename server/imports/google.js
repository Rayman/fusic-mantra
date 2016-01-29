/**
 * Copyright 2012 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * A module for interacting with Google APIs
 * @module google
 */

/**
 * Load the apis from apis index file
 * This file holds all version information
 * @private
 */
// var apis = require('googleapis/apis');
var apis = {
  youtube: function (options) {
    var Youtube = require('googleapis/apis/youtube/v3');
    var yt = new Youtube(options);
    yt.google = this; // for drive.google.transporter
    return Object.freeze(yt); // create new & freeze
  }
};
// var googleAuth = require('google-auth-library');

/**
 * GoogleApis constructor.
 * @param {object} options Options to be passed in
 * @constructor
 */
function GoogleApis(options) {
  this.options(options);
  this.addAPIs(apis);
  // this.auth = new googleAuth();
  this.GoogleApis = GoogleApis;
}

/**
 * Set options
 * @param  {Object} opts Options to set
 */
GoogleApis.prototype.options = function (opts) {
  this._options = opts || {};
};

/**
 * Add APIs endpoints to googleapis object
 * E.g. googleapis.drive and googleapis.datastore
 *
 * @param {Array} apis Apis to be added
 * @private
 */
GoogleApis.prototype.addAPIs = function (apis) {
  for (var apiName in apis) {
    if (apis.hasOwnProperty(apiName)) {
      this[apiName] = apis[apiName].bind(this);
    }
  }
};

var google = new GoogleApis();

/**
 * Exports googleapis.
 */
module.exports = google;
