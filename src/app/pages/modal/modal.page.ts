import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButton, ModalController } from '@ionic/angular/standalone';
import { HeaderComponent } from "src/app/components/header/header.component";
import { ModalInfoPage } from '../modal-info/modal-info.page';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
  standalone: true,
  imports: [IonContent, CommonModule, FormsModule, HeaderComponent, IonButton]
})
export class ModalPage implements OnInit {

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {
  }

  async mostrarModal() {

  const modal = await this.modalCtrl.create({
    component: ModalInfoPage,
    componentProps: {
      nombre: 'Juan',
      pais: 'España'
    }
  });


  await modal.present();

  const { data } = await modal.onWillDismiss();
  console.log('onWillDismiss');
  console.log(data);

}
}
