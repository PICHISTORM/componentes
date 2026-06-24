import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButton, IonLoading, LoadingController } from '@ionic/angular/standalone';
import { HeaderComponent } from "src/app/components/header/header.component";

@Component({
  selector: 'app-loading',
  templateUrl: './loading.page.html',
  styleUrls: ['./loading.page.scss'],
  standalone: true,
  imports: [IonContent, CommonModule, FormsModule, HeaderComponent, IonButton, IonLoading]
})
export class LoadingPage implements OnInit {

  loading!: HTMLIonLoadingElement;

  constructor( private loadingCtrl: LoadingController ) { }

  ngOnInit() {
  }

  mostrarLoading() {
    this.presentLoading('Espera 3 segundos ...');

    setTimeout(() => {
      this.loading.dismiss();
    }, 2000);
  }

  async presentLoading ( message: string) {
    this.loading = await this.loadingCtrl.create({
      message,
    });

    await this.loading.present();
  }

}
