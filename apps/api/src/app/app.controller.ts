import { Controller, Get, Header, Res } from '@nestjs/common';

import { Response } from 'express';
import { Message } from '@nx-angular-nest/api-interfaces';
import { readFileSync } from 'fs';

import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('hello')
  getData(): Message {
    return this.appService.getData();
  }

  @Get('wav')
  @Header('Content-Type', 'audio/wav')
  async getWav(@Res() res: Response) {
      const wav = await readFileSync('./apps/api/src/app/nyan.wav');
      return res.send(wav);
  }

}
