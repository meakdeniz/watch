import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent }  from './app.component';
import {WatchService} from "./watchlist/watch.service";
import { WatchSearchComponent } from './watchlist/search.component';
@NgModule({
  imports: [ BrowserModule, FormsModule, HttpModule ],
  declarations: [ AppComponent,
  WatchSearchComponent ],
  providers: [WatchService],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
