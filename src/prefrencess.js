'use strict'
const fs = require('fs')
const { app } = require('electron').remote
const settingsPath = require('path').join(
  app.getAppPath('userData'),
  'settings.json'
)
const preferences = JSON.parse(fs.readFileSync(settingsPath))
console.log(preferences)
function writePrefs (data) {
  fs.writeFile(settingsPath, (JSON.stringify(data)), (err) => {
    if (err) {
      throw err
    }
  })
}
if (document.getElementById('AutoUpdaterSaveBtn')) {
  document.getElementById('AutoUpdaterSaveBtn').addEventListener('click', () => {
    if (document.getElementById('neverAskCheckbox').checked) {
      preferences.showNeverAsk = true
    } else {
      preferences.showNeverAsk = false
    }

    if (document.getElementById('seeChangesCheckbox').checked) {
      preferences.showSeeChanges = true
    } else {
      preferences.showSeeChanges = false
    }

    if (document.getElementById('maybeLaterCheckbox').checked) {
      preferences.showMaybeLater = true
    } else {
      preferences.showMaybeLater = false
    }

    if (document.getElementById('updateCheckbox').checked) {
      preferences.showUpdate = true
    } else {
      preferences.showUpdate = false
    }
    writePrefs(preferences)
    window.location = './prefrencess.html'
  })
}
