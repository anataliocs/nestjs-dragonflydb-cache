import { Controller, Get, Param, UseInterceptors } from '@nestjs/common';
import { CacheInterceptor } from '@nestjs/cache-manager';
import { OpenseaService } from './opensea.service';
import {OpenSeaNft} from "./dto/OpenSeaNft";

@Controller('opensea')
export class OpenseaController {
  constructor(private readonly service: OpenseaService) {}

  @Get('/:collectionSlug')
  async getNft(@Param('collectionSlug') collectionSlug: string): Promise<OpenSeaNft[]> {
    return await this.service.getNft(collectionSlug);
  }
}
