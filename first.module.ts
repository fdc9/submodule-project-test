import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContainerComponent } from './pages/container/container.component';
import { FirstListComponent } from './components/first-list/first-list.component';



@NgModule({
  declarations: [ContainerComponent, FirstListComponent],
  imports: [
    CommonModule
  ]
})
export class FirstModule { }
