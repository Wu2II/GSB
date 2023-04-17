import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConnexionComponent } from './connexion/connexion.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MedecinsComponent } from './medecins/medecins.component';
import { VisitesComponent } from './visites/visites.component';


const routes: Routes = [
 { path: '', component: ConnexionComponent},
 {path: 'medecins', component: MedecinsComponent},
 {path: 'visites', component : VisitesComponent},
 {path: 'home', component: NavbarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
