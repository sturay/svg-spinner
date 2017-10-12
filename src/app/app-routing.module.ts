import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReadmeComponent } from './readme/readme.component';
import { CircleComponent } from './types/circle/circle.component';
import { SquareComponent } from './types/square/square.component';
import { LineComponent } from './types/line/line.component';
import { SurroundComponent } from './types/surround/surround.component';

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
    path: 'types/circle',
    component: CircleComponent
  },
  {
    path: 'types/square',
    component: SquareComponent
  },
  {
    path: 'types/line',
    component: LineComponent
  },
  {
    path: 'types/surround',
    component: SurroundComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
