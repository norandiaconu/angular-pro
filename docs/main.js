(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "/I20":
/*!*********************************************************************************************!*\
  !*** ./src/app/advanced-components/view-encapsulation/example-one/example-one.component.ts ***!
  \*********************************************************************************************/
/*! exports provided: ExampleOneComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExampleOneComponent", function() { return ExampleOneComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class ExampleOneComponent {
    constructor() { }
}
ExampleOneComponent.ɵfac = function ExampleOneComponent_Factory(t) { return new (t || ExampleOneComponent)(); };
ExampleOneComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ExampleOneComponent, selectors: [["example-one"]], decls: 2, vars: 0, consts: [[1, "example-one"]], template: function ExampleOneComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Example One");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".example-one[_ngcontent-%COMP%] {\n  background: purple;\n  font-size: 19px;\n  color: white;\n  margin-bottom: 50px;\n  padding: 10px 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcZXhhbXBsZS1vbmUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQUNGIiwiZmlsZSI6ImV4YW1wbGUtb25lLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmV4YW1wbGUtb25lIHtcclxuICBiYWNrZ3JvdW5kOiBwdXJwbGU7XHJcbiAgZm9udC1zaXplOiAxOXB4O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBtYXJnaW4tYm90dG9tOiA1MHB4O1xyXG4gIHBhZGRpbmc6IDEwcHggMjBweDtcclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\p\1\angular-pro\src\main.ts */"zUnb");


/***/ }),

/***/ "11nS":
/*!****************************************************************************************!*\
  !*** ./src/app/advanced-components/view-encapsulation/view-encapsulation.component.ts ***!
  \****************************************************************************************/
/*! exports provided: ViewEncapsulationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewEncapsulationComponent", function() { return ViewEncapsulationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _example_one_example_one_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./example-one/example-one.component */ "/I20");
/* harmony import */ var _example_two_example_two_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./example-two/example-two.component */ "ytaV");
/* harmony import */ var _example_three_example_three_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./example-three/example-three.component */ "9QLl");




class ViewEncapsulationComponent {
    constructor() { }
}
ViewEncapsulationComponent.ɵfac = function ViewEncapsulationComponent_Factory(t) { return new (t || ViewEncapsulationComponent)(); };
ViewEncapsulationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ViewEncapsulationComponent, selectors: [["view-encapsulation"]], decls: 7, vars: 0, template: function ViewEncapsulationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "View Encapsulation");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "example-one");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "example-two");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "example-three");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_example_one_example_one_component__WEBPACK_IMPORTED_MODULE_1__["ExampleOneComponent"], _example_two_example_two_component__WEBPACK_IMPORTED_MODULE_2__["ExampleTwoComponent"], _example_three_example_three_component__WEBPACK_IMPORTED_MODULE_3__["ExampleThreeComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ2aWV3LWVuY2Fwc3VsYXRpb24uY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ "330w":
/*!**********************************************************************!*\
  !*** ./src/app/advanced-components/advanced-components.component.ts ***!
  \**********************************************************************/
/*! exports provided: AdvancedComponentsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdvancedComponentsComponent", function() { return AdvancedComponentsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _auth_form_auth_form_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth-form/auth-form.component */ "hAWf");
/* harmony import */ var _auth_remember_auth_remember_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth-remember/auth-remember.component */ "bXFB");
/* harmony import */ var _template_container_template_container_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./template-container/template-container.component */ "A1cw");
/* harmony import */ var _view_encapsulation_view_encapsulation_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./view-encapsulation/view-encapsulation.component */ "11nS");
/* harmony import */ var _change_detection_change_detection_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./change-detection/change-detection.component */ "vrPc");








const _c0 = ["entry"];
const _c1 = ["template"];
function AdvancedComponentsComponent_ng_template_21_Template(rf, ctx) { }
class AdvancedComponentsComponent {
    constructor(resolver) {
        this.resolver = resolver;
        this.rememberMe = false;
    }
    ngAfterContentInit() {
        const authFormFactory = this.resolver.resolveComponentFactory(_auth_form_auth_form_component__WEBPACK_IMPORTED_MODULE_1__["AuthFormComponent"]);
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
AdvancedComponentsComponent.ɵfac = function AdvancedComponentsComponent_Factory(t) { return new (t || AdvancedComponentsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"])); };
AdvancedComponentsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AdvancedComponentsComponent, selectors: [["advanced-components"]], viewQuery: function AdvancedComponentsComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.entry = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.template = _t.first);
    } }, decls: 32, vars: 0, consts: [[1, "row"], ["width", "50", "alt", "Angular Logo", "src", "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTAgMjUwIj4KICAgIDxwYXRoIGZpbGw9IiNERDAwMzEiIGQ9Ik0xMjUgMzBMMzEuOSA2My4ybDE0LjIgMTIzLjFMMTI1IDIzMGw3OC45LTQzLjcgMTQuMi0xMjMuMXoiIC8+CiAgICA8cGF0aCBmaWxsPSIjQzMwMDJGIiBkPSJNMTI1IDMwdjIyLjItLjFWMjMwbDc4LjktNDMuNyAxNC4yLTEyMy4xTDEyNSAzMHoiIC8+CiAgICA8cGF0aCAgZmlsbD0iI0ZGRkZGRiIgZD0iTTEyNSA1Mi4xTDY2LjggMTgyLjZoMjEuN2wxMS43LTI5LjJoNDkuNGwxMS43IDI5LjJIMTgzTDEyNSA1Mi4xem0xNyA4My4zaC0zNGwxNy00MC45IDE3IDQwLjl6IiAvPgogIDwvc3ZnPg=="], [3, "submitted"], ["type", "submit"], [3, "checked"], ["entry", ""], [3, "click"]], template: function AdvancedComponentsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Static Components");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "auth-form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("submitted", function AdvancedComponentsComponent_Template_auth_form_submitted_5_listener($event) { return ctx.createUser($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Create Account");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Join Us ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "auth-form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("submitted", function AdvancedComponentsComponent_Template_auth_form_submitted_10_listener($event) { return ctx.loginUser($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "auth-remember", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("checked", function AdvancedComponentsComponent_Template_auth_remember_checked_13_listener($event) { return ctx.rememberUser($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "auth-remember", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("checked", function AdvancedComponentsComponent_Template_auth_remember_checked_14_listener($event) { return ctx.rememberUser($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "auth-remember", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("checked", function AdvancedComponentsComponent_Template_auth_remember_checked_15_listener($event) { return ctx.rememberUser($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " Login ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Dynamic Components");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, AdvancedComponentsComponent_ng_template_21_Template, 0, 0, "ng-template", null, 5, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdvancedComponentsComponent_Template_button_click_24_listener() { return ctx.destroyComponent(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Destroy");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "\u00A0\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdvancedComponentsComponent_Template_button_click_27_listener() { return ctx.moveComponent(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Move");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "template-container");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "view-encapsulation");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "change-detection");
    } }, directives: [_auth_form_auth_form_component__WEBPACK_IMPORTED_MODULE_1__["AuthFormComponent"], _auth_remember_auth_remember_component__WEBPACK_IMPORTED_MODULE_2__["AuthRememberComponent"], _template_container_template_container_component__WEBPACK_IMPORTED_MODULE_3__["TemplateContainerComponent"], _view_encapsulation_view_encapsulation_component__WEBPACK_IMPORTED_MODULE_4__["ViewEncapsulationComponent"], _change_detection_change_detection_component__WEBPACK_IMPORTED_MODULE_5__["ChangeDetectionComponent"]], styles: [".row[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGFkdmFuY2VkLWNvbXBvbmVudHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7QUFDRiIsImZpbGUiOiJhZHZhbmNlZC1jb21wb25lbnRzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnJvdyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ "7PrI":
/*!*******************************************************!*\
  !*** ./src/app/directives/my-for/my-for.directive.ts ***!
  \*******************************************************/
/*! exports provided: MyForDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyForDirective", function() { return MyForDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


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
MyForDirective.ɵfac = function MyForDirective_Factory(t) { return new (t || MyForDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"])); };
MyForDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: MyForDirective, selectors: [["", "myFor", "", "myForOf", ""]], inputs: { myForOf: "myForOf" } });


/***/ }),

/***/ "8S+D":
/*!*********************************************************!*\
  !*** ./src/app/directives/tooltip/tooltip.directive.ts ***!
  \*********************************************************/
/*! exports provided: TooltipDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TooltipDirective", function() { return TooltipDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


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
TooltipDirective.ɵfac = function TooltipDirective_Factory(t) { return new (t || TooltipDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])); };
TooltipDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: TooltipDirective, selectors: [["", "tooltip", ""]], inputs: { tooltip: "tooltip" }, exportAs: ["tooltip"] });


/***/ }),

/***/ "9QLl":
/*!*************************************************************************************************!*\
  !*** ./src/app/advanced-components/view-encapsulation/example-three/example-three.component.ts ***!
  \*************************************************************************************************/
/*! exports provided: ExampleThreeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExampleThreeComponent", function() { return ExampleThreeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class ExampleThreeComponent {
    constructor() { }
}
ExampleThreeComponent.ɵfac = function ExampleThreeComponent_Factory(t) { return new (t || ExampleThreeComponent)(); };
ExampleThreeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ExampleThreeComponent, selectors: [["example-three"]], decls: 4, vars: 0, consts: [[1, "example-three"], [1, "example-one"]], template: function ExampleThreeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Example Three");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Example One!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".example-one {\n  border: 2px solid green;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcZXhhbXBsZS10aHJlZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHVCQUFBO0FBQ0YiLCJmaWxlIjoiZXhhbXBsZS10aHJlZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5leGFtcGxlLW9uZSB7XHJcbiAgYm9yZGVyOiAycHggc29saWQgZ3JlZW47XHJcbn1cclxuIl19 */"], encapsulation: 2 });


/***/ }),

/***/ "A1cw":
/*!****************************************************************************************!*\
  !*** ./src/app/advanced-components/template-container/template-container.component.ts ***!
  \****************************************************************************************/
/*! exports provided: TemplateContainerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TemplateContainerComponent", function() { return TemplateContainerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");



const _c0 = ["entry"];
const _c1 = ["template"];
function TemplateContainerComponent_ng_template_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0);
} if (rf & 2) {
    const name_r3 = ctx.$implicit;
    const location_r4 = ctx.location;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", name_r3, " : ", location_r4, "");
} }
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
TemplateContainerComponent.ɵfac = function TemplateContainerComponent_Factory(t) { return new (t || TemplateContainerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"])); };
TemplateContainerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TemplateContainerComponent, selectors: [["template-container"]], viewQuery: function TemplateContainerComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, 3);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.entry = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.template = _t.first);
    } }, decls: 10, vars: 2, consts: [["entry", ""], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], ["template", ""]], template: function TemplateContainerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "ng-template / ng-container");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", null, 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](7, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, TemplateContainerComponent_ng_template_8_Template, 1, 2, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", _r1)("ngTemplateOutletContext", ctx.context);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgTemplateOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0ZW1wbGF0ZS1jb250YWluZXIuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ "AytR":
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

/***/ "JqBd":
/*!********************************************************!*\
  !*** ./src/app/custom-pipes/custom-pipes.component.ts ***!
  \********************************************************/
/*! exports provided: CustomPipesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomPipesComponent", function() { return CustomPipesComponent; });
/* harmony import */ var _filesize_pipe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./filesize.pipe */ "uucD");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");




function CustomPipesComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "filesize");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const file_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", file_r2.name, ":\u00A0", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](3, 2, file_r2.size, " MB"), "");
} }
function CustomPipesComponent_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const file_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", file_r3.name, ":\u00A0", file_r3.size, "");
} }
class CustomPipesComponent {
    constructor(fileSizePipe) {
        this.fileSizePipe = fileSizePipe;
    }
    ngOnInit() {
        this.files = [
            {
                name: "logo.svg",
                size: 2120109,
                type: "image/svg"
            },
            {
                name: "banner.jpg",
                size: 18029,
                type: "image/jpg"
            },
            {
                name: "background.png",
                size: 1784562,
                type: "image/png"
            }
        ];
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
CustomPipesComponent.ɵfac = function CustomPipesComponent_Factory(t) { return new (t || CustomPipesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_filesize_pipe__WEBPACK_IMPORTED_MODULE_0__["FilesizePipe"])); };
CustomPipesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: CustomPipesComponent, selectors: [["custom-pipes"]], decls: 13, vars: 2, consts: [[1, "transform"], [1, "files"], [4, "ngFor", "ngForOf"]], template: function CustomPipesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Custom Pipes");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Normal Transform");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, CustomPipesComponent_div_8_Template, 4, 5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Mapped Transform");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, CustomPipesComponent_div_12_Template, 3, 2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.files);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.mapped);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]], pipes: [_filesize_pipe__WEBPACK_IMPORTED_MODULE_0__["FilesizePipe"]], styles: [".transform[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-evenly;\n}\n\n.files[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGN1c3RvbS1waXBlcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDZCQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7QUFFRiIsImZpbGUiOiJjdXN0b20tcGlwZXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudHJhbnNmb3JtIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XHJcbn1cclxuLmZpbGVzIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ "RyE/":
/*!****************************************************************************!*\
  !*** ./src/app/advanced-components/auth-message/auth-message.component.ts ***!
  \****************************************************************************/
/*! exports provided: AuthMessageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthMessageComponent", function() { return AuthMessageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class AuthMessageComponent {
    constructor() {
        this.days = 7;
    }
}
AuthMessageComponent.ɵfac = function AuthMessageComponent_Factory(t) { return new (t || AuthMessageComponent)(); };
AuthMessageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AuthMessageComponent, selectors: [["auth-message"]], decls: 2, vars: 1, template: function AuthMessageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("auth-message: You will be logged in for ", ctx.days, " days");
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhdXRoLW1lc3NhZ2UuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ "SWpM":
/*!***************************************************************************************!*\
  !*** ./src/app/advanced-components/change-detection/example-2/example-2.component.ts ***!
  \***************************************************************************************/
/*! exports provided: Example2Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Example2Component", function() { return Example2Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class Example2Component {
    constructor() { }
    update() {
        this.user.name = "Matt Skiba";
    }
}
Example2Component.ɵfac = function Example2Component_Factory(t) { return new (t || Example2Component)(); };
Example2Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: Example2Component, selectors: [["example-2"]], inputs: { user: "user" }, decls: 15, vars: 4, consts: [[1, "example-2"], [3, "click"]], template: function Example2Component_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3");
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function Example2Component_Template_button_click_11_listener() { return ctx.update(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Internal update");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "* should update");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.user.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.user.age, " years old");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.user.location, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.user.email, " ");
    } }, styles: [".example-2[_ngcontent-%COMP%] {\n  font-size: 19px;\n  margin-bottom: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcZXhhbXBsZS0yLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBQTtFQUNBLG1CQUFBO0FBQ0YiLCJmaWxlIjoiZXhhbXBsZS0yLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmV4YW1wbGUtMiB7XHJcbiAgZm9udC1zaXplOiAxOXB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _advanced_components_advanced_components_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./advanced-components/advanced-components.component */ "330w");
/* harmony import */ var _directives_directives_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./directives/directives.component */ "pv01");
/* harmony import */ var _custom_pipes_custom_pipes_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./custom-pipes/custom-pipes.component */ "JqBd");




class AppComponent {
    constructor() {
        this.title = "angular-pro";
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 3, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "advanced-components");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "directives");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "custom-pipes");
    } }, directives: [_advanced_components_advanced_components_component__WEBPACK_IMPORTED_MODULE_1__["AdvancedComponentsComponent"], _directives_directives_component__WEBPACK_IMPORTED_MODULE_2__["DirectivesComponent"], _custom_pipes_custom_pipes_component__WEBPACK_IMPORTED_MODULE_3__["CustomPipesComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _advanced_components_auth_form_auth_form_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./advanced-components/auth-form/auth-form.component */ "hAWf");
/* harmony import */ var _advanced_components_advanced_components_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./advanced-components/advanced-components.component */ "330w");
/* harmony import */ var _advanced_components_auth_remember_auth_remember_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./advanced-components/auth-remember/auth-remember.component */ "bXFB");
/* harmony import */ var _advanced_components_auth_message_auth_message_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./advanced-components/auth-message/auth-message.component */ "RyE/");
/* harmony import */ var _advanced_components_template_container_template_container_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./advanced-components/template-container/template-container.component */ "A1cw");
/* harmony import */ var _advanced_components_view_encapsulation_view_encapsulation_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./advanced-components/view-encapsulation/view-encapsulation.component */ "11nS");
/* harmony import */ var _advanced_components_view_encapsulation_example_one_example_one_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./advanced-components/view-encapsulation/example-one/example-one.component */ "/I20");
/* harmony import */ var _advanced_components_view_encapsulation_example_two_example_two_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./advanced-components/view-encapsulation/example-two/example-two.component */ "ytaV");
/* harmony import */ var _advanced_components_view_encapsulation_example_three_example_three_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./advanced-components/view-encapsulation/example-three/example-three.component */ "9QLl");
/* harmony import */ var _advanced_components_change_detection_change_detection_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./advanced-components/change-detection/change-detection.component */ "vrPc");
/* harmony import */ var _advanced_components_change_detection_example_1_example_1_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./advanced-components/change-detection/example-1/example-1.component */ "lNbW");
/* harmony import */ var _advanced_components_change_detection_example_2_example_2_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./advanced-components/change-detection/example-2/example-2.component */ "SWpM");
/* harmony import */ var _directives_directives_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./directives/directives.component */ "pv01");
/* harmony import */ var _directives_credit_card_credit_card_directive__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./directives/credit-card/credit-card.directive */ "lKwU");
/* harmony import */ var _directives_tooltip_tooltip_directive__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./directives/tooltip/tooltip.directive */ "8S+D");
/* harmony import */ var _directives_my_for_my_for_directive__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./directives/my-for/my-for.directive */ "7PrI");
/* harmony import */ var _custom_pipes_custom_pipes_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./custom-pipes/custom-pipes.component */ "JqBd");
/* harmony import */ var _custom_pipes_filesize_pipe__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./custom-pipes/filesize.pipe */ "uucD");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/core */ "fXoL");






















class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵdefineInjector"]({ providers: [_custom_pipes_filesize_pipe__WEBPACK_IMPORTED_MODULE_20__["FilesizePipe"]], imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
        _advanced_components_auth_form_auth_form_component__WEBPACK_IMPORTED_MODULE_3__["AuthFormComponent"],
        _advanced_components_advanced_components_component__WEBPACK_IMPORTED_MODULE_4__["AdvancedComponentsComponent"],
        _advanced_components_auth_remember_auth_remember_component__WEBPACK_IMPORTED_MODULE_5__["AuthRememberComponent"],
        _advanced_components_auth_message_auth_message_component__WEBPACK_IMPORTED_MODULE_6__["AuthMessageComponent"],
        _advanced_components_template_container_template_container_component__WEBPACK_IMPORTED_MODULE_7__["TemplateContainerComponent"],
        _advanced_components_view_encapsulation_view_encapsulation_component__WEBPACK_IMPORTED_MODULE_8__["ViewEncapsulationComponent"],
        _advanced_components_view_encapsulation_example_one_example_one_component__WEBPACK_IMPORTED_MODULE_9__["ExampleOneComponent"],
        _advanced_components_view_encapsulation_example_two_example_two_component__WEBPACK_IMPORTED_MODULE_10__["ExampleTwoComponent"],
        _advanced_components_view_encapsulation_example_three_example_three_component__WEBPACK_IMPORTED_MODULE_11__["ExampleThreeComponent"],
        _advanced_components_change_detection_change_detection_component__WEBPACK_IMPORTED_MODULE_12__["ChangeDetectionComponent"],
        _advanced_components_change_detection_example_1_example_1_component__WEBPACK_IMPORTED_MODULE_13__["Example1Component"],
        _advanced_components_change_detection_example_2_example_2_component__WEBPACK_IMPORTED_MODULE_14__["Example2Component"],
        _directives_directives_component__WEBPACK_IMPORTED_MODULE_15__["DirectivesComponent"],
        _directives_credit_card_credit_card_directive__WEBPACK_IMPORTED_MODULE_16__["CreditCardDirective"],
        _directives_tooltip_tooltip_directive__WEBPACK_IMPORTED_MODULE_17__["TooltipDirective"],
        _directives_my_for_my_for_directive__WEBPACK_IMPORTED_MODULE_18__["MyForDirective"],
        _custom_pipes_custom_pipes_component__WEBPACK_IMPORTED_MODULE_19__["CustomPipesComponent"],
        _custom_pipes_filesize_pipe__WEBPACK_IMPORTED_MODULE_20__["FilesizePipe"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"]] }); })();


/***/ }),

/***/ "bXFB":
/*!******************************************************************************!*\
  !*** ./src/app/advanced-components/auth-remember/auth-remember.component.ts ***!
  \******************************************************************************/
/*! exports provided: AuthRememberComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthRememberComponent", function() { return AuthRememberComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class AuthRememberComponent {
    constructor() {
        this.checked = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    onChecked(value) {
        this.checked.emit(value);
    }
}
AuthRememberComponent.ɵfac = function AuthRememberComponent_Factory(t) { return new (t || AuthRememberComponent)(); };
AuthRememberComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AuthRememberComponent, selectors: [["auth-remember"]], outputs: { checked: "checked" }, decls: 3, vars: 0, consts: [["type", "checkbox", 3, "change"]], template: function AuthRememberComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function AuthRememberComponent_Template_input_change_1_listener($event) { return ctx.onChecked($event.target.checked); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Keep me logged in\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhdXRoLXJlbWVtYmVyLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ "hAWf":
/*!**********************************************************************!*\
  !*** ./src/app/advanced-components/auth-form/auth-form.component.ts ***!
  \**********************************************************************/
/*! exports provided: AuthFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthFormComponent", function() { return AuthFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _auth_message_auth_message_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../auth-message/auth-message.component */ "RyE/");
/* harmony import */ var _auth_remember_auth_remember_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../auth-remember/auth-remember.component */ "bXFB");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");








const _c0 = ["email"];
const _c1 = ["password"];
const _c2 = ["createButton"];
function AuthFormComponent_h3_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.title);
} }
function AuthFormComponent_button_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 8, 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Dynamic Create ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AuthFormComponent_div_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "ngIf: You will be logged in for 30 days");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c3 = [[["h3"]], [["auth-remember"]], [["button"]]];
const _c4 = ["h3", "auth-remember", "button"];
class AuthFormComponent {
    constructor(changeDetector, renderer) {
        this.changeDetector = changeDetector;
        this.renderer = renderer;
        this.submitted = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.showMessage = false;
        this.subscription = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subscription"]();
        this.useRenderer = false;
        this.title = "";
    }
    ngAfterContentInit() {
        let tempSub;
        if (this.remember) {
            console.log("afterContentInit remember", this.remember);
            tempSub = this.remember.checked.subscribe((checked) => {
                this.showMessage = checked;
            });
            this.subscription.add(tempSub);
        }
        if (this.rememberList) {
            console.log("afterContentInit rememberList", this.rememberList);
            this.rememberList.forEach(item => {
                tempSub = item.checked.subscribe((checked) => (this.showMessage = checked));
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
AuthFormComponent.ɵfac = function AuthFormComponent_Factory(t) { return new (t || AuthFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"])); };
AuthFormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AuthFormComponent, selectors: [["auth-form"]], contentQueries: function AuthFormComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, _auth_remember_auth_remember_component__WEBPACK_IMPORTED_MODULE_3__["AuthRememberComponent"], 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, _auth_remember_auth_remember_component__WEBPACK_IMPORTED_MODULE_3__["AuthRememberComponent"], 0);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.remember = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.rememberList = _t);
    } }, viewQuery: function AuthFormComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_auth_message_auth_message_component__WEBPACK_IMPORTED_MODULE_2__["AuthMessageComponent"], 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c2, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_auth_message_auth_message_component__WEBPACK_IMPORTED_MODULE_2__["AuthMessageComponent"], 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.message = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.email = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.password = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.createButton = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.messages = _t);
    } }, outputs: { submitted: "submitted" }, ngContentSelectors: _c4, decls: 20, vars: 9, consts: [[3, "ngSubmit"], ["form", "ngForm"], [4, "ngIf"], ["type", "email", "name", "email", "ngModel", ""], ["email", ""], ["type", "password", "name", "password", "ngModel", ""], ["password", ""], ["name", "createButton", 4, "ngIf"], ["name", "createButton"], ["createButton", ""]], template: function AuthFormComponent_Template(rf, ctx) { if (rf & 1) {
        const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"](_c3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function AuthFormComponent_Template_form_ngSubmit_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2); return ctx.onSubmit(_r0.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, AuthFormComponent_h3_4_Template, 2, 1, "h3", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Email address ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "input", 3, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Password ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "input", 5, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](13, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](14, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, AuthFormComponent_button_15_Template, 3, 0, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, AuthFormComponent_div_16_Template, 2, 0, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "auth-message");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "auth-message");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "auth-message");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.title === "Dynamic Create");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.title === "Dynamic Create");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showMessage);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("display", ctx.showMessage ? "inherit" : "none");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("display", ctx.showMessage ? "inherit" : "none");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("display", ctx.showMessage ? "inherit" : "none");
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _auth_message_auth_message_component__WEBPACK_IMPORTED_MODULE_2__["AuthMessageComponent"]], styles: [".email[_ngcontent-%COMP%] {\n  border-color: purple;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxhdXRoLWZvcm0uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxvQkFBQTtBQUNGIiwiZmlsZSI6ImF1dGgtZm9ybS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5lbWFpbCB7XHJcbiAgYm9yZGVyLWNvbG9yOiBwdXJwbGU7XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ "lKwU":
/*!*****************************************************************!*\
  !*** ./src/app/directives/credit-card/credit-card.directive.ts ***!
  \*****************************************************************/
/*! exports provided: CreditCardDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreditCardDirective", function() { return CreditCardDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class CreditCardDirective {
    constructor() { }
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
CreditCardDirective.ɵfac = function CreditCardDirective_Factory(t) { return new (t || CreditCardDirective)(); };
CreditCardDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: CreditCardDirective, selectors: [["", "credit-card", ""]], hostVars: 2, hostBindings: function CreditCardDirective_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function CreditCardDirective_input_HostBindingHandler($event) { return ctx.onKeyDown($event); });
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("border", ctx.border);
    } } });


/***/ }),

/***/ "lNbW":
/*!***************************************************************************************!*\
  !*** ./src/app/advanced-components/change-detection/example-1/example-1.component.ts ***!
  \***************************************************************************************/
/*! exports provided: Example1Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Example1Component", function() { return Example1Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class Example1Component {
    constructor() { }
    update() {
        this.user.name = "Matt Skiba";
    }
}
Example1Component.ɵfac = function Example1Component_Factory(t) { return new (t || Example1Component)(); };
Example1Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: Example1Component, selectors: [["example-1"]], inputs: { user: "user" }, decls: 15, vars: 4, consts: [[1, "example-1"], [3, "click"]], template: function Example1Component_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3");
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function Example1Component_Template_button_click_11_listener() { return ctx.update(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Internal update");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "* should not update");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.user.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.user.age, " years old");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.user.location, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.user.email, " ");
    } }, styles: [".example-1[_ngcontent-%COMP%] {\n  font-size: 19px;\n  margin-bottom: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcZXhhbXBsZS0xLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBQTtFQUNBLG1CQUFBO0FBQ0YiLCJmaWxlIjoiZXhhbXBsZS0xLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmV4YW1wbGUtMSB7XHJcbiAgZm9udC1zaXplOiAxOXB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbn1cclxuIl19 */"], changeDetection: 0 });


/***/ }),

/***/ "pv01":
/*!****************************************************!*\
  !*** ./src/app/directives/directives.component.ts ***!
  \****************************************************/
/*! exports provided: DirectivesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DirectivesComponent", function() { return DirectivesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _credit_card_credit_card_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./credit-card/credit-card.directive */ "lKwU");
/* harmony import */ var _tooltip_tooltip_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tooltip/tooltip.directive */ "8S+D");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _my_for_my_for_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./my-for/my-for.directive */ "7PrI");





function DirectivesComponent_label_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "label", 10);
} }
function DirectivesComponent_li_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "json");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r6 = ctx.$implicit;
    const i_r7 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", i_r7, " Member: ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 2, item_r6.name), " ");
} }
function DirectivesComponent_ng_template_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "json");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r8 = ctx.$implicit;
    const i_r9 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", i_r9, " Member: ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 2, item_r8.name), "");
} }
function DirectivesComponent_li_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "json");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r10 = ctx.$implicit;
    const i_r11 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", i_r11, " Member: ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 2, item_r10.name), " ");
} }
function DirectivesComponent_ng_template_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "json");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r12 = ctx.$implicit;
    const i_r13 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", i_r13, " Member: ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 2, item_r12.name), "");
} }
class DirectivesComponent {
    constructor() {
        this.items = [
            { name: "Mark Hoppus", age: 48, location: "California" },
            { name: "Tom Delonge", age: 45, location: "California" },
            { name: "Travis Barker", age: 45, location: "California" }
        ];
        setTimeout(() => {
            this.items = [
                ...this.items,
                {
                    name: "Matt Skiba",
                    age: 44,
                    location: "California"
                }
            ];
        }, 5000);
    }
}
DirectivesComponent.ɵfac = function DirectivesComponent_Factory(t) { return new (t || DirectivesComponent)(); };
DirectivesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DirectivesComponent, selectors: [["directives"]], decls: 34, vars: 5, consts: [["name", "credit-card", "type", "text", "placeholder", "Enter your 16-digit card number", "credit-card", ""], ["type", "text"], ["tooltip", "", 1, "myTooltip"], ["myTooltip", "tooltip"], [3, "mouseover", "mouseout"], ["class", "myTooltip", "tooltip", "3 digits, back of your card", 4, "ngIf"], [4, "ngFor", "ngForOf"], ["ngFor", "", 3, "ngForOf"], [4, "myFor", "myForOf"], ["myFor", "", 3, "myForOf"], ["tooltip", "3 digits, back of your card", 1, "myTooltip"]], template: function DirectivesComponent_Template(rf, ctx) { if (rf & 1) {
        const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Directives");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Credit Card Number\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "input", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Enter your security code\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "input", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseover", function DirectivesComponent_Template_span_mouseover_14_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](13); return _r0.show(); })("mouseout", function DirectivesComponent_Template_span_mouseout_14_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](13); return _r0.hide(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "(?)\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, DirectivesComponent_label_16_Template, 1, 0, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Normal For");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, DirectivesComponent_li_21_Template, 3, 4, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Normal ForOf");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, DirectivesComponent_ng_template_25_Template, 3, 4, "ng-template", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "My For");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, DirectivesComponent_li_29_Template, 3, 4, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "My ForOf");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](33, DirectivesComponent_ng_template_33_Template, 3, 4, "ng-template", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r0.getVisible());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.items);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.items);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("myForOf", ctx.items);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("myForOf", ctx.items);
    } }, directives: [_credit_card_credit_card_directive__WEBPACK_IMPORTED_MODULE_1__["CreditCardDirective"], _tooltip_tooltip_directive__WEBPACK_IMPORTED_MODULE_2__["TooltipDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _my_for_my_for_directive__WEBPACK_IMPORTED_MODULE_4__["MyForDirective"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["JsonPipe"]], styles: [".myTooltip[_ngcontent-%COMP%] {\n  display: inline-flex;\n}\n\nul[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-evenly;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGRpcmVjdGl2ZXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxvQkFBQTtBQUNGOztBQUNBO0VBQ0UsYUFBQTtFQUNBLDZCQUFBO0FBRUYiLCJmaWxlIjoiZGlyZWN0aXZlcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5teVRvb2x0aXAge1xyXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG59XHJcbnVsIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ "uucD":
/*!***********************************************!*\
  !*** ./src/app/custom-pipes/filesize.pipe.ts ***!
  \***********************************************/
/*! exports provided: FilesizePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilesizePipe", function() { return FilesizePipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class FilesizePipe {
    transform(size, extension = "megabytes") {
        return (size / (1024 * 1024)).toFixed(2) + extension;
    }
}
FilesizePipe.ɵfac = function FilesizePipe_Factory(t) { return new (t || FilesizePipe)(); };
FilesizePipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "filesize", type: FilesizePipe, pure: true });


/***/ }),

/***/ "vrPc":
/*!************************************************************************************!*\
  !*** ./src/app/advanced-components/change-detection/change-detection.component.ts ***!
  \************************************************************************************/
/*! exports provided: ChangeDetectionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangeDetectionComponent", function() { return ChangeDetectionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _example_1_example_1_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./example-1/example-1.component */ "lNbW");
/* harmony import */ var _example_2_example_2_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./example-2/example-2.component */ "SWpM");



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
ChangeDetectionComponent.ɵfac = function ChangeDetectionComponent_Factory(t) { return new (t || ChangeDetectionComponent)(); };
ChangeDetectionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ChangeDetectionComponent, selectors: [["change-detection"]], decls: 16, vars: 2, consts: [[1, "buttons"], [3, "click"], [1, "users"], [3, "user"]], template: function ChangeDetectionComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Change Detection Strategy");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChangeDetectionComponent_Template_button_click_5_listener() { return ctx.addProp(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Add property");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChangeDetectionComponent_Template_button_click_7_listener() { return ctx.changeUser(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Change user object");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChangeDetectionComponent_Template_button_click_9_listener() { return ctx.changeName(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Change name property");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "example-1", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "example-2", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("user", ctx.user);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("user", ctx.user);
    } }, directives: [_example_1_example_1_component__WEBPACK_IMPORTED_MODULE_1__["Example1Component"], _example_2_example_2_component__WEBPACK_IMPORTED_MODULE_2__["Example2Component"]], styles: [".users[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-evenly;\n}\n\n.buttons[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n}\n\n.buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  margin: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxjaGFuZ2UtZGV0ZWN0aW9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLDZCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7QUFDRjs7QUFBRTtFQUNFLFlBQUE7QUFFSiIsImZpbGUiOiJjaGFuZ2UtZGV0ZWN0aW9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnVzZXJzIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xyXG59XHJcblxyXG4uYnV0dG9ucyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAmIGJ1dHRvbiB7XHJcbiAgICBtYXJnaW46IDEwcHg7XHJcbiAgfVxyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ "ytaV":
/*!*********************************************************************************************!*\
  !*** ./src/app/advanced-components/view-encapsulation/example-two/example-two.component.ts ***!
  \*********************************************************************************************/
/*! exports provided: ExampleTwoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExampleTwoComponent", function() { return ExampleTwoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class ExampleTwoComponent {
    constructor() { }
}
ExampleTwoComponent.ɵfac = function ExampleTwoComponent_Factory(t) { return new (t || ExampleTwoComponent)(); };
ExampleTwoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ExampleTwoComponent, selectors: [["example-two"]], decls: 4, vars: 0, consts: [[1, "example-two"], [1, "example-one"]], template: function ExampleTwoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Example Two");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Example One!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".example-two {\n  background: purple;\n  font-size: 19px;\n  color: white;\n  margin-bottom: 10px;\n  padding: 5px 7px;\n}\n\n.example-one {\n  border: 3px solid purple;\n  font-size: 14px;\n  color: purple;\n  padding: 5px 7px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcZXhhbXBsZS10d28uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQUNGOztBQUNBO0VBQ0Usd0JBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0FBRUYiLCJmaWxlIjoiZXhhbXBsZS10d28uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZXhhbXBsZS10d28ge1xyXG4gIGJhY2tncm91bmQ6IHB1cnBsZTtcclxuICBmb250LXNpemU6IDE5cHg7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgcGFkZGluZzogNXB4IDdweDtcclxufVxyXG4uZXhhbXBsZS1vbmUge1xyXG4gIGJvcmRlcjogM3B4IHNvbGlkIHB1cnBsZTtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgY29sb3I6IHB1cnBsZTtcclxuICBwYWRkaW5nOiA1cHggN3B4O1xyXG59XHJcbiJdfQ== */"], encapsulation: 3 });


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]()
    .bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map