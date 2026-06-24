import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonBackButton, IonItem, IonLabel, IonList, IonReorderGroup, IonReorder, IonButton, IonIcon } from '@ionic/angular/standalone';

@Component({
  selector: 'app-list-reorder',
  templateUrl: './list-reorder.page.html',
  styleUrls: ['./list-reorder.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonButtons, IonBackButton, IonItem, IonLabel, IonList, IonReorderGroup, IonReorder, IonButton, IonIcon]
})
export class ListReorderPage implements OnInit {

  personajes: string[] = ['Aquaman', 'Batman', 'Superman', 'Flash', 'Mujer Maravilla', 'Robin', 'Linterna Verde'];

  //crear propiedad
  reorderDisabled:boolean = true;

  constructor() { }

  ngOnInit() {
  }


  doReorder(Event: any) {

    console.log(Event);

    const itemMover = this.personajes.splice(Event.detail.from, 1)[0];
    this.personajes.splice(Event.detail.to, 0, itemMover);
    Event.detail.complete();

    console.log(this.personajes);


  }

}
