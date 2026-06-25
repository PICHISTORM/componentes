import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonProgressBar, IonList, IonItem, IonRange, IonIcon } from '@ionic/angular/standalone';
import { HeaderComponent } from "src/app/components/header/header.component";

@Component({
  selector: 'app-progress',
  templateUrl: './progress.page.html',
  styleUrls: ['./progress.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, HeaderComponent, IonProgressBar, IonList, IonItem, IonRange, IonIcon]
})
export class ProgressPage implements OnInit {

  porcentaje:number=0.5;

  constructor() { }

  ngOnInit() {
  }

  rangeChange(event:any){
    this.porcentaje=event.detail.value / 100;
  }

}
