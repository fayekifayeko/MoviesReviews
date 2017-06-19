import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {routing} from './app.routing';
import {HttpModule} from '@angular/http';
import { AppComponent }  from './app.component';
import {FormsModule} from '@angular/forms';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ReviewsComponent } from './components/reviews/reviews.component';
import { SearchComponent } from './components/search/search.component';
import { SummaryComponent } from './components/summary/summary.component';

@NgModule({
  imports:      [ BrowserModule,FormsModule, HttpModule,routing ],  
  declarations: [ AppComponent,NavbarComponent, ReviewsComponent,SearchComponent,SummaryComponent],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
