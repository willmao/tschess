import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PanelComponent } from './chess/panel/panel.component';
import { ChessInfoPipe } from './chess/core/chess-info.pipe';

@NgModule({
  declarations: [
    AppComponent,
    PanelComponent,
    ChessInfoPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
