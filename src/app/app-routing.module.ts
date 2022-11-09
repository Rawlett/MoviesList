import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailComponent } from './components/detail/detail.component';
import { ListComponent } from './components/list/list.component';

const routes: Routes = [
  {
    path: 'list',
    component: ListComponent
  },
  {
    path: 'detail',
    component: DetailComponent
  },
  {
    path: '**',
    component: ListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
