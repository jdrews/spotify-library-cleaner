/*exported OAuthConfig*/

var OAuthConfig = (function() {
  'use strict';

  var clientId = '04dca0de1c4e4aca88cc615ac23581be';
  var redirectUri;
  if (location.host === 'localhost:8005') {
    redirectUri = 'http://localhost:8005/callback.html';
  } else {
    redirectUri = 'http://jmperezperez.com/spotify-dedup/callback.html';
  }
  var host = /http[s]?:\/\/[^/]+/.exec(redirectUri)[0];
  return {
    clientId: clientId,
    redirectUri: redirectUri,
    host: host
  };
})();

/*global OAuthConfig*/
var target = window.self === window.top ? window.opener : window.parent;

var hash = window.location.hash;
if (hash) {
  var token = window.location.hash.split('&')[0].split('=')[1];
  target.postMessage(token, OAuthConfig.host);
}
