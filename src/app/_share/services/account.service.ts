import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { HttpClient } from '@angular/common/http';
import { LocationStrategy } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class AccountService extends BaseService {

  constructor(
    http: HttpClient,
    locationStrategy: LocationStrategy
  ) {
    super(http, locationStrategy);
    this.baseUrl = '/api/AccountCrud';
  }

}
