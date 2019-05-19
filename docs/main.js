(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/about-us/about-us.component.html":
/*!**************************************************!*\
  !*** ./src/app/about-us/about-us.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 class=\"center\">About Us:</h1>\r\n<mat-divider></mat-divider>\r\n<mat-card>\r\n\tPop! Shirts is a small company that was founded in 2019 by Nathan Phillis to start making and selling T-Shirts themed around pop-culture. Despite the company's young age, we strive to do our best to deliver the best quality service around and we want this to be reflected in our brand new website. We chose to sell these products because we are aware of the enthusiastic pop-culture community and it's recent famine of clothing merchandise. By creating this company, not only are you being given the opportunity to show off your interests, but also you get a sweet T-shirt to go along with it! We hope you have the best experience on our website, but in case you get lost, here is a short guide on how to use our shop:\r\n\t<br>\r\n\t<br>\r\n\tOur website primarily functions as an online store which allows for you to see our collection from anywhere! Check out our catalog page to see our collection. \r\n\t<br>\r\n\t<br>\r\n\tTo add shirts to the cart, simply click oon the 'Add to Cart' button and it will add it to the cart in the top right corner of the screen.\r\n\t<br>\r\n\t<br>\r\n\tTo see your cart, click on the 'cart' button in the top right on the screen. This will bring up the final purchase page.\r\n\t<br>\r\n\t<br>\r\n\tTo finally make the purchase (Or to clear the cart), all you need to do is to enter your details and press the 'Checkout' button at the bottom.\r\n\t<br>\r\n\t<br>\r\n\tAfter this is done, your brand new Pop! Shirts will be on their way to you!\r\n\r\n</mat-card>\r\n<br style=\"line-height: 20rem;\">\r\n<footer>\r\n\tPop! Shirts website. All rights reserved. Author: Nathan Phillis. Feel free to mess about with whatever you want in this website. :P\r\n</footer>\r\n"

/***/ }),

/***/ "./src/app/about-us/about-us.component.scss":
/*!**************************************************!*\
  !*** ./src/app/about-us/about-us.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".center {\n  text-align: center; }\n\nfooter {\n  font-size: 0.75rem;\n  text-align: center; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWJvdXQtdXMvQzpcXFVzZXJzXFxwaGlsbG5oXFxPbmVEcml2ZSAtIEhhbGUgU2Nob29sXFxEb2N1bWVudHNcXFNjaG9vbFdvcmtcXDIwMTlcXEFJVFxcT25saW5lIFN0b3JlIFByb2plY3RcXFByb2plY3RcXE9ubGluZS1TdG9yZS9zcmNcXGFwcFxcYWJvdXQtdXNcXGFib3V0LXVzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Msa0JBQWtCLEVBQUE7O0FBR25CO0VBQ0Msa0JBQWtCO0VBQ2xCLGtCQUFrQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvYWJvdXQtdXMvYWJvdXQtdXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2VudGVyIHtcclxuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbmZvb3RlciB7XHJcblx0Zm9udC1zaXplOiAwLjc1cmVtO1xyXG5cdHRleHQtYWxpZ246IGNlbnRlcjtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/about-us/about-us.component.ts":
/*!************************************************!*\
  !*** ./src/app/about-us/about-us.component.ts ***!
  \************************************************/
/*! exports provided: AboutUsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutUsComponent", function() { return AboutUsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AboutUsComponent = /** @class */ (function () {
    function AboutUsComponent() {
    }
    AboutUsComponent.prototype.ngOnInit = function () {
    };
    AboutUsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-about-us',
            template: __webpack_require__(/*! ./about-us.component.html */ "./src/app/about-us/about-us.component.html"),
            styles: [__webpack_require__(/*! ./about-us.component.scss */ "./src/app/about-us/about-us.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AboutUsComponent);
    return AboutUsComponent;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _store_store_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./store/store.component */ "./src/app/store/store.component.ts");
/* harmony import */ var _item_item_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./item/item.component */ "./src/app/item/item.component.ts");
/* harmony import */ var _cart_cart_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./cart/cart.component */ "./src/app/cart/cart.component.ts");
/* harmony import */ var _checkout_checkout_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./checkout/checkout.component */ "./src/app/checkout/checkout.component.ts");
/* harmony import */ var _about_us_about_us_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./about-us/about-us.component */ "./src/app/about-us/about-us.component.ts");









var routes = [
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
    { path: 'store', component: _store_store_component__WEBPACK_IMPORTED_MODULE_4__["StoreComponent"] },
    { path: 'item/:id', component: _item_item_component__WEBPACK_IMPORTED_MODULE_5__["ItemComponent"] },
    { path: 'cart', component: _cart_cart_component__WEBPACK_IMPORTED_MODULE_6__["CartComponent"] },
    { path: 'checkout', component: _checkout_checkout_component__WEBPACK_IMPORTED_MODULE_7__["CheckoutComponent"] },
    { path: 'about-us', component: _about_us_about_us_component__WEBPACK_IMPORTED_MODULE_8__["AboutUsComponent"] },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: '**', redirectTo: '/home' }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" [class.is-mobile]=\"mobileQuery.matches\">\r\n  \r\n\t<!--Create the top bar-->\r\n\t<mat-toolbar color=\"primary\">\r\n    <button mat-icon-button class=\"light\" (click)=\"snav.toggle()\"><mat-icon>menu</mat-icon></button>\r\n\t\t<h1 class=\"title\">POP! SHIRTS</h1>\r\n\t\t<span class=\"spacer\"></span>\r\n\t\t<a mat-raised-button routerLink=\"/cart\">\r\n\t\t\t${{this.carthandler.total}} CART\r\n\t\t\t<span class=\"spacer\"></span>\r\n\t\t\t<img src=\"../assets/cart.svg\" alt=\"C\" class=\"cart\">\r\n\t\t</a>\r\n  </mat-toolbar>\r\n\r\n\t<!--Create a side-navigation bar that dynamically changes when on small screens-->\r\n  <mat-sidenav-container class=\"sidenav-container\">\r\n    <mat-sidenav #snav class=\"sidenav\" [mode]=\"mobileQuery.matches ? 'over' : 'side'\" [fixedInViewport]=\"mobileQuery.matches\" fixedTopGap=\"56\">\r\n\t\t\t\r\n\t\t\t<!--Create a link for every page-->\r\n\t\t\t<mat-nav-list class=\"list\">\r\n\t\t\t\t<a mat-list-item *ngFor=\"let link of links\" routerLink=\"{{link.link}}\">\r\n\t\t\t\t\t{{link.name}}\r\n\t\t\t\t\t<span class=\"spacer\"></span>\r\n\t\t\t\t\t<mat-icon>{{link.icon}}</mat-icon>\r\n\t\t\t\t</a>\r\n\t\t\t</mat-nav-list>\r\n\t\t\t\r\n    </mat-sidenav>\r\n\t\t\r\n\t\t<!--Pages go here-->\r\n    <mat-sidenav-content>\r\n      <router-outlet></router-outlet>\r\n    </mat-sidenav-content>\r\n  </mat-sidenav-container>\r\n</div>"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n  display: flex;\n  flex-direction: column;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0; }\n\n.title {\n  margin-left: 8px; }\n\n.cart {\n  margin-left: 8px; }\n\n.is-mobile .toolbar {\n  position: fixed;\n  z-index: 2; }\n\n.spacer {\n  flex: 1 1 auto; }\n\n.sidenav {\n  width: 10rem; }\n\n.sidenav-container {\n  flex: 1; }\n\n.is-mobile .sidenav-container {\n  flex: 1 0 auto; }\n\n.list {\n  padding: 0; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQzpcXFVzZXJzXFxwaGlsbG5oXFxPbmVEcml2ZSAtIEhhbGUgU2Nob29sXFxEb2N1bWVudHNcXFNjaG9vbFdvcmtcXDIwMTlcXEFJVFxcT25saW5lIFN0b3JlIFByb2plY3RcXFByb2plY3RcXE9ubGluZS1TdG9yZS9zcmNcXGFwcFxcYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLFNBQVM7RUFDVCxPQUFPO0VBQ1AsUUFBUSxFQUFBOztBQUdWO0VBQ0UsZ0JBQWdCLEVBQUE7O0FBR2xCO0VBQ0MsZ0JBQWdCLEVBQUE7O0FBR2pCO0VBQ0UsZUFBZTtFQUNmLFVBQVUsRUFBQTs7QUFHWjtFQUNDLGNBQWMsRUFBQTs7QUFHZjtFQUNDLFlBQVksRUFBQTs7QUFHYjtFQUNFLE9BQU8sRUFBQTs7QUFHVDtFQUNFLGNBQWMsRUFBQTs7QUFHaEI7RUFDQyxVQUFVLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMDtcclxuICBib3R0b206IDA7XHJcbiAgbGVmdDogMDtcclxuICByaWdodDogMDtcclxufVxyXG5cclxuLnRpdGxlIHtcclxuICBtYXJnaW4tbGVmdDogOHB4O1xyXG59XHJcblxyXG4uY2FydCB7XHJcblx0bWFyZ2luLWxlZnQ6IDhweDtcclxufVxyXG5cclxuLmlzLW1vYmlsZSAudG9vbGJhciB7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHotaW5kZXg6IDI7XHJcbn1cclxuXHJcbi5zcGFjZXIge1xyXG5cdGZsZXg6IDEgMSBhdXRvO1xyXG59XHJcblxyXG4uc2lkZW5hdiB7XHJcblx0d2lkdGg6IDEwcmVtO1xyXG59XHJcblxyXG4uc2lkZW5hdi1jb250YWluZXIge1xyXG4gIGZsZXg6IDE7XHJcbn1cclxuXHJcbi5pcy1tb2JpbGUgLnNpZGVuYXYtY29udGFpbmVyIHtcclxuICBmbGV4OiAxIDAgYXV0bztcclxufVxyXG5cclxuLmxpc3Qge1xyXG5cdHBhZGRpbmc6IDA7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm5/layout.es5.js");
/* harmony import */ var _link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./link */ "./src/app/link.ts");
/* harmony import */ var _cart_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./cart.service */ "./src/app/cart.service.ts");





var AppComponent = /** @class */ (function () {
    function AppComponent(changeDetectorRef, media, carthandler) {
        this.carthandler = carthandler;
        //Links of the various website pages
        this.links = [
            new _link__WEBPACK_IMPORTED_MODULE_3__["Link"]('HOME', '/home', 'home'),
            new _link__WEBPACK_IMPORTED_MODULE_3__["Link"]('CATALOG', '/store', 'shoppingcart'),
            new _link__WEBPACK_IMPORTED_MODULE_3__["Link"]('ABOUT US', '/about-us', 'info')
        ];
        this.mobileQuery = media.matchMedia('(max-width: 600px)');
        this._mobileQueryListener = function () { return changeDetectorRef.detectChanges(); };
        this.mobileQuery.addListener(this._mobileQueryListener);
    }
    AppComponent.prototype.navigate = function (n) {
    };
    AppComponent.prototype.ngOnDestroy = function () {
        this.mobileQuery.removeListener(this._mobileQueryListener);
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__["MediaMatcher"], _cart_service__WEBPACK_IMPORTED_MODULE_4__["CartService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _assets_material_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../assets/material-module */ "./src/assets/material-module.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _store_store_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./store/store.component */ "./src/app/store/store.component.ts");
/* harmony import */ var _about_us_about_us_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./about-us/about-us.component */ "./src/app/about-us/about-us.component.ts");
/* harmony import */ var _cart_cart_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./cart/cart.component */ "./src/app/cart/cart.component.ts");
/* harmony import */ var _checkout_checkout_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./checkout/checkout.component */ "./src/app/checkout/checkout.component.ts");
/* harmony import */ var _item_item_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./item/item.component */ "./src/app/item/item.component.ts");













var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"],
                _store_store_component__WEBPACK_IMPORTED_MODULE_8__["StoreComponent"],
                _about_us_about_us_component__WEBPACK_IMPORTED_MODULE_9__["AboutUsComponent"],
                _cart_cart_component__WEBPACK_IMPORTED_MODULE_10__["CartComponent"],
                _checkout_checkout_component__WEBPACK_IMPORTED_MODULE_11__["CheckoutComponent"],
                _item_item_component__WEBPACK_IMPORTED_MODULE_12__["ItemComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
                _assets_material_module__WEBPACK_IMPORTED_MODULE_6__["MaterialModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/cart.service.ts":
/*!*********************************!*\
  !*** ./src/app/cart.service.ts ***!
  \*********************************/
/*! exports provided: CartService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartService", function() { return CartService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CartService = /** @class */ (function () {
    function CartService() {
        this.total = 0;
        this.items = [];
    }
    CartService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CartService);
    return CartService;
}());



/***/ }),

/***/ "./src/app/cart/cart.component.html":
/*!******************************************!*\
  !*** ./src/app/cart/cart.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n\t<h2>Items:</h2>\r\n\t<mat-divider></mat-divider>\r\n\t\t<mat-list>\r\n\t\t\t<mat-list-item *ngFor=\"let item of items\">\r\n\t\t\t\t{{item.name}}\r\n\t\t\t\t<span class=\"divider\"></span>\r\n\t\t\t\t${{item.price}}\r\n\t\t\t\t<button mat-icon-button color=\"primary\" (click)=\"remove(item)\">\r\n\t\t\t\t\t<mat-icon>cancel</mat-icon>\r\n\t\t\t\t</button>\r\n\t\t\t</mat-list-item>\r\n\t\t</mat-list>\r\n\t<h2>Checkout:</h2>\r\n\t<mat-divider></mat-divider>\r\n\r\n\t<mat-form-field appearance=\"standard\">\r\n  \t<mat-label>Name</mat-label>\r\n  \t<input matInput>\r\n  \t<mat-icon matSuffix>sentiment_very_satisfied</mat-icon>\r\n\t</mat-form-field>\r\n\t<br>\r\n\t<mat-form-field appearance=\"standard\">\r\n  \t<mat-label>Address</mat-label>\r\n  \t<input matInput>\r\n  \t<mat-icon matSuffix>home</mat-icon>\r\n\t</mat-form-field>\r\n\t<br>\r\n\t<mat-form-field appearance=\"standard\">\r\n  \t<mat-label>Credit Card</mat-label>\r\n  \t<input matInput>\r\n  \t<mat-icon matSuffix>money</mat-icon>\r\n\t</mat-form-field>\r\n\t<br>\r\n\t<button mat-raised-button color=\"accent\" (click)=\"clearCart()\">Checkout</button>\r\n</div>"

/***/ }),

/***/ "./src/app/cart/cart.component.scss":
/*!******************************************!*\
  !*** ./src/app/cart/cart.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "div {\n  padding-left: 1rem; }\n\n.divider {\n  width: 5rem; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2FydC9DOlxcVXNlcnNcXHBoaWxsbmhcXE9uZURyaXZlIC0gSGFsZSBTY2hvb2xcXERvY3VtZW50c1xcU2Nob29sV29ya1xcMjAxOVxcQUlUXFxPbmxpbmUgU3RvcmUgUHJvamVjdFxcUHJvamVjdFxcT25saW5lLVN0b3JlL3NyY1xcYXBwXFxjYXJ0XFxjYXJ0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Msa0JBQWtCLEVBQUE7O0FBR25CO0VBQ0MsV0FBVyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvY2FydC9jYXJ0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiZGl2IHtcclxuXHRwYWRkaW5nLWxlZnQ6IDFyZW07XHJcbn1cclxuXHJcbi5kaXZpZGVyIHtcclxuXHR3aWR0aDogNXJlbTtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/cart/cart.component.ts":
/*!****************************************!*\
  !*** ./src/app/cart/cart.component.ts ***!
  \****************************************/
/*! exports provided: CartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartComponent", function() { return CartComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _cart_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../cart.service */ "./src/app/cart.service.ts");



var CartComponent = /** @class */ (function () {
    function CartComponent(carthandler) {
        this.carthandler = carthandler;
        this.items = [];
        this.items = carthandler.items;
    }
    CartComponent.prototype.clearCart = function () {
        this.carthandler.items = [];
        this.carthandler.total = 0;
        this.items = [];
    };
    CartComponent.prototype.ngOnInit = function () {
    };
    CartComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-cart',
            template: __webpack_require__(/*! ./cart.component.html */ "./src/app/cart/cart.component.html"),
            styles: [__webpack_require__(/*! ./cart.component.scss */ "./src/app/cart/cart.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_cart_service__WEBPACK_IMPORTED_MODULE_2__["CartService"]])
    ], CartComponent);
    return CartComponent;
}());



/***/ }),

/***/ "./src/app/checkout/checkout.component.html":
/*!**************************************************!*\
  !*** ./src/app/checkout/checkout.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  checkout works!\n</p>\n"

/***/ }),

/***/ "./src/app/checkout/checkout.component.scss":
/*!**************************************************!*\
  !*** ./src/app/checkout/checkout.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NoZWNrb3V0L2NoZWNrb3V0LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/checkout/checkout.component.ts":
/*!************************************************!*\
  !*** ./src/app/checkout/checkout.component.ts ***!
  \************************************************/
/*! exports provided: CheckoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckoutComponent", function() { return CheckoutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CheckoutComponent = /** @class */ (function () {
    function CheckoutComponent() {
    }
    CheckoutComponent.prototype.ngOnInit = function () {
    };
    CheckoutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-checkout',
            template: __webpack_require__(/*! ./checkout.component.html */ "./src/app/checkout/checkout.component.html"),
            styles: [__webpack_require__(/*! ./checkout.component.scss */ "./src/app/checkout/checkout.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CheckoutComponent);
    return CheckoutComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"top\">\r\n\tPOP! SHIRTS\r\n</div>\r\n\r\n<mat-card>\r\n\t<h1 class=\"center\">Welcome!</h1>\r\n\t<mat-divider></mat-divider>\r\n\t<br>\r\n\tHi! Nice to meet you.\r\n\t<br>\r\n\t<br>\r\n\tWelcome to our humble store. Here at Pop! Shirts, we pride ourselves on delivering quality products in a personal and fast manner. This means that YOU get the best service that we can provide. Come check out our catalog to see a wide variety of T-Shirts with catagories ranging from Star Wars to Back to the Future.\r\n\t<br>\r\n\t<br>\r\n\tWe hope you enjoy your experience here!\r\n</mat-card>\r\n\r\n<h1 class=\"center\">Featured Shirts:</h1>\r\n<mat-grid-list cols=\"3\" rowHeight=\"1:1.5\">\r\n\t<mat-grid-tile *ngFor=\"let item of featured\">\r\n\t\t<app-item [shirt]=\"item\"></app-item>\r\n\t</mat-grid-tile>\r\n</mat-grid-list>"

/***/ }),

/***/ "./src/app/home/home.component.scss":
/*!******************************************!*\
  !*** ./src/app/home/home.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".top {\n  background-image: url('background.jpg');\n  background-position: center center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  height: 20rem;\n  line-height: 20rem;\n  text-align: center;\n  font-size: 5rem;\n  font-weight: 900;\n  color: #7200FF;\n  text-shadow: -2px -2px 0 #FFF, 2px -2px 0 #FFF, -2px 2px 0 #FFF, 2px 2px 0 #FFF; }\n\n.center {\n  text-align: center; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9DOlxcVXNlcnNcXHBoaWxsbmhcXE9uZURyaXZlIC0gSGFsZSBTY2hvb2xcXERvY3VtZW50c1xcU2Nob29sV29ya1xcMjAxOVxcQUlUXFxPbmxpbmUgU3RvcmUgUHJvamVjdFxcUHJvamVjdFxcT25saW5lLVN0b3JlL3NyY1xcYXBwXFxob21lXFxob21lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0MsdUNBQW9EO0VBQ3BELGtDQUFrQztFQUNsQyw0QkFBNEI7RUFDNUIsc0JBQXNCO0VBQ3RCLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsY0FBYTtFQUNiLCtFQUErRSxFQUFBOztBQUdoRjtFQUNDLGtCQUFrQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRvcCB7XHJcblx0YmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vYXNzZXRzL2JhY2tncm91bmQuanBnXCIpO1xyXG5cdGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XHJcblx0YmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuXHRiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG5cdGhlaWdodDogMjByZW07XHJcblx0bGluZS1oZWlnaHQ6IDIwcmVtO1xyXG5cdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHRmb250LXNpemU6IDVyZW07XHJcblx0Zm9udC13ZWlnaHQ6IDkwMDtcclxuXHRjb2xvcjojNzIwMEZGO1xyXG5cdHRleHQtc2hhZG93OiAtMnB4IC0ycHggMCAjRkZGLCAycHggLTJweCAwICNGRkYsIC0ycHggMnB4IDAgI0ZGRiwgMnB4IDJweCAwICNGRkY7XHJcbn1cclxuXHJcbi5jZW50ZXIge1xyXG5cdHRleHQtYWxpZ246IGNlbnRlcjtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shirt__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shirt */ "./src/app/shirt.ts");
/* harmony import */ var _assets_products_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../assets/products.json */ "./src/assets/products.json");
var _assets_products_json__WEBPACK_IMPORTED_MODULE_3___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../assets/products.json */ "./src/assets/products.json", 1);




var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
        this.items = [];
        this.featured = [];
    }
    HomeComponent.prototype.ngOnInit = function () {
        for (var _i = 0, data_1 = _assets_products_json__WEBPACK_IMPORTED_MODULE_3__; _i < data_1.length; _i++) {
            var shirt = data_1[_i];
            this.items.push(new _shirt__WEBPACK_IMPORTED_MODULE_2__["Shirt"](shirt.name, shirt.topic, shirt.description, shirt.src, shirt.number));
        }
        this.featured = [this.items[5], this.items[10], this.items[15]];
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/home/home.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/item/item.component.html":
/*!******************************************!*\
  !*** ./src/app/item/item.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"card\">\r\n\t<mat-card-title>{{shirt.name}}</mat-card-title>\r\n\t<mat-card-subtitle>{{shirt.topic}}</mat-card-subtitle>\r\n\t<a routerLink=\"/about-us\"><img mat-card-image [src]=\"shirt.src\"></a>\r\n\t<mat-card-content>{{shirt.description}}</mat-card-content>\r\n\t<mat-card-actions class=\"footer\">\r\n\t\t<button mat-raised-button color=\"accent\">${{shirt.price}}</button>\r\n\t\t<button mat-raised-button color=\"primary\" (click)=\"addToCart()\">Add to Cart</button>\r\n\t\t<span class=\"spacer\"></span>\r\n\t\t<a mat-raised-button routerLink=\"/about-us\">More Info</a>\r\n\t</mat-card-actions>\r\n</mat-card>"

/***/ }),

/***/ "./src/app/item/item.component.scss":
/*!******************************************!*\
  !*** ./src/app/item/item.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  width: inherit;\n  height: inherit; }\n\n.card {\n  margin: 1rem;\n  width: 80%; }\n\n.spnr {\n  flex: auto; }\n\n.footer {\n  display: flex; }\n\n.spacer {\n  flex: 1 1 auto; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaXRlbS9DOlxcVXNlcnNcXHBoaWxsbmhcXE9uZURyaXZlIC0gSGFsZSBTY2hvb2xcXERvY3VtZW50c1xcU2Nob29sV29ya1xcMjAxOVxcQUlUXFxPbmxpbmUgU3RvcmUgUHJvamVjdFxcUHJvamVjdFxcT25saW5lLVN0b3JlL3NyY1xcYXBwXFxpdGVtXFxpdGVtLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0MsY0FBYztFQUNkLGVBQWUsRUFBQTs7QUFHaEI7RUFDQyxZQUFZO0VBQ1osVUFBVSxFQUFBOztBQUdYO0VBQ0MsVUFBVSxFQUFBOztBQUdYO0VBQ0MsYUFBYSxFQUFBOztBQUdkO0VBQ0MsY0FBYyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvaXRlbS9pdGVtLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG5cdHdpZHRoOiBpbmhlcml0O1xyXG5cdGhlaWdodDogaW5oZXJpdDtcclxufVxyXG5cclxuLmNhcmQge1xyXG5cdG1hcmdpbjogMXJlbTtcclxuXHR3aWR0aDogODAlO1xyXG59XHJcblxyXG4uc3BuciB7XHJcblx0ZmxleDogYXV0bztcclxufVxyXG5cclxuLmZvb3RlciB7XHJcblx0ZGlzcGxheTogZmxleDtcclxufVxyXG5cclxuLnNwYWNlciB7XHJcblx0ZmxleDogMSAxIGF1dG87XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/item/item.component.ts":
/*!****************************************!*\
  !*** ./src/app/item/item.component.ts ***!
  \****************************************/
/*! exports provided: ItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemComponent", function() { return ItemComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shirt__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shirt */ "./src/app/shirt.ts");
/* harmony import */ var _cart_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../cart.service */ "./src/app/cart.service.ts");




var ItemComponent = /** @class */ (function () {
    function ItemComponent(carthandler) {
        this.carthandler = carthandler;
    }
    ItemComponent.prototype.addToCart = function () {
        this.carthandler.total += this.shirt.price;
        this.carthandler.items.push(this.shirt);
    };
    ItemComponent.prototype.ngOnInit = function () { };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _shirt__WEBPACK_IMPORTED_MODULE_2__["Shirt"])
    ], ItemComponent.prototype, "shirt", void 0);
    ItemComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-item',
            template: __webpack_require__(/*! ./item.component.html */ "./src/app/item/item.component.html"),
            styles: [__webpack_require__(/*! ./item.component.scss */ "./src/app/item/item.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_cart_service__WEBPACK_IMPORTED_MODULE_3__["CartService"]])
    ], ItemComponent);
    return ItemComponent;
}());



/***/ }),

/***/ "./src/app/link.ts":
/*!*************************!*\
  !*** ./src/app/link.ts ***!
  \*************************/
/*! exports provided: Link */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Link", function() { return Link; });
var Link = /** @class */ (function () {
    function Link(name, link, icon) {
        this.name = name;
        this.link = link;
        this.icon = icon;
    }
    return Link;
}());



/***/ }),

/***/ "./src/app/shirt.ts":
/*!**************************!*\
  !*** ./src/app/shirt.ts ***!
  \**************************/
/*! exports provided: Shirt */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Shirt", function() { return Shirt; });
var Shirt = /** @class */ (function () {
    function Shirt(name, topic, description, src, price) {
        this.name = name;
        this.topic = topic;
        this.description = description;
        this.src = src;
        this.price = price;
    }
    return Shirt;
}());



/***/ }),

/***/ "./src/app/store/store.component.html":
/*!********************************************!*\
  !*** ./src/app/store/store.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar class=\"header\">\r\n\t<mat-form-field class=\"tagIn\">\r\n\t\t<mat-chip-list #chipList>\r\n\t\t\t<mat-chip *ngFor=\"let tag of tags\" [removable]=\"removable\" (removed)=\"remove(tag)\">\r\n\t\t\t{{tag.name}}\r\n\t\t\t\t<mat-icon matChipRemove *ngIf=\"removable\">cancel</mat-icon>\r\n\t\t\t</mat-chip>\r\n\t\t\t<input placeholder=\"Add Tags...\" \r\n\t\t\t\t\t\t [matChipInputFor]=\"chipList\"\t\r\n             [matChipInputSeparatorKeyCodes]=\"separatorKeysCodes\"\r\n             [matChipInputAddOnBlur]=\"addOnBlur\"\r\n             (matChipInputTokenEnd)=\"add($event)\">\r\n  \t</mat-chip-list>\r\n\t</mat-form-field>\r\n\t<mat-paginator class=\"paginator\" [length]=\"100\" [pageSize]=\"10\" [pageSizeOptions]=\"[5, 10, 20]\">\r\n\t</mat-paginator>\r\n</mat-toolbar>\r\n<mat-grid-list class=\"grid\" cols=\"3\" rowHeight=\"1:1.5\">\r\n\t<mat-grid-tile *ngFor=\"let item of items\">\r\n\t\t<app-item [shirt]=\"item\"></app-item>\r\n\t</mat-grid-tile>\r\n</mat-grid-list>"

/***/ }),

/***/ "./src/app/store/store.component.scss":
/*!********************************************!*\
  !*** ./src/app/store/store.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".tagIn {\n  width: 100%; }\n\n.header {\n  height: auto;\n  padding-top: 0.5rem; }\n\n.grid {\n  margin-top: 1rem; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3RvcmUvQzpcXFVzZXJzXFxwaGlsbG5oXFxPbmVEcml2ZSAtIEhhbGUgU2Nob29sXFxEb2N1bWVudHNcXFNjaG9vbFdvcmtcXDIwMTlcXEFJVFxcT25saW5lIFN0b3JlIFByb2plY3RcXFByb2plY3RcXE9ubGluZS1TdG9yZS9zcmNcXGFwcFxcc3RvcmVcXHN0b3JlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0MsV0FBVyxFQUFBOztBQUdaO0VBQ0MsWUFBWTtFQUNaLG1CQUFtQixFQUFBOztBQUdwQjtFQUNDLGdCQUFnQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvc3RvcmUvc3RvcmUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGFnSW4ge1xyXG5cdHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uaGVhZGVyIHtcclxuXHRoZWlnaHQ6IGF1dG87XHJcblx0cGFkZGluZy10b3A6IDAuNXJlbTtcclxufVxyXG5cclxuLmdyaWQge1xyXG5cdG1hcmdpbi10b3A6IDFyZW07XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/store/store.component.ts":
/*!******************************************!*\
  !*** ./src/app/store/store.component.ts ***!
  \******************************************/
/*! exports provided: StoreComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StoreComponent", function() { return StoreComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/keycodes */ "./node_modules/@angular/cdk/esm5/keycodes.es5.js");
/* harmony import */ var _shirt__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shirt */ "./src/app/shirt.ts");
/* harmony import */ var _assets_products_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../assets/products.json */ "./src/assets/products.json");
var _assets_products_json__WEBPACK_IMPORTED_MODULE_4___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../assets/products.json */ "./src/assets/products.json", 1);





var StoreComponent = /** @class */ (function () {
    function StoreComponent() {
        this.removable = true;
        this.separatorKeysCodes = [_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_2__["ENTER"], _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_2__["COMMA"]];
        this.addOnBlur = true;
        this.tagCap = 10;
        this.tags = [];
        this.items = [];
    }
    StoreComponent.prototype.add = function (event) {
        var input = event.input;
        var value = event.value;
        // Add our fruit
        if ((value || '').trim() && this.tags.length < this.tagCap) {
            this.tags.push({ name: value.trim() });
        }
        // Reset the input value
        if (input) {
            input.value = '';
        }
    };
    StoreComponent.prototype.remove = function (tag) {
        var index = this.tags.indexOf(tag);
        if (index >= 0) {
            this.tags.splice(index, 1);
        }
    };
    StoreComponent.prototype.ngOnInit = function () {
        for (var _i = 0, data_1 = _assets_products_json__WEBPACK_IMPORTED_MODULE_4__; _i < data_1.length; _i++) {
            var shirt = data_1[_i];
            this.items.push(new _shirt__WEBPACK_IMPORTED_MODULE_3__["Shirt"](shirt.name, shirt.topic, shirt.description, shirt.src, shirt.number));
        }
    };
    StoreComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-store',
            template: __webpack_require__(/*! ./store.component.html */ "./src/app/store/store.component.html"),
            styles: [__webpack_require__(/*! ./store.component.scss */ "./src/app/store/store.component.scss")]
        })
    ], StoreComponent);
    return StoreComponent;
}());



/***/ }),

/***/ "./src/assets/material-module.ts":
/*!***************************************!*\
  !*** ./src/assets/material-module.ts ***!
  \***************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/a11y */ "./node_modules/@angular/cdk/esm5/a11y.es5.js");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "./node_modules/@angular/cdk/esm5/drag-drop.es5.js");
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/portal */ "./node_modules/@angular/cdk/esm5/portal.es5.js");
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/scrolling */ "./node_modules/@angular/cdk/esm5/scrolling.es5.js");
/* harmony import */ var _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/stepper */ "./node_modules/@angular/cdk/esm5/stepper.es5.js");
/* harmony import */ var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/table */ "./node_modules/@angular/cdk/esm5/table.es5.js");
/* harmony import */ var _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/tree */ "./node_modules/@angular/cdk/esm5/tree.es5.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");










var MaterialModule = /** @class */ (function () {
    function MaterialModule() {
    }
    MaterialModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_8__["NgModule"])({
            exports: [
                _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_1__["A11yModule"],
                _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_5__["CdkStepperModule"],
                _angular_cdk_table__WEBPACK_IMPORTED_MODULE_6__["CdkTableModule"],
                _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_7__["CdkTreeModule"],
                _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__["DragDropModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatAutocompleteModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatBadgeModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatBottomSheetModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatButtonToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatChipsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatStepperModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatDividerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatExpansionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatNativeDateModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatProgressBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatRippleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatSliderModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatSlideToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatSnackBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatSortModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatTooltipModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatTreeModule"],
                _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_3__["PortalModule"],
                _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_4__["ScrollingModule"],
            ]
        })
    ], MaterialModule);
    return MaterialModule;
}());

/**  Copyright 2019 Google Inc. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */ 


/***/ }),

/***/ "./src/assets/products.json":
/*!**********************************!*\
  !*** ./src/assets/products.json ***!
  \**********************************/
/*! exports provided: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, default */
/***/ (function(module) {

module.exports = [{"name":"Xenomorph 1","topic":" ALIEN","description":"Depicts a horrifyingly cool looking xenomorph.","src":"../../assets/products/A1.png","number":19.99},{"name":"Xenomorph 2","topic":" ALIEN","description":"Depicts another horrifyingly cool looking xenomorph.","src":"../../assets/products/A2.png","number":19.99},{"name":"Xenomorph 3","topic":" ALIEN","description":"Depicts a third horrifyingly cool looking xenomorph.","src":"../../assets/products/A3.png","number":19.99},{"name":"Back to the Future Logo","topic":" Back to the Future","description":"Depicts the Back to the Future, or in this case the present, logo.","src":"../../assets/products/BTF1.png","number":19.99},{"name":"Marty and Doc","topic":" Back to the Future","description":"Scientific shenanigans await!","src":"../../assets/products/BTF2.png","number":19.99},{"name":"Delorean","topic":" Back to the Future","description":"The greatest time machine of all time!","src":"../../assets/products/BTF3.png","number":19.99},{"name":"Delorean","topic":" Back to the Future","description":"The greatest time machine of all time!","src":"../../assets/products/BTF3.png","number":19.99},{"name":"Ghost Rider 1","topic":"Ghost Rider","description":"RAARGH!","src":"../../assets/products/GR1.png","number":19.99},{"name":"Ghost Rider 2","topic":"Ghost Rider","description":"RAARGH! x2","src":"../../assets/products/GR2.png","number":19.99},{"name":"Ghost Rider 3","topic":"Ghost Rider","description":"RAARGH! x3","src":"../../assets/products/GR3.png","number":19.99},{"name":"Knight Rider 1","topic":"Knight Rider","description":"Possibly the coolest looking car in any show! Apart from the time machine delorean of course!","src":"../../assets/products/KR1.png","number":19.99},{"name":"Knight Rider 2","topic":"Knight Rider","description":"Memes.","src":"../../assets/products/KR2.png","number":19.99},{"name":"Star Wars 1","topic":"Star Wars","description":"Tie fighter after you.","src":"../../assets/products/SW1.png","number":19.99},{"name":"Star Wars 2","topic":"Star Wars","description":"Darth-You-know-who.","src":"../../assets/products/SW2.png","number":19.99},{"name":"Star Wars 3","topic":"Star Wars","description":"The one and only, Chewy!","src":"../../assets/products/SW3.png","number":19.99},{"name":"Star Wars 4","topic":"Star Wars","description":"Stylised stormtrooper.","src":"../../assets/products/SW4.png","number":19.99},{"name":"Star Wars 5","topic":"Star Wars","description":"Showing off the old trilogy.","src":"../../assets/products/SW5.png","number":19.99},{"name":"Terminator 1","topic":"Terminator","description":"<This description has been TERMINATED>","src":"../../assets/products/T1.png","number":19.99},{"name":"Terminator 2","topic":"Terminator","description":"You don't want to see his eyes.","src":"../../assets/products/T2.png","number":19.99},{"name":"Terminator 3","topic":"Terminator","description":"The future looks great doesn't it?","src":"../../assets/products/T3.png","number":19.99},{"name":"Tron 1","topic":"Tron","description":"110100100101010101010100101010100101012010101010100101010100101","src":"../../assets/products/TR1.png","number":10.1},{"name":"Tron Dude","topic":"Tron","description":"Dudeeee...","src":"../../assets/products/TR2.png","number":19.99},{"name":"Tron 2","topic":"Tron","description":"Everyone's favorite bitty boi.","src":"../../assets/products/TR3.png","number":19.99},{"name":"Tron 3","topic":"Tron","description":"Lightcycles ftw!","src":"../../assets/products/TR4.png","number":19.99},{"name":"Tron 4","topic":"Tron","description":"Beam us up! Oh wait, wrong show. :P","src":"../../assets/products/TR5.png","number":19.99}];

/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\phillnh\OneDrive - Hale School\Documents\SchoolWork\2019\AIT\Online Store Project\Project\Online-Store\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map