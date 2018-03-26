import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SandboxComponent } from './component/sandbox/sandbox.component';
import { DataService } from './services/data.service';

@NgModule({
  /* Components we add to the declarations and
  services we add to the providers */
  declarations: [
    AppComponent,
    SandboxComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
