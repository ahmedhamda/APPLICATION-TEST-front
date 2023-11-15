import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Personne } from '../Personne';
import { ajoutpersonne } from '../ajout-personne';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private apiUrl = 'http://localhost:5161/api/Personne';

  constructor(private http: HttpClient) {}
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }
  getToutesLesPersonnes(): Observable<Personne[]> {
    return this.http.get<Personne[]>(`${this.apiUrl}/toutes-les-personnes`);
  }

  ajouterPersonne(personne: ajoutpersonne): Observable<ajoutpersonne> {
    return this.http.post<ajoutpersonne>(this.apiUrl, personne,this.httpOptions);
  }


  ajouterEmploi(emploi: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/ajouter-emploi`, emploi,this.httpOptions);
  }

  getPersonnesParEntreprise(nomEntreprise: string): Observable<any> {
    const url = `${this.apiUrl}/personnes-par-entreprise/${nomEntreprise}`;
    return this.http.get(url);
  }

}
