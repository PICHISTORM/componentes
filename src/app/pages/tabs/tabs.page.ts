import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes } from '@angular/router';

import { IonContent, IonHeader, IonTitle, IonToolbar, IonTabBar, IonTabButton, IonIcon, IonLabel, IonTabs, IonRouterOutlet } from '@ionic/angular/standalone';

import { HeaderComponent } from "src/app/components/header/header.component";

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
  standalone: true,
  imports: [
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    CommonModule,
    FormsModule,
    HeaderComponent,
    IonTabBar,
    IonTabButton,
    IonIcon,
    IonLabel,
    IonTabs,
    IonRouterOutlet
]
})
export class TabsPage implements OnInit {

  constructor() {}

  ngOnInit() {}

}

export const tabsRoutes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'account',
        loadComponent: () =>
          import('../avatar/avatar.page')
            .then(m => m.AvatarPage)
      },
      {
        path: 'contact',
        loadComponent: () =>
          import('../list/list.page')
            .then(m => m.ListPage)
      },
      {
        path: 'settings',
        loadComponent: () =>
          import('../button/button.page')
            .then(m => m.ButtonPage)
      },
      {
        path: '',
        redirectTo: 'account',
        pathMatch: 'full'
      }
    ]
  }
];
