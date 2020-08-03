const { app, BrowserWindow, Menu } = require("electron");
const shell = require('electron').shell;
const ipc = require('electron').ipcMain;

function createWindow() {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
    },
  });
  win.loadFile("src/index.html");

  win.webContents.openDevTools();

  let menu = Menu.buildFromTemplate([
      {
          label: "Menu",
          submenu: [
              { label: 'Adjust Notification Value' },
              { 
                  label: 'CoinMarketCap',
                  click() {
                      shell.openExternal('http://coinmarketcap.com')
                  } 
              },
              { type: 'separator' },
              { 
                  label: 'Exit',
                  click() {
                      app.quit();
                  } 
              },
          ]
      }
  ]);

  Menu.setApplicationMenu(menu);
}

app.whenReady().then(createWindow);

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});

ipc.on('update-notify-value', (e, arg) => {
    win.webContents.send('targetPriceVal', arg)
})
