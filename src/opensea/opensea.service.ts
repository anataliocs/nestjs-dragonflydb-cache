import { HttpService } from '@nestjs/axios';
import { CACHE_MANAGER } from '@nestjs/cache-manager';
import { Inject, Injectable } from '@nestjs/common';
import { Cache } from 'cache-manager';
import {AxiosHeaders, RawAxiosRequestHeaders} from "axios";
import {AxiosRequestConfig} from "axios/index";
import * as process from "process";
import {OpenSeaNft} from "./dto/OpenSeaNft";
import {RedisCacheService} from "./redisCacheService";

@Injectable()
export class OpenseaService {
  constructor(
    private readonly httpService: HttpService,
    private readonly redisCacheService: RedisCacheService
  ) {}

  async getNft(collectionSlug: string): Promise<OpenSeaNft[]> {
    // check if data is in cache:
    const cachedData = await this.redisCacheService.get(
        collectionSlug,
    );
    if (cachedData) {
      console.log(`Cache Hit!`);
      return cachedData;
    }

    console.log(`Cache Miss... querying Opensea...`);
    // if not, call API and set the cache:
    const data : Promise<OpenSeaNft[]> = await this.httpService.axiosRef.get(
      `https://api.opensea.io/api/v2/collection/${collectionSlug}/nfts`,
        { headers : {
          "Accept" : "application/json",
          "X-API-KEY" : process.env.OPENSEA_API_KEY
          },
        }
    ).then(response => response.data);

    await this.redisCacheService.set(collectionSlug, await data);
    return await data;
  }
}
