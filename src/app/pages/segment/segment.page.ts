import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonSegmentButton, IonSegment, IonLabel, IonList, IonItem, IonButton, IonButtons, IonBackButton } from '@ionic/angular/standalone';
import { HeaderComponent } from "src/app/components/header/header.component";
import { Observable } from 'rxjs';
import { DataService } from 'src/app/services/data.service';
import { FiltroPipe } from 'src/app/pipes/filtro-pipe';

@Component({
  selector: 'app-segment',
  templateUrl: './segment.page.html',
  styleUrls: ['./segment.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, HeaderComponent, IonSegmentButton, IonSegment, IonLabel, IonList, IonItem, IonButton, IonButtons, IonBackButton, FiltroPipe]
})
export class SegmentPage implements OnInit {

  superHeroes!: Observable<any>;
  publisher: string = '';

  constructor( private dataService: DataService ) { }

  ngOnInit() {
    this.superHeroes = this.dataService.getHeroes();
  }

  segmentChange ( event:any ) {
    this.publisher = event.detail.value === 'todos' ? '' : event.detail.value;
  }

}
