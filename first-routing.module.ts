import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FirstHomeComponent } from './pages/first-home/first-home.component';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: FirstHomeComponent
  }
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FirstRoutingModule { }
