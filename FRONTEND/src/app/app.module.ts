import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ProduitComponent } from './produit/produit.component';
import { FiltrePipePipe } from './filtre-pipe.pipe';
import { MoteurRechercheComponent } from './moteur-recherche/moteur-recherche.component';

@NgModule({
  declarations: [
    AppComponent,
    ProduitComponent,
    FiltrePipePipe,
    MoteurRechercheComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
