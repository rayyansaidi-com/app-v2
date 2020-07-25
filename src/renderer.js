const semverGt = require('semver/functions/gt')
const appVersion = require("electron").remote.app.getVersion();
const { dialog, shell } = require("electron").remote
var request = new XMLHttpRequest();
request.open('GET', 'https://api.github.com/repositories/275879561/releases', true);
const isMacOS = process.platform
const isWin32 = process.platform
const isLinux = process.platform
if (process.platform == "darwin")
request.onload = function() {
  if (this.status >= 200 && this.status < 400) {
    // Success!
    var data = JSON.parse(this.response);
    data = data[0]["tag_name"]
    if (semverGt("2.2.0", appVersion)) {
    console.log("update!");
    const updateDialog = dialog.showMessageBoxSync({
      "buttons": [
        "Update for your OS", "I don't want to update"
      ],
      "defaultId": 0,
      "message": "There's an update for this app."
    }
    );
    if (updateDialog == 0) {
      shell.openExternal('https://github.com/rayyansaidi-com/app/releases/latest')
    }
    } else {
      console.log("You have the newest version")
    }
  } else {
    // We reached our target server, but it returned an error
    console.error("Error! Autoupdate is broken. Report an error on github at https://github.com/rayyansaidi-com/app/issues/new")
  }
};

request.onerror = function() {
  // There was a connection error of some sort
};

request.send();

