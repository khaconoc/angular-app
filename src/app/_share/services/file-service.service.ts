import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { HttpClient } from '@angular/common/http';
import { LocationStrategy } from '@angular/common';
import { ResponseModel } from '../../_base/models/response-model';

@Injectable({
  providedIn: 'root'
})
export class FileService extends BaseService {

  constructor(
    http: HttpClient,
    locationStrategy: LocationStrategy
  ) {
    super(http, locationStrategy);
    this.baseUrl = '/api/File';
  }

  public upload<T>(body: any, endpoint = 'upload'): Promise<ResponseModel<T>> {
    const api = this.http.post<T>(`${this.baseUrl}/${endpoint}`, body);
    return this.bindResponseApi(api);
  }

}
