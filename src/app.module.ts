import {Module} from '@nestjs/common';
import {OpenseaModule} from './opensea/opensea.module';
import {ConfigModule, ConfigService} from '@nestjs/config';
import {CacheModule} from '@nestjs/cache-manager';
import * as redisStore from 'cache-manager-redis-store';
import {RedisCacheModule} from "./opensea/redisCache.module";

@Module({
    imports: [
        ConfigModule.forRoot(),
        RedisCacheModule,
        OpenseaModule,
    ],
})

export class AppModule {
}
