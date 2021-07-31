import { PagedListModel, ResponseModel } from './../../_base/models/response-model';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LocationStrategy } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class BaseService {

  constructor(
    protected http: HttpClient,
    protected locationStrategy: LocationStrategy
  ) { }

  // tslint:disable-next-line: variable-name
  private _baseUrl: string;

  public get baseUrl(): string {
    return this._baseUrl;
  }
  public set baseUrl(value: string) {
    let rootPath: string = this.locationStrategy.getBaseHref();
    if (rootPath === '/') { rootPath = ''; }
    this._baseUrl = `${rootPath}${value}`;
  }

  public async bindResponseApi<T>(api: Observable<T>): Promise<ResponseModel<T>> {
    const data = new ResponseModel<T>();
    await api.toPromise()
      .then(value => data.result = value)
      .catch((err: any) => {
        if (err instanceof HttpErrorResponse) {
          data.error = err.error;
        } else {
          data.error = { '': ['notFound'] };
          console.log('notFound', err);
        }
      });
    return data;
  }

  protected stringifyParams(params: any): any {
    if (!params) { return undefined; }
    const paramsCopy = JSON.parse(JSON.stringify(params, (key, value) => {
      if (value !== null) { return value; }
      else { return ''; }
    }));
    Object.keys(paramsCopy).forEach(key => {
      if (typeof paramsCopy[key] === 'object') {
        paramsCopy[key] = JSON.stringify(paramsCopy[key], (k, value) => {
          if (value !== null) { return value; }
          else { return ''; }
        });
      }
    });
    return paramsCopy;
  }

  public getTree<T>(params: any = null): Promise<ResponseModel<T>> {
    const api = this.http.get<T>(`${this.baseUrl}/get-tree`, { params: this.stringifyParams(params) });
    return this.bindResponseApi(api);
  }

  public getPaging<T>(params: any = null): Promise<ResponseModel<T>> {
    const api = this.http.get<T>(`${this.baseUrl}/get-paging`, { params: this.stringifyParams(params) });
    return this.bindResponseApi(api);
  }

  public getAll<T>(params: any = null): Promise<ResponseModel<T>> {
    const api = this.http.get<T>(`${this.baseUrl}/get-all`, { params: this.stringifyParams(params) });
    return this.bindResponseApi(api);
  }

  public post<T>(body: any): Promise<ResponseModel<T>> {
    const api = this.http.post<T>(`${this.baseUrl}/add`, body);
    return this.bindResponseApi(api);
  }

  public put<T>(body: any): Promise<ResponseModel<T>> {
    const api = this.http.put<T>(`${this.baseUrl}/edit`, body);
    return this.bindResponseApi(api);
  }

  public findOne<T>(params: any): Promise<ResponseModel<T>> {
    const api = this.http.get<T>(`${this.baseUrl}/find-one`, { params: this.stringifyParams(params) });
    return this.bindResponseApi(api);
  }

  public delete<T>(params: any): Promise<ResponseModel<T>> {
    const api = this.http.delete<T>(`${this.baseUrl}/delete`, { params: this.stringifyParams(params) });
    return this.bindResponseApi(api);
  }

  public uploadFile<T>(body: any): Promise<ResponseModel<T>> {
    const api = this.http.post<T>(`${this.baseUrl}/uploadFile`, body);
    return this.bindResponseApi(api);
  }

  public getCombobox<T>(params: any): Promise<ResponseModel<T>> {
    const api = this.http.get<T>(`${this.baseUrl}/combobox`, { params: this.stringifyParams(params) });
    return this.bindResponseApi(api);
  }

  /**
   * Hàm maping giá trị id với giá trị text từ api
   * @param dữ liệu mảng muốn maping
   *
   * @param option keyValue: tên cột giá trị id,
   * keyText: tên cột giá trị text (nếu không có tự sinh)
   */
  public async getMapingTextValue<T>(array: any[], option: MapingTextValueConfigModel): Promise<void> {
    const listValue = array.map(x => x[option.keyValue]);
    const api = this.http.get<T>(`${this.baseUrl}/combobox`, {
      params: this.stringifyParams({
        valueSearch: listValue.join(','),
        page: 1,
        size: 500
      })
    });
    const rs = await this.bindResponseApi(api);
    if (rs.ok) {
      for (const item of array) {
        item[option.keyText] = rs.result[item[option.keyValue]];
      }
    }
  }
}

export interface MapingTextValueConfigModel {
  keyValue: string;
  keyText: string;
}
