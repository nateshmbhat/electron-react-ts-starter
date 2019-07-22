import { BrowserWindow , app , ipcMain, IpcMessageEvent } from 'electron' ; 
import * as isDev from "electron-is-dev" ; 
import * as path from 'path'

let mainWindow : BrowserWindow ;

function createWindow() {
    mainWindow = new BrowserWindow({ width: 900, height: 680 ,  webPreferences : {
        nodeIntegration: true,
      } });
    mainWindow.loadURL(
        isDev
            ? "http://localhost:3000"
            : `file://${path.join(__dirname, "../build/index.html")}`
    );
    mainWindow.on("closed", () => (mainWindow.destroy()));

    ipcMain.on('channel' , (event : IpcMessageEvent , msg: any)=>{
        console.log(msg)
        mainWindow.webContents.send('response' , {title : 'mymessage'  , data : 1 }) ; 
    })
}

app.on("ready", createWindow);
app.on("window-all-closed", () => {
    if (process.platform !== "darwin") {
        app.quit();
    }
});
app.on("activate", () => {
    if (mainWindow === null) {
        createWindow();
    }
});