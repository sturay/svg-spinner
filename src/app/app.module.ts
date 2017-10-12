import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CircleComponent } from './types/circle/circle.component';
import { LineComponent } from './types/line/line.component';
import { ReadmeComponent } from './readme/readme.component';
import { SpinnerComponent } from './shared/spinner/spinner.component';
import { NavigationComponent } from './shared/navigation/navigation.component';
import { SquareComponent } from './types/square/square.component';
import { SurroundComponent } from './types/surround/surround.component';

@NgModule({
  declarations: [
    AppComponent,
    CircleComponent,
    LineComponent,
    ReadmeComponent,
    SpinnerComponent,
    NavigationComponent,
    SquareComponent,
    SurroundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
