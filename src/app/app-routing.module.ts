import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReadmeComponent } from './readme/readme.component';
import { CircleComponent } from './circle/circle.component';
import { SquareComponent } from './square/square.component';
import { LineComponent } from './line/line.component';
import { SurroundComponent } from './surround/surround.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/readme',
    pathMatch: 'full'
  },
  {
    path: 'readme',
    component: ReadmeComponent
  },
  {
    path: 'circle',
    component: CircleComponent
  },
  {
    path: 'square',
    component: SquareComponent
  },
  {
    path: 'line',
    component: LineComponent
  },
  {
    path: 'surround',
    component: SurroundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class SpinnerTypesRoutingModule { }
