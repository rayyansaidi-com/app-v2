const semverGt = require('semver/functions/gt')
const appVersion = require("electron").remote.app.getVersion();
var request = new XMLHttpRequest();
request.open('GET', 'https://api.github.com/repositories/275879561/releases', true);

request.onload = function() {
  if (this.status >= 200 && this.status < 400) {
    // Success!
    var data = JSON.parse(this.response);
    data = data[0]["tag_name"]
    if (semverGt(data, appVersion)) {
    console.log("update!")} else {
      console.log("don't")
    }
  } else {
    // We reached our target server, but it returned an error
    console.error("Error! Autoupdate is broken")
  }
};

request.onerror = function() {
  // There was a connection error of some sort
};

request.send();

