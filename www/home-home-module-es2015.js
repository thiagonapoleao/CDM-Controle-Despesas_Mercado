(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/home/home.page.html":
/*!***************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/home.page.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-title>\r\n    </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"prc\">\r\n  <ion-card class=\"welcome-card\">\r\n    <ion-card-header>\r\n      <ion-card-subtitle></ion-card-subtitle>\r\n      <ion-card-title>Bem Vindo!</ion-card-title>\r\n    </ion-card-header>\r\n    <ion-card-content>\r\n      <p>Controle de Despesas de Mercado.</p>\r\n      <p>Escolha o mercado para pesquisa  e comparação de produtos</p>\r\n    </ion-card-content>\r\n  </ion-card>\r\n\r\n  <ion-card class=\"list\">\r\n    <ion-item>\r\n      <ion-thumbnail slot=\"start\">\r\n        <img [src]=\"'/assets/img/adacadao.jpg'\">\r\n      </ion-thumbnail>\r\n      <ion-label>Supermecado Adacadão</ion-label>\r\n    </ion-item>\r\n\r\n    <ion-item>\r\n      <ion-thumbnail slot=\"start\">\r\n        <img [src]=\"'/assets/img/extra.jpg'\">\r\n      </ion-thumbnail>\r\n      <ion-label>Supermecado Extra</ion-label>\r\n    </ion-item>\r\n\r\n    <ion-item>\r\n      <ion-thumbnail slot=\"start\">\r\n        <img [src]=\"'/assets/img/savegnago.jpg'\">\r\n      </ion-thumbnail>\r\n      <ion-label>Supermecado Savegnago</ion-label>\r\n    </ion-item>\r\n\r\n    <ion-item>\r\n      <ion-thumbnail slot=\"start\">\r\n        <img [src]=\"'/assets/img/semprevale.jpg'\">\r\n      </ion-thumbnail>\r\n      <ion-label>Supermecado Sempre Vale</ion-label>\r\n    </ion-item>\r\n  </ion-card>\r\n\r\n</ion-content>"

/***/ }),

/***/ "./src/app/home/home.module.ts":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home.page */ "./src/app/home/home.page.ts");







let HomePageModule = class HomePageModule {
};
HomePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([
                {
                    path: '',
                    component: _home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]
                }
            ])
        ],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]]
    })
], HomePageModule);



/***/ }),

/***/ "./src/app/home/home.page.scss":
/*!*************************************!*\
  !*** ./src/app/home/home.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".adac {\n  max-width: 100px;\n}\n\n.welcome-card {\n  margin-top: 10px;\n  --background: url(\"/assets/img/fundo.jpg\") 0 0/100% 100% no-repeat;\n  min-height: 35vh;\n  max-height: 35vh;\n  overflow: hidden;\n  color: aliceblue;\n}\n\n.item {\n  background: transparent;\n}\n\n.list {\n  margin-top: -90px;\n  position: absolute;\n  margin-left: 30px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9DOlxcRGVzZW52b2x2aW1lbnRvXFxNb2JpbGVcXENETS1Db250cm9sZS1EZXNwZXNhc19NZXJjYWRvL3NyY1xcYXBwXFxob21lXFxob21lLnBhZ2Uuc2NzcyIsInNyYy9hcHAvaG9tZS9ob21lLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQTtFQUNFLGdCQUFBO0FDRkY7O0FETUE7RUFDRSxnQkFBQTtFQUNBLGtFQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUNIRjs7QURPQTtFQUNFLHVCQUFBO0FDSkY7O0FET0M7RUFDRSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUNKSCIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuXHJcblxyXG4uYWRhY3tcclxuICBtYXgtd2lkdGg6IDEwMHB4O1xyXG4gXHJcbn1cclxuXHJcbi53ZWxjb21lLWNhcmQge1xyXG4gIG1hcmdpbi10b3A6IDEwcHg7O1xyXG4gIC0tYmFja2dyb3VuZDogdXJsKCcvYXNzZXRzL2ltZy9mdW5kby5qcGcnKSAwIDAvMTAwJSAxMDAlIG5vLXJlcGVhdDtcclxuICBtaW4taGVpZ2h0OiAzNXZoO1xyXG4gIG1heC1oZWlnaHQ6IDM1dmg7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBjb2xvcjogYWxpY2VibHVlO1xyXG4gIFxyXG59XHJcblxyXG4uaXRlbSB7XHJcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7ICBcclxuIH1cclxuXHJcbiAubGlzdCB7XHJcbiAgIG1hcmdpbi10b3A6IC05MHB4O1xyXG4gICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgIG1hcmdpbi1sZWZ0OiAzMHB4O1xyXG4gfVxyXG5cclxuICIsIi5hZGFjIHtcbiAgbWF4LXdpZHRoOiAxMDBweDtcbn1cblxuLndlbGNvbWUtY2FyZCB7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIC0tYmFja2dyb3VuZDogdXJsKFwiL2Fzc2V0cy9pbWcvZnVuZG8uanBnXCIpIDAgMC8xMDAlIDEwMCUgbm8tcmVwZWF0O1xuICBtaW4taGVpZ2h0OiAzNXZoO1xuICBtYXgtaGVpZ2h0OiAzNXZoO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBjb2xvcjogYWxpY2VibHVlO1xufVxuXG4uaXRlbSB7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xufVxuXG4ubGlzdCB7XG4gIG1hcmdpbi10b3A6IC05MHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIG1hcmdpbi1sZWZ0OiAzMHB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/home/home.page.ts":
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let HomePage = class HomePage {
    constructor() { }
};
HomePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: __webpack_require__(/*! raw-loader!./home.page.html */ "./node_modules/raw-loader/index.js!./src/app/home/home.page.html"),
        styles: [__webpack_require__(/*! ./home.page.scss */ "./src/app/home/home.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], HomePage);



/***/ })

}]);
//# sourceMappingURL=home-home-module-es2015.js.map