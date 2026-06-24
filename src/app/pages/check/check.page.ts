import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonList, IonItem, IonLabel, IonCheckbox, IonButton } from '@ionic/angular/standalone';
import { HeaderComponent } from "src/app/components/header/header.component";

@Component({
  selector: 'app-check',
  templateUrl: './check.page.html',
  styleUrls: ['./check.page.scss'],
  standalone: true,
  imports: [IonContent, CommonModule, FormsModule, HeaderComponent, IonList, IonItem, IonLabel, IonCheckbox, IonButton]
})
export class CheckPage implements OnInit {

  data=[
    {
      name: 'primary',
      selected: false
    },
    {
      name: 'secondary',
      selected: true
    },
    {
      name: 'tertiary',
      selected: false
    }
    ,
    {
      name: 'success',
      selected: true
    }
  ]

  constructor() { }

  ngOnInit() {
  }

  onClick(item: any) {
    console.log(item);
  }

  verData(){
    console.log(this.data);
  }

}
