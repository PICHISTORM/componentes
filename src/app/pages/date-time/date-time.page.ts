import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonDatetime,
  IonDatetimeButton,
  IonModal,
  IonList,
  IonListHeader,
  IonLabel,
  IonItem,
  IonSelect,
  IonSelectOption
} from '@ionic/angular/standalone';

import { FormsModule } from '@angular/forms';
import { HeaderComponent } from "src/app/components/header/header.component";

@Component({
  selector: 'app-date-time',
  templateUrl: './date-time.page.html',
  styleUrls: ['./date-time.page.scss'],
  standalone: true,
  encapsulation: ViewEncapsulation.None,
  imports: [
    CommonModule,
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    IonDatetime,
    IonDatetimeButton,
    IonModal,
    IonList,
    IonListHeader,
    IonLabel,
    IonItem,
    IonSelect,
    IonSelectOption,
    FormsModule,
    CommonModule,
    HeaderComponent
]
})
export class DateTimePage {

  fechaNaci: string = '2020-09-08';

  fechaMinMax: string = '2023-12-31';

  anioSeleccionado = 2020;

  years: number[] = [];

  constructor() {

    for (let y = 2023; y >= 2015; y--) {
      this.years.push(y);
    }

  }

  cambioFecha(event: any) {
    this.fechaNaci = event.detail.value;
  }

  cambioMinMax(event: any) {
    this.fechaMinMax = event.detail.value;
  }

}
