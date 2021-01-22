(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\cejar\workspace\Angular\poke-api\src\main.ts */"zUnb");


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
    production: false,
    pokemonApi: 'https://pokeapi.co/api/v2',
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

/***/ "HJR0":
/*!************************************************************!*\
  !*** ./src/app/poke-list/poke-item/poke-item.component.ts ***!
  \************************************************************/
/*! exports provided: PokeItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PokeItemComponent", function() { return PokeItemComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _shared_pipes_capitalize_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @shared/pipes/capitalize.pipe */ "vTEt");





const _c0 = function (a1) { return ["/pokemon", a1]; };
class PokeItemComponent {
    constructor() { }
    ngOnInit() { }
}
PokeItemComponent.ɵfac = function PokeItemComponent_Factory(t) { return new (t || PokeItemComponent)(); };
PokeItemComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PokeItemComponent, selectors: [["poke-item"]], inputs: { pokemon: "pokemon" }, decls: 9, vars: 10, consts: [[1, "item", 3, "routerLink", "ngClass"], [1, "item-data"], [1, "item-data__id"], [1, "item-data__name"], [1, "item-img"], [3, "src", "alt"]], template: function PokeItemComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h4", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "capitalize");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](8, _c0, ctx.pokemon.name))("ngClass", (ctx.pokemon == null ? null : ctx.pokemon.types[0] == null ? null : ctx.pokemon.types[0].type == null ? null : ctx.pokemon.types[0].type.name) + "-type");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("# ", ctx.pokemon.id, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 6, ctx.pokemon.name));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.pokemon.sprites.other.dream_world.front_default, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("alt", ctx.pokemon.name);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"]], pipes: [_shared_pipes_capitalize_pipe__WEBPACK_IMPORTED_MODULE_3__["CapitalizePipe"]], styles: [".grass-type[_ngcontent-%COMP%] {\n  background-color: rgba(155, 204, 80, 0.8) !important;\n}\n\n.ghost-type[_ngcontent-%COMP%] {\n  background-color: rgba(123, 98, 163, 0.8) !important;\n}\n\n.fire-type[_ngcontent-%COMP%] {\n  background-color: rgba(253, 125, 36, 0.8) !important;\n}\n\n.water-type[_ngcontent-%COMP%] {\n  background-color: rgba(69, 146, 196, 0.8) !important;\n}\n\n.steel-type[_ngcontent-%COMP%] {\n  background-color: rgba(158, 183, 184, 0.8) !important;\n}\n\n.rock-type[_ngcontent-%COMP%] {\n  background-color: rgba(163, 140, 33, 0.8) !important;\n}\n\n.psychic-type[_ngcontent-%COMP%] {\n  background-color: rgba(243, 102, 185, 0.8) !important;\n}\n\n.poison-type[_ngcontent-%COMP%] {\n  background-color: rgba(185, 127, 201, 0.8) !important;\n}\n\n.normal-type[_ngcontent-%COMP%] {\n  background-color: rgba(164, 172, 175, 0.8) !important;\n}\n\n.ice-type[_ngcontent-%COMP%] {\n  background-color: rgba(81, 196, 231, 0.8) !important;\n}\n\n.ground-type[_ngcontent-%COMP%] {\n  background-color: rgba(247, 222, 63, 0.8) !important;\n}\n\n.flying-type[_ngcontent-%COMP%] {\n  background-color: rgba(61, 199, 239, 0.8) !important;\n}\n\n.fighting-type[_ngcontent-%COMP%] {\n  background-color: rgba(213, 103, 35, 0.8) !important;\n}\n\n.fairy-type[_ngcontent-%COMP%] {\n  background-color: rgba(253, 185, 233, 0.8) !important;\n}\n\n.electric-type[_ngcontent-%COMP%] {\n  background-color: rgba(238, 213, 53, 0.8) !important;\n}\n\n.dragon-type[_ngcontent-%COMP%] {\n  background-color: rgba(83, 164, 207, 0.8) !important;\n}\n\n.dark-type[_ngcontent-%COMP%] {\n  background-color: rgba(112, 112, 112, 0.8) !important;\n}\n\n.bug-type[_ngcontent-%COMP%] {\n  background-color: rgba(114, 159, 63, 0.8) !important;\n}\n\n.grass-type-solid[_ngcontent-%COMP%] {\n  background-color: #9bcc50 !important;\n}\n\n.ghost-type-solid[_ngcontent-%COMP%] {\n  background-color: #7b62a3 !important;\n}\n\n.fire-type-solid[_ngcontent-%COMP%] {\n  background-color: #fd7d24 !important;\n}\n\n.water-type-solid[_ngcontent-%COMP%] {\n  background-color: #4592c4 !important;\n}\n\n.steel-type-solid[_ngcontent-%COMP%] {\n  background-color: #9eb7b8 !important;\n}\n\n.rock-type-solid[_ngcontent-%COMP%] {\n  background-color: #a38c21 !important;\n}\n\n.psychic-type-solid[_ngcontent-%COMP%] {\n  background-color: #f366b9 !important;\n}\n\n.poison-type-solid[_ngcontent-%COMP%] {\n  background-color: #b97fc9 !important;\n}\n\n.normal-type-solid[_ngcontent-%COMP%] {\n  background-color: #a4acaf !important;\n}\n\n.ice-type-solid[_ngcontent-%COMP%] {\n  background-color: #51c4e7 !important;\n}\n\n.ground-type-solid[_ngcontent-%COMP%] {\n  background-color: #f7de3f !important;\n}\n\n.flying-type-solid[_ngcontent-%COMP%] {\n  background-color: #3dc7ef !important;\n}\n\n.fighting-type-solid[_ngcontent-%COMP%] {\n  background-color: #d56723 !important;\n}\n\n.fairy-type-solid[_ngcontent-%COMP%] {\n  background-color: #fdb9e9 !important;\n}\n\n.electric-type-solid[_ngcontent-%COMP%] {\n  background-color: #eed535 !important;\n}\n\n.dragon-type-solid[_ngcontent-%COMP%] {\n  background-color: #53a4cf !important;\n}\n\n.dark-type-solid[_ngcontent-%COMP%] {\n  background-color: #707070 !important;\n}\n\n.bug-type-solid[_ngcontent-%COMP%] {\n  background-color: #729f3f !important;\n}\n\n*[_ngcontent-%COMP%] {\n  font-family: inherit;\n  font-size: inherit;\n  list-style: none;\n  margin: 0;\n  outline: transparent;\n  padding: 0;\n  text-decoration: none;\n}\n\n*[_ngcontent-%COMP%]:visited, *[_ngcontent-%COMP%]:link {\n  color: inherit;\n}\n\nhtml[_ngcontent-%COMP%] {\n  font-size: 62.5%;\n}\n\nbody[_ngcontent-%COMP%] {\n  font-family: \"Montserrat\", sans-serif;\n  font-size: 1.6rem;\n}\n\n.item[_ngcontent-%COMP%] {\n  align-items: center;\n  background-color: #fff;\n  border-radius: 10px;\n  border: 1px solid #eeeeee;\n  box-shadow: 0 2px 4px 2px rgba(34, 34, 34, 0.4);\n  display: flex;\n  height: 70px;\n  justify-content: space-around;\n  padding: 0 2rem;\n  transition: all 0.2s ease;\n  flex-direction: row-reverse;\n}\n\n.item[_ngcontent-%COMP%]:hover {\n  transform: translateY(-3px);\n  box-shadow: 0 2px 2px 2px rgba(34, 34, 34, 0.2);\n}\n\n.item[_ngcontent-%COMP%]:active {\n  transform: translateY(-2px);\n  box-shadow: 0 2px 3px 2px rgba(34, 34, 34, 0.3);\n}\n\n.item-img[_ngcontent-%COMP%] {\n  margin-top: -3rem;\n  max-width: 40%;\n}\n\n.item-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  display: block;\n  object-fit: cover;\n  max-width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxhc3NldHNcXHN0eWxlc1xcX2JhY2tncm91bmQuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFxwb2tlLWl0ZW0uY29tcG9uZW50LnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcYXNzZXRzXFxzdHlsZXNcXG1haW4uc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxhc3NldHNcXHN0eWxlc1xcX2NvbG9ycy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0Usb0RBQUE7QUNERjs7QURJQTtFQUNFLG9EQUFBO0FDREY7O0FESUE7RUFDRSxvREFBQTtBQ0RGOztBRElBO0VBQ0Usb0RBQUE7QUNERjs7QURJQTtFQUNFLHFEQUFBO0FDREY7O0FESUE7RUFDRSxvREFBQTtBQ0RGOztBRElBO0VBQ0UscURBQUE7QUNERjs7QURJQTtFQUNFLHFEQUFBO0FDREY7O0FESUE7RUFDRSxxREFBQTtBQ0RGOztBRElBO0VBQ0Usb0RBQUE7QUNERjs7QURJQTtFQUNFLG9EQUFBO0FDREY7O0FESUE7RUFDRSxvREFBQTtBQ0RGOztBRElBO0VBQ0Usb0RBQUE7QUNERjs7QURJQTtFQUNFLHFEQUFBO0FDREY7O0FESUE7RUFDRSxvREFBQTtBQ0RGOztBRElBO0VBQ0Usb0RBQUE7QUNERjs7QURJQTtFQUNFLHFEQUFBO0FDREY7O0FESUE7RUFDRSxvREFBQTtBQ0RGOztBRE1BO0VBQ0Usb0NBQUE7QUNIRjs7QURNQTtFQUNFLG9DQUFBO0FDSEY7O0FETUE7RUFDRSxvQ0FBQTtBQ0hGOztBRE1BO0VBQ0Usb0NBQUE7QUNIRjs7QURNQTtFQUNFLG9DQUFBO0FDSEY7O0FETUE7RUFDRSxvQ0FBQTtBQ0hGOztBRE1BO0VBQ0Usb0NBQUE7QUNIRjs7QURNQTtFQUNFLG9DQUFBO0FDSEY7O0FETUE7RUFDRSxvQ0FBQTtBQ0hGOztBRE1BO0VBQ0Usb0NBQUE7QUNIRjs7QURNQTtFQUNFLG9DQUFBO0FDSEY7O0FETUE7RUFDRSxvQ0FBQTtBQ0hGOztBRE1BO0VBQ0Usb0NBQUE7QUNIRjs7QURNQTtFQUNFLG9DQUFBO0FDSEY7O0FETUE7RUFDRSxvQ0FBQTtBQ0hGOztBRE1BO0VBQ0Usb0NBQUE7QUNIRjs7QURNQTtFQUNFLG9DQUFBO0FDSEY7O0FETUE7RUFDRSxvQ0FBQTtBQ0hGOztBQzNJQTtFQUNFLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLFNBQUE7RUFDQSxvQkFBQTtFQUNBLFVBQUE7RUFDQSxxQkFBQTtBRDhJRjs7QUMzSUE7O0VBRUUsY0FBQTtBRDhJRjs7QUMzSUE7RUFDRSxnQkFBQTtBRDhJRjs7QUMzSUE7RUFDRSxxQ0FBQTtFQUNBLGlCQUFBO0FEOElGOztBQXBLQTtFQUNFLG1CQUFBO0VBQ0Esc0JFRU07RUZETixtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsK0NFQ2lCO0VGQWpCLGFBQUE7RUFDQSxZQUFBO0VBQ0EsNkJBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7RUFDQSwyQkFBQTtBQXVLRjs7QUF0S0U7RUFDRSwyQkFBQTtFQUNBLCtDRU5pQjtBRjhLckI7O0FBdEtFO0VBQ0UsMkJBQUE7RUFDQSwrQ0VYYTtBRm1MakI7O0FBdEtFO0VBQ0UsaUJBQUE7RUFDQSxjQUFBO0FBd0tKOztBQXZLSTtFQUNFLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7QUF5S04iLCJmaWxlIjoicG9rZS1pdGVtLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcImNvbG9yc1wiO1xyXG5cclxuLmdyYXNzLXR5cGUge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGdldENvbG9yUGVyY2VudCgkZ3Jhc3MsIDAuOCkgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmdob3N0LXR5cGUge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGdldENvbG9yUGVyY2VudCgkZ2hvc3QsIDAuOCkgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmZpcmUtdHlwZSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogZ2V0Q29sb3JQZXJjZW50KCRmaXJlLCAwLjgpICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi53YXRlci10eXBlIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBnZXRDb2xvclBlcmNlbnQoJHdhdGVyLCAwLjgpICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5zdGVlbC10eXBlIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBnZXRDb2xvclBlcmNlbnQoJHN0ZWVsLCAwLjgpICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5yb2NrLXR5cGUge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGdldENvbG9yUGVyY2VudCgkcm9jaywgMC44KSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ucHN5Y2hpYy10eXBlIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBnZXRDb2xvclBlcmNlbnQoJHBzeWNoaWMsIDAuOCkgIWltcG9ydGFudDtcclxufVxyXG5cclxuLnBvaXNvbi10eXBlIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBnZXRDb2xvclBlcmNlbnQoJHBvaXNvbiwgMC44KSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubm9ybWFsLXR5cGUge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGdldENvbG9yUGVyY2VudCgkbm9ybWFsLCAwLjgpICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5pY2UtdHlwZSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogZ2V0Q29sb3JQZXJjZW50KCRpY2UsIDAuOCkgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmdyb3VuZC10eXBlIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBnZXRDb2xvclBlcmNlbnQoJGdyb3VuZC0xLCAwLjgpICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5mbHlpbmctdHlwZSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogZ2V0Q29sb3JQZXJjZW50KCRmbHlpbmctMSwgMC44KSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uZmlnaHRpbmctdHlwZSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogZ2V0Q29sb3JQZXJjZW50KCRmaWdodGluZywgMC44KSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uZmFpcnktdHlwZSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogZ2V0Q29sb3JQZXJjZW50KCRmYWlyeSwgMC44KSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uZWxlY3RyaWMtdHlwZSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogZ2V0Q29sb3JQZXJjZW50KCRlbGVjdHJpYywgMC44KSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uZHJhZ29uLXR5cGUge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGdldENvbG9yUGVyY2VudCgkZHJhZ29uLTEsIDAuOCkgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmRhcmstdHlwZSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogZ2V0Q29sb3JQZXJjZW50KCRkYXJrLCAwLjgpICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5idWctdHlwZSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogZ2V0Q29sb3JQZXJjZW50KCRidWcsIDAuOCkgIWltcG9ydGFudDtcclxufVxyXG5cclxuLy9cclxuXHJcbi5ncmFzcy10eXBlLXNvbGlkIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBnZXRDb2xvclBlcmNlbnQoJGdyYXNzLCAxKSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uZ2hvc3QtdHlwZS1zb2xpZCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogZ2V0Q29sb3JQZXJjZW50KCRnaG9zdCwgMSkgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmZpcmUtdHlwZS1zb2xpZCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogZ2V0Q29sb3JQZXJjZW50KCRmaXJlLCAxKSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ud2F0ZXItdHlwZS1zb2xpZCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogZ2V0Q29sb3JQZXJjZW50KCR3YXRlciwgMSkgIWltcG9ydGFudDtcclxufVxyXG5cclxuLnN0ZWVsLXR5cGUtc29saWQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGdldENvbG9yUGVyY2VudCgkc3RlZWwsIDEpICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5yb2NrLXR5cGUtc29saWQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGdldENvbG9yUGVyY2VudCgkcm9jaywgMSkgIWltcG9ydGFudDtcclxufVxyXG5cclxuLnBzeWNoaWMtdHlwZS1zb2xpZCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogZ2V0Q29sb3JQZXJjZW50KCRwc3ljaGljLCAxKSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ucG9pc29uLXR5cGUtc29saWQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGdldENvbG9yUGVyY2VudCgkcG9pc29uLCAxKSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubm9ybWFsLXR5cGUtc29saWQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGdldENvbG9yUGVyY2VudCgkbm9ybWFsLCAxKSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uaWNlLXR5cGUtc29saWQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGdldENvbG9yUGVyY2VudCgkaWNlLCAxKSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uZ3JvdW5kLXR5cGUtc29saWQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGdldENvbG9yUGVyY2VudCgkZ3JvdW5kLTEsIDEpICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5mbHlpbmctdHlwZS1zb2xpZCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogZ2V0Q29sb3JQZXJjZW50KCRmbHlpbmctMSwgMSkgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmZpZ2h0aW5nLXR5cGUtc29saWQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGdldENvbG9yUGVyY2VudCgkZmlnaHRpbmcsIDEpICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5mYWlyeS10eXBlLXNvbGlkIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBnZXRDb2xvclBlcmNlbnQoJGZhaXJ5LCAxKSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uZWxlY3RyaWMtdHlwZS1zb2xpZCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogZ2V0Q29sb3JQZXJjZW50KCRlbGVjdHJpYywgMSkgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmRyYWdvbi10eXBlLXNvbGlkIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBnZXRDb2xvclBlcmNlbnQoJGRyYWdvbi0xLCAxKSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uZGFyay10eXBlLXNvbGlkIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBnZXRDb2xvclBlcmNlbnQoJGRhcmssIDEpICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5idWctdHlwZS1zb2xpZCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogZ2V0Q29sb3JQZXJjZW50KCRidWcsIDEpICFpbXBvcnRhbnQ7XHJcbn1cclxuIiwiLmdyYXNzLXR5cGUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE1NSwgMjA0LCA4MCwgMC44KSAhaW1wb3J0YW50O1xufVxuXG4uZ2hvc3QtdHlwZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTIzLCA5OCwgMTYzLCAwLjgpICFpbXBvcnRhbnQ7XG59XG5cbi5maXJlLXR5cGUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1MywgMTI1LCAzNiwgMC44KSAhaW1wb3J0YW50O1xufVxuXG4ud2F0ZXItdHlwZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNjksIDE0NiwgMTk2LCAwLjgpICFpbXBvcnRhbnQ7XG59XG5cbi5zdGVlbC10eXBlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxNTgsIDE4MywgMTg0LCAwLjgpICFpbXBvcnRhbnQ7XG59XG5cbi5yb2NrLXR5cGUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE2MywgMTQwLCAzMywgMC44KSAhaW1wb3J0YW50O1xufVxuXG4ucHN5Y2hpYy10eXBlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNDMsIDEwMiwgMTg1LCAwLjgpICFpbXBvcnRhbnQ7XG59XG5cbi5wb2lzb24tdHlwZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTg1LCAxMjcsIDIwMSwgMC44KSAhaW1wb3J0YW50O1xufVxuXG4ubm9ybWFsLXR5cGUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE2NCwgMTcyLCAxNzUsIDAuOCkgIWltcG9ydGFudDtcbn1cblxuLmljZS10eXBlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg4MSwgMTk2LCAyMzEsIDAuOCkgIWltcG9ydGFudDtcbn1cblxuLmdyb3VuZC10eXBlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNDcsIDIyMiwgNjMsIDAuOCkgIWltcG9ydGFudDtcbn1cblxuLmZseWluZy10eXBlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg2MSwgMTk5LCAyMzksIDAuOCkgIWltcG9ydGFudDtcbn1cblxuLmZpZ2h0aW5nLXR5cGUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIxMywgMTAzLCAzNSwgMC44KSAhaW1wb3J0YW50O1xufVxuXG4uZmFpcnktdHlwZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjUzLCAxODUsIDIzMywgMC44KSAhaW1wb3J0YW50O1xufVxuXG4uZWxlY3RyaWMtdHlwZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjM4LCAyMTMsIDUzLCAwLjgpICFpbXBvcnRhbnQ7XG59XG5cbi5kcmFnb24tdHlwZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoODMsIDE2NCwgMjA3LCAwLjgpICFpbXBvcnRhbnQ7XG59XG5cbi5kYXJrLXR5cGUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDExMiwgMTEyLCAxMTIsIDAuOCkgIWltcG9ydGFudDtcbn1cblxuLmJ1Zy10eXBlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMTQsIDE1OSwgNjMsIDAuOCkgIWltcG9ydGFudDtcbn1cblxuLmdyYXNzLXR5cGUtc29saWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOWJjYzUwICFpbXBvcnRhbnQ7XG59XG5cbi5naG9zdC10eXBlLXNvbGlkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzdiNjJhMyAhaW1wb3J0YW50O1xufVxuXG4uZmlyZS10eXBlLXNvbGlkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZkN2QyNCAhaW1wb3J0YW50O1xufVxuXG4ud2F0ZXItdHlwZS1zb2xpZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0NTkyYzQgIWltcG9ydGFudDtcbn1cblxuLnN0ZWVsLXR5cGUtc29saWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOWViN2I4ICFpbXBvcnRhbnQ7XG59XG5cbi5yb2NrLXR5cGUtc29saWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYTM4YzIxICFpbXBvcnRhbnQ7XG59XG5cbi5wc3ljaGljLXR5cGUtc29saWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjM2NmI5ICFpbXBvcnRhbnQ7XG59XG5cbi5wb2lzb24tdHlwZS1zb2xpZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNiOTdmYzkgIWltcG9ydGFudDtcbn1cblxuLm5vcm1hbC10eXBlLXNvbGlkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2E0YWNhZiAhaW1wb3J0YW50O1xufVxuXG4uaWNlLXR5cGUtc29saWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTFjNGU3ICFpbXBvcnRhbnQ7XG59XG5cbi5ncm91bmQtdHlwZS1zb2xpZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmN2RlM2YgIWltcG9ydGFudDtcbn1cblxuLmZseWluZy10eXBlLXNvbGlkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzNkYzdlZiAhaW1wb3J0YW50O1xufVxuXG4uZmlnaHRpbmctdHlwZS1zb2xpZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkNTY3MjMgIWltcG9ydGFudDtcbn1cblxuLmZhaXJ5LXR5cGUtc29saWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmRiOWU5ICFpbXBvcnRhbnQ7XG59XG5cbi5lbGVjdHJpYy10eXBlLXNvbGlkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VlZDUzNSAhaW1wb3J0YW50O1xufVxuXG4uZHJhZ29uLXR5cGUtc29saWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTNhNGNmICFpbXBvcnRhbnQ7XG59XG5cbi5kYXJrLXR5cGUtc29saWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzA3MDcwICFpbXBvcnRhbnQ7XG59XG5cbi5idWctdHlwZS1zb2xpZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM3MjlmM2YgIWltcG9ydGFudDtcbn1cblxuKiB7XG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xuICBmb250LXNpemU6IGluaGVyaXQ7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIG1hcmdpbjogMDtcbiAgb3V0bGluZTogdHJhbnNwYXJlbnQ7XG4gIHBhZGRpbmc6IDA7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuKjp2aXNpdGVkLFxuKjpsaW5rIHtcbiAgY29sb3I6IGluaGVyaXQ7XG59XG5cbmh0bWwge1xuICBmb250LXNpemU6IDYyLjUlO1xufVxuXG5ib2R5IHtcbiAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdFwiLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDEuNnJlbTtcbn1cblxuLml0ZW0ge1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjZWVlZWVlO1xuICBib3gtc2hhZG93OiAwIDJweCA0cHggMnB4IHJnYmEoMzQsIDM0LCAzNCwgMC40KTtcbiAgZGlzcGxheTogZmxleDtcbiAgaGVpZ2h0OiA3MHB4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgcGFkZGluZzogMCAycmVtO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xuICBmbGV4LWRpcmVjdGlvbjogcm93LXJldmVyc2U7XG59XG4uaXRlbTpob3ZlciB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtM3B4KTtcbiAgYm94LXNoYWRvdzogMCAycHggMnB4IDJweCByZ2JhKDM0LCAzNCwgMzQsIDAuMik7XG59XG4uaXRlbTphY3RpdmUge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTJweCk7XG4gIGJveC1zaGFkb3c6IDAgMnB4IDNweCAycHggcmdiYSgzNCwgMzQsIDM0LCAwLjMpO1xufVxuLml0ZW0taW1nIHtcbiAgbWFyZ2luLXRvcDogLTNyZW07XG4gIG1heC13aWR0aDogNDAlO1xufVxuLml0ZW0taW1nIGltZyB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgbWF4LXdpZHRoOiAxMDAlO1xufSIsIkBpbXBvcnQgXCIuL2NvbG9yc1wiO1xyXG5AaW1wb3J0IFwiLi9iYWNrZ3JvdW5kXCI7XHJcblxyXG4qIHtcclxuICBmb250LWZhbWlseTogaW5oZXJpdDtcclxuICBmb250LXNpemU6IGluaGVyaXQ7XHJcbiAgbGlzdC1zdHlsZTogbm9uZTtcclxuICBtYXJnaW46IDA7XHJcbiAgb3V0bGluZTogdHJhbnNwYXJlbnQ7XHJcbiAgcGFkZGluZzogMDtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuXHJcbio6dmlzaXRlZCxcclxuKjpsaW5rIHtcclxuICBjb2xvcjogaW5oZXJpdDtcclxufVxyXG5cclxuaHRtbCB7XHJcbiAgZm9udC1zaXplOiA2Mi41JTtcclxufVxyXG5cclxuYm9keSB7XHJcbiAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdFwiLCBzYW5zLXNlcmlmO1xyXG4gIGZvbnQtc2l6ZTogMS42cmVtO1xyXG59XHJcbiIsIiRibGFjazogIzIyMjtcclxuJGJsYWNrLWxpZ2h0LTE6IGxpZ2h0ZW4oJGJsYWNrLCAyMCUpO1xyXG4kYmxhY2stbGlnaHQtMjogbGlnaHRlbigkYmxhY2ssIDQwJSk7XHJcbiRibGFjay1saWdodC0zOiBsaWdodGVuKCRibGFjaywgNjAlKTtcclxuJGJsYWNrLWxpZ2h0LTQ6IGxpZ2h0ZW4oJGJsYWNrLCA4MCUpO1xyXG5cclxuJHdoaXRlOiAjZmZmO1xyXG5cclxuJGJveC1zaGFkb3ctY2xvc2U6IDAgMnB4IDRweCAycHggcmdiYSgkYmxhY2ssIDAuNCk7XHJcbiRib3gtc2hhZG93LWZhcjogMCAycHggM3B4IDJweCByZ2JhKCRibGFjaywgMC4zKTtcclxuJGJveC1zaGFkb3ctZmFydGVzdDogMCAycHggMnB4IDJweCByZ2JhKCRibGFjaywgMC4yKTtcclxuXHJcbiRidWc6ICM3MjlmM2Y7XHJcbiRkYXJrOiAjNzA3MDcwO1xyXG4kZHJhZ29uLTE6ICM1M2E0Y2Y7XHJcbiRkcmFnb24tMjogI2YxNmU1NztcclxuJGVsZWN0cmljOiAjZWVkNTM1O1xyXG4kZmFpcnk6ICNmZGI5ZTk7XHJcbiRmaWdodGluZzogI2Q1NjcyMztcclxuJGZpcmU6ICNmZDdkMjQ7XHJcbiRmbHlpbmctMTogIzNkYzdlZjtcclxuJGZseWluZy0yOiAjYmViYWI5O1xyXG4kZ2hvc3Q6ICM3YjYyYTM7XHJcbiRncmFzczogIzliY2M1MDtcclxuJGdyb3VuZC0xOiAjZjdkZTNmO1xyXG4kZ3JvdW5kLTI6ICNhYjk4NDI7XHJcbiRpY2U6ICM1MWM0ZTc7XHJcbiRub3JtYWw6ICNhNGFjYWY7XHJcbiRwb2lzb246ICNiOTdmYzk7XHJcbiRwc3ljaGljOiAjZjM2NmI5O1xyXG4kcm9jazogI2EzOGMyMTtcclxuJHN0ZWVsOiAjOWViN2I4O1xyXG4kd2F0ZXI6ICM0NTkyYzQ7XHJcblxyXG5AZnVuY3Rpb24gZ2V0Q29sb3JQZXJjZW50KCRjb2xvciwgJG9wYWNpdHkpIHtcclxuICBAcmV0dXJuIHJnYmEoJGNvbG9yLCAkb3BhY2l0eSk7XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PokeItemComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'poke-item',
                templateUrl: './poke-item.component.html',
                styleUrls: ['./poke-item.component.scss']
            }]
    }], function () { return []; }, { pokemon: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "PCNd":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _shared_pipes_capitalize_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @shared/pipes/capitalize.pipe */ "vTEt");






class SharedModule {
}
SharedModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: SharedModule });
SharedModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function SharedModule_Factory(t) { return new (t || SharedModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SharedModule, { declarations: [_shared_pipes_capitalize_pipe__WEBPACK_IMPORTED_MODULE_4__["CapitalizePipe"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"]], exports: [_shared_pipes_capitalize_pipe__WEBPACK_IMPORTED_MODULE_4__["CapitalizePipe"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SharedModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _shared_pipes_capitalize_pipe__WEBPACK_IMPORTED_MODULE_4__["CapitalizePipe"]
                ],
                exports: [
                    _shared_pipes_capitalize_pipe__WEBPACK_IMPORTED_MODULE_4__["CapitalizePipe"]
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "QcKa":
/*!**************************************************!*\
  !*** ./src/app/core/services/pokemon.service.ts ***!
  \**************************************************/
/*! exports provided: PokemonService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PokemonService", function() { return PokemonService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @environments/environment */ "AytR");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");





class PokemonService {
    constructor(http) {
        this.http = http;
        this.apiUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].pokemonApi;
        this.searchingPokemon = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
    }
    getPokemonByName(_name) {
        return this.http.get(`${this.apiUrl}/pokemon/${_name.toLowerCase()}`);
    }
    getPokemonList(_offset, _limit) {
        return this.http.get(`${this.apiUrl}/pokemon/`, {
            params: { 'offset': _offset.toString(), 'limit': _limit.toString() }
        });
    }
    searchByPokemon(_pokemon) {
        this.searchingPokemon.next(_pokemon);
    }
    getSpeciesByPokemon(_name) {
        return this.http.get(`${this.apiUrl}/pokemon-species/${_name}`);
    }
    getEvolutionChainByPokemon(_evolutionChaingUrl) {
        return this.http.get(`${_evolutionChaingUrl}`);
    }
}
PokemonService.ɵfac = function PokemonService_Factory(t) { return new (t || PokemonService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"])); };
PokemonService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: PokemonService, factory: PokemonService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PokemonService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }]; }, null); })();


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
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header/header.component */ "fECr");
/* harmony import */ var _poke_list_poke_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./poke-list/poke-list.component */ "VRb5");




class AppComponent {
    constructor() {
        this.title = 'poke-api';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 6, vars: 0, consts: [[1, "wrapper"], [1, "header"], [1, "main-content"], [1, "pokemon-list"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "header", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "poke-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "main", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "poke-list");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"], _poke_list_poke_list_component__WEBPACK_IMPORTED_MODULE_2__["PokeListComponent"]], styles: [".grass-type[_ngcontent-%COMP%] {\n  background-color: rgba(155, 204, 80, 0.8) !important;\n}\n\n.ghost-type[_ngcontent-%COMP%] {\n  background-color: rgba(123, 98, 163, 0.8) !important;\n}\n\n.fire-type[_ngcontent-%COMP%] {\n  background-color: rgba(253, 125, 36, 0.8) !important;\n}\n\n.water-type[_ngcontent-%COMP%] {\n  background-color: rgba(69, 146, 196, 0.8) !important;\n}\n\n.steel-type[_ngcontent-%COMP%] {\n  background-color: rgba(158, 183, 184, 0.8) !important;\n}\n\n.rock-type[_ngcontent-%COMP%] {\n  background-color: rgba(163, 140, 33, 0.8) !important;\n}\n\n.psychic-type[_ngcontent-%COMP%] {\n  background-color: rgba(243, 102, 185, 0.8) !important;\n}\n\n.poison-type[_ngcontent-%COMP%] {\n  background-color: rgba(185, 127, 201, 0.8) !important;\n}\n\n.normal-type[_ngcontent-%COMP%] {\n  background-color: rgba(164, 172, 175, 0.8) !important;\n}\n\n.ice-type[_ngcontent-%COMP%] {\n  background-color: rgba(81, 196, 231, 0.8) !important;\n}\n\n.ground-type[_ngcontent-%COMP%] {\n  background-color: rgba(247, 222, 63, 0.8) !important;\n}\n\n.flying-type[_ngcontent-%COMP%] {\n  background-color: rgba(61, 199, 239, 0.8) !important;\n}\n\n.fighting-type[_ngcontent-%COMP%] {\n  background-color: rgba(213, 103, 35, 0.8) !important;\n}\n\n.fairy-type[_ngcontent-%COMP%] {\n  background-color: rgba(253, 185, 233, 0.8) !important;\n}\n\n.electric-type[_ngcontent-%COMP%] {\n  background-color: rgba(238, 213, 53, 0.8) !important;\n}\n\n.dragon-type[_ngcontent-%COMP%] {\n  background-color: rgba(83, 164, 207, 0.8) !important;\n}\n\n.dark-type[_ngcontent-%COMP%] {\n  background-color: rgba(112, 112, 112, 0.8) !important;\n}\n\n.bug-type[_ngcontent-%COMP%] {\n  background-color: rgba(114, 159, 63, 0.8) !important;\n}\n\n.grass-type-solid[_ngcontent-%COMP%] {\n  background-color: #9bcc50 !important;\n}\n\n.ghost-type-solid[_ngcontent-%COMP%] {\n  background-color: #7b62a3 !important;\n}\n\n.fire-type-solid[_ngcontent-%COMP%] {\n  background-color: #fd7d24 !important;\n}\n\n.water-type-solid[_ngcontent-%COMP%] {\n  background-color: #4592c4 !important;\n}\n\n.steel-type-solid[_ngcontent-%COMP%] {\n  background-color: #9eb7b8 !important;\n}\n\n.rock-type-solid[_ngcontent-%COMP%] {\n  background-color: #a38c21 !important;\n}\n\n.psychic-type-solid[_ngcontent-%COMP%] {\n  background-color: #f366b9 !important;\n}\n\n.poison-type-solid[_ngcontent-%COMP%] {\n  background-color: #b97fc9 !important;\n}\n\n.normal-type-solid[_ngcontent-%COMP%] {\n  background-color: #a4acaf !important;\n}\n\n.ice-type-solid[_ngcontent-%COMP%] {\n  background-color: #51c4e7 !important;\n}\n\n.ground-type-solid[_ngcontent-%COMP%] {\n  background-color: #f7de3f !important;\n}\n\n.flying-type-solid[_ngcontent-%COMP%] {\n  background-color: #3dc7ef !important;\n}\n\n.fighting-type-solid[_ngcontent-%COMP%] {\n  background-color: #d56723 !important;\n}\n\n.fairy-type-solid[_ngcontent-%COMP%] {\n  background-color: #fdb9e9 !important;\n}\n\n.electric-type-solid[_ngcontent-%COMP%] {\n  background-color: #eed535 !important;\n}\n\n.dragon-type-solid[_ngcontent-%COMP%] {\n  background-color: #53a4cf !important;\n}\n\n.dark-type-solid[_ngcontent-%COMP%] {\n  background-color: #707070 !important;\n}\n\n.bug-type-solid[_ngcontent-%COMP%] {\n  background-color: #729f3f !important;\n}\n\n*[_ngcontent-%COMP%] {\n  font-family: inherit;\n  font-size: inherit;\n  list-style: none;\n  margin: 0;\n  outline: transparent;\n  padding: 0;\n  text-decoration: none;\n}\n\n*[_ngcontent-%COMP%]:visited, *[_ngcontent-%COMP%]:link {\n  color: inherit;\n}\n\nhtml[_ngcontent-%COMP%] {\n  font-size: 62.5%;\n}\n\nbody[_ngcontent-%COMP%] {\n  font-family: \"Montserrat\", sans-serif;\n  font-size: 1.6rem;\n}\n\n.wrapper[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.wrapper[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%] {\n  margin: 0 auto;\n  width: calc(68% - 1.5rem);\n}\n\n.wrapper[_ngcontent-%COMP%]   .main-content[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  min-height: 85vh;\n}\n\n.wrapper[_ngcontent-%COMP%]   .main-content[_ngcontent-%COMP%]   .pokemon-info[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 28%;\n  height: 100vh;\n  transition: all 0.3s ease;\n  z-index: 1;\n}\n\n.wrapper[_ngcontent-%COMP%]   .main-content[_ngcontent-%COMP%]   .pokemon-info.opened[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.wrapper[_ngcontent-%COMP%]   .main-content[_ngcontent-%COMP%]   .pokemon-list[_ngcontent-%COMP%] {\n  margin: 0 auto;\n  padding: 3rem 0;\n  width: 68%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGFzc2V0c1xcc3R5bGVzXFxfYmFja2dyb3VuZC5zY3NzIiwiLi5cXC4uXFxhcHAuY29tcG9uZW50LnNjc3MiLCIuLlxcLi5cXC4uXFxhc3NldHNcXHN0eWxlc1xcbWFpbi5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0Usb0RBQUE7QUNERjs7QURJQTtFQUNFLG9EQUFBO0FDREY7O0FESUE7RUFDRSxvREFBQTtBQ0RGOztBRElBO0VBQ0Usb0RBQUE7QUNERjs7QURJQTtFQUNFLHFEQUFBO0FDREY7O0FESUE7RUFDRSxvREFBQTtBQ0RGOztBRElBO0VBQ0UscURBQUE7QUNERjs7QURJQTtFQUNFLHFEQUFBO0FDREY7O0FESUE7RUFDRSxxREFBQTtBQ0RGOztBRElBO0VBQ0Usb0RBQUE7QUNERjs7QURJQTtFQUNFLG9EQUFBO0FDREY7O0FESUE7RUFDRSxvREFBQTtBQ0RGOztBRElBO0VBQ0Usb0RBQUE7QUNERjs7QURJQTtFQUNFLHFEQUFBO0FDREY7O0FESUE7RUFDRSxvREFBQTtBQ0RGOztBRElBO0VBQ0Usb0RBQUE7QUNERjs7QURJQTtFQUNFLHFEQUFBO0FDREY7O0FESUE7RUFDRSxvREFBQTtBQ0RGOztBRE1BO0VBQ0Usb0NBQUE7QUNIRjs7QURNQTtFQUNFLG9DQUFBO0FDSEY7O0FETUE7RUFDRSxvQ0FBQTtBQ0hGOztBRE1BO0VBQ0Usb0NBQUE7QUNIRjs7QURNQTtFQUNFLG9DQUFBO0FDSEY7O0FETUE7RUFDRSxvQ0FBQTtBQ0hGOztBRE1BO0VBQ0Usb0NBQUE7QUNIRjs7QURNQTtFQUNFLG9DQUFBO0FDSEY7O0FETUE7RUFDRSxvQ0FBQTtBQ0hGOztBRE1BO0VBQ0Usb0NBQUE7QUNIRjs7QURNQTtFQUNFLG9DQUFBO0FDSEY7O0FETUE7RUFDRSxvQ0FBQTtBQ0hGOztBRE1BO0VBQ0Usb0NBQUE7QUNIRjs7QURNQTtFQUNFLG9DQUFBO0FDSEY7O0FETUE7RUFDRSxvQ0FBQTtBQ0hGOztBRE1BO0VBQ0Usb0NBQUE7QUNIRjs7QURNQTtFQUNFLG9DQUFBO0FDSEY7O0FETUE7RUFDRSxvQ0FBQTtBQ0hGOztBQzNJQTtFQUNFLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLFNBQUE7RUFDQSxvQkFBQTtFQUNBLFVBQUE7RUFDQSxxQkFBQTtBRDhJRjs7QUMzSUE7O0VBRUUsY0FBQTtBRDhJRjs7QUMzSUE7RUFDRSxnQkFBQTtBRDhJRjs7QUMzSUE7RUFDRSxxQ0FBQTtFQUNBLGlCQUFBO0FEOElGOztBQXBLQTtFQUNFLFdBQUE7QUF1S0Y7O0FBdEtFO0VBRUUsY0FBQTtFQUNBLHlCQUFBO0FBdUtKOztBQXJLRTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLGdCQUFBO0FBdUtKOztBQXRLSTtFQUNFLGVBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFVBQUE7RUFDQSxhQUFBO0VBQ0EseUJBQUE7RUFDQSxVQUFBO0FBd0tOOztBQXZLTTtFQUNFLFdBQUE7QUF5S1I7O0FBdEtJO0VBRUUsY0FBQTtFQUNBLGVBQUE7RUFDQSxVQUFBO0FBdUtOIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCJjb2xvcnNcIjtcclxuXHJcbi5ncmFzcy10eXBlIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBnZXRDb2xvclBlcmNlbnQoJGdyYXNzLCAwLjgpICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5naG9zdC10eXBlIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBnZXRDb2xvclBlcmNlbnQoJGdob3N0LCAwLjgpICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5maXJlLXR5cGUge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGdldENvbG9yUGVyY2VudCgkZmlyZSwgMC44KSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ud2F0ZXItdHlwZSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogZ2V0Q29sb3JQZXJjZW50KCR3YXRlciwgMC44KSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uc3RlZWwtdHlwZSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogZ2V0Q29sb3JQZXJjZW50KCRzdGVlbCwgMC44KSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ucm9jay10eXBlIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBnZXRDb2xvclBlcmNlbnQoJHJvY2ssIDAuOCkgIWltcG9ydGFudDtcclxufVxyXG5cclxuLnBzeWNoaWMtdHlwZSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogZ2V0Q29sb3JQZXJjZW50KCRwc3ljaGljLCAwLjgpICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5wb2lzb24tdHlwZSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogZ2V0Q29sb3JQZXJjZW50KCRwb2lzb24sIDAuOCkgIWltcG9ydGFudDtcclxufVxyXG5cclxuLm5vcm1hbC10eXBlIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBnZXRDb2xvclBlcmNlbnQoJG5vcm1hbCwgMC44KSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uaWNlLXR5cGUge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGdldENvbG9yUGVyY2VudCgkaWNlLCAwLjgpICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5ncm91bmQtdHlwZSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogZ2V0Q29sb3JQZXJjZW50KCRncm91bmQtMSwgMC44KSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uZmx5aW5nLXR5cGUge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGdldENvbG9yUGVyY2VudCgkZmx5aW5nLTEsIDAuOCkgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmZpZ2h0aW5nLXR5cGUge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGdldENvbG9yUGVyY2VudCgkZmlnaHRpbmcsIDAuOCkgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmZhaXJ5LXR5cGUge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGdldENvbG9yUGVyY2VudCgkZmFpcnksIDAuOCkgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmVsZWN0cmljLXR5cGUge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGdldENvbG9yUGVyY2VudCgkZWxlY3RyaWMsIDAuOCkgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmRyYWdvbi10eXBlIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBnZXRDb2xvclBlcmNlbnQoJGRyYWdvbi0xLCAwLjgpICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5kYXJrLXR5cGUge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGdldENvbG9yUGVyY2VudCgkZGFyaywgMC44KSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uYnVnLXR5cGUge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGdldENvbG9yUGVyY2VudCgkYnVnLCAwLjgpICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi8vXHJcblxyXG4uZ3Jhc3MtdHlwZS1zb2xpZCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogZ2V0Q29sb3JQZXJjZW50KCRncmFzcywgMSkgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmdob3N0LXR5cGUtc29saWQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGdldENvbG9yUGVyY2VudCgkZ2hvc3QsIDEpICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5maXJlLXR5cGUtc29saWQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGdldENvbG9yUGVyY2VudCgkZmlyZSwgMSkgIWltcG9ydGFudDtcclxufVxyXG5cclxuLndhdGVyLXR5cGUtc29saWQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGdldENvbG9yUGVyY2VudCgkd2F0ZXIsIDEpICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5zdGVlbC10eXBlLXNvbGlkIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBnZXRDb2xvclBlcmNlbnQoJHN0ZWVsLCAxKSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ucm9jay10eXBlLXNvbGlkIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBnZXRDb2xvclBlcmNlbnQoJHJvY2ssIDEpICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5wc3ljaGljLXR5cGUtc29saWQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGdldENvbG9yUGVyY2VudCgkcHN5Y2hpYywgMSkgIWltcG9ydGFudDtcclxufVxyXG5cclxuLnBvaXNvbi10eXBlLXNvbGlkIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBnZXRDb2xvclBlcmNlbnQoJHBvaXNvbiwgMSkgIWltcG9ydGFudDtcclxufVxyXG5cclxuLm5vcm1hbC10eXBlLXNvbGlkIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBnZXRDb2xvclBlcmNlbnQoJG5vcm1hbCwgMSkgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmljZS10eXBlLXNvbGlkIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBnZXRDb2xvclBlcmNlbnQoJGljZSwgMSkgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmdyb3VuZC10eXBlLXNvbGlkIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBnZXRDb2xvclBlcmNlbnQoJGdyb3VuZC0xLCAxKSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uZmx5aW5nLXR5cGUtc29saWQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGdldENvbG9yUGVyY2VudCgkZmx5aW5nLTEsIDEpICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5maWdodGluZy10eXBlLXNvbGlkIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBnZXRDb2xvclBlcmNlbnQoJGZpZ2h0aW5nLCAxKSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uZmFpcnktdHlwZS1zb2xpZCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogZ2V0Q29sb3JQZXJjZW50KCRmYWlyeSwgMSkgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmVsZWN0cmljLXR5cGUtc29saWQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGdldENvbG9yUGVyY2VudCgkZWxlY3RyaWMsIDEpICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5kcmFnb24tdHlwZS1zb2xpZCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogZ2V0Q29sb3JQZXJjZW50KCRkcmFnb24tMSwgMSkgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmRhcmstdHlwZS1zb2xpZCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogZ2V0Q29sb3JQZXJjZW50KCRkYXJrLCAxKSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uYnVnLXR5cGUtc29saWQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGdldENvbG9yUGVyY2VudCgkYnVnLCAxKSAhaW1wb3J0YW50O1xyXG59XHJcbiIsIi5ncmFzcy10eXBlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxNTUsIDIwNCwgODAsIDAuOCkgIWltcG9ydGFudDtcbn1cblxuLmdob3N0LXR5cGUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDEyMywgOTgsIDE2MywgMC44KSAhaW1wb3J0YW50O1xufVxuXG4uZmlyZS10eXBlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTMsIDEyNSwgMzYsIDAuOCkgIWltcG9ydGFudDtcbn1cblxuLndhdGVyLXR5cGUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDY5LCAxNDYsIDE5NiwgMC44KSAhaW1wb3J0YW50O1xufVxuXG4uc3RlZWwtdHlwZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTU4LCAxODMsIDE4NCwgMC44KSAhaW1wb3J0YW50O1xufVxuXG4ucm9jay10eXBlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxNjMsIDE0MCwgMzMsIDAuOCkgIWltcG9ydGFudDtcbn1cblxuLnBzeWNoaWMtdHlwZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjQzLCAxMDIsIDE4NSwgMC44KSAhaW1wb3J0YW50O1xufVxuXG4ucG9pc29uLXR5cGUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE4NSwgMTI3LCAyMDEsIDAuOCkgIWltcG9ydGFudDtcbn1cblxuLm5vcm1hbC10eXBlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxNjQsIDE3MiwgMTc1LCAwLjgpICFpbXBvcnRhbnQ7XG59XG5cbi5pY2UtdHlwZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoODEsIDE5NiwgMjMxLCAwLjgpICFpbXBvcnRhbnQ7XG59XG5cbi5ncm91bmQtdHlwZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjQ3LCAyMjIsIDYzLCAwLjgpICFpbXBvcnRhbnQ7XG59XG5cbi5mbHlpbmctdHlwZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNjEsIDE5OSwgMjM5LCAwLjgpICFpbXBvcnRhbnQ7XG59XG5cbi5maWdodGluZy10eXBlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMTMsIDEwMywgMzUsIDAuOCkgIWltcG9ydGFudDtcbn1cblxuLmZhaXJ5LXR5cGUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1MywgMTg1LCAyMzMsIDAuOCkgIWltcG9ydGFudDtcbn1cblxuLmVsZWN0cmljLXR5cGUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIzOCwgMjEzLCA1MywgMC44KSAhaW1wb3J0YW50O1xufVxuXG4uZHJhZ29uLXR5cGUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDgzLCAxNjQsIDIwNywgMC44KSAhaW1wb3J0YW50O1xufVxuXG4uZGFyay10eXBlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMTIsIDExMiwgMTEyLCAwLjgpICFpbXBvcnRhbnQ7XG59XG5cbi5idWctdHlwZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTE0LCAxNTksIDYzLCAwLjgpICFpbXBvcnRhbnQ7XG59XG5cbi5ncmFzcy10eXBlLXNvbGlkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzliY2M1MCAhaW1wb3J0YW50O1xufVxuXG4uZ2hvc3QtdHlwZS1zb2xpZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM3YjYyYTMgIWltcG9ydGFudDtcbn1cblxuLmZpcmUtdHlwZS1zb2xpZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZDdkMjQgIWltcG9ydGFudDtcbn1cblxuLndhdGVyLXR5cGUtc29saWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDU5MmM0ICFpbXBvcnRhbnQ7XG59XG5cbi5zdGVlbC10eXBlLXNvbGlkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzllYjdiOCAhaW1wb3J0YW50O1xufVxuXG4ucm9jay10eXBlLXNvbGlkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2EzOGMyMSAhaW1wb3J0YW50O1xufVxuXG4ucHN5Y2hpYy10eXBlLXNvbGlkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YzNjZiOSAhaW1wb3J0YW50O1xufVxuXG4ucG9pc29uLXR5cGUtc29saWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYjk3ZmM5ICFpbXBvcnRhbnQ7XG59XG5cbi5ub3JtYWwtdHlwZS1zb2xpZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNhNGFjYWYgIWltcG9ydGFudDtcbn1cblxuLmljZS10eXBlLXNvbGlkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzUxYzRlNyAhaW1wb3J0YW50O1xufVxuXG4uZ3JvdW5kLXR5cGUtc29saWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjdkZTNmICFpbXBvcnRhbnQ7XG59XG5cbi5mbHlpbmctdHlwZS1zb2xpZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzZGM3ZWYgIWltcG9ydGFudDtcbn1cblxuLmZpZ2h0aW5nLXR5cGUtc29saWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDU2NzIzICFpbXBvcnRhbnQ7XG59XG5cbi5mYWlyeS10eXBlLXNvbGlkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZkYjllOSAhaW1wb3J0YW50O1xufVxuXG4uZWxlY3RyaWMtdHlwZS1zb2xpZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlZWQ1MzUgIWltcG9ydGFudDtcbn1cblxuLmRyYWdvbi10eXBlLXNvbGlkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzUzYTRjZiAhaW1wb3J0YW50O1xufVxuXG4uZGFyay10eXBlLXNvbGlkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzcwNzA3MCAhaW1wb3J0YW50O1xufVxuXG4uYnVnLXR5cGUtc29saWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzI5ZjNmICFpbXBvcnRhbnQ7XG59XG5cbioge1xuICBmb250LWZhbWlseTogaW5oZXJpdDtcbiAgZm9udC1zaXplOiBpbmhlcml0O1xuICBsaXN0LXN0eWxlOiBub25lO1xuICBtYXJnaW46IDA7XG4gIG91dGxpbmU6IHRyYW5zcGFyZW50O1xuICBwYWRkaW5nOiAwO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbio6dmlzaXRlZCxcbio6bGluayB7XG4gIGNvbG9yOiBpbmhlcml0O1xufVxuXG5odG1sIHtcbiAgZm9udC1zaXplOiA2Mi41JTtcbn1cblxuYm9keSB7XG4gIGZvbnQtZmFtaWx5OiBcIk1vbnRzZXJyYXRcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAxLjZyZW07XG59XG5cbi53cmFwcGVyIHtcbiAgd2lkdGg6IDEwMCU7XG59XG4ud3JhcHBlciAuaGVhZGVyIHtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHdpZHRoOiBjYWxjKDY4JSAtIDEuNXJlbSk7XG59XG4ud3JhcHBlciAubWFpbi1jb250ZW50IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBtaW4taGVpZ2h0OiA4NXZoO1xufVxuLndyYXBwZXIgLm1haW4tY29udGVudCAucG9rZW1vbi1pbmZvIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAyOCU7XG4gIGhlaWdodDogMTAwdmg7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XG4gIHotaW5kZXg6IDE7XG59XG4ud3JhcHBlciAubWFpbi1jb250ZW50IC5wb2tlbW9uLWluZm8ub3BlbmVkIHtcbiAgd2lkdGg6IDEwMCU7XG59XG4ud3JhcHBlciAubWFpbi1jb250ZW50IC5wb2tlbW9uLWxpc3Qge1xuICBtYXJnaW46IDAgYXV0bztcbiAgcGFkZGluZzogM3JlbSAwO1xuICB3aWR0aDogNjglO1xufSIsIkBpbXBvcnQgXCIuL2NvbG9yc1wiO1xyXG5AaW1wb3J0IFwiLi9iYWNrZ3JvdW5kXCI7XHJcblxyXG4qIHtcclxuICBmb250LWZhbWlseTogaW5oZXJpdDtcclxuICBmb250LXNpemU6IGluaGVyaXQ7XHJcbiAgbGlzdC1zdHlsZTogbm9uZTtcclxuICBtYXJnaW46IDA7XHJcbiAgb3V0bGluZTogdHJhbnNwYXJlbnQ7XHJcbiAgcGFkZGluZzogMDtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuXHJcbio6dmlzaXRlZCxcclxuKjpsaW5rIHtcclxuICBjb2xvcjogaW5oZXJpdDtcclxufVxyXG5cclxuaHRtbCB7XHJcbiAgZm9udC1zaXplOiA2Mi41JTtcclxufVxyXG5cclxuYm9keSB7XHJcbiAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdFwiLCBzYW5zLXNlcmlmO1xyXG4gIGZvbnQtc2l6ZTogMS42cmVtO1xyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], null, null); })();


/***/ }),

/***/ "VRb5":
/*!**************************************************!*\
  !*** ./src/app/poke-list/poke-list.component.ts ***!
  \**************************************************/
/*! exports provided: PokeListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PokeListComponent", function() { return PokeListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _core_services_pokemon_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/services/pokemon.service */ "QcKa");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _poke_item_poke_item_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./poke-item/poke-item.component */ "HJR0");







function PokeListComponent_div_0_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "poke-item", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const pokemon_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("pokemon", pokemon_r4);
} }
function PokeListComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PokeListComponent_div_0_div_1_Template, 2, 1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PokeListComponent_div_0_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.onLoadNextNine(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Cargar m\u00E1s ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.pokemonList);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx_r0.isLoading)("disabled", ctx_r0.isLoading);
} }
function PokeListComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "No encontramos ningun pokemon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class PokeListComponent {
    constructor(pokemonService, router) {
        this.pokemonService = pokemonService;
        this.router = router;
        this.isLoading = false;
        this.pokemonList = [];
        this.LIMIT = 9;
        this.loadedTimes = 0;
        this.subscription = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subscription"]();
    }
    ngOnInit() {
        this.isLoading = !this.isLoading;
        this.loadedTimes = 0;
        const offset = this.loadedTimes * 9;
        this.subscription.add(this.pokemonService.getPokemonList(offset, this.LIMIT).subscribe((_pokemonList) => {
            this.loadList(_pokemonList);
            this.loadedTimes++;
            this.isLoading = !this.isLoading;
        }));
        this.subscription.add(this.pokemonService.searchingPokemon.subscribe((_pokemon) => {
            if (_pokemon) {
                this.router.navigate(['/pokemon', _pokemon.name]);
            }
            else {
                this.router.navigate(['/pokemon']);
            }
        }));
    }
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
    loadList(_pokemonBasicList) {
        for (const item of _pokemonBasicList.results) {
            this.subscription.add(this.pokemonService.getPokemonByName(item.name).subscribe((_pokemon) => {
                this.pokemonList.push(Object.assign({}, _pokemon));
                this.pokemonList.sort((p1, p2) => p1.id - p2.id);
            }));
        }
    }
    onLoadNextNine() {
        this.isLoading = !this.isLoading;
        const offset = this.loadedTimes * 9;
        this.subscription.add(this.pokemonService.getPokemonList(offset, this.LIMIT).subscribe((_pokemonList) => {
            this.loadList(_pokemonList);
            this.loadedTimes++;
            this.isLoading = !this.isLoading;
        }));
    }
}
PokeListComponent.ɵfac = function PokeListComponent_Factory(t) { return new (t || PokeListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_services_pokemon_service__WEBPACK_IMPORTED_MODULE_2__["PokemonService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
PokeListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PokeListComponent, selectors: [["poke-list"]], decls: 3, vars: 2, consts: [["class", "list", 4, "ngIf", "ngIfElse"], ["emptyList", ""], [1, "list"], ["class", "list-item", 4, "ngFor", "ngForOf"], [1, "btn-load", 3, "hidden", "disabled", "click"], [1, "list-item"], [3, "pokemon"]], template: function PokeListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, PokeListComponent_div_0_Template, 4, 3, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PokeListComponent_ng_template_1_Template, 2, 0, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.pokemonList.length > 0)("ngIfElse", _r1);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _poke_item_poke_item_component__WEBPACK_IMPORTED_MODULE_5__["PokeItemComponent"]], styles: [".grass-type[_ngcontent-%COMP%] {\n  background-color: rgba(155, 204, 80, 0.8) !important;\n}\n\n.ghost-type[_ngcontent-%COMP%] {\n  background-color: rgba(123, 98, 163, 0.8) !important;\n}\n\n.fire-type[_ngcontent-%COMP%] {\n  background-color: rgba(253, 125, 36, 0.8) !important;\n}\n\n.water-type[_ngcontent-%COMP%] {\n  background-color: rgba(69, 146, 196, 0.8) !important;\n}\n\n.steel-type[_ngcontent-%COMP%] {\n  background-color: rgba(158, 183, 184, 0.8) !important;\n}\n\n.rock-type[_ngcontent-%COMP%] {\n  background-color: rgba(163, 140, 33, 0.8) !important;\n}\n\n.psychic-type[_ngcontent-%COMP%] {\n  background-color: rgba(243, 102, 185, 0.8) !important;\n}\n\n.poison-type[_ngcontent-%COMP%] {\n  background-color: rgba(185, 127, 201, 0.8) !important;\n}\n\n.normal-type[_ngcontent-%COMP%] {\n  background-color: rgba(164, 172, 175, 0.8) !important;\n}\n\n.ice-type[_ngcontent-%COMP%] {\n  background-color: rgba(81, 196, 231, 0.8) !important;\n}\n\n.ground-type[_ngcontent-%COMP%] {\n  background-color: rgba(247, 222, 63, 0.8) !important;\n}\n\n.flying-type[_ngcontent-%COMP%] {\n  background-color: rgba(61, 199, 239, 0.8) !important;\n}\n\n.fighting-type[_ngcontent-%COMP%] {\n  background-color: rgba(213, 103, 35, 0.8) !important;\n}\n\n.fairy-type[_ngcontent-%COMP%] {\n  background-color: rgba(253, 185, 233, 0.8) !important;\n}\n\n.electric-type[_ngcontent-%COMP%] {\n  background-color: rgba(238, 213, 53, 0.8) !important;\n}\n\n.dragon-type[_ngcontent-%COMP%] {\n  background-color: rgba(83, 164, 207, 0.8) !important;\n}\n\n.dark-type[_ngcontent-%COMP%] {\n  background-color: rgba(112, 112, 112, 0.8) !important;\n}\n\n.bug-type[_ngcontent-%COMP%] {\n  background-color: rgba(114, 159, 63, 0.8) !important;\n}\n\n.grass-type-solid[_ngcontent-%COMP%] {\n  background-color: #9bcc50 !important;\n}\n\n.ghost-type-solid[_ngcontent-%COMP%] {\n  background-color: #7b62a3 !important;\n}\n\n.fire-type-solid[_ngcontent-%COMP%] {\n  background-color: #fd7d24 !important;\n}\n\n.water-type-solid[_ngcontent-%COMP%] {\n  background-color: #4592c4 !important;\n}\n\n.steel-type-solid[_ngcontent-%COMP%] {\n  background-color: #9eb7b8 !important;\n}\n\n.rock-type-solid[_ngcontent-%COMP%] {\n  background-color: #a38c21 !important;\n}\n\n.psychic-type-solid[_ngcontent-%COMP%] {\n  background-color: #f366b9 !important;\n}\n\n.poison-type-solid[_ngcontent-%COMP%] {\n  background-color: #b97fc9 !important;\n}\n\n.normal-type-solid[_ngcontent-%COMP%] {\n  background-color: #a4acaf !important;\n}\n\n.ice-type-solid[_ngcontent-%COMP%] {\n  background-color: #51c4e7 !important;\n}\n\n.ground-type-solid[_ngcontent-%COMP%] {\n  background-color: #f7de3f !important;\n}\n\n.flying-type-solid[_ngcontent-%COMP%] {\n  background-color: #3dc7ef !important;\n}\n\n.fighting-type-solid[_ngcontent-%COMP%] {\n  background-color: #d56723 !important;\n}\n\n.fairy-type-solid[_ngcontent-%COMP%] {\n  background-color: #fdb9e9 !important;\n}\n\n.electric-type-solid[_ngcontent-%COMP%] {\n  background-color: #eed535 !important;\n}\n\n.dragon-type-solid[_ngcontent-%COMP%] {\n  background-color: #53a4cf !important;\n}\n\n.dark-type-solid[_ngcontent-%COMP%] {\n  background-color: #707070 !important;\n}\n\n.bug-type-solid[_ngcontent-%COMP%] {\n  background-color: #729f3f !important;\n}\n\n*[_ngcontent-%COMP%] {\n  font-family: inherit;\n  font-size: inherit;\n  list-style: none;\n  margin: 0;\n  outline: transparent;\n  padding: 0;\n  text-decoration: none;\n}\n\n*[_ngcontent-%COMP%]:visited, *[_ngcontent-%COMP%]:link {\n  color: inherit;\n}\n\nhtml[_ngcontent-%COMP%] {\n  font-size: 62.5%;\n}\n\nbody[_ngcontent-%COMP%] {\n  font-family: \"Montserrat\", sans-serif;\n  font-size: 1.6rem;\n}\n\n.list[_ngcontent-%COMP%] {\n  align-content: space-between;\n  display: flex;\n  flex-flow: row wrap;\n  justify-content: flex-start;\n  height: 100%;\n}\n\n.list-item[_ngcontent-%COMP%] {\n  flex: 0 0 32%;\n  height: 8rem;\n  margin: 0 0.5% 0.5% 0.5%;\n  display: flex;\n  align-self: center;\n  justify-content: center;\n}\n\n.btn-load[_ngcontent-%COMP%] {\n  background-color: #4592c4;\n  border: rgba(34, 34, 34, 0.25);\n  border-radius: 3px;\n  box-shadow: 0 2px 4px 2px rgba(34, 34, 34, 0.4);\n  color: #fff;\n  cursor: pointer;\n  display: block;\n  font-weight: 600;\n  padding: 0.75rem;\n  transform: scale(1);\n  transition: all 0.2s ease-in;\n  width: 100%;\n}\n\n.btn-load[_ngcontent-%COMP%]:active {\n  transform: scale(0.98);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcYXNzZXRzXFxzdHlsZXNcXF9iYWNrZ3JvdW5kLnNjc3MiLCIuLlxcLi5cXC4uXFxwb2tlLWxpc3QuY29tcG9uZW50LnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcLi5cXGFzc2V0c1xcc3R5bGVzXFxtYWluLnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcLi5cXGFzc2V0c1xcc3R5bGVzXFxfY29sb3JzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxvREFBQTtBQ0RGOztBRElBO0VBQ0Usb0RBQUE7QUNERjs7QURJQTtFQUNFLG9EQUFBO0FDREY7O0FESUE7RUFDRSxvREFBQTtBQ0RGOztBRElBO0VBQ0UscURBQUE7QUNERjs7QURJQTtFQUNFLG9EQUFBO0FDREY7O0FESUE7RUFDRSxxREFBQTtBQ0RGOztBRElBO0VBQ0UscURBQUE7QUNERjs7QURJQTtFQUNFLHFEQUFBO0FDREY7O0FESUE7RUFDRSxvREFBQTtBQ0RGOztBRElBO0VBQ0Usb0RBQUE7QUNERjs7QURJQTtFQUNFLG9EQUFBO0FDREY7O0FESUE7RUFDRSxvREFBQTtBQ0RGOztBRElBO0VBQ0UscURBQUE7QUNERjs7QURJQTtFQUNFLG9EQUFBO0FDREY7O0FESUE7RUFDRSxvREFBQTtBQ0RGOztBRElBO0VBQ0UscURBQUE7QUNERjs7QURJQTtFQUNFLG9EQUFBO0FDREY7O0FETUE7RUFDRSxvQ0FBQTtBQ0hGOztBRE1BO0VBQ0Usb0NBQUE7QUNIRjs7QURNQTtFQUNFLG9DQUFBO0FDSEY7O0FETUE7RUFDRSxvQ0FBQTtBQ0hGOztBRE1BO0VBQ0Usb0NBQUE7QUNIRjs7QURNQTtFQUNFLG9DQUFBO0FDSEY7O0FETUE7RUFDRSxvQ0FBQTtBQ0hGOztBRE1BO0VBQ0Usb0NBQUE7QUNIRjs7QURNQTtFQUNFLG9DQUFBO0FDSEY7O0FETUE7RUFDRSxvQ0FBQTtBQ0hGOztBRE1BO0VBQ0Usb0NBQUE7QUNIRjs7QURNQTtFQUNFLG9DQUFBO0FDSEY7O0FETUE7RUFDRSxvQ0FBQTtBQ0hGOztBRE1BO0VBQ0Usb0NBQUE7QUNIRjs7QURNQTtFQUNFLG9DQUFBO0FDSEY7O0FETUE7RUFDRSxvQ0FBQTtBQ0hGOztBRE1BO0VBQ0Usb0NBQUE7QUNIRjs7QURNQTtFQUNFLG9DQUFBO0FDSEY7O0FDM0lBO0VBQ0Usb0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsU0FBQTtFQUNBLG9CQUFBO0VBQ0EsVUFBQTtFQUNBLHFCQUFBO0FEOElGOztBQzNJQTs7RUFFRSxjQUFBO0FEOElGOztBQzNJQTtFQUNFLGdCQUFBO0FEOElGOztBQzNJQTtFQUNFLHFDQUFBO0VBQ0EsaUJBQUE7QUQ4SUY7O0FBcEtBO0VBQ0UsNEJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSwyQkFBQTtFQUNBLFlBQUE7QUF1S0Y7O0FBdEtFO0VBQ0UsYUFBQTtFQUdBLFlBQUE7RUFDQSx3QkFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLHVCQUFBO0FBc0tKOztBQW5LQTtFQUNFLHlCRVlNO0VGWE4sOEJBQUE7RUFDQSxrQkFBQTtFQUNBLCtDRWZpQjtFRmdCakIsV0VsQk07RUZtQk4sZUFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSw0QkFBQTtFQUNBLFdBQUE7QUFzS0Y7O0FBcktFO0VBQ0Usc0JBQUE7QUF1S0oiLCJmaWxlIjoicG9rZS1saXN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcImNvbG9yc1wiO1xyXG5cclxuLmdyYXNzLXR5cGUge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGdldENvbG9yUGVyY2VudCgkZ3Jhc3MsIDAuOCkgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmdob3N0LXR5cGUge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGdldENvbG9yUGVyY2VudCgkZ2hvc3QsIDAuOCkgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmZpcmUtdHlwZSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogZ2V0Q29sb3JQZXJjZW50KCRmaXJlLCAwLjgpICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi53YXRlci10eXBlIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBnZXRDb2xvclBlcmNlbnQoJHdhdGVyLCAwLjgpICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5zdGVlbC10eXBlIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBnZXRDb2xvclBlcmNlbnQoJHN0ZWVsLCAwLjgpICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5yb2NrLXR5cGUge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGdldENvbG9yUGVyY2VudCgkcm9jaywgMC44KSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ucHN5Y2hpYy10eXBlIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBnZXRDb2xvclBlcmNlbnQoJHBzeWNoaWMsIDAuOCkgIWltcG9ydGFudDtcclxufVxyXG5cclxuLnBvaXNvbi10eXBlIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBnZXRDb2xvclBlcmNlbnQoJHBvaXNvbiwgMC44KSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubm9ybWFsLXR5cGUge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGdldENvbG9yUGVyY2VudCgkbm9ybWFsLCAwLjgpICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5pY2UtdHlwZSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogZ2V0Q29sb3JQZXJjZW50KCRpY2UsIDAuOCkgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmdyb3VuZC10eXBlIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBnZXRDb2xvclBlcmNlbnQoJGdyb3VuZC0xLCAwLjgpICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5mbHlpbmctdHlwZSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogZ2V0Q29sb3JQZXJjZW50KCRmbHlpbmctMSwgMC44KSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uZmlnaHRpbmctdHlwZSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogZ2V0Q29sb3JQZXJjZW50KCRmaWdodGluZywgMC44KSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uZmFpcnktdHlwZSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogZ2V0Q29sb3JQZXJjZW50KCRmYWlyeSwgMC44KSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uZWxlY3RyaWMtdHlwZSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogZ2V0Q29sb3JQZXJjZW50KCRlbGVjdHJpYywgMC44KSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uZHJhZ29uLXR5cGUge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGdldENvbG9yUGVyY2VudCgkZHJhZ29uLTEsIDAuOCkgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmRhcmstdHlwZSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogZ2V0Q29sb3JQZXJjZW50KCRkYXJrLCAwLjgpICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5idWctdHlwZSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogZ2V0Q29sb3JQZXJjZW50KCRidWcsIDAuOCkgIWltcG9ydGFudDtcclxufVxyXG5cclxuLy9cclxuXHJcbi5ncmFzcy10eXBlLXNvbGlkIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBnZXRDb2xvclBlcmNlbnQoJGdyYXNzLCAxKSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uZ2hvc3QtdHlwZS1zb2xpZCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogZ2V0Q29sb3JQZXJjZW50KCRnaG9zdCwgMSkgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmZpcmUtdHlwZS1zb2xpZCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogZ2V0Q29sb3JQZXJjZW50KCRmaXJlLCAxKSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ud2F0ZXItdHlwZS1zb2xpZCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogZ2V0Q29sb3JQZXJjZW50KCR3YXRlciwgMSkgIWltcG9ydGFudDtcclxufVxyXG5cclxuLnN0ZWVsLXR5cGUtc29saWQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGdldENvbG9yUGVyY2VudCgkc3RlZWwsIDEpICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5yb2NrLXR5cGUtc29saWQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGdldENvbG9yUGVyY2VudCgkcm9jaywgMSkgIWltcG9ydGFudDtcclxufVxyXG5cclxuLnBzeWNoaWMtdHlwZS1zb2xpZCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogZ2V0Q29sb3JQZXJjZW50KCRwc3ljaGljLCAxKSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ucG9pc29uLXR5cGUtc29saWQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGdldENvbG9yUGVyY2VudCgkcG9pc29uLCAxKSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubm9ybWFsLXR5cGUtc29saWQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGdldENvbG9yUGVyY2VudCgkbm9ybWFsLCAxKSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uaWNlLXR5cGUtc29saWQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGdldENvbG9yUGVyY2VudCgkaWNlLCAxKSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uZ3JvdW5kLXR5cGUtc29saWQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGdldENvbG9yUGVyY2VudCgkZ3JvdW5kLTEsIDEpICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5mbHlpbmctdHlwZS1zb2xpZCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogZ2V0Q29sb3JQZXJjZW50KCRmbHlpbmctMSwgMSkgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmZpZ2h0aW5nLXR5cGUtc29saWQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGdldENvbG9yUGVyY2VudCgkZmlnaHRpbmcsIDEpICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5mYWlyeS10eXBlLXNvbGlkIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBnZXRDb2xvclBlcmNlbnQoJGZhaXJ5LCAxKSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uZWxlY3RyaWMtdHlwZS1zb2xpZCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogZ2V0Q29sb3JQZXJjZW50KCRlbGVjdHJpYywgMSkgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmRyYWdvbi10eXBlLXNvbGlkIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBnZXRDb2xvclBlcmNlbnQoJGRyYWdvbi0xLCAxKSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uZGFyay10eXBlLXNvbGlkIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBnZXRDb2xvclBlcmNlbnQoJGRhcmssIDEpICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5idWctdHlwZS1zb2xpZCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogZ2V0Q29sb3JQZXJjZW50KCRidWcsIDEpICFpbXBvcnRhbnQ7XHJcbn1cclxuIiwiLmdyYXNzLXR5cGUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE1NSwgMjA0LCA4MCwgMC44KSAhaW1wb3J0YW50O1xufVxuXG4uZ2hvc3QtdHlwZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTIzLCA5OCwgMTYzLCAwLjgpICFpbXBvcnRhbnQ7XG59XG5cbi5maXJlLXR5cGUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1MywgMTI1LCAzNiwgMC44KSAhaW1wb3J0YW50O1xufVxuXG4ud2F0ZXItdHlwZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNjksIDE0NiwgMTk2LCAwLjgpICFpbXBvcnRhbnQ7XG59XG5cbi5zdGVlbC10eXBlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxNTgsIDE4MywgMTg0LCAwLjgpICFpbXBvcnRhbnQ7XG59XG5cbi5yb2NrLXR5cGUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE2MywgMTQwLCAzMywgMC44KSAhaW1wb3J0YW50O1xufVxuXG4ucHN5Y2hpYy10eXBlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNDMsIDEwMiwgMTg1LCAwLjgpICFpbXBvcnRhbnQ7XG59XG5cbi5wb2lzb24tdHlwZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTg1LCAxMjcsIDIwMSwgMC44KSAhaW1wb3J0YW50O1xufVxuXG4ubm9ybWFsLXR5cGUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE2NCwgMTcyLCAxNzUsIDAuOCkgIWltcG9ydGFudDtcbn1cblxuLmljZS10eXBlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg4MSwgMTk2LCAyMzEsIDAuOCkgIWltcG9ydGFudDtcbn1cblxuLmdyb3VuZC10eXBlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNDcsIDIyMiwgNjMsIDAuOCkgIWltcG9ydGFudDtcbn1cblxuLmZseWluZy10eXBlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg2MSwgMTk5LCAyMzksIDAuOCkgIWltcG9ydGFudDtcbn1cblxuLmZpZ2h0aW5nLXR5cGUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIxMywgMTAzLCAzNSwgMC44KSAhaW1wb3J0YW50O1xufVxuXG4uZmFpcnktdHlwZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjUzLCAxODUsIDIzMywgMC44KSAhaW1wb3J0YW50O1xufVxuXG4uZWxlY3RyaWMtdHlwZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjM4LCAyMTMsIDUzLCAwLjgpICFpbXBvcnRhbnQ7XG59XG5cbi5kcmFnb24tdHlwZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoODMsIDE2NCwgMjA3LCAwLjgpICFpbXBvcnRhbnQ7XG59XG5cbi5kYXJrLXR5cGUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDExMiwgMTEyLCAxMTIsIDAuOCkgIWltcG9ydGFudDtcbn1cblxuLmJ1Zy10eXBlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMTQsIDE1OSwgNjMsIDAuOCkgIWltcG9ydGFudDtcbn1cblxuLmdyYXNzLXR5cGUtc29saWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOWJjYzUwICFpbXBvcnRhbnQ7XG59XG5cbi5naG9zdC10eXBlLXNvbGlkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzdiNjJhMyAhaW1wb3J0YW50O1xufVxuXG4uZmlyZS10eXBlLXNvbGlkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZkN2QyNCAhaW1wb3J0YW50O1xufVxuXG4ud2F0ZXItdHlwZS1zb2xpZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0NTkyYzQgIWltcG9ydGFudDtcbn1cblxuLnN0ZWVsLXR5cGUtc29saWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOWViN2I4ICFpbXBvcnRhbnQ7XG59XG5cbi5yb2NrLXR5cGUtc29saWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYTM4YzIxICFpbXBvcnRhbnQ7XG59XG5cbi5wc3ljaGljLXR5cGUtc29saWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjM2NmI5ICFpbXBvcnRhbnQ7XG59XG5cbi5wb2lzb24tdHlwZS1zb2xpZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNiOTdmYzkgIWltcG9ydGFudDtcbn1cblxuLm5vcm1hbC10eXBlLXNvbGlkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2E0YWNhZiAhaW1wb3J0YW50O1xufVxuXG4uaWNlLXR5cGUtc29saWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTFjNGU3ICFpbXBvcnRhbnQ7XG59XG5cbi5ncm91bmQtdHlwZS1zb2xpZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmN2RlM2YgIWltcG9ydGFudDtcbn1cblxuLmZseWluZy10eXBlLXNvbGlkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzNkYzdlZiAhaW1wb3J0YW50O1xufVxuXG4uZmlnaHRpbmctdHlwZS1zb2xpZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkNTY3MjMgIWltcG9ydGFudDtcbn1cblxuLmZhaXJ5LXR5cGUtc29saWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmRiOWU5ICFpbXBvcnRhbnQ7XG59XG5cbi5lbGVjdHJpYy10eXBlLXNvbGlkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VlZDUzNSAhaW1wb3J0YW50O1xufVxuXG4uZHJhZ29uLXR5cGUtc29saWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTNhNGNmICFpbXBvcnRhbnQ7XG59XG5cbi5kYXJrLXR5cGUtc29saWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzA3MDcwICFpbXBvcnRhbnQ7XG59XG5cbi5idWctdHlwZS1zb2xpZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM3MjlmM2YgIWltcG9ydGFudDtcbn1cblxuKiB7XG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xuICBmb250LXNpemU6IGluaGVyaXQ7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIG1hcmdpbjogMDtcbiAgb3V0bGluZTogdHJhbnNwYXJlbnQ7XG4gIHBhZGRpbmc6IDA7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuKjp2aXNpdGVkLFxuKjpsaW5rIHtcbiAgY29sb3I6IGluaGVyaXQ7XG59XG5cbmh0bWwge1xuICBmb250LXNpemU6IDYyLjUlO1xufVxuXG5ib2R5IHtcbiAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdFwiLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDEuNnJlbTtcbn1cblxuLmxpc3Qge1xuICBhbGlnbi1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWZsb3c6IHJvdyB3cmFwO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIGhlaWdodDogMTAwJTtcbn1cbi5saXN0LWl0ZW0ge1xuICBmbGV4OiAwIDAgMzIlO1xuICBoZWlnaHQ6IDhyZW07XG4gIG1hcmdpbjogMCAwLjUlIDAuNSUgMC41JTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLmJ0bi1sb2FkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQ1OTJjNDtcbiAgYm9yZGVyOiByZ2JhKDM0LCAzNCwgMzQsIDAuMjUpO1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIGJveC1zaGFkb3c6IDAgMnB4IDRweCAycHggcmdiYSgzNCwgMzQsIDM0LCAwLjQpO1xuICBjb2xvcjogI2ZmZjtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBkaXNwbGF5OiBibG9jaztcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgcGFkZGluZzogMC43NXJlbTtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbjtcbiAgd2lkdGg6IDEwMCU7XG59XG4uYnRuLWxvYWQ6YWN0aXZlIHtcbiAgdHJhbnNmb3JtOiBzY2FsZSgwLjk4KTtcbn0iLCJAaW1wb3J0IFwiLi9jb2xvcnNcIjtcclxuQGltcG9ydCBcIi4vYmFja2dyb3VuZFwiO1xyXG5cclxuKiB7XHJcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XHJcbiAgZm9udC1zaXplOiBpbmhlcml0O1xyXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIG91dGxpbmU6IHRyYW5zcGFyZW50O1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHJcblxyXG4qOnZpc2l0ZWQsXHJcbio6bGluayB7XHJcbiAgY29sb3I6IGluaGVyaXQ7XHJcbn1cclxuXHJcbmh0bWwge1xyXG4gIGZvbnQtc2l6ZTogNjIuNSU7XHJcbn1cclxuXHJcbmJvZHkge1xyXG4gIGZvbnQtZmFtaWx5OiBcIk1vbnRzZXJyYXRcIiwgc2Fucy1zZXJpZjtcclxuICBmb250LXNpemU6IDEuNnJlbTtcclxufVxyXG4iLCIkYmxhY2s6ICMyMjI7XHJcbiRibGFjay1saWdodC0xOiBsaWdodGVuKCRibGFjaywgMjAlKTtcclxuJGJsYWNrLWxpZ2h0LTI6IGxpZ2h0ZW4oJGJsYWNrLCA0MCUpO1xyXG4kYmxhY2stbGlnaHQtMzogbGlnaHRlbigkYmxhY2ssIDYwJSk7XHJcbiRibGFjay1saWdodC00OiBsaWdodGVuKCRibGFjaywgODAlKTtcclxuXHJcbiR3aGl0ZTogI2ZmZjtcclxuXHJcbiRib3gtc2hhZG93LWNsb3NlOiAwIDJweCA0cHggMnB4IHJnYmEoJGJsYWNrLCAwLjQpO1xyXG4kYm94LXNoYWRvdy1mYXI6IDAgMnB4IDNweCAycHggcmdiYSgkYmxhY2ssIDAuMyk7XHJcbiRib3gtc2hhZG93LWZhcnRlc3Q6IDAgMnB4IDJweCAycHggcmdiYSgkYmxhY2ssIDAuMik7XHJcblxyXG4kYnVnOiAjNzI5ZjNmO1xyXG4kZGFyazogIzcwNzA3MDtcclxuJGRyYWdvbi0xOiAjNTNhNGNmO1xyXG4kZHJhZ29uLTI6ICNmMTZlNTc7XHJcbiRlbGVjdHJpYzogI2VlZDUzNTtcclxuJGZhaXJ5OiAjZmRiOWU5O1xyXG4kZmlnaHRpbmc6ICNkNTY3MjM7XHJcbiRmaXJlOiAjZmQ3ZDI0O1xyXG4kZmx5aW5nLTE6ICMzZGM3ZWY7XHJcbiRmbHlpbmctMjogI2JlYmFiOTtcclxuJGdob3N0OiAjN2I2MmEzO1xyXG4kZ3Jhc3M6ICM5YmNjNTA7XHJcbiRncm91bmQtMTogI2Y3ZGUzZjtcclxuJGdyb3VuZC0yOiAjYWI5ODQyO1xyXG4kaWNlOiAjNTFjNGU3O1xyXG4kbm9ybWFsOiAjYTRhY2FmO1xyXG4kcG9pc29uOiAjYjk3ZmM5O1xyXG4kcHN5Y2hpYzogI2YzNjZiOTtcclxuJHJvY2s6ICNhMzhjMjE7XHJcbiRzdGVlbDogIzllYjdiODtcclxuJHdhdGVyOiAjNDU5MmM0O1xyXG5cclxuQGZ1bmN0aW9uIGdldENvbG9yUGVyY2VudCgkY29sb3IsICRvcGFjaXR5KSB7XHJcbiAgQHJldHVybiByZ2JhKCRjb2xvciwgJG9wYWNpdHkpO1xyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PokeListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'poke-list',
                templateUrl: './poke-list.component.html',
                styleUrls: ['./poke-list.component.scss']
            }]
    }], function () { return [{ type: _core_services_pokemon_service__WEBPACK_IMPORTED_MODULE_2__["PokemonService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }]; }, null); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @shared/shared.module */ "PCNd");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @core/core.module */ "pKmL");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./header/header.component */ "fECr");
/* harmony import */ var _whos_that_pokemon_whos_that_pokemon_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./whos-that-pokemon/whos-that-pokemon.component */ "hwFd");
/* harmony import */ var _poke_list_poke_list_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./poke-list/poke-list.component */ "VRb5");
/* harmony import */ var _poke_list_poke_item_poke_item_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./poke-list/poke-item/poke-item.component */ "HJR0");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ "3Pt+");














class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"],
            _core_core_module__WEBPACK_IMPORTED_MODULE_7__["CoreModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormsModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
        _header_header_component__WEBPACK_IMPORTED_MODULE_8__["HeaderComponent"],
        _whos_that_pokemon_whos_that_pokemon_component__WEBPACK_IMPORTED_MODULE_9__["WhosThatPokemonComponent"],
        _poke_list_poke_list_component__WEBPACK_IMPORTED_MODULE_10__["PokeListComponent"],
        _poke_list_poke_item_poke_item_component__WEBPACK_IMPORTED_MODULE_11__["PokeItemComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"],
        _core_core_module__WEBPACK_IMPORTED_MODULE_7__["CoreModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                    _header_header_component__WEBPACK_IMPORTED_MODULE_8__["HeaderComponent"],
                    _whos_that_pokemon_whos_that_pokemon_component__WEBPACK_IMPORTED_MODULE_9__["WhosThatPokemonComponent"],
                    _poke_list_poke_list_component__WEBPACK_IMPORTED_MODULE_10__["PokeListComponent"],
                    _poke_list_poke_item_poke_item_component__WEBPACK_IMPORTED_MODULE_11__["PokeItemComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"],
                    _core_core_module__WEBPACK_IMPORTED_MODULE_7__["CoreModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormsModule"],
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "fECr":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");



const _c0 = ["filterInput"];
class HeaderComponent {
    constructor() { }
    ngOnInit() { }
    ngAfterViewInit() {
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(); };
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["poke-header"]], viewQuery: function HeaderComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.filterInput = _t.first);
    } }, decls: 8, vars: 1, consts: [[1, "header"], [1, "header__title"], [1, "header__searchbar"], [1, "header__searchbar--form"], ["type", "text", "name", "pokemonName", "placeholder", "\u00BFCu\u00E1l es tu Pokem\u00F3n favorito?", 1, "header__searchbar--input", 3, "ngModel", "ngModelChange"], ["filterInput", "ngModel"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "PokeApi Grancolombiano");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "form", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "input", 4, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function HeaderComponent_Template_input_ngModelChange_6_listener($event) { return ctx.pokemonName = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.pokemonName);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgModel"]], styles: [".grass-type[_ngcontent-%COMP%] {\n  background-color: rgba(155, 204, 80, 0.8) !important;\n}\n\n.ghost-type[_ngcontent-%COMP%] {\n  background-color: rgba(123, 98, 163, 0.8) !important;\n}\n\n.fire-type[_ngcontent-%COMP%] {\n  background-color: rgba(253, 125, 36, 0.8) !important;\n}\n\n.water-type[_ngcontent-%COMP%] {\n  background-color: rgba(69, 146, 196, 0.8) !important;\n}\n\n.steel-type[_ngcontent-%COMP%] {\n  background-color: rgba(158, 183, 184, 0.8) !important;\n}\n\n.rock-type[_ngcontent-%COMP%] {\n  background-color: rgba(163, 140, 33, 0.8) !important;\n}\n\n.psychic-type[_ngcontent-%COMP%] {\n  background-color: rgba(243, 102, 185, 0.8) !important;\n}\n\n.poison-type[_ngcontent-%COMP%] {\n  background-color: rgba(185, 127, 201, 0.8) !important;\n}\n\n.normal-type[_ngcontent-%COMP%] {\n  background-color: rgba(164, 172, 175, 0.8) !important;\n}\n\n.ice-type[_ngcontent-%COMP%] {\n  background-color: rgba(81, 196, 231, 0.8) !important;\n}\n\n.ground-type[_ngcontent-%COMP%] {\n  background-color: rgba(247, 222, 63, 0.8) !important;\n}\n\n.flying-type[_ngcontent-%COMP%] {\n  background-color: rgba(61, 199, 239, 0.8) !important;\n}\n\n.fighting-type[_ngcontent-%COMP%] {\n  background-color: rgba(213, 103, 35, 0.8) !important;\n}\n\n.fairy-type[_ngcontent-%COMP%] {\n  background-color: rgba(253, 185, 233, 0.8) !important;\n}\n\n.electric-type[_ngcontent-%COMP%] {\n  background-color: rgba(238, 213, 53, 0.8) !important;\n}\n\n.dragon-type[_ngcontent-%COMP%] {\n  background-color: rgba(83, 164, 207, 0.8) !important;\n}\n\n.dark-type[_ngcontent-%COMP%] {\n  background-color: rgba(112, 112, 112, 0.8) !important;\n}\n\n.bug-type[_ngcontent-%COMP%] {\n  background-color: rgba(114, 159, 63, 0.8) !important;\n}\n\n.grass-type-solid[_ngcontent-%COMP%] {\n  background-color: #9bcc50 !important;\n}\n\n.ghost-type-solid[_ngcontent-%COMP%] {\n  background-color: #7b62a3 !important;\n}\n\n.fire-type-solid[_ngcontent-%COMP%] {\n  background-color: #fd7d24 !important;\n}\n\n.water-type-solid[_ngcontent-%COMP%] {\n  background-color: #4592c4 !important;\n}\n\n.steel-type-solid[_ngcontent-%COMP%] {\n  background-color: #9eb7b8 !important;\n}\n\n.rock-type-solid[_ngcontent-%COMP%] {\n  background-color: #a38c21 !important;\n}\n\n.psychic-type-solid[_ngcontent-%COMP%] {\n  background-color: #f366b9 !important;\n}\n\n.poison-type-solid[_ngcontent-%COMP%] {\n  background-color: #b97fc9 !important;\n}\n\n.normal-type-solid[_ngcontent-%COMP%] {\n  background-color: #a4acaf !important;\n}\n\n.ice-type-solid[_ngcontent-%COMP%] {\n  background-color: #51c4e7 !important;\n}\n\n.ground-type-solid[_ngcontent-%COMP%] {\n  background-color: #f7de3f !important;\n}\n\n.flying-type-solid[_ngcontent-%COMP%] {\n  background-color: #3dc7ef !important;\n}\n\n.fighting-type-solid[_ngcontent-%COMP%] {\n  background-color: #d56723 !important;\n}\n\n.fairy-type-solid[_ngcontent-%COMP%] {\n  background-color: #fdb9e9 !important;\n}\n\n.electric-type-solid[_ngcontent-%COMP%] {\n  background-color: #eed535 !important;\n}\n\n.dragon-type-solid[_ngcontent-%COMP%] {\n  background-color: #53a4cf !important;\n}\n\n.dark-type-solid[_ngcontent-%COMP%] {\n  background-color: #707070 !important;\n}\n\n.bug-type-solid[_ngcontent-%COMP%] {\n  background-color: #729f3f !important;\n}\n\n*[_ngcontent-%COMP%] {\n  font-family: inherit;\n  font-size: inherit;\n  list-style: none;\n  margin: 0;\n  outline: transparent;\n  padding: 0;\n  text-decoration: none;\n}\n\n*[_ngcontent-%COMP%]:visited, *[_ngcontent-%COMP%]:link {\n  color: inherit;\n}\n\nhtml[_ngcontent-%COMP%] {\n  font-size: 62.5%;\n}\n\nbody[_ngcontent-%COMP%] {\n  font-family: \"Montserrat\", sans-serif;\n  font-size: 1.6rem;\n}\n\n.header[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.header[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  margin: 1rem 0;\n}\n\n.header__title[_ngcontent-%COMP%] {\n  font-size: 3.5rem;\n  font-weight: 600;\n  text-align: center;\n}\n\n.header__searchbar--form[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  flex-flow: row nowrap;\n  justify-content: center;\n}\n\n.header__searchbar--input[_ngcontent-%COMP%] {\n  border: 1px solid #888888;\n  border-radius: 20px;\n  display: block;\n  font-size: 1.8rem;\n  padding: 0.5rem 1.5rem;\n  text-align: center;\n  transition: all 0.5s ease-in-out;\n  transform-origin: center;\n  width: 50%;\n}\n\n.header__searchbar--input[_ngcontent-%COMP%]::placeholder {\n  font-size: 1.6rem;\n  color: #eeeeee;\n}\n\n.header__searchbar--input[_ngcontent-%COMP%]:focus {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcYXNzZXRzXFxzdHlsZXNcXF9iYWNrZ3JvdW5kLnNjc3MiLCIuLlxcLi5cXC4uXFxoZWFkZXIuY29tcG9uZW50LnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcLi5cXGFzc2V0c1xcc3R5bGVzXFxtYWluLnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcLi5cXGFzc2V0c1xcc3R5bGVzXFxfY29sb3JzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxvREFBQTtBQ0RGOztBRElBO0VBQ0Usb0RBQUE7QUNERjs7QURJQTtFQUNFLG9EQUFBO0FDREY7O0FESUE7RUFDRSxvREFBQTtBQ0RGOztBRElBO0VBQ0UscURBQUE7QUNERjs7QURJQTtFQUNFLG9EQUFBO0FDREY7O0FESUE7RUFDRSxxREFBQTtBQ0RGOztBRElBO0VBQ0UscURBQUE7QUNERjs7QURJQTtFQUNFLHFEQUFBO0FDREY7O0FESUE7RUFDRSxvREFBQTtBQ0RGOztBRElBO0VBQ0Usb0RBQUE7QUNERjs7QURJQTtFQUNFLG9EQUFBO0FDREY7O0FESUE7RUFDRSxvREFBQTtBQ0RGOztBRElBO0VBQ0UscURBQUE7QUNERjs7QURJQTtFQUNFLG9EQUFBO0FDREY7O0FESUE7RUFDRSxvREFBQTtBQ0RGOztBRElBO0VBQ0UscURBQUE7QUNERjs7QURJQTtFQUNFLG9EQUFBO0FDREY7O0FETUE7RUFDRSxvQ0FBQTtBQ0hGOztBRE1BO0VBQ0Usb0NBQUE7QUNIRjs7QURNQTtFQUNFLG9DQUFBO0FDSEY7O0FETUE7RUFDRSxvQ0FBQTtBQ0hGOztBRE1BO0VBQ0Usb0NBQUE7QUNIRjs7QURNQTtFQUNFLG9DQUFBO0FDSEY7O0FETUE7RUFDRSxvQ0FBQTtBQ0hGOztBRE1BO0VBQ0Usb0NBQUE7QUNIRjs7QURNQTtFQUNFLG9DQUFBO0FDSEY7O0FETUE7RUFDRSxvQ0FBQTtBQ0hGOztBRE1BO0VBQ0Usb0NBQUE7QUNIRjs7QURNQTtFQUNFLG9DQUFBO0FDSEY7O0FETUE7RUFDRSxvQ0FBQTtBQ0hGOztBRE1BO0VBQ0Usb0NBQUE7QUNIRjs7QURNQTtFQUNFLG9DQUFBO0FDSEY7O0FETUE7RUFDRSxvQ0FBQTtBQ0hGOztBRE1BO0VBQ0Usb0NBQUE7QUNIRjs7QURNQTtFQUNFLG9DQUFBO0FDSEY7O0FDM0lBO0VBQ0Usb0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsU0FBQTtFQUNBLG9CQUFBO0VBQ0EsVUFBQTtFQUNBLHFCQUFBO0FEOElGOztBQzNJQTs7RUFFRSxjQUFBO0FEOElGOztBQzNJQTtFQUNFLGdCQUFBO0FEOElGOztBQzNJQTtFQUNFLHFDQUFBO0VBQ0EsaUJBQUE7QUQ4SUY7O0FBcEtBO0VBQ0UsV0FBQTtBQXVLRjs7QUF0S0U7RUFDRSxjQUFBO0FBd0tKOztBQXRLRTtFQUNFLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQXdLSjs7QUFyS0k7RUFDRSxXQUFBO0VBQ0EsYUFBQTtFQUNBLHFCQUFBO0VBQ0EsdUJBQUE7QUF1S047O0FBcktJO0VBQ0UseUJBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQ0FBQTtFQUNBLHdCQUFBO0VBQ0EsVUFBQTtBQXVLTjs7QUF0S007RUFDRSxpQkFBQTtFQUNBLGNFM0JRO0FGbU1oQjs7QUF0S007RUFDRSxXQUFBO0FBd0tSIiwiZmlsZSI6ImhlYWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCJjb2xvcnNcIjtcclxuXHJcbi5ncmFzcy10eXBlIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBnZXRDb2xvclBlcmNlbnQoJGdyYXNzLCAwLjgpICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5naG9zdC10eXBlIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBnZXRDb2xvclBlcmNlbnQoJGdob3N0LCAwLjgpICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5maXJlLXR5cGUge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGdldENvbG9yUGVyY2VudCgkZmlyZSwgMC44KSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ud2F0ZXItdHlwZSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogZ2V0Q29sb3JQZXJjZW50KCR3YXRlciwgMC44KSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uc3RlZWwtdHlwZSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogZ2V0Q29sb3JQZXJjZW50KCRzdGVlbCwgMC44KSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ucm9jay10eXBlIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBnZXRDb2xvclBlcmNlbnQoJHJvY2ssIDAuOCkgIWltcG9ydGFudDtcclxufVxyXG5cclxuLnBzeWNoaWMtdHlwZSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogZ2V0Q29sb3JQZXJjZW50KCRwc3ljaGljLCAwLjgpICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5wb2lzb24tdHlwZSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogZ2V0Q29sb3JQZXJjZW50KCRwb2lzb24sIDAuOCkgIWltcG9ydGFudDtcclxufVxyXG5cclxuLm5vcm1hbC10eXBlIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBnZXRDb2xvclBlcmNlbnQoJG5vcm1hbCwgMC44KSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uaWNlLXR5cGUge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGdldENvbG9yUGVyY2VudCgkaWNlLCAwLjgpICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5ncm91bmQtdHlwZSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogZ2V0Q29sb3JQZXJjZW50KCRncm91bmQtMSwgMC44KSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uZmx5aW5nLXR5cGUge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGdldENvbG9yUGVyY2VudCgkZmx5aW5nLTEsIDAuOCkgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmZpZ2h0aW5nLXR5cGUge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGdldENvbG9yUGVyY2VudCgkZmlnaHRpbmcsIDAuOCkgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmZhaXJ5LXR5cGUge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGdldENvbG9yUGVyY2VudCgkZmFpcnksIDAuOCkgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmVsZWN0cmljLXR5cGUge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGdldENvbG9yUGVyY2VudCgkZWxlY3RyaWMsIDAuOCkgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmRyYWdvbi10eXBlIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBnZXRDb2xvclBlcmNlbnQoJGRyYWdvbi0xLCAwLjgpICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5kYXJrLXR5cGUge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGdldENvbG9yUGVyY2VudCgkZGFyaywgMC44KSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uYnVnLXR5cGUge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGdldENvbG9yUGVyY2VudCgkYnVnLCAwLjgpICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi8vXHJcblxyXG4uZ3Jhc3MtdHlwZS1zb2xpZCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogZ2V0Q29sb3JQZXJjZW50KCRncmFzcywgMSkgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmdob3N0LXR5cGUtc29saWQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGdldENvbG9yUGVyY2VudCgkZ2hvc3QsIDEpICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5maXJlLXR5cGUtc29saWQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGdldENvbG9yUGVyY2VudCgkZmlyZSwgMSkgIWltcG9ydGFudDtcclxufVxyXG5cclxuLndhdGVyLXR5cGUtc29saWQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGdldENvbG9yUGVyY2VudCgkd2F0ZXIsIDEpICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5zdGVlbC10eXBlLXNvbGlkIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBnZXRDb2xvclBlcmNlbnQoJHN0ZWVsLCAxKSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ucm9jay10eXBlLXNvbGlkIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBnZXRDb2xvclBlcmNlbnQoJHJvY2ssIDEpICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5wc3ljaGljLXR5cGUtc29saWQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGdldENvbG9yUGVyY2VudCgkcHN5Y2hpYywgMSkgIWltcG9ydGFudDtcclxufVxyXG5cclxuLnBvaXNvbi10eXBlLXNvbGlkIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBnZXRDb2xvclBlcmNlbnQoJHBvaXNvbiwgMSkgIWltcG9ydGFudDtcclxufVxyXG5cclxuLm5vcm1hbC10eXBlLXNvbGlkIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBnZXRDb2xvclBlcmNlbnQoJG5vcm1hbCwgMSkgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmljZS10eXBlLXNvbGlkIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBnZXRDb2xvclBlcmNlbnQoJGljZSwgMSkgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmdyb3VuZC10eXBlLXNvbGlkIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBnZXRDb2xvclBlcmNlbnQoJGdyb3VuZC0xLCAxKSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uZmx5aW5nLXR5cGUtc29saWQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGdldENvbG9yUGVyY2VudCgkZmx5aW5nLTEsIDEpICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5maWdodGluZy10eXBlLXNvbGlkIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBnZXRDb2xvclBlcmNlbnQoJGZpZ2h0aW5nLCAxKSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uZmFpcnktdHlwZS1zb2xpZCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogZ2V0Q29sb3JQZXJjZW50KCRmYWlyeSwgMSkgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmVsZWN0cmljLXR5cGUtc29saWQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGdldENvbG9yUGVyY2VudCgkZWxlY3RyaWMsIDEpICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5kcmFnb24tdHlwZS1zb2xpZCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogZ2V0Q29sb3JQZXJjZW50KCRkcmFnb24tMSwgMSkgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmRhcmstdHlwZS1zb2xpZCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogZ2V0Q29sb3JQZXJjZW50KCRkYXJrLCAxKSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uYnVnLXR5cGUtc29saWQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGdldENvbG9yUGVyY2VudCgkYnVnLCAxKSAhaW1wb3J0YW50O1xyXG59XHJcbiIsIi5ncmFzcy10eXBlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxNTUsIDIwNCwgODAsIDAuOCkgIWltcG9ydGFudDtcbn1cblxuLmdob3N0LXR5cGUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDEyMywgOTgsIDE2MywgMC44KSAhaW1wb3J0YW50O1xufVxuXG4uZmlyZS10eXBlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTMsIDEyNSwgMzYsIDAuOCkgIWltcG9ydGFudDtcbn1cblxuLndhdGVyLXR5cGUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDY5LCAxNDYsIDE5NiwgMC44KSAhaW1wb3J0YW50O1xufVxuXG4uc3RlZWwtdHlwZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTU4LCAxODMsIDE4NCwgMC44KSAhaW1wb3J0YW50O1xufVxuXG4ucm9jay10eXBlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxNjMsIDE0MCwgMzMsIDAuOCkgIWltcG9ydGFudDtcbn1cblxuLnBzeWNoaWMtdHlwZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjQzLCAxMDIsIDE4NSwgMC44KSAhaW1wb3J0YW50O1xufVxuXG4ucG9pc29uLXR5cGUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE4NSwgMTI3LCAyMDEsIDAuOCkgIWltcG9ydGFudDtcbn1cblxuLm5vcm1hbC10eXBlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxNjQsIDE3MiwgMTc1LCAwLjgpICFpbXBvcnRhbnQ7XG59XG5cbi5pY2UtdHlwZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoODEsIDE5NiwgMjMxLCAwLjgpICFpbXBvcnRhbnQ7XG59XG5cbi5ncm91bmQtdHlwZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjQ3LCAyMjIsIDYzLCAwLjgpICFpbXBvcnRhbnQ7XG59XG5cbi5mbHlpbmctdHlwZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNjEsIDE5OSwgMjM5LCAwLjgpICFpbXBvcnRhbnQ7XG59XG5cbi5maWdodGluZy10eXBlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMTMsIDEwMywgMzUsIDAuOCkgIWltcG9ydGFudDtcbn1cblxuLmZhaXJ5LXR5cGUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1MywgMTg1LCAyMzMsIDAuOCkgIWltcG9ydGFudDtcbn1cblxuLmVsZWN0cmljLXR5cGUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIzOCwgMjEzLCA1MywgMC44KSAhaW1wb3J0YW50O1xufVxuXG4uZHJhZ29uLXR5cGUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDgzLCAxNjQsIDIwNywgMC44KSAhaW1wb3J0YW50O1xufVxuXG4uZGFyay10eXBlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMTIsIDExMiwgMTEyLCAwLjgpICFpbXBvcnRhbnQ7XG59XG5cbi5idWctdHlwZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTE0LCAxNTksIDYzLCAwLjgpICFpbXBvcnRhbnQ7XG59XG5cbi5ncmFzcy10eXBlLXNvbGlkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzliY2M1MCAhaW1wb3J0YW50O1xufVxuXG4uZ2hvc3QtdHlwZS1zb2xpZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM3YjYyYTMgIWltcG9ydGFudDtcbn1cblxuLmZpcmUtdHlwZS1zb2xpZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZDdkMjQgIWltcG9ydGFudDtcbn1cblxuLndhdGVyLXR5cGUtc29saWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDU5MmM0ICFpbXBvcnRhbnQ7XG59XG5cbi5zdGVlbC10eXBlLXNvbGlkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzllYjdiOCAhaW1wb3J0YW50O1xufVxuXG4ucm9jay10eXBlLXNvbGlkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2EzOGMyMSAhaW1wb3J0YW50O1xufVxuXG4ucHN5Y2hpYy10eXBlLXNvbGlkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YzNjZiOSAhaW1wb3J0YW50O1xufVxuXG4ucG9pc29uLXR5cGUtc29saWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYjk3ZmM5ICFpbXBvcnRhbnQ7XG59XG5cbi5ub3JtYWwtdHlwZS1zb2xpZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNhNGFjYWYgIWltcG9ydGFudDtcbn1cblxuLmljZS10eXBlLXNvbGlkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzUxYzRlNyAhaW1wb3J0YW50O1xufVxuXG4uZ3JvdW5kLXR5cGUtc29saWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjdkZTNmICFpbXBvcnRhbnQ7XG59XG5cbi5mbHlpbmctdHlwZS1zb2xpZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzZGM3ZWYgIWltcG9ydGFudDtcbn1cblxuLmZpZ2h0aW5nLXR5cGUtc29saWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDU2NzIzICFpbXBvcnRhbnQ7XG59XG5cbi5mYWlyeS10eXBlLXNvbGlkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZkYjllOSAhaW1wb3J0YW50O1xufVxuXG4uZWxlY3RyaWMtdHlwZS1zb2xpZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlZWQ1MzUgIWltcG9ydGFudDtcbn1cblxuLmRyYWdvbi10eXBlLXNvbGlkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzUzYTRjZiAhaW1wb3J0YW50O1xufVxuXG4uZGFyay10eXBlLXNvbGlkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzcwNzA3MCAhaW1wb3J0YW50O1xufVxuXG4uYnVnLXR5cGUtc29saWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzI5ZjNmICFpbXBvcnRhbnQ7XG59XG5cbioge1xuICBmb250LWZhbWlseTogaW5oZXJpdDtcbiAgZm9udC1zaXplOiBpbmhlcml0O1xuICBsaXN0LXN0eWxlOiBub25lO1xuICBtYXJnaW46IDA7XG4gIG91dGxpbmU6IHRyYW5zcGFyZW50O1xuICBwYWRkaW5nOiAwO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbio6dmlzaXRlZCxcbio6bGluayB7XG4gIGNvbG9yOiBpbmhlcml0O1xufVxuXG5odG1sIHtcbiAgZm9udC1zaXplOiA2Mi41JTtcbn1cblxuYm9keSB7XG4gIGZvbnQtZmFtaWx5OiBcIk1vbnRzZXJyYXRcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAxLjZyZW07XG59XG5cbi5oZWFkZXIge1xuICB3aWR0aDogMTAwJTtcbn1cbi5oZWFkZXIgPiAqIHtcbiAgbWFyZ2luOiAxcmVtIDA7XG59XG4uaGVhZGVyX190aXRsZSB7XG4gIGZvbnQtc2l6ZTogMy41cmVtO1xuICBmb250LXdlaWdodDogNjAwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uaGVhZGVyX19zZWFyY2hiYXItLWZvcm0ge1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1mbG93OiByb3cgbm93cmFwO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbi5oZWFkZXJfX3NlYXJjaGJhci0taW5wdXQge1xuICBib3JkZXI6IDFweCBzb2xpZCAjODg4ODg4O1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICBkaXNwbGF5OiBibG9jaztcbiAgZm9udC1zaXplOiAxLjhyZW07XG4gIHBhZGRpbmc6IDAuNXJlbSAxLjVyZW07XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbi1vdXQ7XG4gIHRyYW5zZm9ybS1vcmlnaW46IGNlbnRlcjtcbiAgd2lkdGg6IDUwJTtcbn1cbi5oZWFkZXJfX3NlYXJjaGJhci0taW5wdXQ6OnBsYWNlaG9sZGVyIHtcbiAgZm9udC1zaXplOiAxLjZyZW07XG4gIGNvbG9yOiAjZWVlZWVlO1xufVxuLmhlYWRlcl9fc2VhcmNoYmFyLS1pbnB1dDpmb2N1cyB7XG4gIHdpZHRoOiAxMDAlO1xufSIsIkBpbXBvcnQgXCIuL2NvbG9yc1wiO1xyXG5AaW1wb3J0IFwiLi9iYWNrZ3JvdW5kXCI7XHJcblxyXG4qIHtcclxuICBmb250LWZhbWlseTogaW5oZXJpdDtcclxuICBmb250LXNpemU6IGluaGVyaXQ7XHJcbiAgbGlzdC1zdHlsZTogbm9uZTtcclxuICBtYXJnaW46IDA7XHJcbiAgb3V0bGluZTogdHJhbnNwYXJlbnQ7XHJcbiAgcGFkZGluZzogMDtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuXHJcbio6dmlzaXRlZCxcclxuKjpsaW5rIHtcclxuICBjb2xvcjogaW5oZXJpdDtcclxufVxyXG5cclxuaHRtbCB7XHJcbiAgZm9udC1zaXplOiA2Mi41JTtcclxufVxyXG5cclxuYm9keSB7XHJcbiAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdFwiLCBzYW5zLXNlcmlmO1xyXG4gIGZvbnQtc2l6ZTogMS42cmVtO1xyXG59XHJcbiIsIiRibGFjazogIzIyMjtcclxuJGJsYWNrLWxpZ2h0LTE6IGxpZ2h0ZW4oJGJsYWNrLCAyMCUpO1xyXG4kYmxhY2stbGlnaHQtMjogbGlnaHRlbigkYmxhY2ssIDQwJSk7XHJcbiRibGFjay1saWdodC0zOiBsaWdodGVuKCRibGFjaywgNjAlKTtcclxuJGJsYWNrLWxpZ2h0LTQ6IGxpZ2h0ZW4oJGJsYWNrLCA4MCUpO1xyXG5cclxuJHdoaXRlOiAjZmZmO1xyXG5cclxuJGJveC1zaGFkb3ctY2xvc2U6IDAgMnB4IDRweCAycHggcmdiYSgkYmxhY2ssIDAuNCk7XHJcbiRib3gtc2hhZG93LWZhcjogMCAycHggM3B4IDJweCByZ2JhKCRibGFjaywgMC4zKTtcclxuJGJveC1zaGFkb3ctZmFydGVzdDogMCAycHggMnB4IDJweCByZ2JhKCRibGFjaywgMC4yKTtcclxuXHJcbiRidWc6ICM3MjlmM2Y7XHJcbiRkYXJrOiAjNzA3MDcwO1xyXG4kZHJhZ29uLTE6ICM1M2E0Y2Y7XHJcbiRkcmFnb24tMjogI2YxNmU1NztcclxuJGVsZWN0cmljOiAjZWVkNTM1O1xyXG4kZmFpcnk6ICNmZGI5ZTk7XHJcbiRmaWdodGluZzogI2Q1NjcyMztcclxuJGZpcmU6ICNmZDdkMjQ7XHJcbiRmbHlpbmctMTogIzNkYzdlZjtcclxuJGZseWluZy0yOiAjYmViYWI5O1xyXG4kZ2hvc3Q6ICM3YjYyYTM7XHJcbiRncmFzczogIzliY2M1MDtcclxuJGdyb3VuZC0xOiAjZjdkZTNmO1xyXG4kZ3JvdW5kLTI6ICNhYjk4NDI7XHJcbiRpY2U6ICM1MWM0ZTc7XHJcbiRub3JtYWw6ICNhNGFjYWY7XHJcbiRwb2lzb246ICNiOTdmYzk7XHJcbiRwc3ljaGljOiAjZjM2NmI5O1xyXG4kcm9jazogI2EzOGMyMTtcclxuJHN0ZWVsOiAjOWViN2I4O1xyXG4kd2F0ZXI6ICM0NTkyYzQ7XHJcblxyXG5AZnVuY3Rpb24gZ2V0Q29sb3JQZXJjZW50KCRjb2xvciwgJG9wYWNpdHkpIHtcclxuICBAcmV0dXJuIHJnYmEoJGNvbG9yLCAkb3BhY2l0eSk7XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'poke-header',
                templateUrl: './header.component.html',
                styleUrls: ['./header.component.scss']
            }]
    }], function () { return []; }, { filterInput: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['filterInput']
        }] }); })();


/***/ }),

/***/ "hwFd":
/*!******************************************************************!*\
  !*** ./src/app/whos-that-pokemon/whos-that-pokemon.component.ts ***!
  \******************************************************************/
/*! exports provided: WhosThatPokemonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WhosThatPokemonComponent", function() { return WhosThatPokemonComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class WhosThatPokemonComponent {
    constructor() { }
    ngOnInit() { }
}
WhosThatPokemonComponent.ɵfac = function WhosThatPokemonComponent_Factory(t) { return new (t || WhosThatPokemonComponent)(); };
WhosThatPokemonComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: WhosThatPokemonComponent, selectors: [["poke-whos-that-pokemon"]], decls: 5, vars: 0, consts: [[1, "whos-that-pokemon"], [1, "whos-that-pokemon__title"], ["aria-hidden", "true", "focusable", "false", "data-prefix", "fas", "data-icon", "question", "role", "img", "xmlns", "http://www.w3.org/2000/svg", "view-box", "0 0 384 512", 1, "svg-inline--fa", "fa-question", "fa-w-12"], ["fill", "currentColor", "d", "M202.021 0C122.202 0 70.503 32.703 29.914 91.026c-7.363 10.58-5.093 25.086 5.178 32.874l43.138 32.709c10.373 7.865 25.132 6.026 33.253-4.148 25.049-31.381 43.63-49.449 82.757-49.449 30.764 0 68.816 19.799 68.816 49.631 0 22.552-18.617 34.134-48.993 51.164-35.423 19.86-82.299 44.576-82.299 106.405V320c0 13.255 10.745 24 24 24h72.471c13.255 0 24-10.745 24-24v-5.773c0-42.86 125.268-44.645 125.268-160.627C377.504 66.256 286.902 0 202.021 0zM192 373.459c-38.196 0-69.271 31.075-69.271 69.271 0 38.195 31.075 69.27 69.271 69.27s69.271-31.075 69.271-69.271-31.075-69.27-69.271-69.27z"]], template: function WhosThatPokemonComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u00BFQui\u00E9n ese Pok\u00E9mon? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "svg", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "path", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".grass-type[_ngcontent-%COMP%] {\n  background-color: rgba(155, 204, 80, 0.8) !important;\n}\n\n.ghost-type[_ngcontent-%COMP%] {\n  background-color: rgba(123, 98, 163, 0.8) !important;\n}\n\n.fire-type[_ngcontent-%COMP%] {\n  background-color: rgba(253, 125, 36, 0.8) !important;\n}\n\n.water-type[_ngcontent-%COMP%] {\n  background-color: rgba(69, 146, 196, 0.8) !important;\n}\n\n.steel-type[_ngcontent-%COMP%] {\n  background-color: rgba(158, 183, 184, 0.8) !important;\n}\n\n.rock-type[_ngcontent-%COMP%] {\n  background-color: rgba(163, 140, 33, 0.8) !important;\n}\n\n.psychic-type[_ngcontent-%COMP%] {\n  background-color: rgba(243, 102, 185, 0.8) !important;\n}\n\n.poison-type[_ngcontent-%COMP%] {\n  background-color: rgba(185, 127, 201, 0.8) !important;\n}\n\n.normal-type[_ngcontent-%COMP%] {\n  background-color: rgba(164, 172, 175, 0.8) !important;\n}\n\n.ice-type[_ngcontent-%COMP%] {\n  background-color: rgba(81, 196, 231, 0.8) !important;\n}\n\n.ground-type[_ngcontent-%COMP%] {\n  background-color: rgba(247, 222, 63, 0.8) !important;\n}\n\n.flying-type[_ngcontent-%COMP%] {\n  background-color: rgba(61, 199, 239, 0.8) !important;\n}\n\n.fighting-type[_ngcontent-%COMP%] {\n  background-color: rgba(213, 103, 35, 0.8) !important;\n}\n\n.fairy-type[_ngcontent-%COMP%] {\n  background-color: rgba(253, 185, 233, 0.8) !important;\n}\n\n.electric-type[_ngcontent-%COMP%] {\n  background-color: rgba(238, 213, 53, 0.8) !important;\n}\n\n.dragon-type[_ngcontent-%COMP%] {\n  background-color: rgba(83, 164, 207, 0.8) !important;\n}\n\n.dark-type[_ngcontent-%COMP%] {\n  background-color: rgba(112, 112, 112, 0.8) !important;\n}\n\n.bug-type[_ngcontent-%COMP%] {\n  background-color: rgba(114, 159, 63, 0.8) !important;\n}\n\n.grass-type-solid[_ngcontent-%COMP%] {\n  background-color: #9bcc50 !important;\n}\n\n.ghost-type-solid[_ngcontent-%COMP%] {\n  background-color: #7b62a3 !important;\n}\n\n.fire-type-solid[_ngcontent-%COMP%] {\n  background-color: #fd7d24 !important;\n}\n\n.water-type-solid[_ngcontent-%COMP%] {\n  background-color: #4592c4 !important;\n}\n\n.steel-type-solid[_ngcontent-%COMP%] {\n  background-color: #9eb7b8 !important;\n}\n\n.rock-type-solid[_ngcontent-%COMP%] {\n  background-color: #a38c21 !important;\n}\n\n.psychic-type-solid[_ngcontent-%COMP%] {\n  background-color: #f366b9 !important;\n}\n\n.poison-type-solid[_ngcontent-%COMP%] {\n  background-color: #b97fc9 !important;\n}\n\n.normal-type-solid[_ngcontent-%COMP%] {\n  background-color: #a4acaf !important;\n}\n\n.ice-type-solid[_ngcontent-%COMP%] {\n  background-color: #51c4e7 !important;\n}\n\n.ground-type-solid[_ngcontent-%COMP%] {\n  background-color: #f7de3f !important;\n}\n\n.flying-type-solid[_ngcontent-%COMP%] {\n  background-color: #3dc7ef !important;\n}\n\n.fighting-type-solid[_ngcontent-%COMP%] {\n  background-color: #d56723 !important;\n}\n\n.fairy-type-solid[_ngcontent-%COMP%] {\n  background-color: #fdb9e9 !important;\n}\n\n.electric-type-solid[_ngcontent-%COMP%] {\n  background-color: #eed535 !important;\n}\n\n.dragon-type-solid[_ngcontent-%COMP%] {\n  background-color: #53a4cf !important;\n}\n\n.dark-type-solid[_ngcontent-%COMP%] {\n  background-color: #707070 !important;\n}\n\n.bug-type-solid[_ngcontent-%COMP%] {\n  background-color: #729f3f !important;\n}\n\n*[_ngcontent-%COMP%] {\n  font-family: inherit;\n  font-size: inherit;\n  list-style: none;\n  margin: 0;\n  outline: transparent;\n  padding: 0;\n  text-decoration: none;\n}\n\n*[_ngcontent-%COMP%]:visited, *[_ngcontent-%COMP%]:link {\n  color: inherit;\n}\n\nhtml[_ngcontent-%COMP%] {\n  font-size: 62.5%;\n}\n\nbody[_ngcontent-%COMP%] {\n  font-family: \"Montserrat\", sans-serif;\n  font-size: 1.6rem;\n}\n\n.whos-that-pokemon[_ngcontent-%COMP%] {\n  background-color: #222;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-evenly;\n  align-items: center;\n  height: 100%;\n}\n\n.whos-that-pokemon__title[_ngcontent-%COMP%] {\n  color: #fff;\n  font-size: 2.5rem;\n  font-weight: 600;\n}\n\n.whos-that-pokemon[_ngcontent-%COMP%]   .fa-question[_ngcontent-%COMP%] {\n  color: #fff;\n  width: 50%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcYXNzZXRzXFxzdHlsZXNcXF9iYWNrZ3JvdW5kLnNjc3MiLCIuLlxcLi5cXC4uXFx3aG9zLXRoYXQtcG9rZW1vbi5jb21wb25lbnQuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcYXNzZXRzXFxzdHlsZXNcXG1haW4uc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcYXNzZXRzXFxzdHlsZXNcXF9jb2xvcnMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLG9EQUFBO0FDREY7O0FESUE7RUFDRSxvREFBQTtBQ0RGOztBRElBO0VBQ0Usb0RBQUE7QUNERjs7QURJQTtFQUNFLG9EQUFBO0FDREY7O0FESUE7RUFDRSxxREFBQTtBQ0RGOztBRElBO0VBQ0Usb0RBQUE7QUNERjs7QURJQTtFQUNFLHFEQUFBO0FDREY7O0FESUE7RUFDRSxxREFBQTtBQ0RGOztBRElBO0VBQ0UscURBQUE7QUNERjs7QURJQTtFQUNFLG9EQUFBO0FDREY7O0FESUE7RUFDRSxvREFBQTtBQ0RGOztBRElBO0VBQ0Usb0RBQUE7QUNERjs7QURJQTtFQUNFLG9EQUFBO0FDREY7O0FESUE7RUFDRSxxREFBQTtBQ0RGOztBRElBO0VBQ0Usb0RBQUE7QUNERjs7QURJQTtFQUNFLG9EQUFBO0FDREY7O0FESUE7RUFDRSxxREFBQTtBQ0RGOztBRElBO0VBQ0Usb0RBQUE7QUNERjs7QURNQTtFQUNFLG9DQUFBO0FDSEY7O0FETUE7RUFDRSxvQ0FBQTtBQ0hGOztBRE1BO0VBQ0Usb0NBQUE7QUNIRjs7QURNQTtFQUNFLG9DQUFBO0FDSEY7O0FETUE7RUFDRSxvQ0FBQTtBQ0hGOztBRE1BO0VBQ0Usb0NBQUE7QUNIRjs7QURNQTtFQUNFLG9DQUFBO0FDSEY7O0FETUE7RUFDRSxvQ0FBQTtBQ0hGOztBRE1BO0VBQ0Usb0NBQUE7QUNIRjs7QURNQTtFQUNFLG9DQUFBO0FDSEY7O0FETUE7RUFDRSxvQ0FBQTtBQ0hGOztBRE1BO0VBQ0Usb0NBQUE7QUNIRjs7QURNQTtFQUNFLG9DQUFBO0FDSEY7O0FETUE7RUFDRSxvQ0FBQTtBQ0hGOztBRE1BO0VBQ0Usb0NBQUE7QUNIRjs7QURNQTtFQUNFLG9DQUFBO0FDSEY7O0FETUE7RUFDRSxvQ0FBQTtBQ0hGOztBRE1BO0VBQ0Usb0NBQUE7QUNIRjs7QUMzSUE7RUFDRSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxTQUFBO0VBQ0Esb0JBQUE7RUFDQSxVQUFBO0VBQ0EscUJBQUE7QUQ4SUY7O0FDM0lBOztFQUVFLGNBQUE7QUQ4SUY7O0FDM0lBO0VBQ0UsZ0JBQUE7QUQ4SUY7O0FDM0lBO0VBQ0UscUNBQUE7RUFDQSxpQkFBQTtBRDhJRjs7QUFwS0E7RUFDRSxzQkVITTtFRklOLGFBQUE7RUFDQSxzQkFBQTtFQUNBLDZCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0FBdUtGOztBQXRLRTtFQUNFLFdFSkk7RUZLSixpQkFBQTtFQUNBLGdCQUFBO0FBd0tKOztBQXRLRTtFQUNFLFdFVEk7RUZVSixVQUFBO0FBd0tKIiwiZmlsZSI6Indob3MtdGhhdC1wb2tlbW9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcImNvbG9yc1wiO1xyXG5cclxuLmdyYXNzLXR5cGUge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGdldENvbG9yUGVyY2VudCgkZ3Jhc3MsIDAuOCkgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmdob3N0LXR5cGUge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGdldENvbG9yUGVyY2VudCgkZ2hvc3QsIDAuOCkgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmZpcmUtdHlwZSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogZ2V0Q29sb3JQZXJjZW50KCRmaXJlLCAwLjgpICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi53YXRlci10eXBlIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBnZXRDb2xvclBlcmNlbnQoJHdhdGVyLCAwLjgpICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5zdGVlbC10eXBlIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBnZXRDb2xvclBlcmNlbnQoJHN0ZWVsLCAwLjgpICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5yb2NrLXR5cGUge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGdldENvbG9yUGVyY2VudCgkcm9jaywgMC44KSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ucHN5Y2hpYy10eXBlIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBnZXRDb2xvclBlcmNlbnQoJHBzeWNoaWMsIDAuOCkgIWltcG9ydGFudDtcclxufVxyXG5cclxuLnBvaXNvbi10eXBlIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBnZXRDb2xvclBlcmNlbnQoJHBvaXNvbiwgMC44KSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubm9ybWFsLXR5cGUge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGdldENvbG9yUGVyY2VudCgkbm9ybWFsLCAwLjgpICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5pY2UtdHlwZSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogZ2V0Q29sb3JQZXJjZW50KCRpY2UsIDAuOCkgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmdyb3VuZC10eXBlIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBnZXRDb2xvclBlcmNlbnQoJGdyb3VuZC0xLCAwLjgpICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5mbHlpbmctdHlwZSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogZ2V0Q29sb3JQZXJjZW50KCRmbHlpbmctMSwgMC44KSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uZmlnaHRpbmctdHlwZSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogZ2V0Q29sb3JQZXJjZW50KCRmaWdodGluZywgMC44KSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uZmFpcnktdHlwZSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogZ2V0Q29sb3JQZXJjZW50KCRmYWlyeSwgMC44KSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uZWxlY3RyaWMtdHlwZSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogZ2V0Q29sb3JQZXJjZW50KCRlbGVjdHJpYywgMC44KSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uZHJhZ29uLXR5cGUge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGdldENvbG9yUGVyY2VudCgkZHJhZ29uLTEsIDAuOCkgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmRhcmstdHlwZSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogZ2V0Q29sb3JQZXJjZW50KCRkYXJrLCAwLjgpICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5idWctdHlwZSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogZ2V0Q29sb3JQZXJjZW50KCRidWcsIDAuOCkgIWltcG9ydGFudDtcclxufVxyXG5cclxuLy9cclxuXHJcbi5ncmFzcy10eXBlLXNvbGlkIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBnZXRDb2xvclBlcmNlbnQoJGdyYXNzLCAxKSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uZ2hvc3QtdHlwZS1zb2xpZCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogZ2V0Q29sb3JQZXJjZW50KCRnaG9zdCwgMSkgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmZpcmUtdHlwZS1zb2xpZCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogZ2V0Q29sb3JQZXJjZW50KCRmaXJlLCAxKSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ud2F0ZXItdHlwZS1zb2xpZCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogZ2V0Q29sb3JQZXJjZW50KCR3YXRlciwgMSkgIWltcG9ydGFudDtcclxufVxyXG5cclxuLnN0ZWVsLXR5cGUtc29saWQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGdldENvbG9yUGVyY2VudCgkc3RlZWwsIDEpICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5yb2NrLXR5cGUtc29saWQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGdldENvbG9yUGVyY2VudCgkcm9jaywgMSkgIWltcG9ydGFudDtcclxufVxyXG5cclxuLnBzeWNoaWMtdHlwZS1zb2xpZCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogZ2V0Q29sb3JQZXJjZW50KCRwc3ljaGljLCAxKSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ucG9pc29uLXR5cGUtc29saWQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGdldENvbG9yUGVyY2VudCgkcG9pc29uLCAxKSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubm9ybWFsLXR5cGUtc29saWQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGdldENvbG9yUGVyY2VudCgkbm9ybWFsLCAxKSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uaWNlLXR5cGUtc29saWQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGdldENvbG9yUGVyY2VudCgkaWNlLCAxKSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uZ3JvdW5kLXR5cGUtc29saWQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGdldENvbG9yUGVyY2VudCgkZ3JvdW5kLTEsIDEpICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5mbHlpbmctdHlwZS1zb2xpZCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogZ2V0Q29sb3JQZXJjZW50KCRmbHlpbmctMSwgMSkgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmZpZ2h0aW5nLXR5cGUtc29saWQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGdldENvbG9yUGVyY2VudCgkZmlnaHRpbmcsIDEpICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5mYWlyeS10eXBlLXNvbGlkIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBnZXRDb2xvclBlcmNlbnQoJGZhaXJ5LCAxKSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uZWxlY3RyaWMtdHlwZS1zb2xpZCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogZ2V0Q29sb3JQZXJjZW50KCRlbGVjdHJpYywgMSkgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmRyYWdvbi10eXBlLXNvbGlkIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBnZXRDb2xvclBlcmNlbnQoJGRyYWdvbi0xLCAxKSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uZGFyay10eXBlLXNvbGlkIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBnZXRDb2xvclBlcmNlbnQoJGRhcmssIDEpICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5idWctdHlwZS1zb2xpZCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogZ2V0Q29sb3JQZXJjZW50KCRidWcsIDEpICFpbXBvcnRhbnQ7XHJcbn1cclxuIiwiLmdyYXNzLXR5cGUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE1NSwgMjA0LCA4MCwgMC44KSAhaW1wb3J0YW50O1xufVxuXG4uZ2hvc3QtdHlwZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTIzLCA5OCwgMTYzLCAwLjgpICFpbXBvcnRhbnQ7XG59XG5cbi5maXJlLXR5cGUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1MywgMTI1LCAzNiwgMC44KSAhaW1wb3J0YW50O1xufVxuXG4ud2F0ZXItdHlwZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNjksIDE0NiwgMTk2LCAwLjgpICFpbXBvcnRhbnQ7XG59XG5cbi5zdGVlbC10eXBlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxNTgsIDE4MywgMTg0LCAwLjgpICFpbXBvcnRhbnQ7XG59XG5cbi5yb2NrLXR5cGUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE2MywgMTQwLCAzMywgMC44KSAhaW1wb3J0YW50O1xufVxuXG4ucHN5Y2hpYy10eXBlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNDMsIDEwMiwgMTg1LCAwLjgpICFpbXBvcnRhbnQ7XG59XG5cbi5wb2lzb24tdHlwZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTg1LCAxMjcsIDIwMSwgMC44KSAhaW1wb3J0YW50O1xufVxuXG4ubm9ybWFsLXR5cGUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE2NCwgMTcyLCAxNzUsIDAuOCkgIWltcG9ydGFudDtcbn1cblxuLmljZS10eXBlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg4MSwgMTk2LCAyMzEsIDAuOCkgIWltcG9ydGFudDtcbn1cblxuLmdyb3VuZC10eXBlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNDcsIDIyMiwgNjMsIDAuOCkgIWltcG9ydGFudDtcbn1cblxuLmZseWluZy10eXBlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg2MSwgMTk5LCAyMzksIDAuOCkgIWltcG9ydGFudDtcbn1cblxuLmZpZ2h0aW5nLXR5cGUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIxMywgMTAzLCAzNSwgMC44KSAhaW1wb3J0YW50O1xufVxuXG4uZmFpcnktdHlwZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjUzLCAxODUsIDIzMywgMC44KSAhaW1wb3J0YW50O1xufVxuXG4uZWxlY3RyaWMtdHlwZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjM4LCAyMTMsIDUzLCAwLjgpICFpbXBvcnRhbnQ7XG59XG5cbi5kcmFnb24tdHlwZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoODMsIDE2NCwgMjA3LCAwLjgpICFpbXBvcnRhbnQ7XG59XG5cbi5kYXJrLXR5cGUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDExMiwgMTEyLCAxMTIsIDAuOCkgIWltcG9ydGFudDtcbn1cblxuLmJ1Zy10eXBlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMTQsIDE1OSwgNjMsIDAuOCkgIWltcG9ydGFudDtcbn1cblxuLmdyYXNzLXR5cGUtc29saWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOWJjYzUwICFpbXBvcnRhbnQ7XG59XG5cbi5naG9zdC10eXBlLXNvbGlkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzdiNjJhMyAhaW1wb3J0YW50O1xufVxuXG4uZmlyZS10eXBlLXNvbGlkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZkN2QyNCAhaW1wb3J0YW50O1xufVxuXG4ud2F0ZXItdHlwZS1zb2xpZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0NTkyYzQgIWltcG9ydGFudDtcbn1cblxuLnN0ZWVsLXR5cGUtc29saWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOWViN2I4ICFpbXBvcnRhbnQ7XG59XG5cbi5yb2NrLXR5cGUtc29saWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYTM4YzIxICFpbXBvcnRhbnQ7XG59XG5cbi5wc3ljaGljLXR5cGUtc29saWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjM2NmI5ICFpbXBvcnRhbnQ7XG59XG5cbi5wb2lzb24tdHlwZS1zb2xpZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNiOTdmYzkgIWltcG9ydGFudDtcbn1cblxuLm5vcm1hbC10eXBlLXNvbGlkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2E0YWNhZiAhaW1wb3J0YW50O1xufVxuXG4uaWNlLXR5cGUtc29saWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTFjNGU3ICFpbXBvcnRhbnQ7XG59XG5cbi5ncm91bmQtdHlwZS1zb2xpZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmN2RlM2YgIWltcG9ydGFudDtcbn1cblxuLmZseWluZy10eXBlLXNvbGlkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzNkYzdlZiAhaW1wb3J0YW50O1xufVxuXG4uZmlnaHRpbmctdHlwZS1zb2xpZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkNTY3MjMgIWltcG9ydGFudDtcbn1cblxuLmZhaXJ5LXR5cGUtc29saWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmRiOWU5ICFpbXBvcnRhbnQ7XG59XG5cbi5lbGVjdHJpYy10eXBlLXNvbGlkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VlZDUzNSAhaW1wb3J0YW50O1xufVxuXG4uZHJhZ29uLXR5cGUtc29saWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTNhNGNmICFpbXBvcnRhbnQ7XG59XG5cbi5kYXJrLXR5cGUtc29saWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzA3MDcwICFpbXBvcnRhbnQ7XG59XG5cbi5idWctdHlwZS1zb2xpZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM3MjlmM2YgIWltcG9ydGFudDtcbn1cblxuKiB7XG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xuICBmb250LXNpemU6IGluaGVyaXQ7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIG1hcmdpbjogMDtcbiAgb3V0bGluZTogdHJhbnNwYXJlbnQ7XG4gIHBhZGRpbmc6IDA7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuKjp2aXNpdGVkLFxuKjpsaW5rIHtcbiAgY29sb3I6IGluaGVyaXQ7XG59XG5cbmh0bWwge1xuICBmb250LXNpemU6IDYyLjUlO1xufVxuXG5ib2R5IHtcbiAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdFwiLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDEuNnJlbTtcbn1cblxuLndob3MtdGhhdC1wb2tlbW9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIyMjtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGhlaWdodDogMTAwJTtcbn1cbi53aG9zLXRoYXQtcG9rZW1vbl9fdGl0bGUge1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC1zaXplOiAyLjVyZW07XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG4ud2hvcy10aGF0LXBva2Vtb24gLmZhLXF1ZXN0aW9uIHtcbiAgY29sb3I6ICNmZmY7XG4gIHdpZHRoOiA1MCU7XG59IiwiQGltcG9ydCBcIi4vY29sb3JzXCI7XHJcbkBpbXBvcnQgXCIuL2JhY2tncm91bmRcIjtcclxuXHJcbioge1xyXG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xyXG4gIGZvbnQtc2l6ZTogaW5oZXJpdDtcclxuICBsaXN0LXN0eWxlOiBub25lO1xyXG4gIG1hcmdpbjogMDtcclxuICBvdXRsaW5lOiB0cmFuc3BhcmVudDtcclxuICBwYWRkaW5nOiAwO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG5cclxuKjp2aXNpdGVkLFxyXG4qOmxpbmsge1xyXG4gIGNvbG9yOiBpbmhlcml0O1xyXG59XHJcblxyXG5odG1sIHtcclxuICBmb250LXNpemU6IDYyLjUlO1xyXG59XHJcblxyXG5ib2R5IHtcclxuICBmb250LWZhbWlseTogXCJNb250c2VycmF0XCIsIHNhbnMtc2VyaWY7XHJcbiAgZm9udC1zaXplOiAxLjZyZW07XHJcbn1cclxuIiwiJGJsYWNrOiAjMjIyO1xyXG4kYmxhY2stbGlnaHQtMTogbGlnaHRlbigkYmxhY2ssIDIwJSk7XHJcbiRibGFjay1saWdodC0yOiBsaWdodGVuKCRibGFjaywgNDAlKTtcclxuJGJsYWNrLWxpZ2h0LTM6IGxpZ2h0ZW4oJGJsYWNrLCA2MCUpO1xyXG4kYmxhY2stbGlnaHQtNDogbGlnaHRlbigkYmxhY2ssIDgwJSk7XHJcblxyXG4kd2hpdGU6ICNmZmY7XHJcblxyXG4kYm94LXNoYWRvdy1jbG9zZTogMCAycHggNHB4IDJweCByZ2JhKCRibGFjaywgMC40KTtcclxuJGJveC1zaGFkb3ctZmFyOiAwIDJweCAzcHggMnB4IHJnYmEoJGJsYWNrLCAwLjMpO1xyXG4kYm94LXNoYWRvdy1mYXJ0ZXN0OiAwIDJweCAycHggMnB4IHJnYmEoJGJsYWNrLCAwLjIpO1xyXG5cclxuJGJ1ZzogIzcyOWYzZjtcclxuJGRhcms6ICM3MDcwNzA7XHJcbiRkcmFnb24tMTogIzUzYTRjZjtcclxuJGRyYWdvbi0yOiAjZjE2ZTU3O1xyXG4kZWxlY3RyaWM6ICNlZWQ1MzU7XHJcbiRmYWlyeTogI2ZkYjllOTtcclxuJGZpZ2h0aW5nOiAjZDU2NzIzO1xyXG4kZmlyZTogI2ZkN2QyNDtcclxuJGZseWluZy0xOiAjM2RjN2VmO1xyXG4kZmx5aW5nLTI6ICNiZWJhYjk7XHJcbiRnaG9zdDogIzdiNjJhMztcclxuJGdyYXNzOiAjOWJjYzUwO1xyXG4kZ3JvdW5kLTE6ICNmN2RlM2Y7XHJcbiRncm91bmQtMjogI2FiOTg0MjtcclxuJGljZTogIzUxYzRlNztcclxuJG5vcm1hbDogI2E0YWNhZjtcclxuJHBvaXNvbjogI2I5N2ZjOTtcclxuJHBzeWNoaWM6ICNmMzY2Yjk7XHJcbiRyb2NrOiAjYTM4YzIxO1xyXG4kc3RlZWw6ICM5ZWI3Yjg7XHJcbiR3YXRlcjogIzQ1OTJjNDtcclxuXHJcbkBmdW5jdGlvbiBnZXRDb2xvclBlcmNlbnQoJGNvbG9yLCAkb3BhY2l0eSkge1xyXG4gIEByZXR1cm4gcmdiYSgkY29sb3IsICRvcGFjaXR5KTtcclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WhosThatPokemonComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'poke-whos-that-pokemon',
                templateUrl: './whos-that-pokemon.component.html',
                styleUrls: ['./whos-that-pokemon.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "pKmL":
/*!*************************************!*\
  !*** ./src/app/core/core.module.ts ***!
  \*************************************/
/*! exports provided: CoreModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreModule", function() { return CoreModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _core_services_pokemon_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/services/pokemon.service */ "QcKa");




class CoreModule {
}
CoreModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: CoreModule });
CoreModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function CoreModule_Factory(t) { return new (t || CoreModule)(); }, providers: [
        // Imports with unique reference, like services
        _core_services_pokemon_service__WEBPACK_IMPORTED_MODULE_2__["PokemonService"]
    ], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CoreModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CoreModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
                ],
                providers: [
                    // Imports with unique reference, like services
                    _core_services_pokemon_service__WEBPACK_IMPORTED_MODULE_2__["PokemonService"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "vTEt":
/*!*************************************************!*\
  !*** ./src/app/shared/pipes/capitalize.pipe.ts ***!
  \*************************************************/
/*! exports provided: CapitalizePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CapitalizePipe", function() { return CapitalizePipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class CapitalizePipe {
    transform(value) {
        const text = value.split('');
        const capitalizedText = [text[0].toUpperCase(), ...text.slice(1)].join('');
        return capitalizedText;
    }
}
CapitalizePipe.ɵfac = function CapitalizePipe_Factory(t) { return new (t || CapitalizePipe)(); };
CapitalizePipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "capitalize", type: CapitalizePipe, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CapitalizePipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
                name: 'capitalize'
            }]
    }], null, null); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _whos_that_pokemon_whos_that_pokemon_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./whos-that-pokemon/whos-that-pokemon.component */ "hwFd");





const routes = [
    { path: '', redirectTo: '/pokemon', pathMatch: 'full' },
    { path: 'pokemon', component: _whos_that_pokemon_whos_that_pokemon_component__WEBPACK_IMPORTED_MODULE_2__["WhosThatPokemonComponent"] }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
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