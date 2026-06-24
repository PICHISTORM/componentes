import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonList, IonItem, IonLabel } from '@ionic/angular/standalone';
import { HeaderComponent } from "src/app/components/header/header.component";
import { DataService } from '../../services/data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, HeaderComponent, IonList, IonItem, IonLabel]
})
export class ListPage implements OnInit {

  usuarios: Observable<any> | undefined;

  constructor(private dataService:DataService) { }

  ngOnInit() {


    /*
    this.dataService.getUsuarios().subscribe(res => {
      console.log(res);
    })
    */

    this.usuarios = this.dataService.getUsuarios();


  }

}
