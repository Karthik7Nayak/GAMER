const { app, BrowserWindow } = require('electron');
const path = require('path');
const url=require('url');

let mainWindow;
const createWindow = () => {
    mainWindow = new BrowserWindow({
        width: 1200,
        height: 900
        // webPreferences: {
        //     nodeIntegration: true
        // }
    });
   
    mainWindow.loadURL(url.format({
        //__dirname is the current working dir
        pathname: path.join(__dirname, 'dist', 'index.html'),
        protocol: 'file:',
        slashes: true
    }));
    mainWindow.webContents.openDevTools();
    mainWindow.on('closed', () => {
        mainWindow = null;
    });
};
app.on('ready', createWindow);
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin')
        app.quit();
});
app.on('activate', () => {
    if (mainWindow === null) {
        createWindow();
    }
});