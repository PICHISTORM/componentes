import { Component, OnInit } from '@angular/core';
import { IonList, IonItem, IonLabel, PopoverController } from "@ionic/angular/standalone";

@Component({
  selector: 'app-popover-info',
  templateUrl: './popover-info.component.html',
  styleUrls: ['./popover-info.component.scss'],
  imports: [IonList, IonItem, IonLabel],
})
export class PopoverInfoComponent  implements OnInit {

  items=Array(40);

  constructor(private popoverCtrl:PopoverController) { }

  ngOnInit() {}

  async onClick(valor: number){
    this.popoverCtrl.dismiss({
      item:valor
    });

  }

}
