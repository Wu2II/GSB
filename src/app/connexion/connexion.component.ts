import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/app.service.data';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.scss']
})
export class ConnexionComponent implements OnInit {
  login : any;
  password : any;
  err_message :string = "";
  visiteur: any;
  
  constructor(private router : Router, private dataService : DataService) {
    
  }
valider() : void{
  this.dataService.connexion(this.login,this.password).subscribe({
    next : (data) =>{
      this.visiteur = data;
      this.dataService.visiteur = data;
      console.log(data);
      this.router.navigate (['home']);
      
    },
    error : (error)=>{
      console.log(error)
      this.err_message = "L'identifiant ou le mot de passe est incorrect"
      console.log("non")
    }
    
  });
 
  
}

 ngOnInit(): void {
  }

}
