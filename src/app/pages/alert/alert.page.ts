import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonBackButton, IonAlert, IonButton } from '@ionic/angular/standalone';
import { HeaderComponent } from '../../components/header/header.component';


@Component({
  selector: 'app-alert',
  templateUrl: './alert.page.html',
  styleUrls: ['./alert.page.scss'],
  standalone: true,
  imports: [
    IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonBackButton,
    IonAlert, IonButton, CommonModule, FormsModule, HeaderComponent
  ]
})
export class AlertPage implements OnInit {

  //1 alerta
  isAlertOpen = false;

  alertButtons = ['OK'];

  setOpen(isOpen: boolean) {
    this.isAlertOpen = isOpen;
  }


  // 2 alerta
  isAlertOpen2 = false;

  alertButtons2 = [
    {
      text: 'Cancelar',
      role: 'cancel',
      handler: () => {
        console.log('Click en cancelar');
      }
    },
    {
      text: 'Ok',
      handler: () => {
        console.log('click en ok!');
      }
    }
  ];

  setOpen2(isOpen: boolean) {
    this.isAlertOpen2 = isOpen;
  }

  //(Formulario)
  isAlertOpen3 = false;


  alertInputs = [
  {
    name: 'nombre',
    type: 'text',
    placeholder: 'Nombre',
    attributes: {

      pattern: '[a-zA-ZñÑáéíóúÁÉÍÓÚ ]*',
      title: 'Solo se permiten letras'
    }
  },
  {
    name: 'apellido',
    type: 'text',
    placeholder: 'Apellido',
    attributes: {
      pattern: '[a-zA-ZñÑáéíóúÁÉÍÓÚ ]*',
      title: 'Solo se permiten letras'
    }
  }
  ];

  alertButtons3 = [
    {
      text: 'Cancelar',
      role: 'cancel',
      handler: () => {
        console.log('Formulario cancelado');
      }
    },
    {
      text: 'Enviar',
      handler: (data: any) => {
        // 'data' contiene un objeto con los valores que el usuario escribió
        console.log('Datos recibidos:', data);
        console.log('Nombre ingresado:', data.nombre);
        console.log('Apellido ingresado:', data.apellido);
      }
    }
  ];

  setOpen3(isOpen: boolean) {
    this.isAlertOpen3 = isOpen;
  }

  constructor() { }
  ngOnInit() { }
}
