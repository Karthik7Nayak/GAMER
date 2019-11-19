const { app, BrowserWindow, Menu } = require('electron');
const path = require('path');
const url = require('url');
// const { autoUpdater } = require("electron-updater");


Menu.setApplicationMenu(null);
let mainWindow;
const createWindow = () => {
  mainWindow = new BrowserWindow({
    width: 1200,
    height: 900
    // webPreferences: {
    //     nodeIntegration: true
    // }
  });
  mainWindow.setMenuBarVisibility(false);// setAutoHideMenuBar(hide);
  // mainWindow.loadFile(`${__dirname}/index.html`);
  mainWindow.loadURL(url.format({
    pathname: path.join(__dirname, 'dist', 'index.html'),
    protocol: 'file:',
    slashes: true
  }));
  mainWindow.webContents.openDevTools();
  mainWindow.on('closed', () => {
    mainWindow = null;
  });

};


app.on('ready',
  createWindow
);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin')
    app.quit();
});
app.on('activate', () => {
  if (mainWindow === null) {
    createWindow();
  }
});






/**
 * {
  "name": "coxGamer",
  "version": "1.0.0",
  "description": "This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.0.7.",
  "main": "main.js",
  "dependencies": {
    "@agm/core": "^1.0.0-beta.5",
    "@agm/js-marker-clusterer": "^1.0.0-beta.7",
    "@angular/animations": "^7.2.15",
    "@angular/cdk": "^7.3.7",
    "@angular/common": "~7.2.0",
    "@angular/compiler": "~7.2.0",
    "@angular/core": "~7.2.0",
    "@angular/forms": "~7.2.0",
    "@angular/material": "^7.3.7",
    "@angular/platform-browser": "~7.2.0",
    "@angular/platform-browser-dynamic": "~7.2.0",
    "@angular/router": "~7.2.0",
    "@material-ui/core": "^4.2.0",
    "core-js": "^2.5.4",
    "electron-store": "^5.1.0",
    "rxjs": "~6.3.3",
    "zone.js": "~0.8.26"
  },
  "devDependencies": {
    "@angular-devkit/build-angular": "^0.13.9",
    "@angular/cli": "~7.3.8",
    "@angular/compiler-cli": "~7.2.0",
    "@angular/language-service": "~7.2.0",
    "@types/jasmine": "~2.8.8",
    "@types/jasminewd2": "~2.0.3",
    "@types/node": "~8.9.4",
    "codelyzer": "~4.5.0",
    "electron-builder": "^22.1.0",
    "jasmine-core": "~2.99.1",
    "jasmine-spec-reporter": "~4.2.1",
    "karma": "~3.0.0",
    "karma-chrome-launcher": "~2.2.0",
    "karma-coverage-istanbul-reporter": "~2.0.1",
    "karma-jasmine": "~1.1.2",
    "karma-jasmine-html-reporter": "^0.2.2",
    "protractor": "~5.4.0",
    "ts-node": "~7.0.0",
    "tslint": "~5.11.0",
    "typescript": "~3.2.2",
    "electron": "^7.1.1"
  },
  "scripts": {
    "ng": "ng",
    "start": "ng serve",
    "start:electron": "ng build --base-href ./ && electron .",
    "build": "ng build",
    "test": "ng test",
    "lint": "ng lint",
    "e2e": "ng e2e",
    "electron": "electron .",
    "electron-build": "ng build --prod && electron .",
    "pack": "electron-builder --dir",
    "dist": "electron-builder"
  },
  "peerDependencies": {
    "@angular/animations": "^7.2.15",
    "@angular/cdk": "^7.3.7",
    "@angular/material": "^7.3.7"
  },
  "author": "",
  "license": "ISC",
  "build": {
    "appId": "com.electron.coxGamer",

    "compression": "normal",
    "extends": null,
    "files": [
      "*.js",
      "build",
      "node_modules",
      "dist"
       ],
    "mac": {
      "target": "zip"
    },
    "linux": {
      "target": [
        "AppImage","zip"
      ]
    },
    "win": {
      "target": "squirrel"
    },
    "publish": {
      "provider": "github",
      "repo": "https://github.com/Karthik7Nayak/GAMER",
      "owner": "Karthik7Nayak"
      "tokerepo":"ab4ff94348f9595f4d269d27289db498c4b173ce"
    }
  }
}

 */