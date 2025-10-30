(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-new-song-new-song-module"],{

/***/ "4E8J":
/*!***********************************************************!*\
  !*** ./src/app/views/new-song/slider/slider.component.ts ***!
  \***********************************************************/
/*! exports provided: SliderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SliderComponent", function() { return SliderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class SliderComponent {
    // eslint-disable-next-line class-methods-use-this
    ngOnInit() { }
}
SliderComponent.ɵfac = function SliderComponent_Factory(t) { return new (t || SliderComponent)(); };
SliderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SliderComponent, selectors: [["app-slider"]], decls: 2, vars: 0, template: function SliderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "slider works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzbGlkZXIuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ "NOEW":
/*!***************************************************!*\
  !*** ./src/app/views/new-song/new-song.module.ts ***!
  \***************************************************/
/*! exports provided: NewSongModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewSongModule", function() { return NewSongModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _new_song_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./new-song.component */ "jtwm");
/* harmony import */ var _slider_slider_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./slider/slider.component */ "4E8J");
/* harmony import */ var _new_song_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./new-song-routing.module */ "lfOd");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/shared.module */ "PCNd");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "fXoL");







class NewSongModule {
}
NewSongModule.ɵfac = function NewSongModule_Factory(t) { return new (t || NewSongModule)(); };
NewSongModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({ type: NewSongModule });
NewSongModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({ imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"], _new_song_routing_module__WEBPACK_IMPORTED_MODULE_4__["NewSongRoutingModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](NewSongModule, { declarations: [_new_song_component__WEBPACK_IMPORTED_MODULE_2__["NewSongComponent"], _slider_slider_component__WEBPACK_IMPORTED_MODULE_3__["SliderComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"], _new_song_routing_module__WEBPACK_IMPORTED_MODULE_4__["NewSongRoutingModule"]] }); })();


/***/ }),

/***/ "Z20q":
/*!**********************************************!*\
  !*** ./src/app/services/new-song.service.ts ***!
  \**********************************************/
/*! exports provided: NewSongService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewSongService", function() { return NewSongService; });
/* harmony import */ var src_app_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/constants */ "U7T7");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");



class NewSongService {
    constructor(http) {
        this.http = http;
    }
    fetchNewSong(params = {}) {
        // @ts-ignore
        return this.http
            .get(src_app_constants__WEBPACK_IMPORTED_MODULE_0__["BASE_ORIGIN"], {
            // @ts-ignore
            params: Object.assign({ json: true }, params),
            observe: 'body',
            responseType: 'json',
        })
            .toPromise();
    }
}
NewSongService.ɵfac = function NewSongService_Factory(t) { return new (t || NewSongService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
NewSongService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: NewSongService, factory: NewSongService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "jtwm":
/*!******************************************************!*\
  !*** ./src/app/views/new-song/new-song.component.ts ***!
  \******************************************************/
/*! exports provided: NewSongComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewSongComponent", function() { return NewSongComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_new_song_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/new-song.service */ "Z20q");
/* harmony import */ var _components_my_music_list_my_music_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/my-music-list/my-music-list.component */ "Lxd1");




class NewSongComponent {
    constructor(newSong) {
        this.newSong = newSong;
        this.newSongs = [];
        this.sliderData = [];
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const { data, banner } = yield this.newSong.fetchNewSong();
            this.newSongs = data;
            this.sliderData = banner;
        });
    }
}
NewSongComponent.ɵfac = function NewSongComponent_Factory(t) { return new (t || NewSongComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_new_song_service__WEBPACK_IMPORTED_MODULE_2__["NewSongService"])); };
NewSongComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: NewSongComponent, selectors: [["app-new-song"]], decls: 4, vars: 1, consts: [["test-id", "page-new-song", 1, "NewSong"], ["data", "sliderData", 1, "NewSong__slider"], [1, "NewSong__music_list", 3, "musicList"]], template: function NewSongComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "\u6682\u672A\u5B9E\u73B0");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "app-my-music-list", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("musicList", ctx.newSongs);
    } }, directives: [_components_my_music_list_my_music_list_component__WEBPACK_IMPORTED_MODULE_3__["MyMusicListComponent"]], styles: [".NewSong__slider[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  width: 100%;\n  height: calc(var(--vw, 1vw) * 41.06667);\n  line-height: calc(var(--vw, 1vw) * 41.06667);\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxuZXctc29uZy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHNCQUFBO0VBQ0EsV0FBQTtFQUNBLHVDQUFBO0VBQ0EsNENBQUE7RUFDQSxrQkFBQTtBQUNGIiwiZmlsZSI6Im5ldy1zb25nLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLk5ld1NvbmdfX3NsaWRlciB7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDE1NHB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAxNTRweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ "lfOd":
/*!***********************************************************!*\
  !*** ./src/app/views/new-song/new-song-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: NewSongRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewSongRoutingModule", function() { return NewSongRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _new_song_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./new-song.component */ "jtwm");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");




const routes = [
    {
        path: '',
        component: _new_song_component__WEBPACK_IMPORTED_MODULE_1__["NewSongComponent"],
    },
];
class NewSongRoutingModule {
}
NewSongRoutingModule.ɵfac = function NewSongRoutingModule_Factory(t) { return new (t || NewSongRoutingModule)(); };
NewSongRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: NewSongRoutingModule });
NewSongRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](NewSongRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ })

}]);
//# sourceMappingURL=views-new-song-new-song-module.js.map