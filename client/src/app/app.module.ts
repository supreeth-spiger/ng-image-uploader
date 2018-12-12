import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { FileUploaderService } from './service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent

  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    HttpClientModule

  ],
  providers: [FileUploaderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
