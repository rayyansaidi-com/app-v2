setTimeout(autoUpdate(), 1000)
const semverGt = require('semver/functions/gt')
const appVersion = require("electron").remote.app.getVersion();
const { dialog, shell } = require("electron").remote
const os = process.platform
function autoUpdate() {
  var request = new XMLHttpRequest();
  request.open('GET', 'https://api.github.com/repositories/275879561/releases', true);
  request.onload = function () {
    if (this.status >= 200 && this.status < 400) {
      // Success!
      var data = JSON.parse(this.response);
      data = data[0]["tag_name"]
      if (semverGt("5.0.0", appVersion)) {
        console.log("update!");
        if (os == "darwin") {
          darwinDialog();
        } else if (os == "linux") {
          linuxDialog();
        } else if (os == "win32") {
          win32Dialog();
        } else {
          console.error('error')
        }
        
      } 
      // else {
      // 	console.log("You have the newest version")
      // }
    } else {
      // We reached our target server, but it returned an error
      console.error("Error! Autoupdate is broken. Report an error on github at https://github.com/rayyansaidi-com/app/issues/new")
    }
  };

  request.onerror = function () {
    // There was a connection error of some sort
  };

  request.send();
}
function darwinDialog() {
  const updateDialog = dialog.showMessageBoxSync({
    "buttons": [
      "Update for macOS",  "I want to see the changes", "I don't want to update"
    ],
    "defaultId": 0,
    "message": "There's an update for this app."
  }
  );
  if (updateDialog == 0) {
    shell.openExternal('https://github.com/rayyansaidi-com/app/releases/latest/download/rayyansaidi-desktop.dmg')
  }
  if (updateDialog == 1) {
    shell.openExternal('https://github.com/rayyansaidi-com/app/releases/latest')
  }
}
function linuxDialog() {
  const updateDialog = dialog.showMessageBoxSync({
    "buttons": [
      "Update for Linux", "I want to see the changes", "I don't want to update"
    ],
    "defaultId": 0,
    "message": "There's an update for this app."
  }
  );
  if (updateDialog == 0) {
    shell.openExternal('https://github.com/rayyansaidi-com/app/releases/latest/download/rayyansaidi-desktop.snap')
  }
  if (updateDialog == 1) {
    shell.openExternal('https://github.com/rayyansaidi-com/app/releases/latest')
  }
}
function win32Dialog() {
  const updateDialog = dialog.showMessageBoxSync({
    "buttons": [
      "Update for Windows", "I want to see the changes", "I don't want to update"
    ],
    "defaultId": 0,
    "message": "There's an update for this app."
  }
  );
  if (updateDialog == 0) {
    shell.openExternal('https://github.com/rayyansaidi-com/app/releases/latest/download/rayyansaidi-desktop.exe')
  }
  if (updateDialog == 1) {
    shell.openExternal('https://github.com/rayyansaidi-com/app/releases/latest')
  }
}