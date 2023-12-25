import { Injectable, Inject } from '@nestjs/common';
import { Cache } from 'cache-manager';
import {CACHE_MANAGER} from "@nestjs/cache-manager";
import {OpenSeaNft} from "./dto/OpenSeaNft";

@Injectable()
export class RedisCacheService {
    constructor(
        @Inject(CACHE_MANAGER) private readonly cache: Cache,
    ) {}

    async get(key): Promise<OpenSeaNft[]> {
        return await this.cache.get(key);
    }

    async set(key, value) {
        await this.cache.set(key, value);
    }
}