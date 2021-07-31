import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';

import { AppComponent } from './app.component';
import { IconsProviderModule } from './icons-provider.module';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { AppRouting } from './app.routing';
import { UserService } from './_share/services/user.service';


registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRouting,
    IconsProviderModule,
    NzLayoutModule,
    NzMenuModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgZorroAntdModule,
  ],
  providers: [
    // UserService,
    {provide: NZ_I18N, useValue: en_US},
    {provide: APP_INITIALIZER, useFactory: initializeApp, deps: [UserService], multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}

export function initializeApp(userService: UserService): any {
  return (): Promise<void> => {
    return userService.init();
  };
}
