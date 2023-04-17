import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/app.service.data';

@Component({
  selector: 'app-visites',
  templateUrl: './visites.component.html',
  styleUrls: ['./visites.component.scss']
})
export class VisitesComponent implements OnInit {

  constructor(private dataService : DataService) { }

  rapport : any;
  afficherRapport!: boolean;
  lesRapports : any;
  dateVisite : any;
  titre : string = 'titre';
  gestionMajRapport!: boolean;
  visiteur : any;
  typeMessage : string = ""
  messageMAJ : string = ""

  selectionner(rapport: any) {
    this.rapport = rapport;
    this.afficherRapport = true;
  }

  chargerVisites(){
    this.dataService.chargerRapportsGeneral(this.dataService.visiteur.id, this.dateVisite).subscribe(
      (data) => {
        console.log(data);
        console.table(data);
        console.log(JSON.stringify(data));
        
        if (data.length == 0) {
          console.log("vide");
          
          this.lesRapports = [];
        } else {
          console.log("remplie");
          this.lesRapports = data;
        }
      },
      (error) => {}
    );

  }
  ajouterRapport(){

  }

  modifierRapport(){
    this.gestionMajRapport = true;
    
  }

  valider(){
    console.log(this.rapport);

    this.dataService.majRapport(
      this.rapport.idRapport,
      this.rapport.motif,
      this.rapport.bilan
      
    ).subscribe(
      (data) => {
        console.log(data);
        
      },
      (error) => {
        console.log(error);
        
      }
    );
    
  }
  ngOnInit(): void {
  }

}
