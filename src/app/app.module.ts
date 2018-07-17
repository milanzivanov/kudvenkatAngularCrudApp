import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CreateEmployeeComponent } from './employess/create-employee.component';
import { ListEmployessComponent } from './employess/list-employees.component';

const appRouts: Routes = [
  { path: 'list', component: ListEmployessComponent },
  { path: 'create', component: CreateEmployeeComponent },
  { path: '', redirectTo: '/list', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent,
    ListEmployessComponent,
    CreateEmployeeComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRouts),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
