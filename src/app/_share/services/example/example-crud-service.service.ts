import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {LocationStrategy} from '@angular/common';
import { BaseService } from '../base.service';

@Injectable({
  providedIn: 'root'
})
export class ExampleCrudService extends BaseService {

  constructor(
      http: HttpClient,
      locationStrategy: LocationStrategy
  ) {
    super(http, locationStrategy);
    this.baseUrl = '/api/Example';
  }

}


