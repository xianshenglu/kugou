(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-singer-singer-module"],{

/***/ "ASFH":
/*!*****************************************************!*\
  !*** ./src/app/services/singer-category.service.ts ***!
  \*****************************************************/
/*! exports provided: SingerCategoryService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SingerCategoryService", function() { return SingerCategoryService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _constants_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants/index */ "U7T7");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");




class SingerCategoryService {
    constructor(http) {
        this.http = http;
        this.singerCategoryUrl = `${_constants_index__WEBPACK_IMPORTED_MODULE_1__["BASE_ORIGIN"]}/singer/class&json=true`;
    }
    fetchSingerCategory() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const { list } = yield this.http
                .get(this.singerCategoryUrl)
                .toPromise();
            const singerCategories = list.reduce((re, obj) => {
                obj.path = `/singer/list/${obj.classid}`;
                const findCategories = re.find((o) => o.category === obj.classname.substring(0, 2));
                if (findCategories) {
                    findCategories.data.push(obj);
                }
                else {
                    re.push({
                        category: obj.classname.substring(0, 2),
                        data: [obj],
                    });
                }
                return re;
            }, []);
            return singerCategories;
        });
    }
}
SingerCategoryService.ɵfac = function SingerCategoryService_Factory(t) { return new (t || SingerCategoryService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"])); };
SingerCategoryService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: SingerCategoryService, factory: SingerCategoryService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "BM9N":
/*!*******************************************************!*\
  !*** ./src/app/views/singer/singer-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: SingerRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SingerRoutingModule", function() { return SingerRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _singer_category_singer_category_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./singer-category/singer-category.component */ "aPdr");
/* harmony import */ var _singer_list_singer_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./singer-list/singer-list.component */ "aPaP");
/* harmony import */ var _singer_info_singer_info_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./singer-info/singer-info.component */ "J/No");
/* harmony import */ var _components_my_main_my_main_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/my-main/my-main.component */ "cz6e");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");







const routes = [
    {
        path: 'category',
        component: _components_my_main_my_main_component__WEBPACK_IMPORTED_MODULE_4__["MyMainComponent"],
        children: [
            {
                path: '',
                component: _singer_category_singer_category_component__WEBPACK_IMPORTED_MODULE_1__["SingerCategoryComponent"],
            },
        ],
    },
    {
        path: 'list/:singerListId',
        component: _singer_list_singer_list_component__WEBPACK_IMPORTED_MODULE_2__["SingerListComponent"],
    },
    {
        path: 'info/:singerId',
        component: _singer_info_singer_info_component__WEBPACK_IMPORTED_MODULE_3__["SingerInfoComponent"],
    },
];
class SingerRoutingModule {
}
SingerRoutingModule.ɵfac = function SingerRoutingModule_Factory(t) { return new (t || SingerRoutingModule)(); };
SingerRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: SingerRoutingModule });
SingerRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](SingerRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "H1dj":
/*!***********************************************!*\
  !*** ./src/app/views/singer/singer.module.ts ***!
  \***********************************************/
/*! exports provided: SingerModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SingerModule", function() { return SingerModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _singer_category_singer_category_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./singer-category/singer-category.component */ "aPdr");
/* harmony import */ var _singer_list_singer_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./singer-list/singer-list.component */ "aPaP");
/* harmony import */ var _singer_info_singer_info_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./singer-info/singer-info.component */ "J/No");
/* harmony import */ var _singer_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./singer-routing.module */ "BM9N");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/shared.module */ "PCNd");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "fXoL");







class SingerModule {
}
SingerModule.ɵfac = function SingerModule_Factory(t) { return new (t || SingerModule)(); };
SingerModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({ type: SingerModule });
SingerModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({ imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"], _singer_routing_module__WEBPACK_IMPORTED_MODULE_4__["SingerRoutingModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](SingerModule, { declarations: [_singer_category_singer_category_component__WEBPACK_IMPORTED_MODULE_1__["SingerCategoryComponent"],
        _singer_list_singer_list_component__WEBPACK_IMPORTED_MODULE_2__["SingerListComponent"],
        _singer_info_singer_info_component__WEBPACK_IMPORTED_MODULE_3__["SingerInfoComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"], _singer_routing_module__WEBPACK_IMPORTED_MODULE_4__["SingerRoutingModule"]] }); })();


/***/ }),

/***/ "J/No":
/*!*******************************************************************!*\
  !*** ./src/app/views/singer/singer-info/singer-info.component.ts ***!
  \*******************************************************************/
/*! exports provided: SingerInfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SingerInfoComponent", function() { return SingerInfoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_singer_info_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/singer-info.service */ "mu85");
/* harmony import */ var _components_my_module_head_my_module_head_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../components/my-module-head/my-module-head.component */ "eQYf");
/* harmony import */ var _components_my_module_description_my_module_description_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../components/my-module-description/my-module-description.component */ "Goi6");
/* harmony import */ var _components_my_music_list_my_music_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../components/my-music-list/my-music-list.component */ "Lxd1");






class SingerInfoComponent {
    constructor(singerInfoService) {
        this.singerInfoService = singerInfoService;
        this.singerInfo = { info: {}, data: [] };
    }
    get getModuleHeadInfo() {
        // @ts-ignore
        // eslint-disable-next-line @typescript-eslint/no-unsafe-return
        return this.singerInfo.info;
    }
    get getMusicList() {
        // @ts-ignore
        // eslint-disable-next-line @typescript-eslint/no-unsafe-return
        return this.singerInfo.data;
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const singerId = window.location.pathname.split('/').pop();
            if (singerId === undefined) {
                return;
            }
            this.singerInfo = yield this.singerInfoService.fetchSingerInfo(singerId);
        });
    }
}
SingerInfoComponent.ɵfac = function SingerInfoComponent_Factory(t) { return new (t || SingerInfoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_singer_info_service__WEBPACK_IMPORTED_MODULE_2__["SingerInfoService"])); };
SingerInfoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: SingerInfoComponent, selectors: [["app-singer-info"]], decls: 4, vars: 3, consts: [["test-id", "page-singer-info", 1, "singer_info"], [3, "moduleHeadInfo"], ["slot", "moduleDes", 3, "description"], [3, "musicList"]], template: function SingerInfoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "app-my-module-head", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "app-my-module-description", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "app-my-music-list", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("moduleHeadInfo", ctx.getModuleHeadInfo);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("description", ctx.getModuleHeadInfo.intro);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("musicList", ctx.getMusicList);
    } }, directives: [_components_my_module_head_my_module_head_component__WEBPACK_IMPORTED_MODULE_3__["MyModuleHeadComponent"], _components_my_module_description_my_module_description_component__WEBPACK_IMPORTED_MODULE_4__["MyModuleDescriptionComponent"], _components_my_music_list_my_music_list_component__WEBPACK_IMPORTED_MODULE_5__["MyMusicListComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzaW5nZXItaW5mby5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ "aPaP":
/*!*******************************************************************!*\
  !*** ./src/app/views/singer/singer-list/singer-list.component.ts ***!
  \*******************************************************************/
/*! exports provided: SingerListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SingerListComponent", function() { return SingerListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var src_app_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/utils */ "YMfE");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_singer_list_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/singer-list.service */ "viN6");
/* harmony import */ var _components_my_module_title_my_module_title_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../components/my-module-title/my-module-title.component */ "qOZq");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");







const _c0 = ["lazyLoadRoot"];
const _c1 = ["lazyImages"];
function SingerListComponent_li_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "li", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "img", 7, 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", item_r2.path);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("data-src", item_r2.imgUrl);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](item_r2.name);
} }
class SingerListComponent {
    constructor(singerListService) {
        this.singerListService = singerListService;
        this.singerList = {
            info: {
                id: '',
                name: '',
                count: 0,
            },
            data: [],
        };
    }
    get singerListData() {
        // @ts-ignore
        // eslint-disable-next-line @typescript-eslint/no-unsafe-return
        return this.singerList.data;
    }
    get singerName() {
        // @ts-ignore
        // eslint-disable-next-line
        return this.singerList.info.name;
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const singerListId = window.location.pathname.split('/').pop();
            if (singerListId === undefined) {
                return;
            }
            this.singerList = yield this.singerListService.fetchSingerList(singerListId);
            requestAnimationFrame(() => {
                // todo ? why ngOnChanges not work here?
                this.onSingerListChange();
            });
        });
    }
    /* eslint-disable */
    onSingerListChange() {
        // @ts-ignore
        if (this.singerList.data.length === 0 || this.lazyImages === undefined) {
            return;
        }
        Object(src_app_utils__WEBPACK_IMPORTED_MODULE_1__["lazyLoad"])(
        // @ts-ignore
        this.lazyImages.toArray().map((ref) => ref.nativeElement), {
            root: this.lazyLoadRoot.nativeElement,
        });
        /* eslint-enable */
    }
}
SingerListComponent.ɵfac = function SingerListComponent_Factory(t) { return new (t || SingerListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_singer_list_service__WEBPACK_IMPORTED_MODULE_3__["SingerListService"])); };
SingerListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: SingerListComponent, selectors: [["app-singer-list"]], viewQuery: function SingerListComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c1, 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.lazyLoadRoot = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.lazyImages = _t);
    } }, decls: 5, vars: 2, consts: [["test-id", "page-singer-list", 1, "singer_list"], [3, "title"], [1, "singer_list__list"], ["lazyLoadRoot", ""], ["class", "singer_list__item main_border_bottom", "test-class", "list", 4, "ngFor", "ngForOf"], ["test-class", "list", 1, "singer_list__item", "main_border_bottom"], ["test-class", "link", 1, "singer_list__link", 3, "routerLink"], ["src", "assets/images/logo__grey.png", 1, "singer_list__img", "lazy_image"], ["lazyImages", ""], [1, "singer_list__name"]], template: function SingerListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "app-my-module-title", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "ul", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, SingerListComponent_li_4_Template, 6, 3, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("title", ctx.singerName);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.singerListData);
    } }, directives: [_components_my_module_title_my_module_title_component__WEBPACK_IMPORTED_MODULE_4__["MyModuleTitleComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLinkWithHref"]], styles: [".singer_list[_ngcontent-%COMP%] {\n  font-size: calc(var(--vw, 1vw) * 5.06667);\n}\n\n.singer_list__list[_ngcontent-%COMP%] {\n  overflow: scroll;\n  box-sizing: border-box;\n  height: calc(100% - calc(var(--vw, 1vw) * 14.4));\n}\n\n.singer_list__item[_ngcontent-%COMP%] {\n  height: calc(var(--vw, 1vw) * 23.46667);\n}\n\n.singer_list__link[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  height: 100%;\n}\n\n.singer_list__img[_ngcontent-%COMP%] {\n  display: block;\n  width: calc(var(--vw, 1vw) * 16.26667);\n  height: calc(var(--vw, 1vw) * 16.26667);\n  margin: 0 calc(var(--vw, 1vw) * 4.8) 0 calc(var(--vw, 1vw) * 3.46667);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Npbmdlci1saXN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0UseUNBQUE7QUFBRjs7QUFFQTtFQUNFLGdCQUFBO0VBRUEsc0JBQUE7RUFDQSxnREFBQTtBQUFGOztBQUVBO0VBQ0UsdUNBQUE7QUFDRjs7QUFDQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUVBLFlBQUE7QUFDRjs7QUFDQTtFQUNFLGNBQUE7RUFFQSxzQ0FBQTtFQUNBLHVDQUFBO0VBQ0EscUVBQUE7QUFDRiIsImZpbGUiOiJzaW5nZXItbGlzdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCJzcmMvYXBwL3N0eWxlcy9jb25zdGFudFwiO1xuLnNpbmdlcl9saXN0IHtcbiAgZm9udC1zaXplOiAxOXB4O1xufVxuLnNpbmdlcl9saXN0X19saXN0IHtcbiAgb3ZlcmZsb3c6IHNjcm9sbDtcblxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBoZWlnaHQ6IGNhbGMoMTAwJSAtICN7JG1vZHVsZV90aXRsZV9oZWlnaHR9KTtcbn1cbi5zaW5nZXJfbGlzdF9faXRlbSB7XG4gIGhlaWdodDogODhweDtcbn1cbi5zaW5nZXJfbGlzdF9fbGluayB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgaGVpZ2h0OiAxMDAlO1xufVxuLnNpbmdlcl9saXN0X19pbWcge1xuICBkaXNwbGF5OiBibG9jaztcblxuICB3aWR0aDogNjFweDtcbiAgaGVpZ2h0OiA2MXB4O1xuICBtYXJnaW46IDAgMThweCAwICRwYWRkaW5nX3dpZHRoO1xufVxuIl19 */"] });


/***/ }),

/***/ "aPdr":
/*!***************************************************************************!*\
  !*** ./src/app/views/singer/singer-category/singer-category.component.ts ***!
  \***************************************************************************/
/*! exports provided: SingerCategoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SingerCategoryComponent", function() { return SingerCategoryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_singer_category_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/singer-category.service */ "ASFH");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");





function SingerCategoryComponent_ul_1_li_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "svg", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "use", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", item_r3.path);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r3.classname);
} }
function SingerCategoryComponent_ul_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ul", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, SingerCategoryComponent_ul_1_li_1_Template, 7, 2, "li", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const list_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", list_r1.data);
} }
class SingerCategoryComponent {
    constructor(singerCategoryService) {
        this.singerCategoryService = singerCategoryService;
        this.singerCategories = [];
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.singerCategories = yield this.singerCategoryService.fetchSingerCategory();
        });
    }
}
SingerCategoryComponent.ɵfac = function SingerCategoryComponent_Factory(t) { return new (t || SingerCategoryComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_singer_category_service__WEBPACK_IMPORTED_MODULE_2__["SingerCategoryService"])); };
SingerCategoryComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: SingerCategoryComponent, selectors: [["app-singer-category"]], decls: 2, vars: 1, consts: [["test-id", "page-singer-category", 1, "singer_category"], ["class", "singer_category__list main_border", 4, "ngFor", "ngForOf"], [1, "singer_category__list", "main_border"], ["class", "singer_category__item main_border_bottom", "test-class", "list", 4, "ngFor", "ngForOf"], ["test-class", "list", 1, "singer_category__item", "main_border_bottom"], ["test-class", "link", 1, "singer_category__link", 3, "routerLink"], [1, "singer_category__title"], [1, "singer_category_btn"], ["aria-hidden", "true", 1, "icon"], [0, "xlink", "href", "#icon-arrow-right"]], template: function SingerCategoryComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, SingerCategoryComponent_ul_1_Template, 2, 1, "ul", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.singerCategories);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"]], styles: ["@charset \"UTF-8\";\n.singer_category__list[_ngcontent-%COMP%] {\n  width: calc(var(--vw, 1vw) * 92.53333);\n  margin: calc(var(--vw, 1vw) * 4.8) auto;\n  border-radius: calc(var(--vw, 1vw) * 1.6);\n  background-color: #fff;\n}\n.singer_category__item[_ngcontent-%COMP%] {\n  height: calc(var(--vw, 1vw) * 13.33333);\n}\n.singer_category__item[_ngcontent-%COMP%]:last-child {\n  \n  border-bottom: none;\n}\n.singer_category__link[_ngcontent-%COMP%] {\n  display: block;\n  display: flex;\n  align-items: center;\n  height: 100%;\n}\n.singer_category__title[_ngcontent-%COMP%] {\n  display: block;\n  padding-left: calc(var(--vw, 1vw) * 3.46667);\n}\n.singer_category_btn[_ngcontent-%COMP%] {\n  font-size: calc(var(--vw, 1vw) * 5.33333);\n  margin-right: calc(var(--vw, 1vw) * 4);\n  margin-left: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Npbmdlci1jYXRlZ29yeS5jb21wb25lbnQuc2NzcyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3N0eWxlcy9jb25zdGFudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQUNoQjtFQUNFLHNDQUFBO0VBQ0EsdUNBQUE7RUFJQSx5Q0FBQTtFQUNBLHNCQ1JNO0FETVI7QUFLQTtFQUNFLHVDQUFBO0FBRkY7QUFLQTtFQUNFOzJCQUFBO0VBRUEsbUJBQUE7QUFGRjtBQUtBO0VBQ0UsY0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUVBLFlBQUE7QUFIRjtBQU1BO0VBQ0UsY0FBQTtFQUVBLDRDQ1pjO0FEUWhCO0FBT0E7RUFDRSx5Q0FBQTtFQUNBLHNDQUFBO0VBQ0EsaUJBQUE7QUFKRiIsImZpbGUiOiJzaW5nZXItY2F0ZWdvcnkuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwic3JjL2FwcC9zdHlsZXMvY29uc3RhbnRcIjtcbi5zaW5nZXJfY2F0ZWdvcnlfX2xpc3Qge1xuICB3aWR0aDogMzQ3cHg7XG4gIG1hcmdpbjogMThweCBhdXRvO1xuXG4gIC8vIGJvcmRlci1ib3R0b206IG5vbmU7XG5cbiAgYm9yZGVyLXJhZGl1czogNnB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkd2hpdGU7XG59XG5cbi5zaW5nZXJfY2F0ZWdvcnlfX2l0ZW0ge1xuICBoZWlnaHQ6IDUwcHg7XG59XG5cbi5zaW5nZXJfY2F0ZWdvcnlfX2l0ZW06bGFzdC1jaGlsZCB7XG4gIC8q5aaC5p6c55So5Y+m5LiA56eN5oCd6Lev77yM6K6+572uIC5zaW5nZXJfY2F0ZWdvcnlfX2xpc3Qg55qEIGJvcmRlci1ib3R0b20g77yMXG4gICAg5ZyoIGlQaG9uZTYvNy84IOWwseS8muWksei0pe+8jOW+hea1i+ivlSovXG4gIGJvcmRlci1ib3R0b206IG5vbmU7XG59XG5cbi5zaW5nZXJfY2F0ZWdvcnlfX2xpbmsge1xuICBkaXNwbGF5OiBibG9jaztcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5zaW5nZXJfY2F0ZWdvcnlfX3RpdGxlIHtcbiAgZGlzcGxheTogYmxvY2s7XG5cbiAgcGFkZGluZy1sZWZ0OiAkcGFkZGluZ193aWR0aDtcbn1cblxuLnNpbmdlcl9jYXRlZ29yeV9idG4ge1xuICBmb250LXNpemU6IDIwcHg7XG4gIG1hcmdpbi1yaWdodDogMTVweDtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG59XG4iLCIkd2hpdGU6ICNmZmY7XG4kd2hpdGUtMTogI2ZiZmJmYjtcbiR3aGl0ZS0yOiAjZTVlNWU1O1xuJHdoaXRlLTM6ICNjY2M7XG4kd2hpdGUtdG8tYmxhY2s6ICM5NTk1OTU7XG4kYmxhY2stNTogIzZjNmI3MDtcbiRibGFjay0zOiAjMzMzO1xuJGJsYWNrLTI6ICMyMzIyMjg7XG4kYmxhY2s5MHA6IHJnYmEoMCwgMCwgMCwgMC45KTtcbiR0aGVtZTogIzJjYTJmOTtcbiRyZWQ6ICNlODAwMDA7XG4kb3JhbmdlOiAjZmY3MjAwO1xuJHllbGxvdzogI2Y4YjMwMDtcbiRsZW1vbjogI2QxYzkwZTtcblxuJGZvbnRfc2l6ZV9tYWluOiAxOHB4O1xuJGZvbnRfc2l6ZV9tZWQ6IDE1cHg7XG4kZm9udF9zaXplX3NtYWxsOiAxM3B4O1xuJGZvbnRfc2l6ZV9taW5pOiAxMnB4O1xuXG4kcGFkZGluZ193aWR0aDogMTNweDtcbiRoZWFkZXJfaGVpZ2h0OiA1OHB4O1xuJG5hdl9oZWlnaHQ6IDYycHg7XG4kbW9kdWxlX3RpdGxlX2hlaWdodDogNTRweDtcbiRzZWFyY2hfZm9ybV9oZWlnaHQ6IDYzcHg7XG5cbiRhcHBfd2lkdGgtLWRldjogMzc1O1xuJGFwcF9oZWlnaHQtLWRldjogNjY3O1xuLy8gMTAwdmggZXF1YWwgdmlld3BvcnQgaGVpZ2h0IGFzIGlmIHRoZSBhZGRyZXNzIGJhciB3YXMgaGlkZGVuIG9uIG1vYmlsZS5cbi8vIFNvIEkgc2V0IGh0bWwuc3R5bGUuc2V0UHJvcGVydHkoJy0tdmgnLCB3aW5kb3cuaW5uZXJIZWlnaHQgLyAxMDAgKyAncHgnKSBhbmQgdXNlIHZhcigtLXZoKSB0byByZXBsYWNlIHRoZSB3cm9uZyB2aC5cblxuJGFwcF9jb250X2hfZGV2OiAkYXBwX2hlaWdodC0tZGV2IC0gdW5pdCgkaGVhZGVyX2hlaWdodCk7XG4kYXBwX2NvbnRfaC0tcHJvZDogXCJ2YXIoLS12aCkgKiAxMDAgLSAxMDB2dyAqIDU4IC8gMzc1XCI7XG4iXX0= */"] });


/***/ }),

/***/ "mu85":
/*!*************************************************!*\
  !*** ./src/app/services/singer-info.service.ts ***!
  \*************************************************/
/*! exports provided: SingerInfoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SingerInfoService", function() { return SingerInfoService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var src_app_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/utils */ "YMfE");
/* harmony import */ var src_app_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/constants */ "U7T7");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "tk/3");





class SingerInfoService {
    constructor(http) {
        this.http = http;
        this.singerInfoUrl = `${src_app_constants__WEBPACK_IMPORTED_MODULE_2__["BASE_ORIGIN"]}/singer/info`;
    }
    fetchSingerInfo(singerId) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const response = yield this.http
                .get(`${this.singerInfoUrl}/${singerId}&json=true`)
                .toPromise();
            const { info, songs } = response;
            const singerInfo = {
                info: {
                    id: info.singerid,
                    name: info.singername,
                    count: info.songcount,
                    albumcount: info.albumcount,
                    imgUrl: Object(src_app_utils__WEBPACK_IMPORTED_MODULE_1__["replaceSizeInUrl"])(info.imgurl),
                    intro: info.intro,
                },
                data: songs.list,
            };
            songs.list.forEach((obj) => {
                obj.name = obj.filename;
            });
            return singerInfo;
        });
    }
}
SingerInfoService.ɵfac = function SingerInfoService_Factory(t) { return new (t || SingerInfoService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"])); };
SingerInfoService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: SingerInfoService, factory: SingerInfoService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "viN6":
/*!*************************************************!*\
  !*** ./src/app/services/singer-list.service.ts ***!
  \*************************************************/
/*! exports provided: SingerListService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SingerListService", function() { return SingerListService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var src_app_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/utils */ "YMfE");
/* harmony import */ var src_app_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/constants */ "U7T7");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "tk/3");





class SingerListService {
    constructor(http) {
        this.http = http;
        this.singerListUrl = `${src_app_constants__WEBPACK_IMPORTED_MODULE_2__["BASE_ORIGIN"]}/singer/list/&json=true&singerListId=`;
    }
    fetchSingerList(singerListId) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const response = yield this.http
                .get(`${this.singerListUrl}${singerListId}`)
                .toPromise();
            const { classid, classname, singers, } = response;
            singers.list.info.forEach((obj) => {
                obj.id = obj.singerid;
                obj.name = obj.singername;
                obj.imgUrl = Object(src_app_utils__WEBPACK_IMPORTED_MODULE_1__["replaceSizeInUrl"])(obj.imgurl);
                obj.path = `/singer/info/${obj.id}`;
            });
            return {
                info: {
                    id: classid,
                    name: classname,
                    count: singers.list.total,
                },
                data: singers.list.info,
            };
        });
    }
}
SingerListService.ɵfac = function SingerListService_Factory(t) { return new (t || SingerListService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"])); };
SingerListService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: SingerListService, factory: SingerListService.ɵfac, providedIn: 'root' });


/***/ })

}]);
//# sourceMappingURL=views-singer-singer-module.js.map