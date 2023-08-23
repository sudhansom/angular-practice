import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', loadChildren: ()=>import('./pages/home/homponent.module').then((mod)=>mod.HomepageModule)},
  {path: 'about', loadChildren: ()=>import('./pages/about/about.module').then((mod)=>mod.AboutModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
