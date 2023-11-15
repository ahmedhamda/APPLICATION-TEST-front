import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonnesComponent } from './personnes/personnes.component';
import { AjoutPersonneComponent } from './personnes/ajout-personne/ajout-personne.component';
import { AjoutEmploiComponent } from './personnes/ajout-emploi/ajout-emploi.component';
import { RechercheparentrepriseComponent } from './personnes/rechercheparentreprise/rechercheparentreprise.component';

const routes: Routes = [
  { path: 'personnes', component: PersonnesComponent },
  { path: 'ajout-personne', component: AjoutPersonneComponent },
 {path: 'ajoutemploi', component: AjoutEmploiComponent },
 {path: 'rechercheparentreprise', component: RechercheparentrepriseComponent },

  { path: '', redirectTo: '/personnes', pathMatch: 'full' }, // Rediriger vers la liste des personnes par défaut
  // Ajoutez d'autres routes au besoin
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
