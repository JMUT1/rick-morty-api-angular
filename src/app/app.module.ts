import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import {HomeComponent} from "../app/components/pages/home/home.component"
import { FormSearchComponent } from './components/form-search/form-search.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import {CharacterListComponent} from "../app/components/pages/characters/character-list/character-list.component"
import {CharacterDetailsComponent} from "../app/components/pages/characters/character-details/character-details.component"

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FormSearchComponent,
    HomeComponent,
    CharacterListComponent,
    CharacterDetailsComponent,



  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
