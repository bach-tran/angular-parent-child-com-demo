import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { PokeSearchComponent } from './poke-search/poke-search.component';
import { PokeComponent } from './poke/poke.component';

@NgModule({
  declarations: [
    AppComponent,
    PokeSearchComponent,
    PokeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
