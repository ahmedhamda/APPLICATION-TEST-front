import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../api.service';
import { ajoutemploi } from './ajoutemploi';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-ajout-emploi',
  templateUrl: './ajout-emploi.component.html',
  styleUrls: ['./ajout-emploi.component.scss']
})
export class AjoutEmploiComponent {
  emploiForm: FormGroup ;

  constructor(
    private toastr: ToastrService,
    private fb: FormBuilder,
    private personneService: ApiService
  ) {

   
    this.emploiForm = this.fb.group({
      titre: ['', Validators.required],
      dateDebut: ['', Validators.required],
      dateFin: [null], 
      personneId: [ 0,Validators.required],
      nomEntreprise: ['', Validators.required],

    });
  }

  onSubmit(): void {
    if (this.emploiForm.valid) {
      const nouvelemploi:   ajoutemploi = this.emploiForm.value;

      this.personneService.ajouterEmploi(nouvelemploi).subscribe(
        (resultat) => {
          this.toastr.error('Erreur lors de lajout de l emploi', 'Erreur');

        },
        (erreur) => {
          this.toastr.success('Emploi ajouté avec succès  !', 'Succès');
          this.emploiForm.reset();
        }
      );
    }
  }
}
