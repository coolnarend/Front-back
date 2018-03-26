import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { SandboxComponent } from './component/sandbox/sandbox.component';
import { DataService } from './services/data.service';

@NgModule({
  /*
  Components we add to the declarations
  Modules we add to the imports under providers
  Services we add to the providers
  */
  declarations: [
    AppComponent,
    SandboxComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
