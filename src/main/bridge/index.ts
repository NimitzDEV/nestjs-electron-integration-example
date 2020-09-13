import { contextBridge } from 'electron';
import { appBridge } from './app/util';

export const Bridge = {
  app: appBridge,
};

contextBridge.exposeInMainWorld(
  'AppBridge',
  Bridge,
);
