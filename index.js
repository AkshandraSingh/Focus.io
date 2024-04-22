require('dotenv').config()
const { app, BrowserWindow } = require('electron')
const path = require('path')

const isProduction = process.env.PRODUCTION !== "development"

const createWindow = async () => {
    const window = new BrowserWindow({
        width: 700,
        maxWidth: 900,
        minWidth: 450,
        height: 500,
        maxHeight: 700,
        minHeight: 250,
    })
    if (isProduction) {
        window.webContents.openDevTools();
    }
    await window.loadFile(path.join(__dirname, "renderer", 'html', "index.html"))
}

app.on('ready', () => {
    createWindow()
    console.log('Electron Server Started')

    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) createWindow()
    })
})

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit()
})
