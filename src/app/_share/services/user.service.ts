import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';

export interface UserModel {
  userName: string;
  userId: string;
  token: string;
  age: number;
}

@Injectable({
  providedIn: 'root'
})
export class UserService {
  public currentUser: UserModel;

  constructor() {
  }

  init(): Promise<void> {
    return new Promise<void>(async (resolve, reject) => {
      const userPro: UserModel = {
        userName: 'Nguyen hoang kha',
        userId: 'kha-nguyen-6711',
        age: 18,
        token: null
      };
      const userDev: UserModel = {
        userName: 'dev account',
        userId: 'dev-007',
        age: 17,
        token: null
      };
      this.currentUser = environment.production ? userPro : userDev;
      setTimeout(() => {
        resolve();
      }, 10);
    });
  }
}

export function getClientSettings(): any {
  return {
    production: environment.production,
  };
}
