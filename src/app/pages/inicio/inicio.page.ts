import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonRippleEffect, IonButton, IonIcon } from '@ionic/angular/standalone';
import { RouterLink } from '@angular/router';
import { IonList, IonItem, IonLabel } from '@ionic/angular/standalone';

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
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonButton, RouterLink, IonList, IonItem, IonLabel, IonIcon]
})
export class InicioPage implements OnInit {

  componentes: componente[] = [
    {
      icon: 'american-football-outline',
      name: 'action-sheet',
      redirectTo: '/action-sheet',
    },

    {
      icon: 'alert-circle-outline',
      name: 'alert',
      redirectTo: '/alert',
    },

    {
      icon: 'beaker-outline',
      name: 'avatar',
      redirectTo: '/avatar',
    },

    {
      icon: 'radio-button-on-outline',
      name: 'button',
      redirectTo: '/button',
    },

        {
      icon: 'card-outline',
      name: 'Cards',
      redirectTo: '/card',
    },

  ];

  constructor() { }

  ngOnInit() {
  }

}
