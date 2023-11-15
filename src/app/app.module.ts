import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PersonnesComponent } from './personnes/personnes.component';
import { AjoutPersonneComponent } from './personnes/ajout-personne/ajout-personne.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavComponent } from './nav/nav.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { MatDialogModule } from '@angular/material/dialog';
import { ToastrModule } from 'ngx-toastr';
import { AjoutEmploiComponent } from './personnes/ajout-emploi/ajout-emploi.component';
import { RechercheparentrepriseComponent } from './personnes/rechercheparentreprise/rechercheparentreprise.component';

@NgModule({
  declarations: [
    AppComponent,
    PersonnesComponent,
    AjoutPersonneComponent,
    NavComponent,
    AjoutEmploiComponent,
    RechercheparentrepriseComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule ,
    HttpClientModule,
    MatDialogModule,
    ReactiveFormsModule,
    ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
