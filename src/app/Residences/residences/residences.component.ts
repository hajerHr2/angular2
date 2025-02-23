import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Residence } from 'src/app/models/residence';
import { ResidenceService } from 'src/app/services/residence.service';
@Component({
  selector: 'app-residences',
  templateUrl: './residences.component.html',
  styleUrls: ['./residences.component.css']
})


export class ResidencesComponent implements OnInit {

  listResidencesFavorite: Residence[]=[];
  listResidencesFiltered: Residence[]=[];
  listResidences: Residence[] = [];

  constructor(private router: Router, private residenceService : ResidenceService) { 
  } 

  ngOnInit(): void {
    this.residenceService.getResidences().subscribe(residences => this.listResidences = residences);
    this.listResidencesFiltered = this.listResidences;
  }



   ShowLocation(id: number){
      this.listResidences[id-1].locationShown = !this.listResidences[id-1].locationShown;
      console.log(this.listResidences[id-1].locationShown);
      if (this.listResidences[id-1].address=="inconnu"){
        alert("Adresse inconnue");
      } 
   }

   LikeRes(id: number) {
    const residence = this.listResidences.find(res => res.id === id);
    if (!residence) return;
  
    const index = this.listResidencesFavorite.findIndex(res => res.id === id);
    
    if (index === -1) {
      // If not already liked, add to favorites
      this.listResidencesFavorite.push(residence);
    } else {
      // If already liked, remove from favorites
      this.listResidencesFavorite.splice(index, 1);
    }
  
    console.log("Favorite Residences: ", this.listResidencesFavorite);
  }
  

   filterResults(text: string) {
    if (!text) {
      this.listResidencesFiltered = this.listResidences;
      return;
    }
  
    this.listResidencesFiltered = this.listResidences.filter(
      Residence => Residence?.address.toLowerCase().includes(text.toLowerCase())
    );
  }

  OnSelect(res : Residence){
    this.router.navigate(['/residences', res.id]);
  }

  ListApartments(res : Residence){
    this.router.navigate(['/apartments', res.id]);
  }


}
