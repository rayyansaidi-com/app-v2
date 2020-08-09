const { app, BrowserWindow, nativeTheme, Menu } = require('electron');
const shell = require('electron').shell;
const electron = require('electron');
const path = require('path');
// require('electron-reload')(__dirname)
// const server = 'https://hazel.mrsun10.vercel.app/'
// const url = `${server}/update/${process.platform}/${app.getVersion()}`
nativeTheme.themeSource = 'dark';
function createWindow() {
  // Create the browser window.
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true
    },
    vibrancy: "sidebar",
  })
  // and load the index.html of the app.
  win.loadFile('src/index.html')
  var menu = Menu.buildFromTemplate([
    {
      label: 'Rayyansaidi Desktop',
      submenu: [
        {
          label: 'Open DevTools',
          accelerator: 'CmdOrCtrl+Alt+I',
          click() {
            win.webContents.openDevTools()
          }
        },
        { type: "separator" },
        {
          label: 'Quit',
          accelerator: 'CmdOrCtrl+Q',
          click() {
            app.quit()
          }
        },
        { type: "separator" },
        {
          label: 'Print',
          accelerator: 'CmdOrCtrl+P',
          click() {
            win.webContents.print()
          }
        }
      ]
    },
    {
      label: "Edit",
      submenu: [
        { 
          label: "Cut", 
          accelerator: "CmdOrCtrl+X", 
          selector: "cut:" 
        },
        { 
          label: "Copy", 
          accelerator: "CmdOrCtrl+C", 
          selector: "copy:" 
        },
        { 
          label: "Paste", 
          accelerator: "CmdOrCtrl+V", 
          selector: "paste:" 
        },
        { type: "separator" },
        { 
          label: "Select All",
          accelerator: "CmdOrCtrl+A",
          selector: "selectAll:" 
        },
        { type: "separator" },
        {
          label: "Find",
          accelerator: "CmdOrCtrl+A"

        }
      ]
    },
    {
      label: "GitHub",
      submenu: [
        {
          label: "View Source Code",
          click() {
            shell.openExternal('https://github.com/rayyansaidi-com/app')
          }
        },
        { type: "separator" },
        {
          label: "Report a Problem",
          click() {
            shell.openExternal('https://github.com/rayyansaidi-com/app/issues/new')
          }
        },
        { type: "separator" },
        {
          label: "View the information (README.md)",
          click() {
            shell.openExternal('https://github.com/rayyansaidi-com/app/blob/README.md')
          }
        },
        {
          label: "View the current and future changelog (CHANGELOG.md)",
          click() {
            shell.openExternal('https://github.com/rayyansaidi-com/app/blob/master/CHANGELOG.md')
          }
        },
      ]
    }
  ])
  Menu.setApplicationMenu(menu);
  // Open the DevTools.
  // win.webContents.openDevTools()
}

app.whenReady().then(createWindow)

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
