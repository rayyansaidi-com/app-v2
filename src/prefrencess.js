'use strict'
const fs = require('fs')
const { app } = require('electron')
const settingsPath = require('path').join(app.getAppPath('userData'), 'settings.json')
function addSettings (preference, value) {
  fs.readFile(settingsPath, (err, data) => {
    if (err) {
      throw err
    }
    data = JSON.parse(data)
    data[preference] = value
    fs.writeFile(settingsPath, data, (err) => {
      if (err) {
        throw err
      }
    })
  })
}
document.getElementById('AutoUpdaterSaveBtn').addEventListener('click', () => {
  if (document.getElementById('neverAskCheckbox').checked) {
    addSettings('showNeverAsk', true)
  } else {
    addSettings('showNeverAsk', false)
  };

  if (document.getElementById('seeChangesCheckbox').checked) {
    addSettings('showSeeChanges', true)
  } else {
    addSettings('showSeeChanges', false)
  }

  if (document.getElementById('maybeLaterCheckbox').checked) {
    addSettings('showMaybeLater', true)
  } else {
    addSettings('showMaybeLater', false)
  }

  if (document.getElementById('updateCheckbox').checked) {
    addSettings('showUpdate', true)
  } else {
    addSettings('showUpdate', false)
  }
})
