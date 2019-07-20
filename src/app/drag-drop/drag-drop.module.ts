import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './components/layout/layout.component';
import { GridsterModule } from 'angular-gridster2'
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '', redirectTo: 'layout', pathMatch: 'full'},
  { path: 'layout', component: LayoutComponent }
];

@NgModule({
  declarations: [LayoutComponent],
  imports: [
    CommonModule,
    GridsterModule,
    RouterModule.forChild(routes)
  ]
})
export class DragDropModule { }
