import { Injectable } from '@nestjs/common';
import { dialog } from 'electron';

@Injectable()
export class AppService {
  getHello(): string {
    return `Hello World! ${Date.now()}`;
  }

  promptMessage(message: string) {
    dialog.showMessageBox({
      title: 'Message from renderer',
      message,
    });
  }
}
