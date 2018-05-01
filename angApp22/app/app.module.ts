import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { CockpitComponent } from './components/cockpit/cockpit.component';
import { ServerElementsComponent } from './components/server-elements/server-elements.component';

@NgModule({
  declarations: [
    AppComponent,
    CockpitComponent,
    ServerElementsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
