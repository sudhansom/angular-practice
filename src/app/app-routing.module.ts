import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: ()=>import('./pages/home/homponent.module').then((mod)=>mod.HomepageModule)},
  { path: 'about', loadChildren: ()=>import('./pages/about/about.module').then((mod)=>mod.AboutModule)},
  { path: 'array-methods', loadChildren: ()=>import('./pages/array-methods/array-methods.module').then((mod)=>mod.ArrayMethodsModule)},
  { path: 'observable', loadChildren: ()=>import('./pages/observable/observable.module').then((mod)=>mod.ObservableModule)},
  { path: 'observable-concat', loadChildren: ()=>import('./pages/observable-concat/observable.module').then((mod)=>mod.ObservableModule)},
  { path: 'all-maps', loadChildren: ()=>import('./pages/all-maps-observable/all-maps-observable.module').then((mod)=>mod.AllMapsObservableModule)},
  { path: 'todo', loadChildren: () => import('./pages/todopage/todopage.module').then((mod)=>mod.TodopageModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
