import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonAvatar, IonChip, IonLabel, IonList, IonItem } from '@ionic/angular/standalone';
import{IonButtons, IonBackButton, IonImg} from '@ionic/angular/standalone';


@Component({
  selector: 'app-avatar',
  templateUrl: './avatar.page.html',
  styleUrls: ['./avatar.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonButtons, IonBackButton, IonAvatar, IonImg, IonChip, IonLabel, IonList, IonItem]
})
export class AvatarPage implements OnInit {
items: any[] = [1,1,1,1,1];

  constructor() { }

  ngOnInit() {
  }

}
