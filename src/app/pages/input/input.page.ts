import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonList, IonListHeader, IonLabel, IonButton, IonItem, IonInput } from '@ionic/angular/standalone';
import { HeaderComponent } from "src/app/components/header/header.component";

@Component({
  selector: 'app-input',
  templateUrl: './input.page.html',
  styleUrls: ['./input.page.scss'],
  standalone: true,
  imports: [IonContent, CommonModule, FormsModule, HeaderComponent, IonList, IonListHeader, IonLabel, IonButton, IonItem, IonInput]
})
export class InputPage implements OnInit {

  nombre:string = '';
  usuario={
    email:'',    password:''
  }

  constructor() { }

  ngOnInit() {
  }


  onSubmit(formulario:NgForm){

    console.log('submit');
    console.log(this.usuario);
    console.log(formulario);
  }

}
