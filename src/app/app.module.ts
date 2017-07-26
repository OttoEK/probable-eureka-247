import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {RedditComponent} from './reddit/reddit.component';
import {RedditService} from './reddit/reddit.service';
import { HttpModule } from '@angular/http';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent, RedditComponent
  ],
  imports: [
    BrowserModule, HttpModule,FormsModule
  ],
  providers: [RedditService],
  bootstrap: [AppComponent]
})
export class AppModule { }
