import { useEffect } from 'react';
export const useIpcRenderOn = (channel: string, action) => {
  useEffect(() => {
    global.ipcRenderer.on(channel, () => action());
    return () => {
      global.ipcRenderer.removeAllListeners('electron-increment');
    };
  }, [global.ipcRenderer]);
};
