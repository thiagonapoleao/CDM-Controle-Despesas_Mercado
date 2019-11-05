import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { Supermecado1Page } from './supermecado1.page';

const routes: Routes = [
  {
    path: '',
    component: Supermecado1Page
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [Supermecado1Page]
})
export class Supermecado1PageModule {}
