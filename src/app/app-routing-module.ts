import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { List } from './list/list';
import { Navbar } from './navbar/navbar';

const routes: Routes = [
  { path: '', component: Navbar },
  { path: 'list', component: List },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
