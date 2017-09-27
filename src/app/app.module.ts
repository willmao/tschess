import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PanelComponent } from './chess/panel/panel.component';
import { StatusPipe } from './chess/pipe/status.pipe';

@NgModule({
  declarations: [
    AppComponent,
    PanelComponent,
    StatusPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
