import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { Supermecado1Page } from './supermecado1.page';
const routes = [
    {
        path: '',
        component: Supermecado1Page
    }
];
let Supermecado1PageModule = class Supermecado1PageModule {
};
Supermecado1PageModule = tslib_1.__decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            RouterModule.forChild(routes)
        ],
        declarations: [Supermecado1Page]
    })
], Supermecado1PageModule);
export { Supermecado1PageModule };
//# sourceMappingURL=supermecado1.module.js.map