require('dotenv').config()
const { app, BrowserWindow, Menu, shell } = require('electron')
const path = require('path')

const menuItems = [
    {
        label: "Options",
        submenu: [
            {
                label: "About",
                click: () => {
                    shell.openExternal('https://akshandra.onrender.com');
                },
                accelerator: "CmdOrCtrl+Z",
            },
            {
                label: "Github",
                click: () => {
                    shell.openExternal('https://github.com/AkshandraSingh/Focus.io');
                },
                accelerator: "CmdOrCtrl+G",
            },
            {
                role: "Minimize"
            },
            {
                label: "Quit",
                click: () => {
                    app.quit()
                },
                accelerator: "CmdOrCtrl+Q"
            },
        ]
    },
    {
        label: "Windows",
        submenu: [
            {
                label: "New Window",
                click: async () => {
                    const newWindow = new BrowserWindow({
                        width: 500,
                        maxWidth: 500,
                        minWidth: 500,
                        height: 400,
                        maxHeight: 400,
                        minHeight: 400,
                    })
                    await newWindow.loadFile(path.join(__dirname, "renderer", 'html', "index.html"))
                },
                accelerator: "CmdOrCtrl+N",
            },
            {
                label: "Github Window",
                click: async () => {
                    const newWindow = new BrowserWindow({
                        width: 500,
                        maxWidth: 500,
                        minWidth: 500,
                        height: 400,
                        maxHeight: 400,
                        minHeight: 400,
                    })
                    await newWindow.loadURL("https://github.com/AkshandraSingh/Focus.io")
                },
                accelerator: "CmdOrCtrl+N+G",
            }
        ]
    }
]

const menu = Menu.buildFromTemplate(menuItems)
Menu.setApplicationMenu(menu)

const createWindow = async () => {
    const window = new BrowserWindow({
        width: 550,
        maxWidth: 550,
        minWidth: 550,
        height: 450,
        maxHeight: 450,
        minHeight: 450,
        autoHideMenuBar: true,
        frame: false,
        icon: path.join(__dirname, "renderer", 'images', "focus2.ico"),
    })
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
