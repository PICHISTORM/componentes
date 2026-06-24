import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonLabel, IonItem, IonList, IonInfiniteScrollContent, IonInfiniteScroll } from '@ionic/angular/standalone';
import { HeaderComponent } from "src/app/components/header/header.component";

@Component({
  selector: 'app-infinite',
  templateUrl: './infinite.page.html',
  styleUrls: ['./infinite.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, HeaderComponent, IonLabel, IonItem, IonList, IonInfiniteScrollContent, IonInfiniteScroll]
})
export class InfinitePage implements OnInit {

  data: any[] = Array(20);

  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll | undefined;

  constructor() { }

  ngOnInit() {
  }

  loadData(event: any) {
    console.log(event);
    setTimeout(() => {
      if(this.data.length > 50) {
        this.infiniteScroll?.complete();
        this.infiniteScroll!.disabled = true;
        return;
      }
      const nuevoArr=Array(20);
      this.data.push(...nuevoArr);
      this.infiniteScroll?.complete();
    }, 1500);

  }
}
