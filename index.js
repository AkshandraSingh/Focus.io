require('dotenv').config()
const { app, BrowserWindow } = require('electron')
const path = require('path')

const isProduction = process.env.PRODUCTION !== "development"

const createWindow = async () => {
    const window = new BrowserWindow({
        width: 550,
        maxWidth: 550,
        minWidth: 550,
        height: 450,
        maxHeight: 450,
        minHeight: 450,
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
