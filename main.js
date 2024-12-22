const { app, BrowserWindow } = require('electron');
const path = require('path');




const createWindow = () => {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    // width: 1000,
    // height: 800,
    // resizable: false,
    // frame:false,
    webPreferences: {
       preload: path.join(__dirname, 'preload.js'),
       nodeIntegrationInWorker: true,
      contextIsolation: true
    },
  });

;
mainWindow.loadURL("https://phvalheim.phospher.com")
mainWindow.webContents.openDevTools();



};

app.on('ready', createWindow);


app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {

  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});