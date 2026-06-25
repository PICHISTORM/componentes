import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonSearchbar, IonList, IonItem, IonLabel } from '@ionic/angular/standalone';
import { HeaderComponent } from "src/app/components/header/header.component";
import { DataService } from '../../services/data.service';
import { FiltroPipe } from 'src/app/pipes/filtro-pipe';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, HeaderComponent, IonSearchbar, IonList, IonItem, IonLabel,
            FiltroPipe
  ]
})
export class SearchPage implements OnInit {

  albums: any[] = [];
  textoBuscar: string = '';

  constructor( private dataService: DataService ) { }

  ngOnInit() {
    this.dataService.getAlbums().subscribe( albums => {
      console.log(albums)
      this.albums = albums;
    });
  }

  onSearchChange (event: any) {
    console.log(event.detail.value);
    this.textoBuscar = event.detail.value;
  }

}
