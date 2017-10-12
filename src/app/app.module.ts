import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { SpinnerTypesRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { ReadmeComponent } from './readme/readme.component';
import { CircleComponent } from './circle/circle.component';
import { LineComponent } from './line/line.component';
import { SquareComponent } from './square/square.component';
import { SurroundComponent } from './surround/surround.component';
import { ShSpinnerComponent } from './shared/sh-spinner/sh-spinner.component';
import { NavigationComponent } from './shared/navigation/navigation.component';

@NgModule({
  declarations: [
    AppComponent,
    ReadmeComponent,
    CircleComponent,
    LineComponent,
    SquareComponent,
    SurroundComponent,
    ShSpinnerComponent,
    NavigationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    SpinnerTypesRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
