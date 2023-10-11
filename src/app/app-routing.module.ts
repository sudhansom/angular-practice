import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./pages/home/homponent.module').then((mod) => mod.HomepageModule),
  },
  {
    path: 'about',
    loadChildren: () =>
      import('./pages/about/about.module').then((mod) => mod.AboutModule),
  },
  {
    path: 'array-methods',
    loadChildren: () =>
      import('./pages/array-methods/array-methods.module').then(
        (mod) => mod.ArrayMethodsModule
      ),
  },
  {
    path: 'observable',
    loadChildren: () =>
      import('./pages/observable/observable.module').then(
        (mod) => mod.ObservableModule
      ),
  },
  {
    path: 'observable-concat',
    loadChildren: () =>
      import('./pages/observable-concat/observable.module').then(
        (mod) => mod.ObservableModule
      ),
  },
  {
    path: 'all-maps',
    loadChildren: () =>
      import('./pages/all-maps-observable/all-maps-observable.module').then(
        (mod) => mod.AllMapsObservableModule
      ),
  },
  {
    path: 'todo',
    loadChildren: () =>
      import('./pages/todopage/todopage.module').then(
        (mod) => mod.TodopageModule
      ),
  },
  {
    path: 'countries',
    loadChildren: () =>
      import('.//pages/rest-countries/about.module').then(
        (mod) => mod.AboutModule
      ),
  },
  {
    path: 'cold-hot',
    loadChildren: () =>
      import('.//pages/cold-hot/about.module').then((mod) => mod.AboutModule),
  },
  {
    path: 'traffic-light',
    loadChildren: () =>
      import('./pages/traffic-light/about.module').then(
        (mod) => mod.AboutModule
      ),
  },
  {
    path: 'js-concepts',
    loadChildren: () =>
      import('./pages/javascripts-concepts/about.module').then(
        (mod) => mod.AboutModule
      ),
  },
  {
    path: 'bubbling',
    loadChildren: () =>
      import('./pages/bubbling-capturing/about.module').then(
        (mod) => mod.AboutModule
      ),
  },
  {
    path: 'products',
    loadChildren: () =>
      import('./pages/products/products.module').then(
        (mod) => mod.ProductsModule
      ),
  },
  {
    path: 'formatting-context',
    loadChildren: () =>
      import('./pages/formatting-context/formatting-context.module').then(
        (mod) => mod.FormattingContextModule
      ),
  },
  {
    path: 'debounce-time',
    loadChildren: () =>
      import('./pages/debounse-time/debounse-time.module').then(
        (mod) => mod.ObservableModule
      ),
  },
  {
    path: 'prep',
    loadChildren: () =>
      import('./pages/interview-prep/about.module').then(
        (mod) => mod.AboutModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
