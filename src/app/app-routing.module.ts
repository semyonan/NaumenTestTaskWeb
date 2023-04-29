import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PersonListComponent} from "./person-list/person-list.component";
import {PersonFormComponent} from "./person-form/person-form.component";
import {PersonsAnswerComponent} from "./persons-answer/persons-answer.component";
import {PersonsMaxComponent} from "./persons-max/persons-max.component";

const routes: Routes = [
  { path: 'persons', component: PersonListComponent },
  { path: 'getage', component: PersonFormComponent },
  { path: 'answer/:age', component: PersonsAnswerComponent},
  { path: 'getmaxaged', component: PersonsMaxComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
