import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { LearningAngularModule } from './learning-angular/learning-angular.module';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { HelloAngularComponent } from './components/hello-angular/hello-angular.component';

@NgModule({
  declarations: [
    AppComponent,
    PagenotfoundComponent,
    HelloAngularComponent
  ],
  imports: [
    BrowserModule,
    LearningAngularModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
