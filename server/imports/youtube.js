import Google from './google';

var YOUTUBE_ACCESS_TOKEN = 'AIzaSyAK-DHrYPbww17dc-dK_HhUwmLhFjMynj0';

Google.options({ auth: YOUTUBE_ACCESS_TOKEN });
export var Youtube = Google.youtube("v3");
