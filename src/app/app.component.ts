import { Component, OnInit } from '@angular/core';
import { CommonModule, AsyncPipe } from '@angular/common';
import { IonApp, IonRouterOutlet, IonMenu, IonHeader, IonToolbar, IonTitle, IonContent, IonButtons, IonMenuButton, IonList, IonItem, IonIcon, IonLabel, MenuController, IonMenuToggle } from '@ionic/angular/standalone';
import { RouterLink } from '@angular/router';
import { Componente } from '../app/interfaces/interfaces';
import { Observable } from 'rxjs';
import { DataService } from '../app/services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  imports: [IonApp, IonRouterOutlet, IonMenu, IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem, IonIcon, IonLabel, RouterLink, AsyncPipe, IonMenuToggle],
})
export class AppComponent implements OnInit{

  componentes!: Observable<Componente[]>;

  constructor( private menuCtrl: MenuController,
               private dataService: DataService) {}



  ngOnInit() {
    console.log(this.dataService.getMenuOpts());
    this.componentes = this.dataService.getMenuOpts();
  }
}
