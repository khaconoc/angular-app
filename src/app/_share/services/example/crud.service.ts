import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {LocationStrategy} from '@angular/common';
import { BaseService } from '../base.service';

@Injectable({
  providedIn: 'root'
})
export class CityService extends BaseService {

  constructor(
      http: HttpClient,
      locationStrategy: LocationStrategy
  ) {
    super(http, locationStrategy);
    this.baseUrl = '/api/qtud/dim/city';
  }

}

export interface CityResult {
  cityId: number;
  cityName: string;
}

