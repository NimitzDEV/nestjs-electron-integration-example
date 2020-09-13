import { Controller } from '@nestjs/common';
import { BrowserWindow } from 'electron';
import { AppService } from './app.service';
import { HandleIPCMessageWithResult, HandleIPCMessage, IPCContext } from 'electron-ipc-transport';
import { Ctx, Payload } from '@nestjs/microservices';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {
  }

  @HandleIPCMessageWithResult('app.getUser')
  getHello() {
    return this.appService.getHello();
  }

  @HandleIPCMessage('app.prompt')
  promptFromMain(
    @Payload() data: string,
  ) {
    this.appService.promptMessage(data);
  }

  @HandleIPCMessage('app.max')
  max(
    @Ctx() ctx: IPCContext,
  ) {
    BrowserWindow.fromWebContents(ctx.evt.sender).maximize();
  }
}
