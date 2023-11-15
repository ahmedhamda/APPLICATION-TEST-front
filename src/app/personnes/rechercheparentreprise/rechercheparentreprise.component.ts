import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-rechercheparentreprise',
  templateUrl: './rechercheparentreprise.component.html',
  styleUrls: ['./rechercheparentreprise.component.scss']
})
export class RechercheparentrepriseComponent {
  personnes: any[] = [];
  nomEntrepriseRecherche: string = '';

  constructor(private personneService: ApiService) {}

  rechercherParEntreprise(): void {
    this.personneService.getPersonnesParEntreprise(this.nomEntrepriseRecherche).subscribe(
      (result) => {
        this.personnes = result;
      },
      (error) => {
        console.error('Erreur lors de la récupération des personnes par entreprise', error);
      }
    );
  }
}
