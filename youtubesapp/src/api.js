import axios from 'axios';

export default axios.create({
    baseURL: 'http://jsonplaceholder.typicode.com/'
});

var GoogleAuth; // Google Auth object.
function initClient() {
  gapi.client.init({
      'apiKey': 'AIzaSyDGjV6XFH4k4fTWt45iibGXUH_0ATCqwxc',
      'clientId': 'youtubes3API',
      'scope': 'https://www.googleapis.com/auth/youtube.force-ssl',
      'discoveryDocs': ['https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest']
  }).then(function () {
      GoogleAuth = gapi.auth2.getAuthInstance();

      // Listen for sign-in state changes.
      GoogleAuth.isSignedIn.listen(updateSigninStatus);
  });
}

