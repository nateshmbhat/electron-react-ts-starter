"use strict";
exports.__esModule = true;
var electron_1 = require("electron");
var isDev = require("electron-is-dev");
var path = require("path");
var mainWindow;
function createWindow() {
    mainWindow = new electron_1.BrowserWindow({ width: 900, height: 680, webPreferences: {
            nodeIntegration: true
        } });
    mainWindow.loadURL(isDev
        ? "http://localhost:3000"
        : "file://" + path.join(__dirname, "../build/index.html"));
    mainWindow.on("closed", function () { return (mainWindow.destroy()); });
    electron_1.ipcMain.on('channel', function (event, msg) {
        console.log(msg);
        console.log('hey hey hi hello');
        mainWindow.webContents.send('response', { title: 'mymessage', data: 1 });
    });
}
electron_1.app.on("ready", createWindow);
electron_1.app.on("window-all-closed", function () {
    if (process.platform !== "darwin") {
        electron_1.app.quit();
    }
});
electron_1.app.on("activate", function () {
    if (mainWindow === null) {
        createWindow();
    }
});
