import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientXsrfModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HttpXsrfInterceptor } from '@angular/common/http/src/xsrf';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, 
    HttpClientModule,
    HttpClientXsrfModule
  ],
  providers: [  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
