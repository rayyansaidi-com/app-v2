const semverGt = require('semver/functions/gt');
const appVersion = require("electron").remote.app.getVersion();
const { app, dialog, shell } = require("electron").remote
const os = process.platform
const fs = require('fs');
const path = require('path');
const settingsPath = path.join(app.getAppPath('userData'), 'settings.json')
const settings = require(settingsPath)
console.log(typeof settings)
if (settings.askToUpdate !== false) {
  autoUpdate()
}
function autoUpdate() {
  let request = new XMLHttpRequest();
  request.open('GET', 'https://api.github.com/repositories/275879561/releases', true);
  request.onload = function () {
    if (this.status >= 200 && this.status < 400) {
      // Success!
      let data = JSON.parse(this.response);
      data = data[0]["tag_name"]
      if (semverGt(data, appVersion)) {
        // console.log("update!");
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
      console.error("Error! Autoupdate is broken. Report an error on github at https://github.com/rayyansaidi-com/app/issues/new?assignees=Ryyn-Sd&labels=bug&template=bug_report.md&title=%5BBug%5D (32)")
    }
  };

  request.onerror = () => {
    // There was a connection error of some sort
    console.error("Error! Autoupdate is broken. Report an error on github at https://github.com/rayyansaidi-com/app/issues/new?assignees=Ryyn-Sd&labels=bug&template=bug_report.md&title=%5BBug%5D (38)")
  };

  request.send();
}
function darwinDialog() {
  const updateDialog = dialog.showMessageBoxSync({
    "buttons": [
      "Update for macOS",  "I want to see the changes", "I don't want to update", "Never ask me again",
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
  if (updateDialog == 3) {
    fs.readFile(settingsPath, (err, data) => {
      if (err) {
        throw err;
      }
      data = JSON.parse(data);
      data.askToUpdate = false
      fs.writeFile(settingsPath, JSON.stringify(data), (err) => {
        if (err) {
          throw err;
        }
      });
    });
  }
}
function linuxDialog() {
  const updateDialog = dialog.showMessageBoxSync({
    "buttons": [
      "Update for Linux", "I want to see the changes", "I don't want to update", "Never ask me again",
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
  if (updateDialog == 3) {
    fs.readFile(settingsPath, (err, data) => {
      if (err) {
        throw err;
      }
      data.askToUpdate = false;
      console.log(JSON.stringify(data))
      fs.writeFile(settingsPath, JSON.stringify(data), (err) => {
        if (err) {
          throw err;
        }
      });
    });
  }
}
function win32Dialog() {
  const updateDialog = dialog.showMessageBoxSync({
    "buttons": [
      "Update for Windows", "I want to see the changes", "I don't want to update", "Never ask me again",
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
  if (updateDialog == 3) {
    fs.readFile(settingsPath, (err, data) => {
      if (err) {
        throw err;
      }
      data = JSON.parse(data);
      data.askToUpdate = false
      fs.writeFile(settingsPath, data, (err) => {
        if (err) {
          throw err;
        }
      });
    });
  }
}
