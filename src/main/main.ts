import { NestFactory } from '@nestjs/core';
import { app as electronApp, BrowserWindow } from 'electron';
import { MicroserviceOptions } from '@nestjs/microservices';
import { ElectronIPCTransport } from 'electron-ipc-transport';
import { resolve } from 'path';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    {
      strategy: new ElectronIPCTransport(),
    },
  );

  app.listen(() => console.log('electron ipc listening'));
  electronApp.whenReady()
    .then(async () => {
      const win = new BrowserWindow({
        webPreferences: {
          contextIsolation: true,
          preload: resolve(__dirname, './bridge/index.js'),
        },
      });
      await win.loadFile('../../dist/renderer/index.html');
      win.webContents.openDevTools();
    });
}

bootstrap();
