"use strict";
(self["webpackChunkangular_pro"] = self["webpackChunkangular_pro"] || []).push([["main"],{

/***/ 5806:
/*!**********************************************************************!*\
  !*** ./src/app/advanced-components/advanced-components.component.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdvancedComponentsComponent": () => (/* binding */ AdvancedComponentsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _auth_form_auth_form_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth-form/auth-form.component */ 6260);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _auth_remember_auth_remember_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth-remember/auth-remember.component */ 6909);
/* harmony import */ var _template_container_template_container_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./template-container/template-container.component */ 875);
/* harmony import */ var _view_encapsulation_view_encapsulation_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./view-encapsulation/view-encapsulation.component */ 1889);
/* harmony import */ var _change_detection_change_detection_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./change-detection/change-detection.component */ 6544);









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
}
AdvancedComponentsComponent.ɵfac = function AdvancedComponentsComponent_Factory(t) {
  return new (t || AdvancedComponentsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_5__.ComponentFactoryResolver));
};
AdvancedComponentsComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
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
  consts: [[1, "routes"], ["routerLink", "/", 1, "route"], ["routerLink", "/route"], [1, "row"], ["width", "50", "alt", "Angular Logo", "src", "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTAgMjUwIj4KICAgIDxwYXRoIGZpbGw9IiNERDAwMzEiIGQ9Ik0xMjUgMzBMMzEuOSA2My4ybDE0LjIgMTIzLjFMMTI1IDIzMGw3OC45LTQzLjcgMTQuMi0xMjMuMXoiIC8+CiAgICA8cGF0aCBmaWxsPSIjQzMwMDJGIiBkPSJNMTI1IDMwdjIyLjItLjFWMjMwbDc4LjktNDMuNyAxNC4yLTEyMy4xTDEyNSAzMHoiIC8+CiAgICA8cGF0aCAgZmlsbD0iI0ZGRkZGRiIgZD0iTTEyNSA1Mi4xTDY2LjggMTgyLjZoMjEuN2wxMS43LTI5LjJoNDkuNGwxMS43IDI5LjJIMTgzTDEyNSA1Mi4xem0xNyA4My4zaC0zNGwxNy00MC45IDE3IDQwLjl6IiAvPgogIDwvc3ZnPg=="], [3, "submitted"], ["type", "submit"], [3, "checked"], ["entry", ""], [3, "click"]],
  template: function AdvancedComponentsComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "nav", 0)(1, "a", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Home");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "a", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, "Route");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](5, "router-outlet");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "div", 3)(7, "h2");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8, "Static Components");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](9, "img", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "div")(11, "auth-form", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("submitted", function AdvancedComponentsComponent_Template_auth_form_submitted_11_listener($event) {
        return ctx.createUser($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "h3");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](13, "Create Account");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "button", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](15, " Join Us ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "auth-form", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("submitted", function AdvancedComponentsComponent_Template_auth_form_submitted_16_listener($event) {
        return ctx.loginUser($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "h3");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](18, "Login");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](19, "auth-remember", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("checked", function AdvancedComponentsComponent_Template_auth_remember_checked_19_listener($event) {
        return ctx.rememberUser($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](20, "auth-remember", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("checked", function AdvancedComponentsComponent_Template_auth_remember_checked_20_listener($event) {
        return ctx.rememberUser($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](21, "auth-remember", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("checked", function AdvancedComponentsComponent_Template_auth_remember_checked_21_listener($event) {
        return ctx.rememberUser($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](22, "button", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](23, " Login ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](24, "hr");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](25, "h2");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](26, "Dynamic Components");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](27, AdvancedComponentsComponent_ng_template_27_Template, 0, 0, "ng-template", null, 8, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](29, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](30, "button", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AdvancedComponentsComponent_Template_button_click_30_listener() {
        return ctx.destroyComponent();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](31, "Destroy");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](32, "\u00A0\n");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](33, "button", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AdvancedComponentsComponent_Template_button_click_33_listener() {
        return ctx.moveComponent();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](34, "Move");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](35, "template-container")(36, "view-encapsulation")(37, "change-detection");
    }
  },
  dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterOutlet, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterLink, _auth_form_auth_form_component__WEBPACK_IMPORTED_MODULE_0__.AuthFormComponent, _auth_remember_auth_remember_component__WEBPACK_IMPORTED_MODULE_1__.AuthRememberComponent, _template_container_template_container_component__WEBPACK_IMPORTED_MODULE_2__.TemplateContainerComponent, _view_encapsulation_view_encapsulation_component__WEBPACK_IMPORTED_MODULE_3__.ViewEncapsulationComponent, _change_detection_change_detection_component__WEBPACK_IMPORTED_MODULE_4__.ChangeDetectionComponent],
  styles: [".row[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n}\n\n.routes[_ngcontent-%COMP%] {\n  display: flex;\n}\n\n.route[_ngcontent-%COMP%] {\n  margin-right: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkdmFuY2VkLWNvbXBvbmVudHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7QUFDRjs7QUFFQTtFQUNFLGlCQUFBO0FBQ0YiLCJmaWxlIjoiYWR2YW5jZWQtY29tcG9uZW50cy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5yb3cge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG59XHJcblxyXG4ucm91dGVzIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcblxyXG4ucm91dGUge1xyXG4gIG1hcmdpbi1yaWdodDogNXB4O1xyXG59XHJcbiJdfQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYWR2YW5jZWQtY29tcG9uZW50cy9hZHZhbmNlZC1jb21wb25lbnRzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0FBQ0Y7O0FBRUE7RUFDRSxpQkFBQTtBQUNGO0FBQ0Esd2pCQUF3akIiLCJzb3VyY2VzQ29udGVudCI6WyIucm93IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxufVxyXG5cclxuLnJvdXRlcyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxufVxyXG5cclxuLnJvdXRlIHtcclxuICBtYXJnaW4tcmlnaHQ6IDVweDtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ }),

/***/ 6260:
/*!**********************************************************************!*\
  !*** ./src/app/advanced-components/auth-form/auth-form.component.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthFormComponent": () => (/* binding */ AuthFormComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 2425);
/* harmony import */ var _auth_message_auth_message_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../auth-message/auth-message.component */ 9955);
/* harmony import */ var _auth_remember_auth_remember_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../auth-remember/auth-remember.component */ 6909);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);








const _c0 = ["email"];
const _c1 = ["password"];
const _c2 = ["createButton"];
function AuthFormComponent_h3_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r1.title);
  }
}
function AuthFormComponent_button_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 8, 9);
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
const _c3 = [[["h3"]], [["auth-remember"]], [["button"]]];
const _c4 = ["h3", "auth-remember", "button"];
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
}
AuthFormComponent.ɵfac = function AuthFormComponent_Factory(t) {
  return new (t || AuthFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.Renderer2));
};
AuthFormComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
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
  consts: [[3, "ngSubmit"], ["form", "ngForm"], [4, "ngIf"], ["type", "email", "name", "email", "ngModel", ""], ["email", ""], ["type", "password", "name", "password", "ngModel", ""], ["password", ""], ["name", "createButton", 4, "ngIf"], ["name", "createButton"], ["createButton", ""]],
  template: function AuthFormComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojectionDef"](_c3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div")(1, "form", 0, 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function AuthFormComponent_Template_form_ngSubmit_1_listener() {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r7);
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](2);
        return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx.onSubmit(_r0.value));
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojection"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, AuthFormComponent_h3_4_Template, 2, 1, "h3", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, " Email address ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "input", 3, 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, " Password ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](11, "input", 5, 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojection"](13, 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojection"](14, 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](15, AuthFormComponent_button_15_Template, 3, 0, "button", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](16, AuthFormComponent_div_16_Template, 2, 0, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](17, "auth-message")(18, "auth-message")(19, "auth-message");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.title === "Dynamic Create");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](11);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.title === "Dynamic Create");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.showMessage);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("display", ctx.showMessage ? "inherit" : "none");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("display", ctx.showMessage ? "inherit" : "none");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("display", ctx.showMessage ? "inherit" : "none");
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgForm, _auth_message_auth_message_component__WEBPACK_IMPORTED_MODULE_0__.AuthMessageComponent],
  styles: [".email[_ngcontent-%COMP%] {\n  border-color: purple;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImF1dGgtZm9ybS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG9CQUFBO0FBQ0YiLCJmaWxlIjoiYXV0aC1mb3JtLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmVtYWlsIHtcclxuICBib3JkZXItY29sb3I6IHB1cnBsZTtcclxufVxyXG4iXX0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYWR2YW5jZWQtY29tcG9uZW50cy9hdXRoLWZvcm0vYXV0aC1mb3JtLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usb0JBQUE7QUFDRjtBQUNBLDRUQUE0VCIsInNvdXJjZXNDb250ZW50IjpbIi5lbWFpbCB7XHJcbiAgYm9yZGVyLWNvbG9yOiBwdXJwbGU7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 9955:
/*!****************************************************************************!*\
  !*** ./src/app/advanced-components/auth-message/auth-message.component.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthMessageComponent": () => (/* binding */ AuthMessageComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class AuthMessageComponent {
  constructor() {
    this.days = 7;
  }
}
AuthMessageComponent.ɵfac = function AuthMessageComponent_Factory(t) {
  return new (t || AuthMessageComponent)();
};
AuthMessageComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
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
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("auth-message: You will be logged in for ", ctx.days, " days");
    }
  },
  styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhdXRoLW1lc3NhZ2UuY29tcG9uZW50LnNjc3MifQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYWR2YW5jZWQtY29tcG9uZW50cy9hdXRoLW1lc3NhZ2UvYXV0aC1tZXNzYWdlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSw0S0FBNEsiLCJzb3VyY2VSb290IjoiIn0= */"]
});

/***/ }),

/***/ 6909:
/*!******************************************************************************!*\
  !*** ./src/app/advanced-components/auth-remember/auth-remember.component.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthRememberComponent": () => (/* binding */ AuthRememberComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);


class AuthRememberComponent {
  constructor() {
    this.checked = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
  }
  onChecked(value) {
    this.checked.emit(value);
  }
}
AuthRememberComponent.ɵfac = function AuthRememberComponent_Factory(t) {
  return new (t || AuthRememberComponent)();
};
AuthRememberComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: AuthRememberComponent,
  selectors: [["auth-remember"]],
  outputs: {
    checked: "checked"
  },
  decls: 3,
  vars: 0,
  consts: [["type", "checkbox", 3, "change"]],
  template: function AuthRememberComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label")(1, "input", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function AuthRememberComponent_Template_input_change_1_listener($event) {
        return ctx.onChecked($event.target.checked);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Keep me logged in\n");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
  },
  styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhdXRoLXJlbWVtYmVyLmNvbXBvbmVudC5zY3NzIn0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYWR2YW5jZWQtY29tcG9uZW50cy9hdXRoLXJlbWVtYmVyL2F1dGgtcmVtZW1iZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLDRLQUE0SyIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 6544:
/*!************************************************************************************!*\
  !*** ./src/app/advanced-components/change-detection/change-detection.component.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChangeDetectionComponent": () => (/* binding */ ChangeDetectionComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _example_1_example_1_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./example-1/example-1.component */ 4193);
/* harmony import */ var _example_2_example_2_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./example-2/example-2.component */ 5641);



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
}
ChangeDetectionComponent.ɵfac = function ChangeDetectionComponent_Factory(t) {
  return new (t || ChangeDetectionComponent)();
};
ChangeDetectionComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
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

/***/ }),

/***/ 4193:
/*!***************************************************************************************!*\
  !*** ./src/app/advanced-components/change-detection/example-1/example-1.component.ts ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Example1Component": () => (/* binding */ Example1Component)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class Example1Component {
  constructor() {}
  update() {
    this.user.name = "Matt Skiba";
  }
}
Example1Component.ɵfac = function Example1Component_Factory(t) {
  return new (t || Example1Component)();
};
Example1Component.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
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
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.user.location, " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.user.email, " ");
    }
  },
  styles: [".example-1[_ngcontent-%COMP%] {\n  font-size: 19px;\n  margin-bottom: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4YW1wbGUtMS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQUE7RUFDQSxtQkFBQTtBQUNGIiwiZmlsZSI6ImV4YW1wbGUtMS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5leGFtcGxlLTEge1xyXG4gIGZvbnQtc2l6ZTogMTlweDtcclxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG59XHJcbiJdfQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYWR2YW5jZWQtY29tcG9uZW50cy9jaGFuZ2UtZGV0ZWN0aW9uL2V4YW1wbGUtMS9leGFtcGxlLTEuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFBO0VBQ0EsbUJBQUE7QUFDRjtBQUNBLDRXQUE0VyIsInNvdXJjZXNDb250ZW50IjpbIi5leGFtcGxlLTEge1xyXG4gIGZvbnQtc2l6ZTogMTlweDtcclxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0= */"],
  changeDetection: 0
});

/***/ }),

/***/ 5641:
/*!***************************************************************************************!*\
  !*** ./src/app/advanced-components/change-detection/example-2/example-2.component.ts ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Example2Component": () => (/* binding */ Example2Component)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class Example2Component {
  constructor() {}
  update() {
    this.user.name = "Matt Skiba";
  }
}
Example2Component.ɵfac = function Example2Component_Factory(t) {
  return new (t || Example2Component)();
};
Example2Component.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
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
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.user.location, " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.user.email, " ");
    }
  },
  styles: [".example-2[_ngcontent-%COMP%] {\n  font-size: 19px;\n  margin-bottom: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4YW1wbGUtMi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQUE7RUFDQSxtQkFBQTtBQUNGIiwiZmlsZSI6ImV4YW1wbGUtMi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5leGFtcGxlLTIge1xyXG4gIGZvbnQtc2l6ZTogMTlweDtcclxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG59XHJcbiJdfQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYWR2YW5jZWQtY29tcG9uZW50cy9jaGFuZ2UtZGV0ZWN0aW9uL2V4YW1wbGUtMi9leGFtcGxlLTIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFBO0VBQ0EsbUJBQUE7QUFDRjtBQUNBLDRXQUE0VyIsInNvdXJjZXNDb250ZW50IjpbIi5leGFtcGxlLTIge1xyXG4gIGZvbnQtc2l6ZTogMTlweDtcclxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
});

/***/ }),

/***/ 875:
/*!****************************************************************************************!*\
  !*** ./src/app/advanced-components/template-container/template-container.component.ts ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TemplateContainerComponent": () => (/* binding */ TemplateContainerComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 4666);



const _c0 = ["entry"];
const _c1 = ["template"];
function TemplateContainerComponent_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0);
  }
  if (rf & 2) {
    const name_r3 = ctx.$implicit;
    const location_r4 = ctx.location;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", name_r3, " : ", location_r4, "");
  }
}
class TemplateContainerComponent {
  constructor(resolver) {
    this.resolver = resolver;
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
}
TemplateContainerComponent.ɵfac = function TemplateContainerComponent_Factory(t) {
  return new (t || TemplateContainerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ComponentFactoryResolver));
};
TemplateContainerComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
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
  consts: [["entry", ""], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], ["template", ""]],
  template: function TemplateContainerComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "hr");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "ng-template / ng-container");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", null, 0)(6, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](7, 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, TemplateContainerComponent_ng_template_8_Template, 1, 2, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", _r1)("ngTemplateOutletContext", ctx.context);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgTemplateOutlet],
  styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0ZW1wbGF0ZS1jb250YWluZXIuY29tcG9uZW50LnNjc3MifQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYWR2YW5jZWQtY29tcG9uZW50cy90ZW1wbGF0ZS1jb250YWluZXIvdGVtcGxhdGUtY29udGFpbmVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSxvTEFBb0wiLCJzb3VyY2VSb290IjoiIn0= */"]
});

/***/ }),

/***/ 9233:
/*!*********************************************************************************************!*\
  !*** ./src/app/advanced-components/view-encapsulation/example-one/example-one.component.ts ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ExampleOneComponent": () => (/* binding */ ExampleOneComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class ExampleOneComponent {
  constructor() {}
}
ExampleOneComponent.ɵfac = function ExampleOneComponent_Factory(t) {
  return new (t || ExampleOneComponent)();
};
ExampleOneComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
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

/***/ }),

/***/ 2770:
/*!*************************************************************************************************!*\
  !*** ./src/app/advanced-components/view-encapsulation/example-three/example-three.component.ts ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ExampleThreeComponent": () => (/* binding */ ExampleThreeComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class ExampleThreeComponent {
  constructor() {}
}
ExampleThreeComponent.ɵfac = function ExampleThreeComponent_Factory(t) {
  return new (t || ExampleThreeComponent)();
};
ExampleThreeComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
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

/***/ }),

/***/ 9727:
/*!*********************************************************************************************!*\
  !*** ./src/app/advanced-components/view-encapsulation/example-two/example-two.component.ts ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ExampleTwoComponent": () => (/* binding */ ExampleTwoComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class ExampleTwoComponent {
  constructor() {}
}
ExampleTwoComponent.ɵfac = function ExampleTwoComponent_Factory(t) {
  return new (t || ExampleTwoComponent)();
};
ExampleTwoComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
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

/***/ }),

/***/ 1889:
/*!****************************************************************************************!*\
  !*** ./src/app/advanced-components/view-encapsulation/view-encapsulation.component.ts ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ViewEncapsulationComponent": () => (/* binding */ ViewEncapsulationComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _example_one_example_one_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./example-one/example-one.component */ 9233);
/* harmony import */ var _example_two_example_two_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./example-two/example-two.component */ 9727);
/* harmony import */ var _example_three_example_three_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./example-three/example-three.component */ 2770);




class ViewEncapsulationComponent {
  constructor() {}
}
ViewEncapsulationComponent.ɵfac = function ViewEncapsulationComponent_Factory(t) {
  return new (t || ViewEncapsulationComponent)();
};
ViewEncapsulationComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
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
  styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ2aWV3LWVuY2Fwc3VsYXRpb24uY29tcG9uZW50LnNjc3MifQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYWR2YW5jZWQtY29tcG9uZW50cy92aWV3LWVuY2Fwc3VsYXRpb24vdmlldy1lbmNhcHN1bGF0aW9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSxvTEFBb0wiLCJzb3VyY2VSb290IjoiIn0= */"]
});

/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _advanced_components_advanced_components_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./advanced-components/advanced-components.component */ 5806);
/* harmony import */ var _directives_directives_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./directives/directives.component */ 753);
/* harmony import */ var _custom_pipes_custom_pipes_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./custom-pipes/custom-pipes.component */ 3974);




class AppComponent {
  constructor() {
    this.title = "angular-pro";
  }
}
AppComponent.ɵfac = function AppComponent_Factory(t) {
  return new (t || AppComponent)();
};
AppComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
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
  styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSxnS0FBZ0siLCJzb3VyY2VSb290IjoiIn0= */"]
});

/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _advanced_components_auth_form_auth_form_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./advanced-components/auth-form/auth-form.component */ 6260);
/* harmony import */ var _advanced_components_advanced_components_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./advanced-components/advanced-components.component */ 5806);
/* harmony import */ var _advanced_components_auth_remember_auth_remember_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./advanced-components/auth-remember/auth-remember.component */ 6909);
/* harmony import */ var _advanced_components_auth_message_auth_message_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./advanced-components/auth-message/auth-message.component */ 9955);
/* harmony import */ var _advanced_components_template_container_template_container_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./advanced-components/template-container/template-container.component */ 875);
/* harmony import */ var _advanced_components_view_encapsulation_view_encapsulation_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./advanced-components/view-encapsulation/view-encapsulation.component */ 1889);
/* harmony import */ var _advanced_components_view_encapsulation_example_one_example_one_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./advanced-components/view-encapsulation/example-one/example-one.component */ 9233);
/* harmony import */ var _advanced_components_view_encapsulation_example_two_example_two_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./advanced-components/view-encapsulation/example-two/example-two.component */ 9727);
/* harmony import */ var _advanced_components_view_encapsulation_example_three_example_three_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./advanced-components/view-encapsulation/example-three/example-three.component */ 2770);
/* harmony import */ var _advanced_components_change_detection_change_detection_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./advanced-components/change-detection/change-detection.component */ 6544);
/* harmony import */ var _advanced_components_change_detection_example_1_example_1_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./advanced-components/change-detection/example-1/example-1.component */ 4193);
/* harmony import */ var _advanced_components_change_detection_example_2_example_2_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./advanced-components/change-detection/example-2/example-2.component */ 5641);
/* harmony import */ var _directives_directives_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./directives/directives.component */ 753);
/* harmony import */ var _directives_credit_card_credit_card_directive__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./directives/credit-card/credit-card.directive */ 7593);
/* harmony import */ var _directives_tooltip_tooltip_directive__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./directives/tooltip/tooltip.directive */ 3848);
/* harmony import */ var _directives_my_for_my_for_directive__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./directives/my-for/my-for.directive */ 8467);
/* harmony import */ var _custom_pipes_custom_pipes_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./custom-pipes/custom-pipes.component */ 3974);
/* harmony import */ var _custom_pipes_filesize_pipe__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./custom-pipes/filesize.pipe */ 3501);
/* harmony import */ var _directives_highlight_highlight_directive__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./directives/highlight/highlight.directive */ 1036);
/* harmony import */ var _routes_routes_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./routes/routes.component */ 2979);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/core */ 2560);


























const routes = [{
  path: "route",
  component: _routes_routes_component__WEBPACK_IMPORTED_MODULE_20__.RoutesComponent
}];
class AppModule {}
AppModule.ɵfac = function AppModule_Factory(t) {
  return new (t || AppModule)();
};
AppModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵdefineNgModule"]({
  type: AppModule,
  bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent]
});
AppModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵdefineInjector"]({
  providers: [_custom_pipes_filesize_pipe__WEBPACK_IMPORTED_MODULE_18__.FilesizePipe],
  imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_22__.BrowserModule, _angular_forms__WEBPACK_IMPORTED_MODULE_23__.FormsModule, _angular_router__WEBPACK_IMPORTED_MODULE_24__.RouterModule.forRoot(routes)]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent, _advanced_components_auth_form_auth_form_component__WEBPACK_IMPORTED_MODULE_1__.AuthFormComponent, _advanced_components_advanced_components_component__WEBPACK_IMPORTED_MODULE_2__.AdvancedComponentsComponent, _advanced_components_auth_remember_auth_remember_component__WEBPACK_IMPORTED_MODULE_3__.AuthRememberComponent, _advanced_components_auth_message_auth_message_component__WEBPACK_IMPORTED_MODULE_4__.AuthMessageComponent, _advanced_components_template_container_template_container_component__WEBPACK_IMPORTED_MODULE_5__.TemplateContainerComponent, _advanced_components_view_encapsulation_view_encapsulation_component__WEBPACK_IMPORTED_MODULE_6__.ViewEncapsulationComponent, _advanced_components_view_encapsulation_example_one_example_one_component__WEBPACK_IMPORTED_MODULE_7__.ExampleOneComponent, _advanced_components_view_encapsulation_example_two_example_two_component__WEBPACK_IMPORTED_MODULE_8__.ExampleTwoComponent, _advanced_components_view_encapsulation_example_three_example_three_component__WEBPACK_IMPORTED_MODULE_9__.ExampleThreeComponent, _advanced_components_change_detection_change_detection_component__WEBPACK_IMPORTED_MODULE_10__.ChangeDetectionComponent, _advanced_components_change_detection_example_1_example_1_component__WEBPACK_IMPORTED_MODULE_11__.Example1Component, _advanced_components_change_detection_example_2_example_2_component__WEBPACK_IMPORTED_MODULE_12__.Example2Component, _directives_directives_component__WEBPACK_IMPORTED_MODULE_13__.DirectivesComponent, _directives_credit_card_credit_card_directive__WEBPACK_IMPORTED_MODULE_14__.CreditCardDirective, _directives_tooltip_tooltip_directive__WEBPACK_IMPORTED_MODULE_15__.TooltipDirective, _directives_my_for_my_for_directive__WEBPACK_IMPORTED_MODULE_16__.MyForDirective, _custom_pipes_custom_pipes_component__WEBPACK_IMPORTED_MODULE_17__.CustomPipesComponent, _custom_pipes_filesize_pipe__WEBPACK_IMPORTED_MODULE_18__.FilesizePipe, _directives_highlight_highlight_directive__WEBPACK_IMPORTED_MODULE_19__.HighlightDirective, _routes_routes_component__WEBPACK_IMPORTED_MODULE_20__.RoutesComponent],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_22__.BrowserModule, _angular_forms__WEBPACK_IMPORTED_MODULE_23__.FormsModule, _angular_router__WEBPACK_IMPORTED_MODULE_24__.RouterModule]
  });
})();

/***/ }),

/***/ 3974:
/*!********************************************************!*\
  !*** ./src/app/custom-pipes/custom-pipes.component.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CustomPipesComponent": () => (/* binding */ CustomPipesComponent)
/* harmony export */ });
/* harmony import */ var _filesize_pipe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./filesize.pipe */ 3501);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4666);




function CustomPipesComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div")(1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "filesize");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const file_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", file_r2.name, ":\u00A0", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](3, 2, file_r2.size, " MB"), "");
  }
}
function CustomPipesComponent_div_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div")(1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const file_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", file_r3.name, ":\u00A0", file_r3.size, "");
  }
}
class CustomPipesComponent {
  constructor(fileSizePipe) {
    this.fileSizePipe = fileSizePipe;
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
}
CustomPipesComponent.ɵfac = function CustomPipesComponent_Factory(t) {
  return new (t || CustomPipesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_filesize_pipe__WEBPACK_IMPORTED_MODULE_0__.FilesizePipe));
};
CustomPipesComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
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

/***/ }),

/***/ 3501:
/*!***********************************************!*\
  !*** ./src/app/custom-pipes/filesize.pipe.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FilesizePipe": () => (/* binding */ FilesizePipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class FilesizePipe {
  transform(size, extension = "megabytes") {
    return (size / (1024 * 1024)).toFixed(2) + extension;
  }
}
FilesizePipe.ɵfac = function FilesizePipe_Factory(t) {
  return new (t || FilesizePipe)();
};
FilesizePipe.ɵpipe = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
  name: "filesize",
  type: FilesizePipe,
  pure: true
});

/***/ }),

/***/ 7593:
/*!*****************************************************************!*\
  !*** ./src/app/directives/credit-card/credit-card.directive.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CreditCardDirective": () => (/* binding */ CreditCardDirective)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class CreditCardDirective {
  constructor() {}
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
}
CreditCardDirective.ɵfac = function CreditCardDirective_Factory(t) {
  return new (t || CreditCardDirective)();
};
CreditCardDirective.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
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

/***/ }),

/***/ 753:
/*!****************************************************!*\
  !*** ./src/app/directives/directives.component.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DirectivesComponent": () => (/* binding */ DirectivesComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _credit_card_credit_card_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./credit-card/credit-card.directive */ 7593);
/* harmony import */ var _tooltip_tooltip_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tooltip/tooltip.directive */ 3848);
/* harmony import */ var _my_for_my_for_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./my-for/my-for.directive */ 8467);
/* harmony import */ var _highlight_highlight_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./highlight/highlight.directive */ 1036);






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
    const item_r6 = ctx.$implicit;
    const i_r7 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate2"](" ", i_r7, " Member: ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](2, 2, item_r6.name), " ");
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
    const item_r8 = ctx.$implicit;
    const i_r9 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate2"]("", i_r9, " Member: ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](2, 2, item_r8.name), "");
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
    const item_r10 = ctx.$implicit;
    const i_r11 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate2"](" ", i_r11, " Member: ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](2, 2, item_r10.name), " ");
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
    const item_r12 = ctx.$implicit;
    const i_r13 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate2"]("", i_r13, " Member: ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](2, 2, item_r12.name), "");
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
}
DirectivesComponent.ɵfac = function DirectivesComponent_Factory(t) {
  return new (t || DirectivesComponent)();
};
DirectivesComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
  type: DirectivesComponent,
  selectors: [["directives"]],
  decls: 36,
  vars: 5,
  consts: [["name", "credit-card", "type", "text", "placeholder", "Enter your 16-digit card number", "credit-card", ""], ["type", "text"], ["tooltip", "", 1, "myTooltip"], ["myTooltip", "tooltip"], [3, "mouseover", "mouseout"], ["class", "myTooltip", "tooltip", "3 digits, back of your card", 4, "ngIf"], [4, "ngFor", "ngForOf"], ["ngFor", "", 3, "ngForOf"], [4, "myFor", "myForOf"], ["myFor", "", 3, "myForOf"], ["highlight", ""], ["tooltip", "3 digits, back of your card", 1, "myTooltip"]],
  template: function DirectivesComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "hr");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "h2");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "Directives");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, " Credit Card Number\u00A0 ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](6, "input", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](7, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9, " Enter your security code\u00A0 ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](10, "input", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11, "\u00A0 ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "div", 2, 3)(14, "span", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("mouseover", function DirectivesComponent_Template_span_mouseover_14_listener() {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r14);
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](13);
        return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](_r0.show());
      })("mouseout", function DirectivesComponent_Template_span_mouseout_14_listener() {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r14);
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](13);
        return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](_r0.hide());
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
      const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](13);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](16);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", _r0.getVisible());
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

/***/ }),

/***/ 1036:
/*!*************************************************************!*\
  !*** ./src/app/directives/highlight/highlight.directive.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HighlightDirective": () => (/* binding */ HighlightDirective)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);


class HighlightDirective {
  constructor(el) {
    this.el = el;
    this.el.nativeElement.style.backgroundColor = "yellow";
  }
}
HighlightDirective.ɵfac = function HighlightDirective_Factory(t) {
  return new (t || HighlightDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef));
};
HighlightDirective.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: HighlightDirective,
  selectors: [["", "highlight", ""]]
});

/***/ }),

/***/ 8467:
/*!*******************************************************!*\
  !*** ./src/app/directives/my-for/my-for.directive.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MyForDirective": () => (/* binding */ MyForDirective)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);


class MyForDirective {
  constructor(view, template) {
    this.view = view;
    this.template = template;
  }
  set myForOf(collection) {
    this.view.clear();
    collection.forEach((item, index) => {
      this.view.createEmbeddedView(this.template, {
        $implicit: item,
        index
      });
    });
  }
}
MyForDirective.ɵfac = function MyForDirective_Factory(t) {
  return new (t || MyForDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewContainerRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef));
};
MyForDirective.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: MyForDirective,
  selectors: [["", "myFor", "", "myForOf", ""]],
  inputs: {
    myForOf: "myForOf"
  }
});

/***/ }),

/***/ 3848:
/*!*********************************************************!*\
  !*** ./src/app/directives/tooltip/tooltip.directive.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TooltipDirective": () => (/* binding */ TooltipDirective)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);


class TooltipDirective {
  constructor(element) {
    this.element = element;
    this.tooltipElement = document.createElement("div");
    this.visible = false;
  }
  set tooltip(value) {
    this.tooltipElement.textContent = value;
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
}
TooltipDirective.ɵfac = function TooltipDirective_Factory(t) {
  return new (t || TooltipDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef));
};
TooltipDirective.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: TooltipDirective,
  selectors: [["", "tooltip", ""]],
  inputs: {
    tooltip: "tooltip"
  },
  exportAs: ["tooltip"]
});

/***/ }),

/***/ 2979:
/*!********************************************!*\
  !*** ./src/app/routes/routes.component.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RoutesComponent": () => (/* binding */ RoutesComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class RoutesComponent {}
RoutesComponent.ɵfac = function RoutesComponent_Factory(t) {
  return new (t || RoutesComponent)();
};
RoutesComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
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
  styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyb3V0ZXMuY29tcG9uZW50LnNjc3MifQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcm91dGVzL3JvdXRlcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0Esb0tBQW9LIiwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
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

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
  (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule).catch(err => console.error(err));

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map