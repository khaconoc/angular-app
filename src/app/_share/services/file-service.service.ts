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

  public upload<T>(files: any[], endpoint = 'upload'): Promise<ResponseModel<T>> {
    const formData = new FormData();
    for (const file of files) {
      formData.append('files', file);
    }
    const api = this.http.post<T>(`https://localhost:4001/api/File/upload`, formData);
    return this.bindResponseApi(api);
  }

}
