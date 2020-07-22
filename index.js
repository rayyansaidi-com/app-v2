const { app, BrowserWindow, Menu } = require('electron');
const shell = require('electron').shell;
const electron = require('electron');
const path = require('path');
// const server = 'https://hazel.mrsun10.vercel.app/'
// const url = `${server}/update/${process.platform}/${app.getVersion()}`

function createWindow() {
  // Create the browser window.
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true
    }
  })
  win.loadFile('src/index.html')
  var menu = Menu.buildFromTemplate([
    {
      label: 'Rayyansaidi Desktop',
      submenu: [
        {
          label: 'Quit',
          accelerator: 'CmdOrCtrl+Q',
          click() {
            app.quit()
          }
        },
        {
          label: 'Open DevTools',
          click() {
            win.webContents.openDevTools()
          }
        }
      ]
    }
  ])
  Menu.setApplicationMenu(menu);
  // and load the index.html of the app.
  // Open the DevTools.
  // win.webContents.openDevTools()
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(createWindow)
//Autoupdate
// autoUpdater.setFeedURL({ url })
// setInterval(() => {
//   autoUpdater.checkForUpdates()
// }, 60000)
// autoUpdater.on('update-downloaded', (event, releaseNotes, releaseName) => {
//   const dialogOpts = {
//     type: 'info',
//     buttons: ['Restart', 'Later'],
//     title: 'Application Update',
//     message: process.platform === 'win32' ? releaseNotes : releaseName,
//     detail: 'A new version has been downloaded. Restart the application to apply the updates.'
//   }

//   dialog.showMessageBox(dialogOpts).then((returnValue) => {
//     if (returnValue.response === 0) autoUpdater.quitAndInstall()
//   })
// })

/* Quit when all windows are closed, except on macOS. There, it's common
 for applications and their menu bar to stay active until the user quits
 explicitly with Cmd + Q. */
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow()
  }
})

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.
