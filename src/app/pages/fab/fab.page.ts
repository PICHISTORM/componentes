import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonList, IonItem, IonLabel, IonCheckbox, IonButton, IonFooter, IonFab, IonFabButton, IonIcon, IonFabList } from '@ionic/angular/standalone';
import { HeaderComponent } from "src/app/components/header/header.component";

@Component({
  selector: 'app-fab',
  templateUrl: './fab.page.html',
  styleUrls: ['./fab.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, IonList, IonItem, IonLabel, IonCheckbox, IonButton, HeaderComponent, CommonModule, FormsModule, IonFooter, IonFab, IonFabButton, IonIcon, IonFabList]
})
export class FabPage implements OnInit {

  data = Array(100).fill(null);

  constructor() { }

  ngOnInit() {
  }

}
