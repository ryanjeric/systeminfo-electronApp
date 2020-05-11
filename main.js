const {app,BrowserWindow} = require('electron')
const path = require('path');
const url = require('url');

let win;

function createWindow() {
    // Create Browser window
    win = new BrowserWindow({width:800,height:600,webPreferences: {
        nodeIntegration: true
    }});
    // load index.html
    win.loadFile('index.html')

    // Open the DevTools.
    //win.webContents.openDevTools()

    win.on('closed',() => {
        win = null;
    })
}

app.whenReady().then(createWindow)

app.on('window-all-closed', () => {
    // On macOS it is common for applications and their menu bar
    // to stay active until the user quits explicitly with Cmd + Q
    if (process.platform !== 'darwin') {
      app.quit()
    }
})