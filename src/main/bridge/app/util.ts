import { ipcRenderer } from 'electron';

export const appBridge = {
  async getUser() {
    return ipcRenderer.invoke('app.getUser');
  },
  prompt(message) {
    ipcRenderer.send('app.prompt', message);
  },
  max() {
    ipcRenderer.send('app.max');
  },
};
