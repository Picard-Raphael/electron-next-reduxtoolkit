// Native
import path, { join } from 'path';
import { format } from 'url';

// Packages
import { BrowserWindow, app, ipcMain, IpcMainEvent, session } from 'electron';
import isDev from 'electron-is-dev';
import prepareNext from 'electron-next';

import MenuBuilder from './menu';

// Prepare the renderer once the app is ready
app.on('ready', async () => {
  await prepareNext('./renderer');
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: false,
      preload: join(__dirname, 'preload.js'),
    },
  });

  const menuBuilder = new MenuBuilder(mainWindow);
  menuBuilder.buildMenu();

  const url = isDev
    ? 'http://localhost:8000/'
    : format({
        pathname: join(__dirname, '../renderer/out/index.html'),
        protocol: 'file:',
        slashes: true,
      });
  // Allows to activate the devtools
  if (isDev) {
    mainWindow.webContents.openDevTools();
  }
  mainWindow.loadURL(url);
});

// Allows you to add chrome extensions https://www.electronjs.org/fr/docs/latest/tutorial/devtools-extension
if (isDev) {
  // https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd
  const reduDevTool = path.join(
    '/home/raphael/.config/google-chrome/Profile 1/Extensions/lmhkpmbekcpmknklioeibfkpmmfibljd/3.0.11_0'
  );
  // https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi
  const reactDevTol = path.join(
    '/home/raphael/.config/google-chrome/Profile 1/Extensions/fmkadmapgofadopljbjfkapdkoienihi/4.24.3_0'
  );

  app.whenReady().then(async () => {
    await session.defaultSession.loadExtension(reduDevTool);
    await session.defaultSession.loadExtension(reactDevTol);
  });
}

// Quit the app once all windows are closed
app.on('window-all-closed', app.quit);

// listen the channel `message` and resend the received message to the renderer process
ipcMain.on('message', (event: IpcMainEvent, message: any) => {
  console.log(message);
  setTimeout(() => event.sender.send('message', 'hi from electron'), 500);
});
