import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonRippleEffect, IonButton, IonIcon, IonButtons, MenuController, IonAccordion, IonMenuButton } from '@ionic/angular/standalone';
import { RouterLink } from '@angular/router';
import { IonList, IonItem, IonLabel } from '@ionic/angular/standalone';
import { Componente } from '../../interfaces/interfaces';
import { Observable } from 'rxjs';
import { DataService } from '../../services/data.service';

interface componente {
  icon: string;
  name: string;
  redirectTo: string;
}


@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, RouterLink, IonList, IonItem, IonLabel, IonIcon, IonButtons, IonMenuButton]
})
export class InicioPage implements OnInit {

  componentes!: Observable<Componente[]>;

  constructor( private menuCtrl: MenuController,
               private dataService: DataService) { }

  ngOnInit() {
    console.log(this.dataService.getMenuOpts());
    this.componentes = this.dataService.getMenuOpts();
  }

  mostrarMenu(){
    this.menuCtrl.open('first');
  }

}
