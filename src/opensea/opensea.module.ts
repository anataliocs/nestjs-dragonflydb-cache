import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { OpenseaController } from './openseaController';
import { OpenseaService } from './opensea.service';
import {CacheModule} from "@nestjs/cache-manager";
import {ConfigModule} from "@nestjs/config";
import {RedisCacheModule} from "./redisCache.module";

@Module({
  imports: [HttpModule, RedisCacheModule],
  controllers: [OpenseaController],
  providers: [OpenseaService],
})
export class OpenseaModule {}
