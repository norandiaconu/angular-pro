import {
  Component,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵdefineComponent,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵtext
} from "./chunk-7SEXRZKV.js";

// src/app/routes/routes.component.ts
var _RoutesComponent = class _RoutesComponent {
};
_RoutesComponent.\u0275fac = function RoutesComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _RoutesComponent)();
};
_RoutesComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _RoutesComponent, selectors: [["routes"]], decls: 2, vars: 0, template: function RoutesComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "p");
    \u0275\u0275text(1, "Route");
    \u0275\u0275domElementEnd();
  }
}, encapsulation: 2 });
var RoutesComponent = _RoutesComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RoutesComponent, [{
    type: Component,
    args: [{ selector: "routes", template: "<p>Route</p>\n" }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(RoutesComponent, { className: "RoutesComponent", filePath: "src/app/routes/routes.component.ts", lineNumber: 8 });
})();
export {
  RoutesComponent
};
