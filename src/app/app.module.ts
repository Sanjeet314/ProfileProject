import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopNavComponent } from './top-nav/top-nav.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { HomeComponent } from './home/home.component';
import { MyAccountComponent } from './my-account/my-account.component';
import { SelectDropdownComponent } from './commons/select-dropdown/select-dropdown.component';
import { AlarmNotificationsComponent } from './top-nav/alarm-notifications/alarm-notifications.component';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { appReducer } from './AppStore/app.reducer';
import { EffectsModule } from '@ngrx/effects';
import { EmployeeEffects } from './AppStore/EmployeeStore/employee.effects';
import { SharedModuleModule } from './shared-module/shared-module.module';

@NgModule({
  declarations: [
    AppComponent,
    TopNavComponent,
    SideNavComponent,
    HomeComponent,
    MyAccountComponent,
    SelectDropdownComponent,
    AlarmNotificationsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot(appReducer),
    EffectsModule.forRoot([EmployeeEffects]),
    SharedModuleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
