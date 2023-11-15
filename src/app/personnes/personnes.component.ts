import { Component } from '@angular/core';
import { Personne } from '../Personne';
import { ApiService } from './api.service';

@Component({
  selector: 'app-personnes',
  templateUrl: './personnes.component.html',
  styleUrls: ['./personnes.component.scss']
})
export class PersonnesComponent {
  personnes: Personne[] = [];


  constructor(private personneService: ApiService) {}

  ngOnInit(): void {
    this.getToutesLesPersonnes();
  }

  getToutesLesPersonnes(): void {
    this.personneService.getToutesLesPersonnes().subscribe((personnes) => {
      this.personnes = personnes;
    });
  }
}
