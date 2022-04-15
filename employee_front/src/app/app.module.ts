import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'


import { AppComponent } from './app.component';
import { AppRoutingModule } from './router/app-routing.module';
import { ListEmployee } from './list-employee/list-employee';
import { CreateEmployee } from './create-employee/create-employee';
import { UpdateEmployee } from './update-employee/update-employee';
import { DetailsEmployee } from './details-employee/details-employee';

@NgModule({
  declarations: [
    AppComponent,
    ListEmployee
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
