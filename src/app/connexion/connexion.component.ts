import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.scss']
})
export class ConnexionComponent implements OnInit {
  login : string = "";
  password : string = "";
  err_message :string = "";
  
  constructor() {
  
  }
valider() : void{
  
  console.log(this.login)
  console.log(this.password)
  if(this.login != "toto" || this.password !="titi"){
  this.err_message = "L'identifiant ou le mot de passe est incorrect"
  console.log("erreur")
  }else{
  console.log("ok");}
  
}

 ngOnInit(): void {
  }

}
