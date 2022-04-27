import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'


import { AppComponent } from './app.component';
import { AppRoutingModule } from './router/app-routing.module';
import { ListEmployee } from './list-employee/list-employee';
import { CreateEmployee } from './create-employee/create-employee';
import { UpdateEmployee } from './update-employee/update-employee';
import { DetailsEmployee } from './details-employee/details-employee';
import { FormsModule } from '@angular/forms';
import { DeleteEmployee } from './delete-employee/delete-employee';

@NgModule({
  declarations: [
    AppComponent,
    DetailsEmployee,
    ListEmployee,
    CreateEmployee,
    DeleteEmployee,
    UpdateEmployee
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
