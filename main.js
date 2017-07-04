const {app, BrowserWindow} = require("electron");
const path = require("path");
const url = require("url");

let win;

function createWindow(){
    // Create browser window
    win = new BrowserWindow({width:800, height:600, icon: __dirname+'/img/favicon.ico'});
    // Load index.html
    win.loadURL(url.format({
        pathname: path.join(__dirname, "index.html"),
        protocol: 'file',
        slashes: true
    }));
    // Open dev tools
    //win.webContents.openDevTools();

    win.on("closed",()=>{
        win = null;
    });
}

app.on("ready", createWindow);

// Quit when all windows are closed
app.on("window-all-closed", ()=>{
    if(process.platform !== "darwin"){
        app.quit();
    }
});