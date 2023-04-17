import { HttpClient, HttpResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, throwError } from "rxjs";
import { catchError, retry } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class DataService {
  private urlAPI = "http://localhost/restGSB";
  visiteur: any;

  constructor(private http: HttpClient) {}

  public connexion(login: string, mdp: string) {
    let url = this.urlAPI + "/connexion?login=" + login + "&mdp=" + mdp;
    let req = this.http.get<string>(url);
    console.log(url)
    return req;
  }

  public chargerRapportsGeneral(idVisiteur: string,
    date: Date): Observable<string[]>{
      let url = this.urlAPI + "/rapports_a_date?idVisiteur=" + idVisiteur + "&date=" +date;
      let req = this.http.get<Array<any>>(url)
      console.log(req)
      return req
  }  
  public chargerMedecins(nomMedecin: string,){
    let url = this.urlAPI + "/medecins?nom=" +nomMedecin;
    let req = this.http.get<Array<any>>(url);
    return req;
  }

  public chargerRapports(idMedecin : number){
    let url = this.urlAPI + "/rapport/" +idMedecin;
    let req = this.http.get<Array<any>>(url);
    return req;
  }

  public majRapport(idRap : string, motifRap : string, bilanRap : string){
    const body = {
      idRapport : idRap,
      motif : motifRap,
      bilan : bilanRap,
      
      
    };
    console.table(body);
    let url: string = this.urlAPI + "/majRapports"
    let req = this.http.put<Array<any>>(url, body);
    return req;
  }

  public majMedecin(idmed : string, adressemed : string, telmed : string, spemed : string){
    const body = {
      id: idmed,
      adresse: adressemed,
      tel: telmed,
      specialite: spemed,
    };
    console.table(body);
    let url: string = this.urlAPI + "/majMedecin";
    let req = this.http.put<Array<any>>(url, body);
    return req;
  }
}
