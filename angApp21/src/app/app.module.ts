import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { SandboxComponent } from './component/sandbox/sandbox.component';
import { HomeComponent } from './component/home/home.component';
import { AboutComponent } from './component/about/about.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { Route } from '@angular/compiler/src/core';
import { UserDetailsComponent } from './component/user-details/user-details.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'user/:id', component: UserDetailsComponent }
];

  /*
  Components we add to the declarations
  Modules we add to the imports under providers
  Services we add to the providers
  */
@NgModule({
  declarations: [
    AppComponent,
    SandboxComponent,
    HomeComponent,
    AboutComponent,
    NavbarComponent,
    UserDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true }
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
