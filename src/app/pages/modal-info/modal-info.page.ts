import { Component, Input, input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, ModalController, IonButton } from '@ionic/angular/standalone';

@Component({
  selector: 'app-modal-info',
  templateUrl: './modal-info.page.html',
  styleUrls: ['./modal-info.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonButton]
})
export class ModalInfoPage implements OnInit {

  @Input() nombre!: string;
  @Input() pais!: string;

  constructor(private modalCtrl:ModalController) { }

  ngOnInit() {
  }

  salirSinArgumentos() {
    this.modalCtrl.dismiss();
  }

  salirConArgumentos(){
    this.modalCtrl.dismiss({
      nombre: 'Pedro',
      pais:'Marruecos'
    });

  }

}
