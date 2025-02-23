import { Injectable } from '@angular/core';
import { Apartment } from '../models/apartment';

@Injectable({
  providedIn: 'root'
})
export class ApartementsService {

  listApartments: Apartment[]=[];

  constructor() { }

  getApartments(): Apartment[] {
    return this.listApartments;
  }

  addApartment(apart : Apartment): void {
    this.listApartments.push(apart);
  }

  getApartmentsByID(id: number): Apartment[] {
    let associatedApart = [];
    for (let apart of this.listApartments){
      if (apart.ResidenceId == id){
        
        associatedApart.push(apart);
      }
    }
    return associatedApart;
  }
}