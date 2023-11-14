import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/pages/login/login.component';
import { HomeComponent } from './components/pages/home/home.component';
import { InputComponent } from './components/input/input.component';
import { HeaderComponent } from './components/header/header.component';
import { SmallTableComponent } from './components/small-table/small-table.component';
import { SchedulesComponent } from './components/pages/schedules/schedules.component';
import { TableComponent } from './components/table/table.component';
import { SearchInputComponent } from './components/search-input/search-input.component';
import { VaccinesComponent } from './components/pages/vaccines/vaccines.component';
import { CompanyMenuComponent } from './components/company-menu/company-menu.component';
import { MakeScheduleComponent } from './components/pages/make-schedule/make-schedule.component';
import { SmallTableMobileComponent } from './components/small-table-mobile/small-table-mobile.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    InputComponent,
    HeaderComponent,
    SmallTableComponent,
    SchedulesComponent,
    TableComponent,
    SearchInputComponent,
    VaccinesComponent,
    CompanyMenuComponent,
    MakeScheduleComponent,
    SmallTableMobileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
