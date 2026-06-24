import { Component, OnInit, ViewChild  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonList, IonItem, IonLabel, IonItemSliding, IonItemOption, IonItemOptions, IonIcon } from '@ionic/angular/standalone';
import { HeaderComponent } from "src/app/components/header/header.component";
import { DataService } from '../../services/data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
  standalone: true,
  imports: [IonContent, CommonModule, FormsModule, HeaderComponent, IonList, IonItem, IonLabel, IonItemSliding, IonItemOption, IonItemOptions, IonIcon]
})
export class ListPage implements OnInit {

  usuarios: Observable<any> | undefined;

  @ViewChild(IonList) ionList!: IonList;

  constructor(private dataService:DataService) { }

  ngOnInit() {

    /*
    this.dataService.getUsuarios().subscribe(res => {
      console.log(res);
    })
    */
    this.usuarios = this.dataService.getUsuarios();
  }

  favorite(user:any){
    console.log('favorite',user);
    this.ionList.closeSlidingItems();
  }

  share(user:any){
    console.log('share',user);
    this.ionList.closeSlidingItems();
  }

  trash(user:any){
    console.log('Delete',user.name);
    this.ionList.closeSlidingItems();
  }
}
