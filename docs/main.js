"use strict";
(self["webpackChunkangular_pro"] = self["webpackChunkangular_pro"] || []).push([["main"],{

/***/ 1020:
/*!**********************************************************************!*\
  !*** ./src/app/advanced-components/advanced-components.component.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AdvancedComponentsComponent: () => (/* binding */ AdvancedComponentsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _auth_form_auth_form_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth-form/auth-form.component */ 8318);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _auth_remember_auth_remember_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth-remember/auth-remember.component */ 5254);
/* harmony import */ var _template_container_template_container_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./template-container/template-container.component */ 8700);
/* harmony import */ var _view_encapsulation_view_encapsulation_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./view-encapsulation/view-encapsulation.component */ 5224);
/* harmony import */ var _change_detection_change_detection_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./change-detection/change-detection.component */ 8944);









const _c0 = ["entry"];
const _c1 = ["template"];
function AdvancedComponentsComponent_ng_template_27_Template(rf, ctx) {}
class AdvancedComponentsComponent {
  constructor(resolver) {
    this.resolver = resolver;
    this.rememberMe = false;
  }
  ngAfterContentInit() {
    const authFormFactory = this.resolver.resolveComponentFactory(_auth_form_auth_form_component__WEBPACK_IMPORTED_MODULE_0__.AuthFormComponent);
    this.entry.createComponent(authFormFactory);
    this.component = this.entry.createComponent(authFormFactory, 0);
    this.component.instance.title = "Dynamic Create";
    this.subscription = this.component.instance.submitted.subscribe(this.createUser);
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
  createUser(user) {
    console.log("Create Account", user);
  }
  loginUser(user) {
    console.log("Login Account", user, this.rememberMe);
  }
  rememberUser(remember) {
    this.rememberMe = remember;
  }
  destroyComponent() {
    this.component.destroy();
  }
  moveComponent() {
    this.entry.move(this.component.hostView, 1);
  }
  static {
    this.ɵfac = function AdvancedComponentsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || AdvancedComponentsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_5__.ComponentFactoryResolver));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
      type: AdvancedComponentsComponent,
      selectors: [["advanced-components"]],
      viewQuery: function AdvancedComponentsComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c0, 7, _angular_core__WEBPACK_IMPORTED_MODULE_5__.ViewContainerRef);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c1, 5);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.entry = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.template = _t.first);
        }
      },
      decls: 38,
      vars: 0,
      consts: [["entry", ""], [1, "routes"], ["routerLink", "/", 1, "route"], ["routerLink", "/route"], [1, "row"], ["width", "50", "alt", "Angular Logo", "src", "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTAgMjUwIj4KICAgIDxwYXRoIGZpbGw9IiNERDAwMzEiIGQ9Ik0xMjUgMzBMMzEuOSA2My4ybDE0LjIgMTIzLjFMMTI1IDIzMGw3OC45LTQzLjcgMTQuMi0xMjMuMXoiIC8+CiAgICA8cGF0aCBmaWxsPSIjQzMwMDJGIiBkPSJNMTI1IDMwdjIyLjItLjFWMjMwbDc4LjktNDMuNyAxNC4yLTEyMy4xTDEyNSAzMHoiIC8+CiAgICA8cGF0aCAgZmlsbD0iI0ZGRkZGRiIgZD0iTTEyNSA1Mi4xTDY2LjggMTgyLjZoMjEuN2wxMS43LTI5LjJoNDkuNGwxMS43IDI5LjJIMTgzTDEyNSA1Mi4xem0xNyA4My4zaC0zNGwxNy00MC45IDE3IDQwLjl6IiAvPgogIDwvc3ZnPg=="], [3, "submitted"], ["type", "submit"], [3, "checked"], [3, "click"]],
      template: function AdvancedComponentsComponent_Template(rf, ctx) {
        if (rf & 1) {
          const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "nav", 1)(1, "a", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Home");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "a", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, "Route");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](5, "router-outlet");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "div", 4)(7, "h2");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8, "Static Components");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](9, "img", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "div")(11, "auth-form", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("submitted", function AdvancedComponentsComponent_Template_auth_form_submitted_11_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx.createUser($event));
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "h3");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](13, "Create Account");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "button", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](15, " Join Us ");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "auth-form", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("submitted", function AdvancedComponentsComponent_Template_auth_form_submitted_16_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx.loginUser($event));
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "h3");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](18, "Login");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](19, "auth-remember", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("checked", function AdvancedComponentsComponent_Template_auth_remember_checked_19_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx.rememberUser($event));
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](20, "auth-remember", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("checked", function AdvancedComponentsComponent_Template_auth_remember_checked_20_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx.rememberUser($event));
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](21, "auth-remember", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("checked", function AdvancedComponentsComponent_Template_auth_remember_checked_21_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx.rememberUser($event));
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](22, "button", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](23, " Login ");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](24, "hr");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](25, "h2");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](26, "Dynamic Components");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](27, AdvancedComponentsComponent_ng_template_27_Template, 0, 0, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplateRefExtractor"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](29, "br");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](30, "button", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AdvancedComponentsComponent_Template_button_click_30_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx.destroyComponent());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](31, "Destroy");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](32, "\u00A0\n");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](33, "button", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AdvancedComponentsComponent_Template_button_click_33_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx.moveComponent());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](34, "Move");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](35, "template-container")(36, "view-encapsulation")(37, "change-detection");
        }
      },
      dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterOutlet, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterLink, _auth_form_auth_form_component__WEBPACK_IMPORTED_MODULE_0__.AuthFormComponent, _auth_remember_auth_remember_component__WEBPACK_IMPORTED_MODULE_1__.AuthRememberComponent, _template_container_template_container_component__WEBPACK_IMPORTED_MODULE_2__.TemplateContainerComponent, _view_encapsulation_view_encapsulation_component__WEBPACK_IMPORTED_MODULE_3__.ViewEncapsulationComponent, _change_detection_change_detection_component__WEBPACK_IMPORTED_MODULE_4__.ChangeDetectionComponent],
      styles: [".row[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n}\n\n.routes[_ngcontent-%COMP%] {\n  display: flex;\n}\n\n.route[_ngcontent-%COMP%] {\n  margin-right: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkdmFuY2VkLWNvbXBvbmVudHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7QUFDRjs7QUFFQTtFQUNFLGlCQUFBO0FBQ0YiLCJmaWxlIjoiYWR2YW5jZWQtY29tcG9uZW50cy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5yb3cge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG59XHJcblxyXG4ucm91dGVzIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcblxyXG4ucm91dGUge1xyXG4gIG1hcmdpbi1yaWdodDogNXB4O1xyXG59XHJcbiJdfQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYWR2YW5jZWQtY29tcG9uZW50cy9hZHZhbmNlZC1jb21wb25lbnRzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0FBQ0Y7O0FBRUE7RUFDRSxpQkFBQTtBQUNGO0FBQ0Esd2pCQUF3akIiLCJzb3VyY2VzQ29udGVudCI6WyIucm93IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxufVxyXG5cclxuLnJvdXRlcyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxufVxyXG5cclxuLnJvdXRlIHtcclxuICBtYXJnaW4tcmlnaHQ6IDVweDtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
}

/***/ }),

/***/ 8318:
/*!**********************************************************************!*\
  !*** ./src/app/advanced-components/auth-form/auth-form.component.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AuthFormComponent: () => (/* binding */ AuthFormComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 2842);
/* harmony import */ var _auth_message_auth_message_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../auth-message/auth-message.component */ 9664);
/* harmony import */ var _auth_remember_auth_remember_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../auth-remember/auth-remember.component */ 5254);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 4456);








const _c0 = ["email"];
const _c1 = ["password"];
const _c2 = ["createButton"];
const _c3 = [[["h3"]], [["auth-remember"]], [["button"]]];
const _c4 = ["h3", "auth-remember", "button"];
function AuthFormComponent_h3_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r2.title);
  }
}
function AuthFormComponent_button_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 9, 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, " Dynamic Create ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function AuthFormComponent_div_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "ngIf: You will be logged in for 30 days");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
class AuthFormComponent {
  constructor(changeDetector, renderer) {
    this.changeDetector = changeDetector;
    this.renderer = renderer;
    this.submitted = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
    this.showMessage = false;
    this.subscription = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subscription();
    this.useRenderer = false;
    this.title = "";
  }
  ngAfterContentInit() {
    let tempSub;
    if (this.remember) {
      console.log("afterContentInit remember", this.remember);
      tempSub = this.remember.checked.subscribe(checked => {
        this.showMessage = checked;
      });
      this.subscription.add(tempSub);
    }
    if (this.rememberList) {
      console.log("afterContentInit rememberList", this.rememberList);
      this.rememberList.forEach(item => {
        tempSub = item.checked.subscribe(checked => this.showMessage = checked);
        this.subscription.add(tempSub);
      });
    }
    if (this.message) {
      this.message.days = 30;
    }
  }
  ngAfterViewInit() {
    this.email.nativeElement.setAttribute("placeholder", "Enter your email address");
    this.email.nativeElement.classList.add("email");
    this.renderer.setAttribute(this.password.nativeElement, "placeholder", "Enter your password");
    this.renderer.addClass(this.password.nativeElement, "password");
    this.password.nativeElement["focus"].apply(this.password.nativeElement);
    this.email.nativeElement.focus();
    console.log("afterViewInit email", this.email.nativeElement);
    if (this.message) {
      console.log("afterViewInit message", this.message);
      this.messages.forEach(oneMessage => {
        oneMessage.days = 30;
      });
      this.changeDetector.detectChanges();
    }
    if (this.createButton) {
      this.createButton.nativeElement.classList.add("createButton");
    }
  }
  onSubmit(value) {
    this.submitted.emit(value);
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
  static {
    this.ɵfac = function AuthFormComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || AuthFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.Renderer2));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: AuthFormComponent,
      selectors: [["auth-form"]],
      contentQueries: function AuthFormComponent_ContentQueries(rf, ctx, dirIndex) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵcontentQuery"](dirIndex, _auth_remember_auth_remember_component__WEBPACK_IMPORTED_MODULE_1__.AuthRememberComponent, 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵcontentQuery"](dirIndex, _auth_remember_auth_remember_component__WEBPACK_IMPORTED_MODULE_1__.AuthRememberComponent, 4);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.remember = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.rememberList = _t);
        }
      },
      viewQuery: function AuthFormComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_auth_message_auth_message_component__WEBPACK_IMPORTED_MODULE_0__.AuthMessageComponent, 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c0, 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c1, 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c2, 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_auth_message_auth_message_component__WEBPACK_IMPORTED_MODULE_0__.AuthMessageComponent, 5);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.message = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.email = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.password = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.createButton = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.messages = _t);
        }
      },
      outputs: {
        submitted: "submitted"
      },
      ngContentSelectors: _c4,
      decls: 20,
      vars: 9,
      consts: [["form", "ngForm"], ["email", ""], ["password", ""], ["createButton", ""], [3, "ngSubmit"], [4, "ngIf"], ["type", "email", "name", "email", "ngModel", ""], ["type", "password", "name", "password", "ngModel", ""], ["name", "createButton", 4, "ngIf"], ["name", "createButton"]],
      template: function AuthFormComponent_Template(rf, ctx) {
        if (rf & 1) {
          const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojectionDef"](_c3);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div")(1, "form", 4, 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function AuthFormComponent_Template_form_ngSubmit_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1);
            const form_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](2);
            return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx.onSubmit(form_r2.value));
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojection"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, AuthFormComponent_h3_4_Template, 2, 1, "h3", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, " Email address ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "input", 6, 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, " Password ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](11, "input", 7, 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojection"](13, 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojection"](14, 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](15, AuthFormComponent_button_15_Template, 3, 0, "button", 8)(16, AuthFormComponent_div_16_Template, 2, 0, "div", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](17, "auth-message")(18, "auth-message")(19, "auth-message");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.title === "Dynamic Create");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](11);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.title === "Dynamic Create");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.showMessage);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("display", ctx.showMessage ? "inherit" : "none");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("display", ctx.showMessage ? "inherit" : "none");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("display", ctx.showMessage ? "inherit" : "none");
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgForm, _auth_message_auth_message_component__WEBPACK_IMPORTED_MODULE_0__.AuthMessageComponent],
      styles: [".email[_ngcontent-%COMP%] {\n  border-color: purple;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImF1dGgtZm9ybS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG9CQUFBO0FBQ0YiLCJmaWxlIjoiYXV0aC1mb3JtLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmVtYWlsIHtcclxuICBib3JkZXItY29sb3I6IHB1cnBsZTtcclxufVxyXG4iXX0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYWR2YW5jZWQtY29tcG9uZW50cy9hdXRoLWZvcm0vYXV0aC1mb3JtLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usb0JBQUE7QUFDRjtBQUNBLDRUQUE0VCIsInNvdXJjZXNDb250ZW50IjpbIi5lbWFpbCB7XHJcbiAgYm9yZGVyLWNvbG9yOiBwdXJwbGU7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 9664:
/*!****************************************************************************!*\
  !*** ./src/app/advanced-components/auth-message/auth-message.component.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AuthMessageComponent: () => (/* binding */ AuthMessageComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);

class AuthMessageComponent {
  constructor() {
    this.days = 7;
  }
  static {
    this.ɵfac = function AuthMessageComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || AuthMessageComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AuthMessageComponent,
      selectors: [["auth-message"]],
      decls: 2,
      vars: 1,
      template: function AuthMessageComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("auth-message: You will be logged in for ", ctx.days, " days");
        }
      },
      styles: ["/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhdXRoLW1lc3NhZ2UuY29tcG9uZW50LnNjc3MifQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYWR2YW5jZWQtY29tcG9uZW50cy9hdXRoLW1lc3NhZ2UvYXV0aC1tZXNzYWdlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSw0S0FBNEsiLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
}

/***/ }),

/***/ 5254:
/*!******************************************************************************!*\
  !*** ./src/app/advanced-components/auth-remember/auth-remember.component.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AuthRememberComponent: () => (/* binding */ AuthRememberComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);


class AuthRememberComponent {
  constructor() {
    this.checked = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
  }
  onChecked(value) {
    this.checked.emit(value);
  }
  static {
    this.ɵfac = function AuthRememberComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || AuthRememberComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AuthRememberComponent,
      selectors: [["auth-remember"]],
      outputs: {
        checked: "checked"
      },
      decls: 4,
      vars: 0,
      consts: [["inputBox", ""], ["type", "checkbox", 3, "change"]],
      template: function AuthRememberComponent_Template(rf, ctx) {
        if (rf & 1) {
          const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label")(1, "input", 1, 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function AuthRememberComponent_Template_input_change_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
            const inputBox_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);
            return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx.onChecked(inputBox_r2.checked));
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Keep me logged in\n");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhdXRoLXJlbWVtYmVyLmNvbXBvbmVudC5zY3NzIn0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYWR2YW5jZWQtY29tcG9uZW50cy9hdXRoLXJlbWVtYmVyL2F1dGgtcmVtZW1iZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLDRLQUE0SyIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 8944:
/*!************************************************************************************!*\
  !*** ./src/app/advanced-components/change-detection/change-detection.component.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ChangeDetectionComponent: () => (/* binding */ ChangeDetectionComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _example_1_example_1_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./example-1/example-1.component */ 8937);
/* harmony import */ var _example_2_example_2_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./example-2/example-2.component */ 5429);



class ChangeDetectionComponent {
  constructor() {
    this.user = {
      name: "Mark Hoppus",
      age: 48,
      location: "California"
    };
  }
  addProp() {
    this.user.email = "blink-182.net";
  }
  changeUser() {
    this.user = {
      name: "Tom Delonge",
      age: 45,
      location: "California"
    };
  }
  changeName() {
    this.user.name = "Travis Barker";
  }
  static {
    this.ɵfac = function ChangeDetectionComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || ChangeDetectionComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: ChangeDetectionComponent,
      selectors: [["change-detection"]],
      decls: 16,
      vars: 2,
      consts: [[1, "buttons"], [3, "click"], [1, "users"], [3, "user"]],
      template: function ChangeDetectionComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "hr");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "h2");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Change Detection Strategy");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 0)(5, "button", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ChangeDetectionComponent_Template_button_click_5_listener() {
            return ctx.addProp();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "Add property");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "button", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ChangeDetectionComponent_Template_button_click_7_listener() {
            return ctx.changeUser();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "Change user object");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "button", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ChangeDetectionComponent_Template_button_click_9_listener() {
            return ctx.changeName();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "Change name property");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 2)(12, "div");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](13, "example-1", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "div");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](15, "example-2", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](13);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("user", ctx.user);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("user", ctx.user);
        }
      },
      dependencies: [_example_1_example_1_component__WEBPACK_IMPORTED_MODULE_0__.Example1Component, _example_2_example_2_component__WEBPACK_IMPORTED_MODULE_1__.Example2Component],
      styles: [".users[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-evenly;\n}\n\n.buttons[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n}\n.buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  margin: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoYW5nZS1kZXRlY3Rpb24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0EsNkJBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtBQUNGO0FBQUU7RUFDRSxZQUFBO0FBRUoiLCJmaWxlIjoiY2hhbmdlLWRldGVjdGlvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi51c2VycyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcclxufVxyXG5cclxuLmJ1dHRvbnMge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgJiBidXR0b24ge1xyXG4gICAgbWFyZ2luOiAxMHB4O1xyXG4gIH1cclxufVxyXG4iXX0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYWR2YW5jZWQtY29tcG9uZW50cy9jaGFuZ2UtZGV0ZWN0aW9uL2NoYW5nZS1kZXRlY3Rpb24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0EsNkJBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtBQUNGO0FBQUU7RUFDRSxZQUFBO0FBRUo7QUFDQSxvbUJBQW9tQiIsInNvdXJjZXNDb250ZW50IjpbIi51c2VycyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcclxufVxyXG5cclxuLmJ1dHRvbnMge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgJiBidXR0b24ge1xyXG4gICAgbWFyZ2luOiAxMHB4O1xyXG4gIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
}

/***/ }),

/***/ 8937:
/*!***************************************************************************************!*\
  !*** ./src/app/advanced-components/change-detection/example-1/example-1.component.ts ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Example1Component: () => (/* binding */ Example1Component)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);

class Example1Component {
  constructor() {
    this.user = {
      email: "",
      password: ""
    };
  }
  update() {
    this.user.name = "Matt Skiba";
  }
  static {
    this.ɵfac = function Example1Component_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || Example1Component)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: Example1Component,
      selectors: [["example-1"]],
      inputs: {
        user: "user"
      },
      decls: 15,
      vars: 4,
      consts: [[1, "example-1"], [3, "click"]],
      template: function Example1Component_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "h3");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "OnPush");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h4");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h5");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "br");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function Example1Component_Template_button_click_11_listener() {
            return ctx.update();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Internal update");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "* should not update");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.user.name);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.user.age, " years old");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.user.location, " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.user.email, " ");
        }
      },
      styles: [".example-1[_ngcontent-%COMP%] {\n  font-size: 19px;\n  margin-bottom: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4YW1wbGUtMS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQUE7RUFDQSxtQkFBQTtBQUNGIiwiZmlsZSI6ImV4YW1wbGUtMS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5leGFtcGxlLTEge1xyXG4gIGZvbnQtc2l6ZTogMTlweDtcclxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG59XHJcbiJdfQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYWR2YW5jZWQtY29tcG9uZW50cy9jaGFuZ2UtZGV0ZWN0aW9uL2V4YW1wbGUtMS9leGFtcGxlLTEuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFBO0VBQ0EsbUJBQUE7QUFDRjtBQUNBLDRXQUE0VyIsInNvdXJjZXNDb250ZW50IjpbIi5leGFtcGxlLTEge1xyXG4gIGZvbnQtc2l6ZTogMTlweDtcclxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0= */"],
      changeDetection: 0
    });
  }
}

/***/ }),

/***/ 5429:
/*!***************************************************************************************!*\
  !*** ./src/app/advanced-components/change-detection/example-2/example-2.component.ts ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Example2Component: () => (/* binding */ Example2Component)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);

class Example2Component {
  constructor() {
    this.user = {
      email: "",
      password: ""
    };
  }
  update() {
    this.user.name = "Matt Skiba";
  }
  static {
    this.ɵfac = function Example2Component_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || Example2Component)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: Example2Component,
      selectors: [["example-2"]],
      inputs: {
        user: "user"
      },
      decls: 15,
      vars: 4,
      consts: [[1, "example-2"], [3, "click"]],
      template: function Example2Component_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "h3");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Default");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h4");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h5");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "br");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function Example2Component_Template_button_click_11_listener() {
            return ctx.update();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Internal update");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "* should update");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.user.name);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.user.age, " years old");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.user.location, " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.user.email, " ");
        }
      },
      styles: [".example-2[_ngcontent-%COMP%] {\n  font-size: 19px;\n  margin-bottom: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4YW1wbGUtMi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQUE7RUFDQSxtQkFBQTtBQUNGIiwiZmlsZSI6ImV4YW1wbGUtMi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5leGFtcGxlLTIge1xyXG4gIGZvbnQtc2l6ZTogMTlweDtcclxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG59XHJcbiJdfQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYWR2YW5jZWQtY29tcG9uZW50cy9jaGFuZ2UtZGV0ZWN0aW9uL2V4YW1wbGUtMi9leGFtcGxlLTIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFBO0VBQ0EsbUJBQUE7QUFDRjtBQUNBLDRXQUE0VyIsInNvdXJjZXNDb250ZW50IjpbIi5leGFtcGxlLTIge1xyXG4gIGZvbnQtc2l6ZTogMTlweDtcclxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
}

/***/ }),

/***/ 8700:
/*!****************************************************************************************!*\
  !*** ./src/app/advanced-components/template-container/template-container.component.ts ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TemplateContainerComponent: () => (/* binding */ TemplateContainerComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 316);



const _c0 = ["entry"];
const _c1 = ["template"];
function TemplateContainerComponent_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0);
  }
  if (rf & 2) {
    const name_r1 = ctx.$implicit;
    const location_r2 = ctx.location;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", name_r1, " : ", location_r2, "");
  }
}
class TemplateContainerComponent {
  constructor() {
    this.context = {
      $implicit: "Noran Diaconu",
      location: "North Carolina"
    };
  }
  ngAfterContentInit() {
    this.entry.createEmbeddedView(this.template, {
      $implicit: "Noran",
      location: "North Carolina"
    });
  }
  static {
    this.ɵfac = function TemplateContainerComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || TemplateContainerComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: TemplateContainerComponent,
      selectors: [["template-container"]],
      viewQuery: function TemplateContainerComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 7, _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewContainerRef);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, 7);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.entry = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.template = _t.first);
        }
      },
      decls: 10,
      vars: 2,
      consts: [["entry", ""], ["template", ""], [3, "ngTemplateOutlet", "ngTemplateOutletContext"]],
      template: function TemplateContainerComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "hr");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "ng-template / ng-container");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", null, 0)(6, "br");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](7, 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, TemplateContainerComponent_ng_template_8_Template, 1, 2, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          const template_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](9);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", template_r3)("ngTemplateOutletContext", ctx.context);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgTemplateOutlet],
      styles: ["/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0ZW1wbGF0ZS1jb250YWluZXIuY29tcG9uZW50LnNjc3MifQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYWR2YW5jZWQtY29tcG9uZW50cy90ZW1wbGF0ZS1jb250YWluZXIvdGVtcGxhdGUtY29udGFpbmVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSxvTEFBb0wiLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
}

/***/ }),

/***/ 1935:
/*!*********************************************************************************************!*\
  !*** ./src/app/advanced-components/view-encapsulation/example-one/example-one.component.ts ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ExampleOneComponent: () => (/* binding */ ExampleOneComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);

class ExampleOneComponent {
  constructor() {}
  static {
    this.ɵfac = function ExampleOneComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || ExampleOneComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ExampleOneComponent,
      selectors: [["example-one"]],
      decls: 2,
      vars: 0,
      consts: [[1, "example-one"]],
      template: function ExampleOneComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Example One");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: [".example-one[_ngcontent-%COMP%] {\n  background: purple;\n  font-size: 19px;\n  color: white;\n  margin-bottom: 50px;\n  padding: 10px 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4YW1wbGUtb25lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUFDRiIsImZpbGUiOiJleGFtcGxlLW9uZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5leGFtcGxlLW9uZSB7XHJcbiAgYmFja2dyb3VuZDogcHVycGxlO1xyXG4gIGZvbnQtc2l6ZTogMTlweDtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgbWFyZ2luLWJvdHRvbTogNTBweDtcclxuICBwYWRkaW5nOiAxMHB4IDIwcHg7XHJcbn1cclxuIl19 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYWR2YW5jZWQtY29tcG9uZW50cy92aWV3LWVuY2Fwc3VsYXRpb24vZXhhbXBsZS1vbmUvZXhhbXBsZS1vbmUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQUNGO0FBQ0Esd2ZBQXdmIiwic291cmNlc0NvbnRlbnQiOlsiLmV4YW1wbGUtb25lIHtcclxuICBiYWNrZ3JvdW5kOiBwdXJwbGU7XHJcbiAgZm9udC1zaXplOiAxOXB4O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBtYXJnaW4tYm90dG9tOiA1MHB4O1xyXG4gIHBhZGRpbmc6IDEwcHggMjBweDtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
}

/***/ }),

/***/ 799:
/*!*************************************************************************************************!*\
  !*** ./src/app/advanced-components/view-encapsulation/example-three/example-three.component.ts ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ExampleThreeComponent: () => (/* binding */ ExampleThreeComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);

class ExampleThreeComponent {
  constructor() {}
  static {
    this.ɵfac = function ExampleThreeComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || ExampleThreeComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ExampleThreeComponent,
      selectors: [["example-three"]],
      decls: 4,
      vars: 0,
      consts: [[1, "example-three"], [1, "example-one"]],
      template: function ExampleThreeComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Example Three");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Example One!");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: [".example-one {\n  border: 2px solid green;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4YW1wbGUtdGhyZWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx1QkFBQTtBQUNGIiwiZmlsZSI6ImV4YW1wbGUtdGhyZWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZXhhbXBsZS1vbmUge1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkIGdyZWVuO1xyXG59XHJcbiJdfQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYWR2YW5jZWQtY29tcG9uZW50cy92aWV3LWVuY2Fwc3VsYXRpb24vZXhhbXBsZS10aHJlZS9leGFtcGxlLXRocmVlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsdUJBQUE7QUFDRjtBQUNBLG9WQUFvViIsInNvdXJjZXNDb250ZW50IjpbIi5leGFtcGxlLW9uZSB7XHJcbiAgYm9yZGVyOiAycHggc29saWQgZ3JlZW47XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"],
      encapsulation: 2
    });
  }
}

/***/ }),

/***/ 4599:
/*!*********************************************************************************************!*\
  !*** ./src/app/advanced-components/view-encapsulation/example-two/example-two.component.ts ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ExampleTwoComponent: () => (/* binding */ ExampleTwoComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);

class ExampleTwoComponent {
  constructor() {}
  static {
    this.ɵfac = function ExampleTwoComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || ExampleTwoComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ExampleTwoComponent,
      selectors: [["example-two"]],
      decls: 4,
      vars: 0,
      consts: [[1, "example-two"], [1, "example-one"]],
      template: function ExampleTwoComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Example Two");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Example One!");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: [".example-two {\n  background: purple;\n  font-size: 19px;\n  color: white;\n  margin-bottom: 10px;\n  padding: 5px 7px;\n}\n\n.example-one {\n  border: 3px solid purple;\n  font-size: 14px;\n  color: purple;\n  padding: 5px 7px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4YW1wbGUtdHdvLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUFDRjs7QUFDQTtFQUNFLHdCQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtBQUVGIiwiZmlsZSI6ImV4YW1wbGUtdHdvLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmV4YW1wbGUtdHdvIHtcclxuICBiYWNrZ3JvdW5kOiBwdXJwbGU7XHJcbiAgZm9udC1zaXplOiAxOXB4O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gIHBhZGRpbmc6IDVweCA3cHg7XHJcbn1cclxuLmV4YW1wbGUtb25lIHtcclxuICBib3JkZXI6IDNweCBzb2xpZCBwdXJwbGU7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIGNvbG9yOiBwdXJwbGU7XHJcbiAgcGFkZGluZzogNXB4IDdweDtcclxufVxyXG4iXX0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYWR2YW5jZWQtY29tcG9uZW50cy92aWV3LWVuY2Fwc3VsYXRpb24vZXhhbXBsZS10d28vZXhhbXBsZS10d28uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQUNGOztBQUNBO0VBQ0Usd0JBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0FBRUY7QUFDQSw0dEJBQTR0QiIsInNvdXJjZXNDb250ZW50IjpbIi5leGFtcGxlLXR3byB7XHJcbiAgYmFja2dyb3VuZDogcHVycGxlO1xyXG4gIGZvbnQtc2l6ZTogMTlweDtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICBwYWRkaW5nOiA1cHggN3B4O1xyXG59XHJcbi5leGFtcGxlLW9uZSB7XHJcbiAgYm9yZGVyOiAzcHggc29saWQgcHVycGxlO1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBjb2xvcjogcHVycGxlO1xyXG4gIHBhZGRpbmc6IDVweCA3cHg7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"],
      encapsulation: 3
    });
  }
}

/***/ }),

/***/ 5224:
/*!****************************************************************************************!*\
  !*** ./src/app/advanced-components/view-encapsulation/view-encapsulation.component.ts ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ViewEncapsulationComponent: () => (/* binding */ ViewEncapsulationComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _example_one_example_one_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./example-one/example-one.component */ 1935);
/* harmony import */ var _example_two_example_two_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./example-two/example-two.component */ 4599);
/* harmony import */ var _example_three_example_three_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./example-three/example-three.component */ 799);




class ViewEncapsulationComponent {
  constructor() {}
  static {
    this.ɵfac = function ViewEncapsulationComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || ViewEncapsulationComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
      type: ViewEncapsulationComponent,
      selectors: [["view-encapsulation"]],
      decls: 7,
      vars: 0,
      template: function ViewEncapsulationComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "hr");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "h2");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "View Encapsulation");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "example-one")(5, "example-two")(6, "example-three");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
      },
      dependencies: [_example_one_example_one_component__WEBPACK_IMPORTED_MODULE_0__.ExampleOneComponent, _example_two_example_two_component__WEBPACK_IMPORTED_MODULE_1__.ExampleTwoComponent, _example_three_example_three_component__WEBPACK_IMPORTED_MODULE_2__.ExampleThreeComponent],
      styles: ["/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ2aWV3LWVuY2Fwc3VsYXRpb24uY29tcG9uZW50LnNjc3MifQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYWR2YW5jZWQtY29tcG9uZW50cy92aWV3LWVuY2Fwc3VsYXRpb24vdmlldy1lbmNhcHN1bGF0aW9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSxvTEFBb0wiLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
}

/***/ }),

/***/ 92:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppComponent: () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _advanced_components_advanced_components_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./advanced-components/advanced-components.component */ 1020);
/* harmony import */ var _directives_directives_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./directives/directives.component */ 6486);
/* harmony import */ var _custom_pipes_custom_pipes_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./custom-pipes/custom-pipes.component */ 4076);




class AppComponent {
  constructor() {
    this.title = "angular-pro";
  }
  static {
    this.ɵfac = function AppComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || AppComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 3,
      vars: 0,
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "advanced-components")(1, "directives")(2, "custom-pipes");
        }
      },
      dependencies: [_advanced_components_advanced_components_component__WEBPACK_IMPORTED_MODULE_0__.AdvancedComponentsComponent, _directives_directives_component__WEBPACK_IMPORTED_MODULE_1__.DirectivesComponent, _custom_pipes_custom_pipes_component__WEBPACK_IMPORTED_MODULE_2__.CustomPipesComponent],
      styles: ["/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSxnS0FBZ0siLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
}

/***/ }),

/***/ 635:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppModule: () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/platform-browser */ 436);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component */ 92);
/* harmony import */ var _advanced_components_auth_form_auth_form_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./advanced-components/auth-form/auth-form.component */ 8318);
/* harmony import */ var _advanced_components_advanced_components_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./advanced-components/advanced-components.component */ 1020);
/* harmony import */ var _advanced_components_auth_remember_auth_remember_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./advanced-components/auth-remember/auth-remember.component */ 5254);
/* harmony import */ var _advanced_components_auth_message_auth_message_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./advanced-components/auth-message/auth-message.component */ 9664);
/* harmony import */ var _advanced_components_template_container_template_container_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./advanced-components/template-container/template-container.component */ 8700);
/* harmony import */ var _advanced_components_view_encapsulation_view_encapsulation_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./advanced-components/view-encapsulation/view-encapsulation.component */ 5224);
/* harmony import */ var _advanced_components_view_encapsulation_example_one_example_one_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./advanced-components/view-encapsulation/example-one/example-one.component */ 1935);
/* harmony import */ var _advanced_components_view_encapsulation_example_two_example_two_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./advanced-components/view-encapsulation/example-two/example-two.component */ 4599);
/* harmony import */ var _advanced_components_view_encapsulation_example_three_example_three_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./advanced-components/view-encapsulation/example-three/example-three.component */ 799);
/* harmony import */ var _advanced_components_change_detection_change_detection_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./advanced-components/change-detection/change-detection.component */ 8944);
/* harmony import */ var _advanced_components_change_detection_example_1_example_1_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./advanced-components/change-detection/example-1/example-1.component */ 8937);
/* harmony import */ var _advanced_components_change_detection_example_2_example_2_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./advanced-components/change-detection/example-2/example-2.component */ 5429);
/* harmony import */ var _directives_directives_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./directives/directives.component */ 6486);
/* harmony import */ var _directives_credit_card_credit_card_directive__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./directives/credit-card/credit-card.directive */ 7333);
/* harmony import */ var _directives_tooltip_tooltip_directive__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./directives/tooltip/tooltip.directive */ 7813);
/* harmony import */ var _directives_my_for_my_for_directive__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./directives/my-for/my-for.directive */ 5031);
/* harmony import */ var _custom_pipes_custom_pipes_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./custom-pipes/custom-pipes.component */ 4076);
/* harmony import */ var _custom_pipes_filesize_pipe__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./custom-pipes/filesize.pipe */ 3199);
/* harmony import */ var _directives_highlight_highlight_directive__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./directives/highlight/highlight.directive */ 8877);
/* harmony import */ var _routes_routes_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./routes/routes.component */ 6490);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/core */ 7580);


























const routes = [{
  path: "route",
  component: _routes_routes_component__WEBPACK_IMPORTED_MODULE_20__.RoutesComponent
}];
class AppModule {
  static {
    this.ɵfac = function AppModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || AppModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent]
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵdefineInjector"]({
      providers: [_custom_pipes_filesize_pipe__WEBPACK_IMPORTED_MODULE_18__.FilesizePipe],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_22__.BrowserModule, _angular_forms__WEBPACK_IMPORTED_MODULE_23__.FormsModule, _angular_router__WEBPACK_IMPORTED_MODULE_24__.RouterModule.forRoot(routes)]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent, _advanced_components_auth_form_auth_form_component__WEBPACK_IMPORTED_MODULE_1__.AuthFormComponent, _advanced_components_advanced_components_component__WEBPACK_IMPORTED_MODULE_2__.AdvancedComponentsComponent, _advanced_components_auth_remember_auth_remember_component__WEBPACK_IMPORTED_MODULE_3__.AuthRememberComponent, _advanced_components_auth_message_auth_message_component__WEBPACK_IMPORTED_MODULE_4__.AuthMessageComponent, _advanced_components_template_container_template_container_component__WEBPACK_IMPORTED_MODULE_5__.TemplateContainerComponent, _advanced_components_view_encapsulation_view_encapsulation_component__WEBPACK_IMPORTED_MODULE_6__.ViewEncapsulationComponent, _advanced_components_view_encapsulation_example_one_example_one_component__WEBPACK_IMPORTED_MODULE_7__.ExampleOneComponent, _advanced_components_view_encapsulation_example_two_example_two_component__WEBPACK_IMPORTED_MODULE_8__.ExampleTwoComponent, _advanced_components_view_encapsulation_example_three_example_three_component__WEBPACK_IMPORTED_MODULE_9__.ExampleThreeComponent, _advanced_components_change_detection_change_detection_component__WEBPACK_IMPORTED_MODULE_10__.ChangeDetectionComponent, _advanced_components_change_detection_example_1_example_1_component__WEBPACK_IMPORTED_MODULE_11__.Example1Component, _advanced_components_change_detection_example_2_example_2_component__WEBPACK_IMPORTED_MODULE_12__.Example2Component, _directives_directives_component__WEBPACK_IMPORTED_MODULE_13__.DirectivesComponent, _directives_credit_card_credit_card_directive__WEBPACK_IMPORTED_MODULE_14__.CreditCardDirective, _directives_tooltip_tooltip_directive__WEBPACK_IMPORTED_MODULE_15__.TooltipDirective, _directives_my_for_my_for_directive__WEBPACK_IMPORTED_MODULE_16__.MyForDirective, _custom_pipes_custom_pipes_component__WEBPACK_IMPORTED_MODULE_17__.CustomPipesComponent, _custom_pipes_filesize_pipe__WEBPACK_IMPORTED_MODULE_18__.FilesizePipe, _directives_highlight_highlight_directive__WEBPACK_IMPORTED_MODULE_19__.HighlightDirective, _routes_routes_component__WEBPACK_IMPORTED_MODULE_20__.RoutesComponent],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_22__.BrowserModule, _angular_forms__WEBPACK_IMPORTED_MODULE_23__.FormsModule, _angular_router__WEBPACK_IMPORTED_MODULE_24__.RouterModule]
  });
})();

/***/ }),

/***/ 4076:
/*!********************************************************!*\
  !*** ./src/app/custom-pipes/custom-pipes.component.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CustomPipesComponent: () => (/* binding */ CustomPipesComponent)
/* harmony export */ });
/* harmony import */ var _filesize_pipe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./filesize.pipe */ 3199);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 316);




function CustomPipesComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div")(1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "filesize");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const file_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", file_r1.name, ":\u00A0", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](3, 2, file_r1.size, " MB"), "");
  }
}
function CustomPipesComponent_div_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div")(1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const file_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", file_r2.name, ":\u00A0", file_r2.size, "");
  }
}
class CustomPipesComponent {
  constructor(fileSizePipe) {
    this.fileSizePipe = fileSizePipe;
    this.files = [];
    this.mapped = [];
  }
  ngOnInit() {
    this.files = [{
      name: "logo.svg",
      size: 2120109,
      type: "image/svg"
    }, {
      name: "banner.jpg",
      size: 18029,
      type: "image/jpg"
    }, {
      name: "background.png",
      size: 1784562,
      type: "image/png"
    }];
    this.mapped = this.files.map(file => {
      console.log("size", file.size);
      return {
        name: file.name,
        size: this.fileSizePipe.transform(file.size, " MB"),
        type: file.type
      };
    });
  }
  static {
    this.ɵfac = function CustomPipesComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || CustomPipesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_filesize_pipe__WEBPACK_IMPORTED_MODULE_0__.FilesizePipe));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: CustomPipesComponent,
      selectors: [["custom-pipes"]],
      decls: 13,
      vars: 2,
      consts: [[1, "transform"], [1, "files"], [4, "ngFor", "ngForOf"]],
      template: function CustomPipesComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "hr");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h2");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Custom Pipes");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 0)(5, "div", 1)(6, "strong");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Normal Transform");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, CustomPipesComponent_div_8_Template, 4, 5, "div", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 1)(10, "strong");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Mapped Transform");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, CustomPipesComponent_div_12_Template, 3, 2, "div", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.files);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.mapped);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _filesize_pipe__WEBPACK_IMPORTED_MODULE_0__.FilesizePipe],
      styles: [".transform[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-evenly;\n}\n\n.files[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImN1c3RvbS1waXBlcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDZCQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7QUFFRiIsImZpbGUiOiJjdXN0b20tcGlwZXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudHJhbnNmb3JtIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XHJcbn1cclxuLmZpbGVzIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbn1cclxuIl19 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY3VzdG9tLXBpcGVzL2N1c3RvbS1waXBlcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDZCQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7QUFFRjtBQUNBLGdqQkFBZ2pCIiwic291cmNlc0NvbnRlbnQiOlsiLnRyYW5zZm9ybSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xyXG59XHJcbi5maWxlcyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
}

/***/ }),

/***/ 3199:
/*!***********************************************!*\
  !*** ./src/app/custom-pipes/filesize.pipe.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FilesizePipe: () => (/* binding */ FilesizePipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);

class FilesizePipe {
  transform(size, extension = "megabytes") {
    return (size / (1024 * 1024)).toFixed(2) + extension;
  }
  static {
    this.ɵfac = function FilesizePipe_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || FilesizePipe)();
    };
  }
  static {
    this.ɵpipe = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
      name: "filesize",
      type: FilesizePipe,
      pure: true
    });
  }
}

/***/ }),

/***/ 7333:
/*!*****************************************************************!*\
  !*** ./src/app/directives/credit-card/credit-card.directive.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CreditCardDirective: () => (/* binding */ CreditCardDirective)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);

class CreditCardDirective {
  constructor() {
    this.border = "";
  }
  onKeyDown(event) {
    const input = event.target;
    // better regex: /\D+/g
    let trimmed = input.value.replace(/\s+/g, "");
    if (trimmed.length > 16) {
      trimmed = trimmed.substr(0, 16);
    }
    const numbers = [];
    for (let i = 0; i < trimmed.length; i += 4) {
      numbers.push(trimmed.substr(i, 4));
    }
    input.value = numbers.join(" ");
    this.border = "";
    if (/[\D]+/.test(trimmed)) {
      this.border = "5px solid red";
    }
  }
  static {
    this.ɵfac = function CreditCardDirective_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || CreditCardDirective)();
    };
  }
  static {
    this.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: CreditCardDirective,
      selectors: [["", "credit-card", ""]],
      hostVars: 2,
      hostBindings: function CreditCardDirective_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function CreditCardDirective_input_HostBindingHandler($event) {
            return ctx.onKeyDown($event);
          });
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("border", ctx.border);
        }
      }
    });
  }
}

/***/ }),

/***/ 6486:
/*!****************************************************!*\
  !*** ./src/app/directives/directives.component.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DirectivesComponent: () => (/* binding */ DirectivesComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _credit_card_credit_card_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./credit-card/credit-card.directive */ 7333);
/* harmony import */ var _tooltip_tooltip_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tooltip/tooltip.directive */ 7813);
/* harmony import */ var _my_for_my_for_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./my-for/my-for.directive */ 5031);
/* harmony import */ var _highlight_highlight_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./highlight/highlight.directive */ 8877);






function DirectivesComponent_label_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "label", 11);
  }
}
function DirectivesComponent_li_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "json");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r3 = ctx.$implicit;
    const i_r4 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate2"](" ", i_r4, " Member: ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](2, 2, item_r3.name), " ");
  }
}
function DirectivesComponent_ng_template_25_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "json");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r5 = ctx.$implicit;
    const i_r6 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate2"]("", i_r6, " Member: ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](2, 2, item_r5.name), "");
  }
}
function DirectivesComponent_li_29_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "json");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r7 = ctx.$implicit;
    const i_r8 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate2"](" ", i_r8, " Member: ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](2, 2, item_r7.name), " ");
  }
}
function DirectivesComponent_ng_template_33_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "json");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r9 = ctx.$implicit;
    const i_r10 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate2"]("", i_r10, " Member: ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](2, 2, item_r9.name), "");
  }
}
class DirectivesComponent {
  constructor() {
    this.items = [{
      name: "Mark Hoppus",
      age: 48,
      location: "California"
    }, {
      name: "Tom Delonge",
      age: 45,
      location: "California"
    }, {
      name: "Travis Barker",
      age: 45,
      location: "California"
    }];
    setTimeout(() => {
      this.items = [...this.items, {
        name: "Matt Skiba",
        age: 44,
        location: "California"
      }];
    }, 5000);
  }
  static {
    this.ɵfac = function DirectivesComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || DirectivesComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
      type: DirectivesComponent,
      selectors: [["directives"]],
      decls: 36,
      vars: 5,
      consts: [["myTooltip", "tooltip"], ["name", "credit-card", "type", "text", "placeholder", "Enter your 16-digit card number", "credit-card", ""], ["type", "text"], ["tooltip", "", 1, "myTooltip"], [3, "mouseover", "mouseout"], ["class", "myTooltip", "tooltip", "3 digits, back of your card", 4, "ngIf"], [4, "ngFor", "ngForOf"], ["ngFor", "", 3, "ngForOf"], [4, "myFor", "myForOf"], ["myFor", "", 3, "myForOf"], ["highlight", ""], ["tooltip", "3 digits, back of your card", 1, "myTooltip"]],
      template: function DirectivesComponent_Template(rf, ctx) {
        if (rf & 1) {
          const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "hr");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "h2");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "Directives");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, " Credit Card Number\u00A0 ");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](6, "input", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](7, "br");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9, " Enter your security code\u00A0 ");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](10, "input", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11, "\u00A0 ");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "div", 3, 0)(14, "span", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("mouseover", function DirectivesComponent_Template_span_mouseover_14_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r1);
            const myTooltip_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](13);
            return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](myTooltip_r2.show());
          })("mouseout", function DirectivesComponent_Template_span_mouseout_14_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r1);
            const myTooltip_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](13);
            return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](myTooltip_r2.hide());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](15, "(?)\u00A0 ");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](16, DirectivesComponent_label_16_Template, 1, 0, "label", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "ul")(18, "div")(19, "strong");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](20, "Normal For");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](21, DirectivesComponent_li_21_Template, 3, 4, "li", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "div")(23, "strong");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](24, "Normal ForOf");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](25, DirectivesComponent_ng_template_25_Template, 3, 4, "ng-template", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](26, "div")(27, "strong");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](28, "My For");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](29, DirectivesComponent_li_29_Template, 3, 4, "li", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](30, "div")(31, "strong");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](32, "My ForOf");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](33, DirectivesComponent_ng_template_33_Template, 3, 4, "ng-template", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](34, "div", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](35, "Highlight Directive");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        }
        if (rf & 2) {
          const myTooltip_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](13);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](16);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", myTooltip_r2.getVisible());
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.items);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.items);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("myForOf", ctx.items);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("myForOf", ctx.items);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _credit_card_credit_card_directive__WEBPACK_IMPORTED_MODULE_0__.CreditCardDirective, _tooltip_tooltip_directive__WEBPACK_IMPORTED_MODULE_1__.TooltipDirective, _my_for_my_for_directive__WEBPACK_IMPORTED_MODULE_2__.MyForDirective, _highlight_highlight_directive__WEBPACK_IMPORTED_MODULE_3__.HighlightDirective, _angular_common__WEBPACK_IMPORTED_MODULE_5__.JsonPipe],
      styles: [".myTooltip[_ngcontent-%COMP%] {\n  display: inline-flex;\n}\n\nul[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-evenly;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRpcmVjdGl2ZXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxvQkFBQTtBQUNGOztBQUNBO0VBQ0UsYUFBQTtFQUNBLDZCQUFBO0FBRUYiLCJmaWxlIjoiZGlyZWN0aXZlcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5teVRvb2x0aXAge1xyXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG59XHJcbnVsIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xyXG59XHJcbiJdfQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZGlyZWN0aXZlcy9kaXJlY3RpdmVzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usb0JBQUE7QUFDRjs7QUFDQTtFQUNFLGFBQUE7RUFDQSw2QkFBQTtBQUVGO0FBQ0EsNGNBQTRjIiwic291cmNlc0NvbnRlbnQiOlsiLm15VG9vbHRpcCB7XHJcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbn1cclxudWwge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 8877:
/*!*************************************************************!*\
  !*** ./src/app/directives/highlight/highlight.directive.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HighlightDirective: () => (/* binding */ HighlightDirective)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);


class HighlightDirective {
  constructor(el) {
    this.el = el;
    this.el.nativeElement.style.backgroundColor = "yellow";
    this.el.nativeElement.style.color = "red";
  }
  static {
    this.ɵfac = function HighlightDirective_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || HighlightDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef));
    };
  }
  static {
    this.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: HighlightDirective,
      selectors: [["", "highlight", ""]]
    });
  }
}

/***/ }),

/***/ 5031:
/*!*******************************************************!*\
  !*** ./src/app/directives/my-for/my-for.directive.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MyForDirective: () => (/* binding */ MyForDirective)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);


class MyForDirective {
  set myForOf(collection) {
    this.view.clear();
    collection.forEach((item, index) => {
      this.view.createEmbeddedView(this.template, {
        $implicit: item,
        index
      });
    });
  }
  constructor(view, template) {
    this.view = view;
    this.template = template;
  }
  static {
    this.ɵfac = function MyForDirective_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || MyForDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewContainerRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef));
    };
  }
  static {
    this.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: MyForDirective,
      selectors: [["", "myFor", "", "myForOf", ""]],
      inputs: {
        myForOf: "myForOf"
      }
    });
  }
}

/***/ }),

/***/ 7813:
/*!*********************************************************!*\
  !*** ./src/app/directives/tooltip/tooltip.directive.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TooltipDirective: () => (/* binding */ TooltipDirective)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);


class TooltipDirective {
  set tooltip(value) {
    this.tooltipElement.textContent = value;
  }
  constructor(element) {
    this.element = element;
    this.tooltipElement = document.createElement("div");
    this.visible = false;
  }
  ngOnInit() {
    this.tooltipElement.className = "tooltip";
    this.element.nativeElement.appendChild(this.tooltipElement);
    this.element.nativeElement.classList.add("tooltip-container");
  }
  hide() {
    this.tooltipElement.classList.remove("tooltip--active");
    this.visible = false;
  }
  show() {
    this.tooltipElement.classList.add("tooltip--active");
    this.visible = true;
  }
  getVisible() {
    return this.visible;
  }
  static {
    this.ɵfac = function TooltipDirective_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || TooltipDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef));
    };
  }
  static {
    this.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: TooltipDirective,
      selectors: [["", "tooltip", ""]],
      inputs: {
        tooltip: "tooltip"
      },
      exportAs: ["tooltip"]
    });
  }
}

/***/ }),

/***/ 6490:
/*!********************************************!*\
  !*** ./src/app/routes/routes.component.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RoutesComponent: () => (/* binding */ RoutesComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);

class RoutesComponent {
  static {
    this.ɵfac = function RoutesComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || RoutesComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: RoutesComponent,
      selectors: [["routes"]],
      decls: 2,
      vars: 0,
      template: function RoutesComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Route");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyb3V0ZXMuY29tcG9uZW50LnNjc3MifQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcm91dGVzL3JvdXRlcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0Esb0tBQW9LIiwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
}

/***/ }),

/***/ 5312:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   environment: () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
  production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.

/***/ }),

/***/ 4429:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 436);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 635);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 5312);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
  (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule).catch(err => console.error(err));

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4429)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map