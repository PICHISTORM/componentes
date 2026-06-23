import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonList, IonItem, IonLabel, IonCheckbox, IonButton, IonFooter, IonFab, IonFabButton, IonIcon, IonFabList, IonGrid, IonRow, IonCol, IonCard, IonImg, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent } from '@ionic/angular/standalone';
import { HeaderComponent } from "src/app/components/header/header.component";

@Component({
  selector: 'app-grid',
  templateUrl: './grid.page.html',
  styleUrls: ['./grid.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, IonList, IonItem, IonLabel, IonCheckbox, IonButton, HeaderComponent, CommonModule, FormsModule, IonFooter, IonFab, IonFabButton, IonIcon, IonFabList, IonGrid, IonRow, IonCol, IonCard, IonImg, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent]
})
export class GridPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
