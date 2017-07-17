webpackJsonp([1,5],{

/***/ 111:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return initialState; });
var initialState = {
    isDirty: false,
    templateHTML: '',
    backgroundColor: '#E07A5F'
};
//# sourceMappingURL=app-state.js.map

/***/ }),

/***/ 112:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FONTS; });
var FONTS = [
    'Arial',
    'Helvetica',
    'Comic Sans MS',
    'Impact',
    'Lucida Sans Unicode',
    'Tahoma',
    'Trebuchet MS',
    'Georgia',
    'Times New Roman',
    'Courier New',
    'Lucida Console'
];
//# sourceMappingURL=fonts.js.map

/***/ }),

/***/ 164:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 164;


/***/ }),

/***/ 165:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(174);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(188);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(194);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 187:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngrx_store__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_store__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_services_templates_service__ = __webpack_require__(72);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AppComponent = (function () {
    function AppComponent(store, tpl) {
        this.store = store;
        this.tpl = tpl;
        this.sideBarOpen = true;
    }
    AppComponent.prototype.resetApp = function () {
        this.store.dispatch({
            type: __WEBPACK_IMPORTED_MODULE_2_app_store__["h" /* RESET */]
        });
    };
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent.prototype.exportScript = function () {
        var _this = this;
        this.store.select('templateHTML').subscribe(function (html) {
            _this.tpl.saveEmbeddedScript(html);
        });
    };
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__(258),
        styles: [__webpack_require__(252)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__ngrx_store__["g" /* Store */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ngrx_store__["g" /* Store */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3_app_services_templates_service__["a" /* TemplatesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_app_services_templates_service__["a" /* TemplatesService */]) === "function" && _b || Object])
], AppComponent);

var _a, _b;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 188:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_color_picker__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_color_picker___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular2_color_picker__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser_animations__ = __webpack_require__(175);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_material__ = __webpack_require__(173);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__(187);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__sidebar_sidebar_component__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__editor_editor_component__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_templates_service__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pipes_safe_html_pipe__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ngrx_store__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__store__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ngrx_store_devtools__ = __webpack_require__(181);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





// ngMaterial dependencies







// Store setup



var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_8__sidebar_sidebar_component__["a" /* SidebarComponent */],
            __WEBPACK_IMPORTED_MODULE_9__editor_editor_component__["a" /* EditorComponent */],
            __WEBPACK_IMPORTED_MODULE_11__pipes_safe_html_pipe__["a" /* SafeHtmlPipe */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_4_angular2_color_picker__["ColorPickerModule"],
            __WEBPACK_IMPORTED_MODULE_6__angular_material__["a" /* MaterialModule */],
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_12__ngrx_store__["a" /* StoreModule */].provideStore({
                backgroundColor: __WEBPACK_IMPORTED_MODULE_13__store__["a" /* backgroundReducer */],
                isDirty: __WEBPACK_IMPORTED_MODULE_13__store__["b" /* dirtyReducer */],
                templateHTML: __WEBPACK_IMPORTED_MODULE_13__store__["c" /* templateReducer */]
            }),
            __WEBPACK_IMPORTED_MODULE_14__ngrx_store_devtools__["a" /* StoreDevtoolsModule */].instrumentOnlyWithExtension({
                maxAge: 5
            }),
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_10__services_templates_service__["a" /* TemplatesService */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 189:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_services_templates_service__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngrx_store__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_store__ = __webpack_require__(46);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditorComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




// We need jQuery here because we use external templates HTML
// And to take less size of HTML template do not clog up it with Angular tags
// We will use dynamic watchers and bindings to DOM using jQuery
var $ = window['jQuery'];
var KEY_ESCAPE = 27;
var EditorComponent = (function () {
    function EditorComponent(tpl, elementRef, store) {
        this.tpl = tpl;
        this.elementRef = elementRef;
        this.store = store;
        this.templateHtml = '';
        this.isDirty = true;
        this.originalTemplate = '';
    }
    Object.defineProperty(EditorComponent.prototype, "hostElement", {
        get: function () {
            return this.elementRef.nativeElement;
        },
        enumerable: true,
        configurable: true
    });
    EditorComponent.prototype.ngOnInit = function () {
    };
    EditorComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.tpl.getTemplateHtml('default')
            .subscribe(function (template) {
            _this.store.dispatch({ type: __WEBPACK_IMPORTED_MODULE_3_app_store__["d" /* SET_TEMPLATE_DEFAULT */], payload: template });
            _this.originalTemplate = '' + template;
            _this.onTemplateFetch(template);
        }, function () { return _this.templateHtml = 'Failed to get template'; });
        this.store.select('isDirty').subscribe(function (dirty) {
            /** Reset editor when isDirty changes from true to false **/
            if (!dirty) {
                _this.templateHtml = '';
                // Async call with timeout required to detect and apply changes by Angular
                setTimeout(function () { return _this.onTemplateFetch(_this.originalTemplate + ''); });
            }
        });
    };
    EditorComponent.prototype.onTemplateFetch = function (template) {
        var _this = this;
        this.templateHtml = template;
        this.store.dispatch({
            type: __WEBPACK_IMPORTED_MODULE_3_app_store__["d" /* SET_TEMPLATE_DEFAULT */],
            payload: template
        });
        setTimeout(function () { return _this.registerEditorHooks(); }, 150);
    };
    /**
     * Set editable mode on template part
     *
     * @param {Event} event Event source
     * @param {boolean} isEditable Is element editable
     * @memberof EditorComponent
     */
    EditorComponent.prototype.setEditableElementStatus = function (event, isEditable) {
        var element = event.target;
        element.contentEditable = isEditable.toString();
        if (!isEditable) {
            this.commitHtmlChanges();
        }
    };
    EditorComponent.prototype.commitHtmlChanges = function () {
        this.store.dispatch({
            type: __WEBPACK_IMPORTED_MODULE_3_app_store__["e" /* SET_TEMPLATE */],
            payload: $(this.hostElement).find('.popt')[0].outerHTML
        });
    };
    /**
     * Register jQuery hooks on template markup
     *
     * @memberof EditorComponent
     */
    EditorComponent.prototype.registerEditorHooks = function () {
        var _this = this;
        $(this.hostElement)
            .on('blur keyup paste input', '[contenteditable]', function () {
            _this.store.dispatch({
                type: __WEBPACK_IMPORTED_MODULE_3_app_store__["f" /* MARK_AS_DIRTY */]
            });
            _this.commitHtmlChanges();
        })
            .find('[data-control]')
            .on('click', function (event) {
            _this.store.dispatch({
                type: __WEBPACK_IMPORTED_MODULE_3_app_store__["f" /* MARK_AS_DIRTY */]
            });
            _this.setEditableElementStatus(event, true);
            return false;
        })
            .on('keydown', function (event) {
            if (event.keyCode === KEY_ESCAPE) {
                _this.setEditableElementStatus(event, false);
            }
        })
            .draggable({
            cancel: false,
            start: function () {
                _this.store.dispatch({ type: __WEBPACK_IMPORTED_MODULE_3_app_store__["f" /* MARK_AS_DIRTY */] });
                _this.commitHtmlChanges();
            }
        });
        this.store.select('backgroundColor').subscribe(function (newColor) {
            _this.store.dispatch({
                type: __WEBPACK_IMPORTED_MODULE_3_app_store__["f" /* MARK_AS_DIRTY */]
            });
            $(_this.hostElement)
                .find('.popt')
                .css({
                'background-color': newColor
            });
            _this.commitHtmlChanges();
        });
    };
    return EditorComponent;
}());
EditorComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
        selector: 'app-editor',
        template: __webpack_require__(259),
        styles: [__webpack_require__(253)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_app_services_templates_service__["a" /* TemplatesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_app_services_templates_service__["a" /* TemplatesService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* ElementRef */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__ngrx_store__["g" /* Store */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ngrx_store__["g" /* Store */]) === "function" && _c || Object])
], EditorComponent);

var _a, _b, _c;
//# sourceMappingURL=editor.component.js.map

/***/ }),

/***/ 190:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(17);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SafeHtmlPipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SafeHtmlPipe = (function () {
    function SafeHtmlPipe(sanitizer) {
        this.sanitizer = sanitizer;
    }
    SafeHtmlPipe.prototype.transform = function (value, args) {
        return this.sanitizer.bypassSecurityTrustHtml(value);
    };
    return SafeHtmlPipe;
}());
SafeHtmlPipe = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* Pipe */])({
        name: 'safeHtml'
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["f" /* DomSanitizer */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["f" /* DomSanitizer */]) === "function" && _a || Object])
], SafeHtmlPipe);

var _a;
//# sourceMappingURL=safe-html.pipe.js.map

/***/ }),

/***/ 191:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TPL_CSS; });
var TPL_CSS = "<style>.popt,.popt__input{box-sizing:border-box}.popt{font-family:Tahoma,Helvetica,sans-serif;background-color:#E07A5F;border-radius:50%;height:496px;width:496px;padding:10px}.popt__container{box-sizing: border-box;position:relative;border:2px solid #fff;border-radius:50%;height:100%;width:100%;padding:10px;text-align:center;color:#fff}.popt__container:before{content:'';background:url(data:image/png;base64,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) center no-repeat;display:block;height:46px}.ng-draggable{cursor:move}.popt__form{position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);width:75%;display:block}.popt__slogan{font:24px Tahoma,Helvetica,sans-serif;font-weight:800;color:#fff;display:block}.popt__row{padding:10px 0}.popt__button,.popt__input{width:100%;padding:12px;font-family:Tahoma,Helvetica,sans-serif}.popt__unselectable{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;-o-user-select:none;user-select:none}.popt__input{background:#fff;font-size:20px;border-radius:16px;border:none}.popt__button{cursor:pointer;text-align:center;color:#fff;font-weight:700;font-size:30px;background-color:#414142;border-radius:16px;border:0}.popt__row--disclaimer{font-family:Tahoma,Helvetica,sans-serif;font-size:14px;padding-top:0}</style>";
//# sourceMappingURL=constants.js.map

/***/ }),

/***/ 192:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_foundation_fonts__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_store__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngrx_store__ = __webpack_require__(27);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SidebarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SidebarComponent = (function () {
    function SidebarComponent(store) {
        var _this = this;
        this.store = store;
        /* Unused */
        this.fontSize = 13;
        this.fontFamily = __WEBPACK_IMPORTED_MODULE_1_foundation_fonts__["a" /* FONTS */][0];
        this.fontColor = '#ccc';
        /* Used */
        this.backgroundColor = '#c87960';
        store.select('backgroundColor').subscribe(function (newValue) {
            _this.backgroundColor = newValue;
        });
    }
    Object.defineProperty(SidebarComponent.prototype, "currentBackgroundColor", {
        get: function () {
            return this.backgroundColor;
        },
        set: function (newValue) {
            this.store.dispatch({
                type: __WEBPACK_IMPORTED_MODULE_2_app_store__["g" /* SET_BACKGROUND_COLOR */],
                payload: newValue
            });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SidebarComponent.prototype, "fonts", {
        get: function () {
            return __WEBPACK_IMPORTED_MODULE_1_foundation_fonts__["a" /* FONTS */];
        },
        enumerable: true,
        configurable: true
    });
    SidebarComponent.prototype.ngOnInit = function () {
    };
    return SidebarComponent;
}());
SidebarComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
        selector: 'app-sidebar',
        template: __webpack_require__(260),
        styles: [__webpack_require__(254)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__ngrx_store__["g" /* Store */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ngrx_store__["g" /* Store */]) === "function" && _a || Object])
], SidebarComponent);

var _a;
//# sourceMappingURL=sidebar.component.js.map

/***/ }),

/***/ 193:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_state__ = __webpack_require__(111);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return SET_BACKGROUND_COLOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return SET_TEMPLATE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return SET_TEMPLATE_DEFAULT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return MARK_AS_DIRTY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return RESET; });
/* harmony export (immutable) */ __webpack_exports__["a"] = backgroundReducer;
/* harmony export (immutable) */ __webpack_exports__["c"] = templateReducer;
/* harmony export (immutable) */ __webpack_exports__["b"] = dirtyReducer;

var SET_BACKGROUND_COLOR = 'SET_BACKGROUND_COLOR';
var SET_TEMPLATE = 'SET_TEMPLATE';
var SET_TEMPLATE_DEFAULT = 'SET_TEMPLATE_DEFAULT';
var MARK_AS_DIRTY = 'MARK_AS_DIRTY';
var RESET = 'RESET';
function backgroundReducer(state, action) {
    if (state === void 0) { state = __WEBPACK_IMPORTED_MODULE_0__app_state__["a" /* initialState */].backgroundColor; }
    var newState = '' + state;
    switch (action.type) {
        case SET_BACKGROUND_COLOR:
            newState = action.payload;
            return newState;
        case RESET:
            newState = __WEBPACK_IMPORTED_MODULE_0__app_state__["a" /* initialState */].backgroundColor;
            return newState;
        default:
            return state;
    }
}
function templateReducer(state, action) {
    if (state === void 0) { state = ''; }
    var newState = '' + state;
    switch (action.type) {
        case SET_TEMPLATE:
            newState = action.payload;
            return newState;
        case SET_TEMPLATE_DEFAULT:
            newState = action.payload;
            __WEBPACK_IMPORTED_MODULE_0__app_state__["a" /* initialState */].templateHTML = '' + action.payload;
            return newState;
        case RESET:
            newState = __WEBPACK_IMPORTED_MODULE_0__app_state__["a" /* initialState */].templateHTML;
            return newState;
        default:
            return state;
    }
}
function dirtyReducer(state, action) {
    if (state === void 0) { state = false; }
    switch (action.type) {
        case RESET:
            return false;
        case MARK_AS_DIRTY:
            return true;
        default:
            return state;
    }
}
//# sourceMappingURL=reducers.js.map

/***/ }),

/***/ 194:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 195:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__fonts__ = __webpack_require__(112);
/* unused harmony export UIFontStyle */

var UIFontStyle = (function () {
    function UIFontStyle(family, size, color) {
        if (family === void 0) { family = __WEBPACK_IMPORTED_MODULE_0__fonts__["a" /* FONTS */][0]; }
        if (size === void 0) { size = 13; }
        if (color === void 0) { color = '#CCC'; }
        this.family = family;
        this.size = size;
        this.color = color;
    }
    return UIFontStyle;
}());

//# sourceMappingURL=font-style.js.map

/***/ }),

/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__font_style__ = __webpack_require__(195);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__fonts__ = __webpack_require__(112);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__fonts__["a"]; });


//# sourceMappingURL=index.js.map

/***/ }),

/***/ 252:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(31)(false);
// imports


// module
exports.push([module.i, ":host {\n  height: 100%;\n  width: 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column; }\n\n.app__header__divider {\n  -webkit-box-flex: 1;\n      -ms-flex: 1 1 auto;\n          flex: 1 1 auto; }\n\n.app__container {\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  margin: auto;\n  width: 100%;\n  height: 100%; }\n\n.sidebar {\n  width: 300px;\n  font-family: Roboto, \"Helvetica Neue\", sans-serif; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 253:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(31)(false);
// imports


// module
exports.push([module.i, ":host {\n  background: url(\"/assets/img/blank.jpg\") top left;\n  background-attachment: fixed;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  margin: auto;\n  height: 100%;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center; }\n\n.editor__container {\n  margin: auto;\n  display: table;\n  height: auto;\n  width: auto; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 254:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(31)(false);
// imports


// module
exports.push([module.i, ".sidebar__section {\n  font-family: inherit; }\n\n.sidebar__section__title {\n  font-family: inherit;\n  border: none;\n  font-size: 10px;\n  letter-spacing: 1px;\n  line-height: 24px;\n  text-transform: uppercase;\n  font-weight: 400;\n  margin: 0;\n  padding: 0 16px;\n  background: rgba(0, 0, 0, 0.32);\n  color: rgba(255, 255, 255, 0.87); }\n\n.sidebar__item {\n  /** Workaround for dropdowns in ngMaterial because placeholder is always position:absolute **/\n  padding: 0 16px;\n  padding-top: 32px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 258:
/***/ (function(module, exports) {

module.exports = "<header>\n  <md-toolbar color=\"primary\" class=\"app__header\">\n    <button md-icon-button (click)=\"sideBarOpen = !sideBarOpen\">\n      <md-icon>menu</md-icon>\n    </button>\n\n    <span>Poptin Builder</span>\n\n    <span class=\"app__header__divider\"></span>\n\n    <span>\n\n      <button md-icon-button title=\"Show embedded code\" (click)=\"exportScript()\">\n        <md-icon>code</md-icon>\n      </button>\n\n      <button md-icon-button title=\"Reset\" (click)=\"resetApp()\">\n        <md-icon>refresh</md-icon>\n      </button>\n\n    </span>\n  </md-toolbar>\n</header>\n\n<md-sidenav-container class=\"app__container\">\n  <md-sidenav class=\"sidebar\" #sidenav mode=\"side\" [opened]=\"sideBarOpen\">\n    <app-sidebar></app-sidebar>\n  </md-sidenav>\n  <app-editor></app-editor>\n</md-sidenav-container>\n"

/***/ }),

/***/ 259:
/***/ (function(module, exports) {

module.exports = "<div class=\"editor__container\" [innerHTML]=\"templateHtml | safeHtml\">\n  Loading...\n</div>\n"

/***/ }),

/***/ 260:
/***/ (function(module, exports) {

module.exports = "<aside>\n  <div class=\"sidebar__section\" *ngIf=\"false\">\n    <h3 class=\"sidebar__section__title\">Text</h3>\n    <!-- #region Font Family -->\n    <div class=\"sidebar__item\">\n      <md-select\n        placeholder=\"Font Family\"\n        floatPlaceholder=\"always\"\n        class=\"w-100p\"\n        [(ngModel)]=\"fontFamily\"\n        disabled\n      >\n        <md-option *ngFor=\"let font of fonts\" [value]=\"font\">\n          {{ font }}\n        </md-option>\n      </md-select>\n    </div>\n    <!-- #endregion -->\n\n    <!-- #region Font Size -->\n    <div class=\"sidebar__item\">\n      <md-input-container class=\"w-100p\">\n        <input mdInput type=\"number\" placeholder=\"Font Size\" [value]=\"fontSize\" disabled/>\n        <span mdSuffix>px</span>\n      </md-input-container>\n    </div>\n    <!-- #endregion -->\n\n    <!-- #region Font Color -->\n    <div class=\"sidebar__item\">\n      <md-input-container class=\"w-100p\">\n        <input\n          mdInput\n          type=\"text\"\n          placeholder=\"Text color\"\n          [value]=\"fontColor\"\n          [(colorPicker)]=\"fontColor\"\n          cpPosition=\"bottom\"\n        />\n        <span mdSuffix>\n          <span class=\"bullet\" [style.background]=\"fontColor\"></span>\n        </span>\n      </md-input-container>\n    </div>\n    <!-- #endregion -->\n\n  </div>\n  <div>\n    <h3 class=\"sidebar__section__title\">Style</h3>\n    <!-- #region Back Color -->\n    <div class=\"sidebar__item\">\n      <md-input-container class=\"w-100p\">\n        <input\n          mdInput\n          type=\"text\"\n          placeholder=\"Background color\"\n          [value]=\"currentBackgroundColor\"\n          [(colorPicker)]=\"currentBackgroundColor\"\n          cpPosition=\"bottom\"\n        />\n        <span mdSuffix>\n          <span class=\"bullet\" [style.background]=\"currentBackgroundColor\"></span>\n        </span>\n      </md-input-container>\n    </div>\n    <!-- #endregion -->\n  </div>\n</aside>\n"

/***/ }),

/***/ 46:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_state__ = __webpack_require__(111);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__reducers__ = __webpack_require__(193);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__reducers__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__reducers__["b"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_1__reducers__["c"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_1__reducers__["d"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_1__reducers__["e"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_1__reducers__["f"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "g", function() { return __WEBPACK_IMPORTED_MODULE_1__reducers__["g"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "h", function() { return __WEBPACK_IMPORTED_MODULE_1__reducers__["h"]; });


//# sourceMappingURL=index.js.map

/***/ }),

/***/ 522:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(165);


/***/ }),

/***/ 72:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__(262);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__constants__ = __webpack_require__(191);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TemplatesService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FileSaver = __webpack_require__(255);
var TemplatesService = (function () {
    function TemplatesService(http) {
        this.http = http;
    }
    TemplatesService.prototype.getTemplateHtml = function (templateName) {
        return this.http.get("assets/templates/" + templateName + ".html")
            .map(function (r) { return r.text(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].throw(error.json().error || 'Server error'); });
    };
    TemplatesService.prototype.saveEmbeddedScript = function (templateHtml) {
        var html = JSON.stringify("" + __WEBPACK_IMPORTED_MODULE_3__constants__["a" /* TPL_CSS */] + templateHtml);
        var script = "(function(w, d, b) {\n  var tpl = " + html + ";\n  d.addEventListener('DOMContentLoaded', function() {\n    var block = document.createElement('div');\n    block.innerHTML = tpl;\n    d.body.appendChild(block);\n});})(window, document);";
        var blob = new Blob([script], { type: 'text/javascript;charset=utf-8' });
        FileSaver.saveAs(blob, 'poptin-embedded.js');
    };
    return TemplatesService;
}());
TemplatesService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], TemplatesService);

var _a;
//# sourceMappingURL=templates.service.js.map

/***/ })

},[522]);
//# sourceMappingURL=main.bundle.js.map