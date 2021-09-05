import { BrowserModule } from '@angular/platform-browser';
import { APP_INITIALIZER, NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { IconsProviderModule } from './icons-provider.module';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { en_US, NZ_I18N } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { NzMessageModule, NzModalModule, NzNotificationModule, NzDropDownModule } from 'ng-zorro-antd';
import { AppRouting } from './app.routing';
import { UserService } from './_share/services/user.service';
import { MenuModule } from './_share/templates/menu/menu.module';
import { AuthGuard } from './_share/services/auth.guard';


registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MenuModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    IconsProviderModule,
    NzLayoutModule,
    NzMenuModule,
    NzModalModule,
    NzDropDownModule,
    NzMessageModule,
    NzNotificationModule,
    AppRouting,
  ],
  providers: [
    // UserService,
    AuthGuard,
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
