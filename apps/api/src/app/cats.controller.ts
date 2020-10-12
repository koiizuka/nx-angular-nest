import { Controller, Get, Post, Param } from '@nestjs/common';
import * as ffmpeg from 'fluent-ffmpeg';

@Controller('cats')
export class CatsController {

    @Post()
    create(): string {
        return 'This action adds a new cat';
    }

    @Get()
    findAll(): string {

        ffmpeg()
            .input('./apps/api/src/app/nyan.wav')
            .inputOptions([`-ss 3`])
            .outputOptions([`-t 5`])
            .output('./apps/api/src/app/nyan_out.wav')
            .run()

        return 'This action returns all cats';
    }

    @Get(':id')
    findOne(@Param() params): string {
        return `This action returns a #${params.id} cat`;
    }
}
