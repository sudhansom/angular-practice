import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ObservableComponent } from './observable.component';
import { from, of, map, mergeAll, tap, concatMap, concat } from 'rxjs';

const appRoutes: Routes = [
  {
    path: '',
    component: ObservableComponent,
  },
];

@NgModule({
  declarations: [ObservableComponent],
  imports: [CommonModule, RouterModule.forChild(appRoutes)],
  exports: [],
  providers: [],
  bootstrap: [],
})
export class ObservableModule {
  getVideo(channel: string) {
    return of(channel + ' Video uploaded');
  }
  //source1$ = of('Tech', 'News', 'Sports');
  source1$ = from(['Tech', 'News', 'Sports']);

  broadCast$ = this.source1$
    .pipe(
      map((channel) => this.getVideo(channel)),
      mergeAll()
    )
    .subscribe(console.log);
}
