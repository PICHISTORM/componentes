import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonLabel, IonList, IonRefresherContent, IonRefresher, IonItem } from '@ionic/angular/standalone';
import { HeaderComponent } from "src/app/components/header/header.component";

@Component({
  selector: 'app-refresher',
  templateUrl: './refresher.page.html',
  styleUrls: ['./refresher.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, HeaderComponent, IonLabel, IonList, IonRefresherContent, IonRefresher, IonItem]
})
export class RefresherPage implements OnInit {

  items:any[]=[];

  constructor() { }

  ngOnInit() {
  }

  doRefresh(event:any){
    setTimeout(()=>{
      this.items=Array(20);
      event.target.complete();
    },1500);
  }

}
