// main.js - Archivo principal de Electron
const { app, BrowserWindow } = require('electron');
const path = require('path');

let mainWindow;

app.on('ready', () => {
  mainWindow = new BrowserWindow({
    width: 1200,
    height: 800,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'), // lo hacemos después
    },
  });

  // Cargar React (si usas webpack dev server o build)
  mainWindow.loadFile('public/index.html');

  mainWindow.on('closed', () => {
    mainWindow = null;
  });
});
