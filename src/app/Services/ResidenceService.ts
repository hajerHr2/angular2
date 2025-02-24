import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Residence } from '../core/models/Residence';
import { environment } from 'src/environments/environment';  // Importer l'environnement

@Injectable({
  providedIn: 'root'
})
export class ResidenceService {
  private residenceUrl = environment.baseURL;  // Utiliser la base URL de l'environnement

  constructor(private http: HttpClient) {}

  getResidences(): Observable<Residence[]> {
    return this.http.get<Residence[]>(this.residenceUrl);
  }

  getResidenceById(id: number): Observable<Residence> {
    return this.http.get<Residence>(`${this.residenceUrl}/${id}`);
  }

  addResidence(residence: Residence): Observable<Residence> {
    return this.http.post<Residence>(this.residenceUrl, residence);
  }

  updateResidence(id: number, residence: Residence): Observable<Residence> {
    return this.http.put<Residence>(`${this.residenceUrl}/${id}`, residence);
  }

  deleteResidence(id: number): Observable<void> {
    return this.http.delete<void>(`${this.residenceUrl}/${id}`);
  }
}
