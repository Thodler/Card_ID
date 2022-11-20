import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import {HttpClientModule} from "@angular/common/http";
import { BtnRefreshComponent } from './btn-refresh/btn-refresh.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    BtnRefreshComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
