import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FirstHomeComponent } from './pages/first-home/first-home.component';
import { FirstRoutingModule } from './first-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [FirstHomeComponent],
  imports: [
    CommonModule,
    FirstRoutingModule,
    SharedModule
  ],
  exports: [RouterModule]
})
export class FirstModule { }
