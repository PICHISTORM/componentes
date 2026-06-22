import { Component, Input } from '@angular/core';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonButtons,
  IonBackButton
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    IonToolbar,
    IonTitle,
    IonButtons,
    IonBackButton,
    IonHeader
  ],
  templateUrl: './header.component.html'
})
export class HeaderComponent {

  @Input() titulo = '';
  @Input() defaultHref = '/';

}
