import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Apartment } from 'src/app/models/apartment';
import { ApartementsService } from 'src/app/services/apartements.service';

@Component({
  selector: 'app-add-apartment',
  templateUrl: './add-apartement.component.html',
  styleUrls: ['./add-apartement.component.css']
})
export class AddApartmentComponent {

  constructor (private apartementsService : ApartementsService) {}


      @ViewChild('f') myForm: NgForm | undefined; 
      apart! : Apartment ; 
  
      onFormSubmit(){
        this.apart = new Apartment(); 
        
  
        console.log(this.myForm);
          this.apart.surface = this.myForm?.value['surface'];
          this.apart.terrace = this.myForm?.value['terrace'];
          this.apart.surfaceterrace = this.myForm?.value['surfaceterrace'];
          this.apart.category = this.myForm?.value['category'];
          this.apart.ResidenceId = this.myForm?.value['ResidenceId'] -1;
          this.apart.apartNum = this.myForm?.value['apartNum'];
          this.apart.floorNum = this.myForm?.value['floorNum'];
          console.log(this.apart);
          this.apartementsService.addApartment(this.apart);
      }
}
