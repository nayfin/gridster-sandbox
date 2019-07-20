import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'layout', pathMatch: 'full'},
  { path: 'layout', loadChildren: () => import('./drag-drop/drag-drop.module').then(m => m.DragDropModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
