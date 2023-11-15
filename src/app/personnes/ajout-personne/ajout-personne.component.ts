import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../api.service';
import { MatDialogRef } from '@angular/material/dialog';
import { ajoutpersonne } from '../../ajout-personne';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-ajout-personne',
  templateUrl: './ajout-personne.component.html',
  styleUrls: ['./ajout-personne.component.scss']
})
export class AjoutPersonneComponent {
  personneForm: FormGroup ;

  constructor(
    private toastr: ToastrService,
    private fb: FormBuilder,
    private personneService: ApiService
  ) {
    this.personneForm = this.fb.group({
      id: [0, Validators.required],
      nom: ['', Validators.required],
      prenom: ['', Validators.required],
      date_naissance: ['', Validators.required],
    });
  }

  onSubmit(): void {
    if (this.personneForm.valid) {
      const nouvellePersonne:   ajoutpersonne = this.personneForm.value;

      this.personneService.ajouterPersonne(nouvellePersonne).subscribe(
        (resultat) => {
          this.toastr.error('Erreur lors de lajout de la personne', 'Erreur');

          console.log('Personne ajoutée avec succès :', resultat);
        },
        (erreur) => {
          this.toastr.success('Personne ajoutée avec succès  !', 'Succès');
          this.personneForm.reset();
        }
      );
    }
  }


}
