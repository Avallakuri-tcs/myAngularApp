import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormAppComponent } from './form-app/form-app.component';
import { ViewAppComponent } from './view-app/view-app.component';

const routes: Routes = [
  {
    path: 'login',
    component: FormAppComponent
  },
  {
    path: 'view',
    component: ViewAppComponent
  },

 
    { path: '', redirectTo: '/view', pathMatch: 'full' },
 
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
