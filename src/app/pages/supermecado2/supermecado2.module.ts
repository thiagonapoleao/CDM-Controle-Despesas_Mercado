import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { Supermecado2Page } from './supermecado2.page';

const routes: Routes = [
  {
    path: '',
    component: Supermecado2Page
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [Supermecado2Page]
})
export class Supermecado2PageModule {}
