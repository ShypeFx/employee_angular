import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AppComponent } from "../app.component";
import { CreateEmployee } from "../create-employee/create-employee";
import { DetailsEmployee } from "../details-employee/details-employee";
import { ListEmployee } from "../list-employee/list-employee";
import { UpdateEmployee } from "../update-employee/update-employee";



const routes: Routes = [
    {path: 'employees', component: ListEmployee},
    {path: 'employee/:id', component: DetailsEmployee},
    {path: 'create', component: CreateEmployee},
    {path: 'update', component: UpdateEmployee},
    {path: '', redirectTo: 'employees', pathMatch: 'full'}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule{}