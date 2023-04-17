import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/app.service.data';

@Component({
  selector: 'app-medecins',
  templateUrl: './medecins.component.html',
  styleUrls: ['./medecins.component.scss']
})
export class MedecinsComponent implements OnInit {

  lesMedecins : Array<any> = new Array();
  nomMedecin!: string;
  medecin : any;
  lesRapports : Array<any> = new Array();
  afficherRapports!: any;
  afficherListe: any
  afficherMedecin!: any;
  idMedecin!: number;
  constructor(private dataService : DataService) { 

  }

  derniersRapports() {
    this.dataService.chargerRapports(this.idMedecin).subscribe({
      // En cas de succès, affiche les données, met la variable afficherRapports à vrai et affecte les données à la variable lesRapports
      next: (data) => {
        this.lesRapports = Array.of(data);
        this.afficherListe = false;
        this.afficherRapports = true;
        console.table(this.lesRapports);
      },
      // En cas d'erreur, affiche l'erreur dans la console
      error: (error) => {
        console.log(error);
      },
    });
  }

  majMedecin(){
   this.afficherRapports = false;
   this.afficherMedecin = true;
  }

  charger(){
    this.dataService.chargerMedecins(this.nomMedecin).subscribe({
      next : (data)=> {
        this.afficherListe = true;
        this.lesMedecins = data;
      },
      error : (error)=> {
        console.log(error);
        
      }
    })
  }

  selectionner(med: any):void{
    this.medecin = med;
    this.nomMedecin = med.nom + " " + med.prenom + " ;dep :" + med.departement;
    this.idMedecin = med.id;
  }

  valider(){

    this.dataService
      .majMedecin(
        this.medecin.id,
        this.medecin.adresse,
        this.medecin.tel,
        this.medecin.specialitecomplementaire
      )
      .subscribe(
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
