(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-supermecado1-supermecado1-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/supermecado1/supermecado1.page.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/supermecado1/supermecado1.page.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>\n      Supermecado 1\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"prc\">\n  <ion-card class=\"welcome-card\">\n    <ion-card-content style=\"text-align: center;\">\n      <p style=\"font-size: 16px;\">Insira o Codigo de Barras.</p>\n    </ion-card-content>\n  </ion-card>\n\n  <ion-card class=\"list\">\n      <ion-button color=\"light\" expand=\"block\" style=\"color: aliceblue\" (click)=\"lerCodigo()\"><ion-icon name=\"qr-scanner\"></ion-icon> - Scanner EAN </ion-button>\n    <ion-item>        \n      <ion-label position=\"floating\" style=\"text-align: center\">EAN</ion-label>\n      <ion-input type=\"number\"></ion-input>\n    </ion-item>\n    <ion-list>\n      <ion-item>\n        <ion-label></ion-label>\n      </ion-item>\n    </ion-list>\n    <ion-item>\n      <ion-label position=\"floating\" style=\"text-align: center\">Valor R$</ion-label>\n      <ion-input type=\"number\"></ion-input>\n    </ion-item>\n    <ion-button color=\"dark\" expand=\"block\" style=\"color: aliceblue\">Lançar</ion-button>\n  </ion-card>\n\n  <ion-card class=\"lista\">\n\n    <ion-list >\n      <ion-item-sliding>\n        <ion-item>\n          <ion-label>Item</ion-label>\n        </ion-item>\n        <ion-item-options side=\"end\">\n          <ion-item-option (click)=\"unread(item)\">Unread</ion-item-option>\n        </ion-item-options>\n      </ion-item-sliding>\n\n      <ion-item-sliding>\n        <ion-item>\n          <ion-label>Item</ion-label>\n        </ion-item>\n        <ion-item-options side=\"end\">\n          <ion-item-option (click)=\"unread(item)\">Unread</ion-item-option>\n        </ion-item-options>\n      </ion-item-sliding>\n\n      <ion-item-sliding>\n          <ion-item>\n            <ion-label>Item</ion-label>\n          </ion-item>\n          <ion-item-options side=\"end\">\n            <ion-item-option (click)=\"unread(item)\">Unread</ion-item-option>\n          </ion-item-options>\n        </ion-item-sliding>\n\n        <ion-item-sliding>\n            <ion-item>\n              <ion-label>Item</ion-label>\n            </ion-item>\n            <ion-item-options side=\"end\">\n              <ion-item-option (click)=\"unread(item)\">Unread</ion-item-option>\n            </ion-item-options>\n          </ion-item-sliding>\n\n        \n    </ion-list>\n  </ion-card>\n\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/supermecado1/supermecado1.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/supermecado1/supermecado1.module.ts ***!
  \***********************************************************/
/*! exports provided: Supermecado1PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Supermecado1PageModule", function() { return Supermecado1PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _supermecado1_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./supermecado1.page */ "./src/app/pages/supermecado1/supermecado1.page.ts");







var routes = [
    {
        path: '',
        component: _supermecado1_page__WEBPACK_IMPORTED_MODULE_6__["Supermecado1Page"]
    }
];
var Supermecado1PageModule = /** @class */ (function () {
    function Supermecado1PageModule() {
    }
    Supermecado1PageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_supermecado1_page__WEBPACK_IMPORTED_MODULE_6__["Supermecado1Page"]]
        })
    ], Supermecado1PageModule);
    return Supermecado1PageModule;
}());



/***/ }),

/***/ "./src/app/pages/supermecado1/supermecado1.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/pages/supermecado1/supermecado1.page.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".adac {\n  max-width: 100px;\n}\n\n.welcome-card {\n  margin-top: 10px;\n  --background: url(\"/assets/img/fundo.jpg\") 0 0/100% 100% no-repeat;\n  min-height: 35vh;\n  max-height: 35vh;\n  overflow: hidden;\n  color: aliceblue;\n}\n\n.item {\n  background: transparent;\n}\n\n.list {\n  margin-top: -170px;\n  position: absolute;\n  margin-left: 30px;\n}\n\nion-item {\n  min-width: 300px;\n}\n\n.lista {\n  margin-top: 100px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvc3VwZXJtZWNhZG8xL0M6XFxEZXNlbnZvbHZpbWVudG9cXE1vYmlsZVxcQ0RNLUNvbnRyb2xlLURlc3Blc2FzX01lcmNhZG8vc3JjXFxhcHBcXHBhZ2VzXFxzdXBlcm1lY2FkbzFcXHN1cGVybWVjYWRvMS5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3N1cGVybWVjYWRvMS9zdXBlcm1lY2FkbzEucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBO0VBQ0ksZ0JBQUE7QUNGSjs7QURNRTtFQUNFLGdCQUFBO0VBQ0Esa0VBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQ0hKOztBRE9FO0VBQ0UsdUJBQUE7QUNKSjs7QURPRztFQUNFLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBQ0pMOztBRE9HO0VBQ0csZ0JBQUE7QUNKTjs7QURPRTtFQUNJLGlCQUFBO0FDSk4iLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9zdXBlcm1lY2FkbzEvc3VwZXJtZWNhZG8xLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5cclxuXHJcbi5hZGFje1xyXG4gICAgbWF4LXdpZHRoOiAxMDBweDtcclxuICAgXHJcbiAgfVxyXG4gIFxyXG4gIC53ZWxjb21lLWNhcmQge1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDs7XHJcbiAgICAtLWJhY2tncm91bmQ6IHVybCgnL2Fzc2V0cy9pbWcvZnVuZG8uanBnJykgMCAwLzEwMCUgMTAwJSBuby1yZXBlYXQ7XHJcbiAgICBtaW4taGVpZ2h0OiAzNXZoO1xyXG4gICAgbWF4LWhlaWdodDogMzV2aDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBjb2xvcjogYWxpY2VibHVlOyAgXHJcbiAgICBcclxuICB9XHJcbiAgXHJcbiAgLml0ZW0ge1xyXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7ICBcclxuICAgfVxyXG4gIFxyXG4gICAubGlzdCB7XHJcbiAgICAgbWFyZ2luLXRvcDogLTE3MHB4O1xyXG4gICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICBtYXJnaW4tbGVmdDogMzBweDtcclxuICAgfVxyXG5cclxuICAgaW9uLWl0ZW0ge1xyXG4gICAgICBtaW4td2lkdGg6IDMwMHB4O1xyXG4gIH1cclxuXHJcbiAgLmxpc3RhIHtcclxuICAgICAgbWFyZ2luLXRvcDogMTAwcHg7XHJcbiAgfSIsIi5hZGFjIHtcbiAgbWF4LXdpZHRoOiAxMDBweDtcbn1cblxuLndlbGNvbWUtY2FyZCB7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIC0tYmFja2dyb3VuZDogdXJsKFwiL2Fzc2V0cy9pbWcvZnVuZG8uanBnXCIpIDAgMC8xMDAlIDEwMCUgbm8tcmVwZWF0O1xuICBtaW4taGVpZ2h0OiAzNXZoO1xuICBtYXgtaGVpZ2h0OiAzNXZoO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBjb2xvcjogYWxpY2VibHVlO1xufVxuXG4uaXRlbSB7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xufVxuXG4ubGlzdCB7XG4gIG1hcmdpbi10b3A6IC0xNzBweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBtYXJnaW4tbGVmdDogMzBweDtcbn1cblxuaW9uLWl0ZW0ge1xuICBtaW4td2lkdGg6IDMwMHB4O1xufVxuXG4ubGlzdGEge1xuICBtYXJnaW4tdG9wOiAxMDBweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/supermecado1/supermecado1.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/supermecado1/supermecado1.page.ts ***!
  \*********************************************************/
/*! exports provided: Supermecado1Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Supermecado1Page", function() { return Supermecado1Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_native_qr_scanner_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/qr-scanner/ngx */ "./node_modules/@ionic-native/qr-scanner/ngx/index.js");



var Supermecado1Page = /** @class */ (function () {
    function Supermecado1Page(qrScanner) {
        this.qrScanner = qrScanner;
    }
    Supermecado1Page.prototype.ngOnInit = function () { };
    Supermecado1Page.prototype.lerCodigo = function () {
        var _this = this;
        // Optionally request the permission early
        this.qrScanner.prepare()
            .then(function (status) {
            if (status.authorized) {
                // camera permission was granted
                // start scanning
                var scanSub_1 = _this.qrScanner.scan().subscribe(function (text) {
                    console.log('Scanned something', text);
                    _this.qrScanner.hide(); // hide camera preview
                    scanSub_1.unsubscribe(); // stop scanning
                });
            }
            else if (status.denied) {
                // camera permission was permanently denied
                // you must use QRScanner.openSettings() method to guide the user to the settings page
                // then they can grant the permission from there
            }
            else {
                // permission was denied, but not permanently. You can ask for permission again at a later time.
            }
        })
            .catch(function (e) { return console.log('Error is', e); });
    };
    Supermecado1Page.ctorParameters = function () { return [
        { type: _ionic_native_qr_scanner_ngx__WEBPACK_IMPORTED_MODULE_2__["QRScanner"] }
    ]; };
    Supermecado1Page = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-supermecado1',
            template: __webpack_require__(/*! raw-loader!./supermecado1.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/supermecado1/supermecado1.page.html"),
            styles: [__webpack_require__(/*! ./supermecado1.page.scss */ "./src/app/pages/supermecado1/supermecado1.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_qr_scanner_ngx__WEBPACK_IMPORTED_MODULE_2__["QRScanner"]])
    ], Supermecado1Page);
    return Supermecado1Page;
}());



/***/ })

}]);
//# sourceMappingURL=pages-supermecado1-supermecado1-module-es5.js.map