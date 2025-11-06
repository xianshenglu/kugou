(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-song-song-module"],{

/***/ "DQqS":
/*!***************************************************!*\
  !*** ./src/app/views/song/song-routing.module.ts ***!
  \***************************************************/
/*! exports provided: SongRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SongRoutingModule", function() { return SongRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _song_list_song_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./song-list/song-list.component */ "TZTk");
/* harmony import */ var _song_list_info_song_list_info_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./song-list-info/song-list-info.component */ "XQl4");
/* harmony import */ var _components_my_main_my_main_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/my-main/my-main.component */ "cz6e");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");






const routes = [
    {
        path: 'list',
        component: _components_my_main_my_main_component__WEBPACK_IMPORTED_MODULE_3__["MyMainComponent"],
        children: [
            {
                path: '',
                component: _song_list_song_list_component__WEBPACK_IMPORTED_MODULE_1__["SongListComponent"],
            },
        ],
    },
    {
        path: 'list/:songListId',
        component: _song_list_info_song_list_info_component__WEBPACK_IMPORTED_MODULE_2__["SongListInfoComponent"],
    },
];
class SongRoutingModule {
}
SongRoutingModule.ɵfac = function SongRoutingModule_Factory(t) { return new (t || SongRoutingModule)(); };
SongRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: SongRoutingModule });
SongRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](SongRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "Nxbj":
/*!***********************************************!*\
  !*** ./src/app/services/song-list.service.ts ***!
  \***********************************************/
/*! exports provided: SongListService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SongListService", function() { return SongListService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var src_app_constants_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/constants/index */ "U7T7");
/* harmony import */ var src_app_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/utils */ "YMfE");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "tk/3");





class SongListService {
    constructor(http) {
        this.http = http;
        this.songListUrl = `${src_app_constants_index__WEBPACK_IMPORTED_MODULE_1__["BASE_ORIGIN"]}/plist/index&json=true`;
    }
    fetchSongList() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const response = yield this.http
                .get(this.songListUrl)
                .toPromise();
            const { plist: { list: { info }, }, } = response;
            info.forEach((obj) => {
                obj.imgUrl = Object(src_app_utils__WEBPACK_IMPORTED_MODULE_2__["replaceSizeInUrl"])(obj.imgurl);
                obj.path = `/song/list/${obj.specialid}`;
                obj.title = obj.specialname;
                obj.popularity = obj.playcount;
            });
            return info;
        });
    }
}
SongListService.ɵfac = function SongListService_Factory(t) { return new (t || SongListService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"])); };
SongListService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: SongListService, factory: SongListService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "TZTk":
/*!*************************************************************!*\
  !*** ./src/app/views/song/song-list/song-list.component.ts ***!
  \*************************************************************/
/*! exports provided: SongListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SongListComponent", function() { return SongListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_song_list_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/song-list.service */ "Nxbj");
/* harmony import */ var _components_my_card_list_my_card_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../components/my-card-list/my-card-list.component */ "uIeC");




function SongListComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "svg", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "use", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r1.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r1.popularity);
} }
class SongListComponent {
    constructor(songListService) {
        this.songListService = songListService;
        this.songList = [];
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.songList.length === 0) {
                this.songList = yield this.songListService.fetchSongList();
            }
        });
    }
}
SongListComponent.ɵfac = function SongListComponent_Factory(t) { return new (t || SongListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_song_list_service__WEBPACK_IMPORTED_MODULE_2__["SongListService"])); };
SongListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: SongListComponent, selectors: [["app-song-list"]], decls: 3, vars: 1, consts: [["test-id", "page-song-list", 1, "song_list"], [1, "song_list__cont", 3, "pubList"], [1, "song_list__info"], [1, "song_list__title"], [1, "song_list__star"], ["aria-hidden", "true", 1, "icon", "song_list__icon"], [0, "xlink", "href", "#icon-music"], [1, "song_list__popularity"]], template: function SongListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "app-my-card-list", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, SongListComponent_ng_template_2_Template, 8, 2, "ng-template");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("pubList", ctx.songList);
    } }, directives: [_components_my_card_list_my_card_list_component__WEBPACK_IMPORTED_MODULE_3__["MyCardListComponent"]], styles: [".song_list__cont[_ngcontent-%COMP%] {\n  overflow: scroll;\n  box-sizing: border-box;\n  width: 100%;\n  height: 100%;\n}\n\n.song_list__info[_ngcontent-%COMP%] {\n  height: calc(var(--vw, 1vw) * 25.86667);\n  margin-right: calc(var(--vw, 1vw) * 2.66667);\n  padding-left: calc(var(--vw, 1vw) * 4.8);\n}\n\n.song_list__title[_ngcontent-%COMP%] {\n  padding-top: calc(var(--vw, 1vw) * 6.93333);\n  line-height: calc(var(--vw, 1vw) * 7.2);\n}\n\n.song_list__icon[_ngcontent-%COMP%] {\n  margin-right: calc(var(--vw, 1vw) * 1.6);\n  vertical-align: baseline;\n  font-size: calc(var(--vw, 1vw) * 3.46667);\n}\n\n.song_list__popularity[_ngcontent-%COMP%] {\n  color: #959595;\n  font-size: calc(var(--vw, 1vw) * 4);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NvbmctbGlzdC5jb21wb25lbnQuc2NzcyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3N0eWxlcy9jb25zdGFudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0UsZ0JBQUE7RUFFQSxzQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBREY7O0FBR0E7RUFDRSx1Q0FBQTtFQUNBLDRDQUFBO0VBQ0Esd0NBQUE7QUFBRjs7QUFHQTtFQUNFLDJDQUFBO0VBRUEsdUNBQUE7QUFERjs7QUFJQTtFQUNFLHdDQUFBO0VBRUEsd0JBQUE7RUFFQSx5Q0NSZ0I7QURLbEI7O0FBTUE7RUFDRSxjQ3pCZTtFRDJCZixtQ0NmYztBRFdoQiIsImZpbGUiOiJzb25nLWxpc3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwic3JjL2FwcC9zdHlsZXMvY29uc3RhbnRcIjtcbi5zb25nX2xpc3RfX2NvbnQge1xuICBvdmVyZmxvdzogc2Nyb2xsO1xuXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG4uc29uZ19saXN0X19pbmZvIHtcbiAgaGVpZ2h0OiA5N3B4O1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gIHBhZGRpbmctbGVmdDogMThweDtcbn1cblxuLnNvbmdfbGlzdF9fdGl0bGUge1xuICBwYWRkaW5nLXRvcDogMjZweDtcblxuICBsaW5lLWhlaWdodDogMjdweDtcbn1cblxuLnNvbmdfbGlzdF9faWNvbiB7XG4gIG1hcmdpbi1yaWdodDogNnB4O1xuXG4gIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcblxuICBmb250LXNpemU6ICRmb250X3NpemVfc21hbGw7XG59XG5cbi5zb25nX2xpc3RfX3BvcHVsYXJpdHkge1xuICBjb2xvcjogJHdoaXRlLXRvLWJsYWNrO1xuXG4gIGZvbnQtc2l6ZTogJGZvbnRfc2l6ZV9tZWQ7XG59XG4iLCIkd2hpdGU6ICNmZmY7XG4kd2hpdGUtMTogI2ZiZmJmYjtcbiR3aGl0ZS0yOiAjZTVlNWU1O1xuJHdoaXRlLTM6ICNjY2M7XG4kd2hpdGUtdG8tYmxhY2s6ICM5NTk1OTU7XG4kYmxhY2stNTogIzZjNmI3MDtcbiRibGFjay0zOiAjMzMzO1xuJGJsYWNrLTI6ICMyMzIyMjg7XG4kYmxhY2s5MHA6IHJnYmEoMCwgMCwgMCwgMC45KTtcbiR0aGVtZTogIzJjYTJmOTtcbiRyZWQ6ICNlODAwMDA7XG4kb3JhbmdlOiAjZmY3MjAwO1xuJHllbGxvdzogI2Y4YjMwMDtcbiRsZW1vbjogI2QxYzkwZTtcblxuJGZvbnRfc2l6ZV9tYWluOiAxOHB4O1xuJGZvbnRfc2l6ZV9tZWQ6IDE1cHg7XG4kZm9udF9zaXplX3NtYWxsOiAxM3B4O1xuJGZvbnRfc2l6ZV9taW5pOiAxMnB4O1xuXG4kcGFkZGluZ193aWR0aDogMTNweDtcbiRoZWFkZXJfaGVpZ2h0OiA1OHB4O1xuJG5hdl9oZWlnaHQ6IDYycHg7XG4kbW9kdWxlX3RpdGxlX2hlaWdodDogNTRweDtcbiRzZWFyY2hfZm9ybV9oZWlnaHQ6IDYzcHg7XG5cbiRhcHBfd2lkdGgtLWRldjogMzc1O1xuJGFwcF9oZWlnaHQtLWRldjogNjY3O1xuLy8gMTAwdmggZXF1YWwgdmlld3BvcnQgaGVpZ2h0IGFzIGlmIHRoZSBhZGRyZXNzIGJhciB3YXMgaGlkZGVuIG9uIG1vYmlsZS5cbi8vIFNvIEkgc2V0IGh0bWwuc3R5bGUuc2V0UHJvcGVydHkoJy0tdmgnLCB3aW5kb3cuaW5uZXJIZWlnaHQgLyAxMDAgKyAncHgnKSBhbmQgdXNlIHZhcigtLXZoKSB0byByZXBsYWNlIHRoZSB3cm9uZyB2aC5cblxuJGFwcF9jb250X2hfZGV2OiAkYXBwX2hlaWdodC0tZGV2IC0gdW5pdCgkaGVhZGVyX2hlaWdodCk7XG4kYXBwX2NvbnRfaC0tcHJvZDogXCJ2YXIoLS12aCkgKiAxMDAgLSAxMDB2dyAqIDU4IC8gMzc1XCI7XG4iXX0= */"] });


/***/ }),

/***/ "XQl4":
/*!***********************************************************************!*\
  !*** ./src/app/views/song/song-list-info/song-list-info.component.ts ***!
  \***********************************************************************/
/*! exports provided: SongListInfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SongListInfoComponent", function() { return SongListInfoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var src_app_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/utils */ "YMfE");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_song_list_info_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/song-list-info.service */ "ewhb");
/* harmony import */ var _components_my_module_head_my_module_head_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../components/my-module-head/my-module-head.component */ "eQYf");
/* harmony import */ var _components_my_module_description_my_module_description_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../components/my-module-description/my-module-description.component */ "Goi6");
/* harmony import */ var _components_my_music_list_my_music_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../components/my-music-list/my-music-list.component */ "Lxd1");







class SongListInfoComponent {
    constructor(songListInfoService) {
        this.songListInfoService = songListInfoService;
        this.songListInfo = { info: { list: {}, songs: { list: { info: [] } } } };
    }
    get getModuleHeadInfo() {
        /* eslint-disable */
        // @ts-ignore
        const data = this.songListInfo.info.list;
        return {
            imgUrl: Object(src_app_utils__WEBPACK_IMPORTED_MODULE_1__["replaceSizeInUrl"])(data.imgurl),
            name: data.specialname,
            intro: data.intro,
        };
        /* eslint-enable */
    }
    get getMusicList() {
        var _a;
        // todo remove ? and fix type
        // @ts-ignore
        // eslint-disable-next-line
        return (_a = this.songListInfo.songs) === null || _a === void 0 ? void 0 : _a.list.info;
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const songListId = window.location.pathname.split('/').pop();
            if (songListId === undefined) {
                return;
            }
            this.songListInfo = yield this.songListInfoService.fetchSongListInfo(songListId);
        });
    }
}
SongListInfoComponent.ɵfac = function SongListInfoComponent_Factory(t) { return new (t || SongListInfoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_song_list_info_service__WEBPACK_IMPORTED_MODULE_3__["SongListInfoService"])); };
SongListInfoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: SongListInfoComponent, selectors: [["app-song-list-info"]], decls: 4, vars: 3, consts: [["test-id", "page-song-list-info", 1, "song_list_info"], [3, "moduleHeadInfo"], ["slot", "moduleDes", 3, "description"], [3, "musicList"]], template: function SongListInfoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "app-my-module-head", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "app-my-module-description", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "app-my-music-list", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("moduleHeadInfo", ctx.getModuleHeadInfo);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("description", ctx.getModuleHeadInfo.intro);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("musicList", ctx.getMusicList);
    } }, directives: [_components_my_module_head_my_module_head_component__WEBPACK_IMPORTED_MODULE_4__["MyModuleHeadComponent"], _components_my_module_description_my_module_description_component__WEBPACK_IMPORTED_MODULE_5__["MyModuleDescriptionComponent"], _components_my_music_list_my_music_list_component__WEBPACK_IMPORTED_MODULE_6__["MyMusicListComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzb25nLWxpc3QtaW5mby5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ "ewhb":
/*!****************************************************!*\
  !*** ./src/app/services/song-list-info.service.ts ***!
  \****************************************************/
/*! exports provided: SongListInfoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SongListInfoService", function() { return SongListInfoService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var src_app_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/constants */ "U7T7");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");




class SongListInfoService {
    constructor(http) {
        this.http = http;
    }
    fetchSongListInfo(songListId) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const response = yield this.http
                .get(`${src_app_constants__WEBPACK_IMPORTED_MODULE_1__["BASE_ORIGIN"]}/plist/list/${songListId}&json=true`)
                .toPromise();
            const { info, list } = response;
            return {
                info,
                songs: list,
            };
        });
    }
}
SongListInfoService.ɵfac = function SongListInfoService_Factory(t) { return new (t || SongListInfoService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"])); };
SongListInfoService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: SongListInfoService, factory: SongListInfoService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "fMKX":
/*!*******************************************!*\
  !*** ./src/app/views/song/song.module.ts ***!
  \*******************************************/
/*! exports provided: SongModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SongModule", function() { return SongModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _song_list_song_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./song-list/song-list.component */ "TZTk");
/* harmony import */ var _song_list_info_song_list_info_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./song-list-info/song-list-info.component */ "XQl4");
/* harmony import */ var _song_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./song-routing.module */ "DQqS");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/shared.module */ "PCNd");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");






class SongModule {
}
SongModule.ɵfac = function SongModule_Factory(t) { return new (t || SongModule)(); };
SongModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: SongModule });
SongModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"], _song_routing_module__WEBPACK_IMPORTED_MODULE_3__["SongRoutingModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](SongModule, { declarations: [_song_list_song_list_component__WEBPACK_IMPORTED_MODULE_1__["SongListComponent"], _song_list_info_song_list_info_component__WEBPACK_IMPORTED_MODULE_2__["SongListInfoComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"], _song_routing_module__WEBPACK_IMPORTED_MODULE_3__["SongRoutingModule"]] }); })();


/***/ })

}]);
//# sourceMappingURL=views-song-song-module.js.map