(function () {
  function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

  function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

  function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkangular_io_example"] = self["webpackChunkangular_io_example"] || []).push([["main"], {
    /***/
    8255:
    /*!*******************************************************!*\
      !*** ./$_lazy_route_resources/ lazy namespace object ***!
      \*******************************************************/

    /***/
    function _(module) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      webpackEmptyAsyncContext.keys = function () {
        return [];
      };

      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = 8255;
      module.exports = webpackEmptyAsyncContext;
      /***/
    },

    /***/
    158:
    /*!***************************************!*\
      !*** ./src/app/app-routing.module.ts ***!
      \***************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AppRoutingModule": function AppRoutingModule() {
          return (
            /* binding */
            _AppRoutingModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      9895);
      /* harmony import */


      var _hero_detail_hero_detail_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./hero-detail/hero-detail.component */
      4598);
      /* harmony import */


      var _bonus_point_bonus_point_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./bonus-point/bonus-point.component */
      4601);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      7716);

      var routes = [{
        path: '',
        redirectTo: '/cl-dashboard',
        pathMatch: 'full'
      }, {
        path: 'bonusPoint',
        component: _bonus_point_bonus_point_component__WEBPACK_IMPORTED_MODULE_1__.BonusPointComponent
      }, {
        path: 'detail/:id',
        component: _hero_detail_hero_detail_component__WEBPACK_IMPORTED_MODULE_0__.HeroDetailComponent
      }, {
        path: 'cl-dashboard',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() */
          "src_app_dashboard_dashboard_module_ts").then(__webpack_require__.bind(__webpack_require__,
          /*! ./dashboard/dashboard.module */
          4814)).then(function (m) {
            return m.DashboardModule;
          });
        }
      }, {
        path: 'cl-heroes',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() */
          "src_app_heroes_heroes_module_ts").then(__webpack_require__.bind(__webpack_require__,
          /*! ./heroes/heroes.module */
          3058)).then(function (m) {
            return m.HeroesdModule;
          });
        }
      }];

      var _AppRoutingModule = /*#__PURE__*/_createClass(function _AppRoutingModule() {
        _classCallCheck(this, _AppRoutingModule);
      });

      _AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) {
        return new (t || _AppRoutingModule)();
      };

      _AppRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
        type: _AppRoutingModule
      });
      _AppRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](_AppRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
        });
      })();
      /***/

    },

    /***/
    5041:
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AppComponent": function AppComponent() {
          return (
            /* binding */
            _AppComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _models_dashboard_link__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./models/dashboard-link */
      1267);
      /* harmony import */


      var _dialog_confirm_template_confirm_template_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./dialog/confirm-template/confirm-template.dialog */
      4358);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      7716);
      /* harmony import */


      var _services_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./services/index */
      1866);
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/dialog */
      2238);
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/button */
      1095);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/router */
      9895);
      /* harmony import */


      var _messages_messages_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./messages/messages.component */
      5298);

      var _AppComponent = /*#__PURE__*/function () {
        function _AppComponent(messageService, heroService, dashboardService, dialog) {
          _classCallCheck(this, _AppComponent);

          this.messageService = messageService;
          this.heroService = heroService;
          this.dashboardService = dashboardService;
          this.dialog = dialog;
          this.title = 'Careline - Tour of Heroes';
          this.heroes = [];
          this.dashboard_link = new _models_dashboard_link__WEBPACK_IMPORTED_MODULE_0__.DashboardLink();
        }

        _createClass(_AppComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.hero_sub = this.heroService.heroes$.subscribe(function (next) {
              _this.heroes = next;
            });
            this.dashboard_sub = this.dashboardService.getDashboard().subscribe(function (dashboard_link) {
              return _this.dashboard_link = dashboard_link;
            });
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.hero_sub.unsubscribe();
          }
        }, {
          key: "clearTopFourMsg",
          value: function clearTopFourMsg() {
            var _this2 = this;

            var dialogRef = this.dialog.open(_dialog_confirm_template_confirm_template_dialog__WEBPACK_IMPORTED_MODULE_1__.ConfirmTemplateDialog);
            dialogRef.afterClosed().subscribe(function (result) {
              if (result) {
                var length = _this2.messageService.messages.length;

                if (length <= 5) {
                  _this2.messageService.clear();
                } else {
                  _this2.messageService.messages.splice(0, 5);

                  _this2.messageService.messages;
                }
              }
            });
          }
        }]);

        return _AppComponent;
      }();

      _AppComponent.ɵfac = function AppComponent_Factory(t) {
        return new (t || _AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_index__WEBPACK_IMPORTED_MODULE_2__.MessageService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_index__WEBPACK_IMPORTED_MODULE_2__.HeroService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_index__WEBPACK_IMPORTED_MODULE_2__.DashboardLinkService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MatDialog));
      };

      _AppComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
        type: _AppComponent,
        selectors: [["app-root"]],
        decls: 17,
        vars: 4,
        consts: [[1, "app"], [1, "app-header"], ["mat-stroked-button", "", 3, "click"], ["routerLink", "/cl-dashboard"], ["routerLink", "/cl-heroes"], ["routerLink", "/bonusPoint"]],
        template: function AppComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "button", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function AppComponent_Template_button_click_6_listener() {
              return ctx.clearTopFourMsg();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7, "Clear top 4 messages");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "nav");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "a", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "a", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "a", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](14, "bonusPoint");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](15, "router-outlet");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](16, "app-messages");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.title);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.dashboard_link.dashboard);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate2"]("", ctx.heroes.length !== 0 ? ctx.heroes.length : "", " ", ctx.dashboard_link.heroes, "");
          }
        },
        directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_6__.MatButton, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterLinkWithHref, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterOutlet, _messages_messages_component__WEBPACK_IMPORTED_MODULE_3__.MessagesComponent],
        styles: ["h1[_ngcontent-%COMP%] {\n  font-size: 1.2em;\n  color: #999;\n  margin-bottom: 0;\n}\nh2[_ngcontent-%COMP%] {\n  font-size: 2em;\n  margin-top: 0;\n  padding-top: 0;\n}\nnav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  padding: 5px 10px;\n  text-decoration: none;\n  margin-top: 10px;\n  display: inline-block;\n  background-color: #eee;\n  border-radius: 4px;\n}\nnav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:visited, a[_ngcontent-%COMP%]:link {\n  color: #607d8b;\n}\nnav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #e85374;\n  background-color: #cfd8dc;\n}\nnav[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%] {\n  color: #039be5;\n}\n.app[_ngcontent-%COMP%] {\n  margin: 1%;\n}\n.app-header[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n}\n.app-header[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  margin-left: 6%;\n}\n.mat-stroked-button[_ngcontent-%COMP%] {\n  line-height: 28px;\n  border: 1px solid black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHNDQUFzQztBQUN0QztFQUNFLGdCQUFnQjtFQUNoQixXQUFXO0VBQ1gsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxjQUFjO0VBQ2QsYUFBYTtFQUNiLGNBQWM7QUFDaEI7QUFDQTtFQUNFLGlCQUFpQjtFQUNqQixxQkFBcUI7RUFDckIsZ0JBQWdCO0VBQ2hCLHFCQUFxQjtFQUNyQixzQkFBc0I7RUFDdEIsa0JBQWtCO0FBQ3BCO0FBQ0E7O0VBRUUsY0FBYztBQUNoQjtBQUNBO0VBQ0UsY0FBYztFQUNkLHlCQUF5QjtBQUMzQjtBQUNBO0VBQ0UsY0FBYztBQUNoQjtBQUVBO0VBQ0UsVUFBVTtBQUNaO0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0FBQ3JCO0FBRUE7RUFDRSxlQUFlO0FBQ2pCO0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsdUJBQXVCO0FBQ3pCIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogQXBwQ29tcG9uZW50J3MgcHJpdmF0ZSBDU1Mgc3R5bGVzICovXG5oMSB7XG4gIGZvbnQtc2l6ZTogMS4yZW07XG4gIGNvbG9yOiAjOTk5O1xuICBtYXJnaW4tYm90dG9tOiAwO1xufVxuaDIge1xuICBmb250LXNpemU6IDJlbTtcbiAgbWFyZ2luLXRvcDogMDtcbiAgcGFkZGluZy10b3A6IDA7XG59XG5uYXYgYSB7XG4gIHBhZGRpbmc6IDVweCAxMHB4O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xufVxubmF2IGE6dmlzaXRlZCxcbmE6bGluayB7XG4gIGNvbG9yOiAjNjA3ZDhiO1xufVxubmF2IGE6aG92ZXIge1xuICBjb2xvcjogI2U4NTM3NDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2NmZDhkYztcbn1cbm5hdiBhLmFjdGl2ZSB7XG4gIGNvbG9yOiAjMDM5YmU1O1xufVxuXG4uYXBwIHtcbiAgbWFyZ2luOiAxJTtcbn1cblxuLmFwcC1oZWFkZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xufVxuXG4uYXBwLWhlYWRlciBidXR0b24ge1xuICBtYXJnaW4tbGVmdDogNiU7XG59XG5cbi5tYXQtc3Ryb2tlZC1idXR0b24ge1xuICBsaW5lLWhlaWdodDogMjhweDtcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG59XG4iXX0= */"]
      });
      /***/
    },

    /***/
    6747:
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AppModule": function AppModule() {
          return (
            /* binding */
            _AppModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/platform-browser */
      9075);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/common/http */
      1841);
      /* harmony import */


      var angular_in_memory_web_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! angular-in-memory-web-api */
      5233);
      /* harmony import */


      var _services_in_memory_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./services/in-memory-data.service */
      505);
      /* harmony import */


      var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app-routing.module */
      158);
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./app.component */
      5041);
      /* harmony import */


      var _hero_detail_hero_detail_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./hero-detail/hero-detail.component */
      4598);
      /* harmony import */


      var _services_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./services/index */
      1866);
      /* harmony import */


      var _messages_messages_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./messages/messages.component */
      5298);
      /* harmony import */


      var _bonus_point_bonus_point_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./bonus-point/bonus-point.module */
      4740);
      /* harmony import */


      var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/platform-browser/animations */
      5835);
      /* harmony import */


      var _share_material_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./share/material.module */
      6094);
      /* harmony import */


      var _dialog_confirm_template_confirm_template_dialog__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./dialog/confirm-template/confirm-template.dialog */
      4358);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/core */
      7716);

      var _AppModule = /*#__PURE__*/_createClass(function _AppModule() {
        _classCallCheck(this, _AppModule);
      });

      _AppModule.ɵfac = function AppModule_Factory(t) {
        return new (t || _AppModule)();
      };

      _AppModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineNgModule"]({
        type: _AppModule,
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__.AppComponent]
      });
      _AppModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineInjector"]({
        providers: [_services_index__WEBPACK_IMPORTED_MODULE_5__.HeroService, _services_index__WEBPACK_IMPORTED_MODULE_5__.DashboardLinkService, _services_index__WEBPACK_IMPORTED_MODULE_5__.MessageService],
        imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__.BrowserModule, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormsModule, _share_material_module__WEBPACK_IMPORTED_MODULE_8__.MaterialModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_2__.AppRoutingModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_13__.HttpClientModule, // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
        // and returns simulated server responses.
        // Remove it when a real server is ready to receive requests.
        angular_in_memory_web_api__WEBPACK_IMPORTED_MODULE_0__.HttpClientInMemoryWebApiModule.forRoot(_services_in_memory_data_service__WEBPACK_IMPORTED_MODULE_1__.InMemoryDataService, {
          dataEncapsulation: false
        }), _bonus_point_bonus_point_module__WEBPACK_IMPORTED_MODULE_7__.BonusPointModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__.BrowserAnimationsModule]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsetNgModuleScope"](_AppModule, {
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__.AppComponent, _hero_detail_hero_detail_component__WEBPACK_IMPORTED_MODULE_4__.HeroDetailComponent, _messages_messages_component__WEBPACK_IMPORTED_MODULE_6__.MessagesComponent, _dialog_confirm_template_confirm_template_dialog__WEBPACK_IMPORTED_MODULE_9__.ConfirmTemplateDialog],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__.BrowserModule, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormsModule, _share_material_module__WEBPACK_IMPORTED_MODULE_8__.MaterialModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_2__.AppRoutingModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_13__.HttpClientModule, angular_in_memory_web_api__WEBPACK_IMPORTED_MODULE_0__.HttpClientInMemoryWebApiModule, _bonus_point_bonus_point_module__WEBPACK_IMPORTED_MODULE_7__.BonusPointModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__.BrowserAnimationsModule]
        });
      })();
      /***/

    },

    /***/
    4601:
    /*!******************************************************!*\
      !*** ./src/app/bonus-point/bonus-point.component.ts ***!
      \******************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "BonusPointComponent": function BonusPointComponent() {
          return (
            /* binding */
            _BonusPointComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      5917);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs/operators */
      8307);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs/operators */
      5257);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs/operators */
      5766);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/core */
      7716);
      /* harmony import */


      var _bs_js1_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./bs-js1.service */
      2624);

      var _BonusPointComponent = /*#__PURE__*/function () {
        function _BonusPointComponent(bsJs1Service) {
          _classCallCheck(this, _BonusPointComponent);

          this.bsJs1Service = bsJs1Service;
        }

        _createClass(_BonusPointComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            // this.answerRxjs1();
            // this.answerJs1();
            this.answerCookie1();
          }
        }, {
          key: "redirectToKeiPage",
          value: function redirectToKeiPage() {
            location.href = "".concat(location.protocol, "//kei.careline.localhost:").concat(location.port, "/bonusPoint");
          }
        }, {
          key: "redirectToAnnPage",
          value: function redirectToAnnPage() {
            location.href = "".concat(location.protocol, "//ann.careline.localhost:").concat(location.port, "/bonusPoint");
          }
        }, {
          key: "redirectToAndyPage",
          value: function redirectToAndyPage() {
            location.href = "".concat(location.protocol, "//andy.careline.localhost:").concat(location.port, "/bonusPoint");
          }
        }, {
          key: "answerCookie1",
          value: function answerCookie1() {
            document.cookie = 'ck1=Hello Andy;domain=kei.careline.localhost,ann.careline.localhost;path=/bonusPoint';
            console.log(document.cookie);
            console.log(this.getCookie("ck1"));
          }
        }, {
          key: "answerRxjs1",
          value: function answerRxjs1() {
            var first$ = (0, rxjs__WEBPACK_IMPORTED_MODULE_1__.of)('first', 2000).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.tap)(function () {
              return console.log('first');
            }));
            var second$ = (0, rxjs__WEBPACK_IMPORTED_MODULE_1__.of)('second', 1500).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.tap)(function () {
              return console.log('second');
            }));
            ;
            var third$ = (0, rxjs__WEBPACK_IMPORTED_MODULE_1__.of)('thrid', 800).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.tap)(function () {
              return console.log('thrid');
            }));
            ; // 考題限制 : 執行順序需為 : first$ => second$ => third$
            // 預期的Console結果 :
            //  first
            //  second
            //  third
            // ToDo... 

            (0, rxjs__WEBPACK_IMPORTED_MODULE_1__.of)(first$.pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.take)(1)), second$.pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.take)(1)), third$.pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.take)(1))).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.concatAll)()).subscribe();
          }
        }, {
          key: "answerJs1",
          value: function answerJs1() {
            var result = "";
            this.bsJs1Service.getSample().forEachChilds(function (child) {
              // ToDo : 實作你的解決方案...
              var current = child.parent["child"];
              var last_index = current.length;
              result += child.value + ' , ';

              if (current[last_index - 1].value === child.value) {
                result += child.parent['value'] + ' , ';
              }
            });
            result = result.slice(0, -2); // 預期alert的結果 => js 1 answer : child_1_1 , child_1_2 , parent_1 , child_2_1 ,  parent_2 ,child_3_1 , child_3_2 , child_3_3 , parent_3

            alert("js 1 answer : ".concat(result));
          }
        }, {
          key: "getCookie",
          value: function getCookie(cookieName) {
            var cookie = {};
            document.cookie.split(';').forEach(function (el) {
              var _el$split = el.split('='),
                  _el$split2 = _slicedToArray(_el$split, 2),
                  key = _el$split2[0],
                  value = _el$split2[1];

              cookie[key.trim()] = value;
            });
            return cookie[cookieName];
          }
        }]);

        return _BonusPointComponent;
      }();

      _BonusPointComponent.ɵfac = function BonusPointComponent_Factory(t) {
        return new (t || _BonusPointComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_bs_js1_service__WEBPACK_IMPORTED_MODULE_0__.BsJs1Service));
      };

      _BonusPointComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
        type: _BonusPointComponent,
        selectors: [["app-bonus-point"]],
        decls: 152,
        vars: 0,
        consts: [[1, "page-title"], [1, "title"], [1, "keyword"], [1, "preview-img"], ["src", "assets/imgs/flex-9-grid-cell-sample.png", "alt", ""], [1, "cube-main"], [1, "cube-sub"], ["src", "assets/imgs/grid-colum-row-span-sample.png", "alt", ""], [1, "wrap"], [1, "wrap-border", "g1"], [1, "wrap-border", "g2"], [1, "wrap-border", "g3"], [1, "wrap-border", "g4"], [1, "wrap-border", "g5"], [1, "wrap-border", "g6"], [1, "wrap-border", "g7"], [1, "keyword", 3, "click"], [1, "grid-main"], [1, "g1"], ["src", "assets/imgs/rxjs1.png", "alt", ""]],
        template: function BonusPointComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "p", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "\u51F1\u840A\u524D\u7AEF-\u52A0\u5206\u984C(\u53EF\u5728\u4E0B\u65B9\u6311\u9078\uFF0C\u60F3\u505A\u7684\u984C\u76EE)");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "section");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "p", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, "\u984C\u76EE : \u8ACB\u7528Css FlexBox\u5EFA\u7ACB\u793A\u610F\u5716\u76849\u5BAE\u683C");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "p", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6, "\u8003\u984C\u9650\u5236:");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "ul", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9, "\u6BCF\u4E00\u683C\u7684Width\u3001Height\u9700\u70BA200px");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](11, "\u6240\u4EE59\u5BAE\u683C\u7684\u5927\u5C0F\u6703\u662F: 600 * 600");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](14, "\u793A\u610F\u5716:");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](15, "img", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "p", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](17, "\u4F60\u7684\u5BE6\u4F5C\u7D50\u679C:");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](18, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](19, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](20, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](21, "f1");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](22, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](23, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](24, "f2");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](25, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](26, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](27, "f3");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](28, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](29, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](30, "f4");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](31, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](32, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](33, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](34, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](35, "f6");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](36, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](37, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](38, "f7");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](39, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](40, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](41, "f8");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](42, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](43, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](44, "f9");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](45, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](46, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](47, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](48, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](49, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](50, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](51, "section");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](52, "p", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](53, "\u984C\u76EE : \u8ACB\u7528Css Grid\u5EFA\u7ACB\u793A\u610F\u5716\u7684\u5167\u5BB9");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](54, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](55, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](56, "\u793A\u610F\u5716:");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](57, "img", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](58, "p", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](59, "\u4F60\u7684\u5BE6\u4F5C\u7D50\u679C:");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](60, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](61, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](62, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](63, "g1");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](64, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](65, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](66, "g2");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](67, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](68, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](69, "g3");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](70, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](71, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](72, "g4");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](73, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](74, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](75, "g5");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](76, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](77, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](78, "g6");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](79, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](80, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](81, "g7");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](82, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](83, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](84, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](85, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](86, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](87, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](88, "section");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](89, "p", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](90, "\u984C\u76EE : \u8CC7\u6599\u8655\u7406");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](91, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](92, "\u60C5\u5883 : \u4ECA\u5929\u5F9EAPI\u53D6\u5F97\u4E86\u4E00\u4E9B\u8CC7\u6599\uFF0C\u4F46\u6211\u5011\u9700\u8981\u81EA\u884C\u8F49\u63DB\u6210\u9801\u9762\u9700\u8981\u7684\u8CC7\u6599\u683C\u5F0F:");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](93, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](94, "\u8ACB\u81F3bonus-point.component.ts\u88E1\u7684answerJs1()\uFF0C\u5BE6\u4F5C\u4F60\u7684\u89E3\u6C7A\u65B9\u6848");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](95, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](96, "button", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function BonusPointComponent_Template_button_click_96_listener() {
              return ctx.answerJs1();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](97, "\u4F60\u7684\u5BE6\u4F5C\u7D50\u679C");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](98, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](99, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](100, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](101, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](102, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](103, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](104, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](105, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](106, "section");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](107, "p", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](108, "\u984C\u76EE : \u5171\u7528Cookie");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](109, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](110, "\u60C5\u5883 : \u8ACB\u81EA\u884C\u65B0\u589E\u4E00\u500BCookie(Key:ck1)\uFF0C\u4E26\u5728\u4EE5\u4E0B\u5169\u500B\u4E0D\u540C\u7684URL\u4E0B\u5171\u7528\u76F8\u540C\u7684Cookie:");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](111, "ul");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](112, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](113, " kei.careline.host/bonusPoint ");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](114, "button", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function BonusPointComponent_Template_button_click_114_listener() {
              return ctx.redirectToKeiPage();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](115, "\u524D\u5F80kei\u7684\u7DB2\u7AD9");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](116, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](117, " ann.careline.host/bonusPoint ");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](118, "button", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function BonusPointComponent_Template_button_click_118_listener() {
              return ctx.redirectToAnnPage();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](119, "\u524D\u5F80ann\u7684\u7DB2\u7AD9");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](120, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](121, "\u8ACB\u81F3bonus-point.component.ts\u88E1\u7684answerCookie1()\uFF0C\u5BE6\u4F5C\u4F60\u7684\u89E3\u6C7A\u65B9\u6848");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](122, "p", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](123, "\u8003\u984C\u9650\u5236:");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](124, "ul", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](125, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](126, "\u53EA\u80FD\u81EA\u884C\u65B0\u589E\u4E00\u500BCookie");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](127, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](128, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](129, "button", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function BonusPointComponent_Template_button_click_129_listener() {
              return ctx.answerCookie1();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](130, "\u4F60\u7684\u5BE6\u4F5C\u65B9\u5F0F");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](131, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](132, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](133, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](134, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](135, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](136, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](137, "section");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](138, "p", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](139, "\u984C\u76EE : Rxjs");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](140, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](141, "\u60C5\u5883 : API\u7684\u57F7\u884C\u662F\u6709\u9806\u5E8F\u6027\u7684\uFF0C\u9700\u7B49\u4E0A\u4E00\u500BAPI\u53D6\u5F97Http Repsonse\uFF0C\u624D\u80FD\u9032\u884C\u4E0B\u4E00\u500BHttp Request");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](142, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](143, "\u8ACB\u81F3bonus-point.component.ts\u88E1\u7684answerRxjs1()\uFF0C\u5BE6\u4F5C\u4F60\u7684\u89E3\u6C7A\u65B9\u6848");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](144, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](145, "img", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](146, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](147, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](148, "button", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function BonusPointComponent_Template_button_click_148_listener() {
              return ctx.answerRxjs1();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](149, "\u4F60\u7684\u5BE6\u4F5C\u65B9\u5F0F");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](150, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](151, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          }
        },
        styles: [".keyword[_ngcontent-%COMP%] {\n  color: #cd6f80;\n}\n.title[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  color: #666666;\n  text-align: center;\n}\n.page-title[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  color: #353535;\n  text-align: center;\n}\nimg[_ngcontent-%COMP%] {\n  max-width: 100%;\n}\n.cube-main[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  width: 600px;\n  height: 600px;\n}\n.cube-sub[_ngcontent-%COMP%] {\n  width: 196px;\n  height: 196px;\n  border: 2px solid;\n  margin: 0 0 -2px -2px;\n  display: flex;\n  justify-content: center;\n}\n.cube-sub[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 80px;\n  align-self: center;\n}\n.wrap[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 33.3% 33.3% 33.3%;\n  grid-template-rows: 33.3% 33.3% 33.3%;\n  width: 920px;\n  height: 300px;\n}\n.wrap-border[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  border: 1px solid;\n  margin: 0 0 -1px -1px;\n}\n.wrap-border[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 30px;\n  margin: revert;\n  align-self: center;\n}\n.g1[_ngcontent-%COMP%] {\n  grid-row-start: 1;\n  grid-row-end: 3;\n}\n.g2[_ngcontent-%COMP%] {\n  grid-column-start: 2;\n  grid-row-start: 1;\n}\n.g3[_ngcontent-%COMP%] {\n  grid-column-start: 3;\n  grid-row-start: 1;\n}\n.g4[_ngcontent-%COMP%] {\n  grid-column-start: 2;\n  grid-row-start: 2;\n}\n.g5[_ngcontent-%COMP%] {\n  grid-column-start: 3;\n  grid-row-start: 2;\n}\n.g6[_ngcontent-%COMP%] {\n  grid-column-start: 1;\n  grid-row-start: 3;\n}\n.g7[_ngcontent-%COMP%] {\n  grid-column-start: 2;\n  grid-column-end: 4;\n  grid-row-start: 3;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJvbnVzLXBvaW50LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFjO0FBQ2hCO0FBQ0E7RUFDRSxpQkFBaUI7RUFDakIsY0FBYztFQUNkLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0UsZUFBZTtFQUNmLGNBQWM7RUFDZCxrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLGVBQWU7QUFDakI7QUFFQTtFQUNFLGFBQWE7RUFDYixlQUFlO0VBQ2YsWUFBWTtFQUNaLGFBQWE7QUFDZjtBQUVBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYixpQkFBaUI7RUFDakIscUJBQXFCO0VBQ3JCLGFBQWE7RUFDYix1QkFBdUI7QUFDekI7QUFFQTtFQUNFLGVBQWU7RUFDZixrQkFBa0I7QUFDcEI7QUFFQTtFQUNFLGFBQWE7RUFDYix3Q0FBd0M7RUFDeEMscUNBQXFDO0VBQ3JDLFlBQVk7RUFDWixhQUFhO0FBQ2Y7QUFFQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsaUJBQWlCO0VBQ2pCLHFCQUFxQjtBQUN2QjtBQUVBO0VBQ0UsZUFBZTtFQUNmLGNBQWM7RUFDZCxrQkFBa0I7QUFDcEI7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixlQUFlO0FBQ2pCO0FBRUE7RUFDRSxvQkFBb0I7RUFDcEIsaUJBQWlCO0FBQ25CO0FBRUE7RUFDRSxvQkFBb0I7RUFDcEIsaUJBQWlCO0FBQ25CO0FBRUE7RUFDRSxvQkFBb0I7RUFDcEIsaUJBQWlCO0FBQ25CO0FBRUE7RUFDRSxvQkFBb0I7RUFDcEIsaUJBQWlCO0FBQ25CO0FBRUE7RUFDRSxvQkFBb0I7RUFDcEIsaUJBQWlCO0FBQ25CO0FBRUE7RUFDRSxvQkFBb0I7RUFDcEIsa0JBQWtCO0VBQ2xCLGlCQUFpQjtBQUNuQiIsImZpbGUiOiJib251cy1wb2ludC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmtleXdvcmQge1xuICBjb2xvcjogI2NkNmY4MDtcbn1cbi50aXRsZSB7XG4gIGZvbnQtc2l6ZTogMS41cmVtO1xuICBjb2xvcjogIzY2NjY2NjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLnBhZ2UtdGl0bGUge1xuICBmb250LXNpemU6IDJyZW07XG4gIGNvbG9yOiAjMzUzNTM1O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5pbWcge1xuICBtYXgtd2lkdGg6IDEwMCU7XG59XG5cbi5jdWJlLW1haW4ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIHdpZHRoOiA2MDBweDtcbiAgaGVpZ2h0OiA2MDBweDtcbn1cblxuLmN1YmUtc3ViIHtcbiAgd2lkdGg6IDE5NnB4O1xuICBoZWlnaHQ6IDE5NnB4O1xuICBib3JkZXI6IDJweCBzb2xpZDtcbiAgbWFyZ2luOiAwIDAgLTJweCAtMnB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLmN1YmUtc3ViIHAge1xuICBmb250LXNpemU6IDgwcHg7XG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcbn1cblxuLndyYXAge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDMzLjMlIDMzLjMlIDMzLjMlO1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IDMzLjMlIDMzLjMlIDMzLjMlO1xuICB3aWR0aDogOTIwcHg7XG4gIGhlaWdodDogMzAwcHg7XG59XG5cbi53cmFwLWJvcmRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBib3JkZXI6IDFweCBzb2xpZDtcbiAgbWFyZ2luOiAwIDAgLTFweCAtMXB4O1xufVxuXG4ud3JhcC1ib3JkZXIgcCB7XG4gIGZvbnQtc2l6ZTogMzBweDtcbiAgbWFyZ2luOiByZXZlcnQ7XG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcbn1cblxuLmcxIHtcbiAgZ3JpZC1yb3ctc3RhcnQ6IDE7XG4gIGdyaWQtcm93LWVuZDogMztcbn1cblxuLmcyIHtcbiAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDI7XG4gIGdyaWQtcm93LXN0YXJ0OiAxO1xufVxuXG4uZzMge1xuICBncmlkLWNvbHVtbi1zdGFydDogMztcbiAgZ3JpZC1yb3ctc3RhcnQ6IDE7XG59XG5cbi5nNCB7XG4gIGdyaWQtY29sdW1uLXN0YXJ0OiAyO1xuICBncmlkLXJvdy1zdGFydDogMjtcbn1cblxuLmc1IHtcbiAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDM7XG4gIGdyaWQtcm93LXN0YXJ0OiAyO1xufVxuXG4uZzYge1xuICBncmlkLWNvbHVtbi1zdGFydDogMTtcbiAgZ3JpZC1yb3ctc3RhcnQ6IDM7XG59XG5cbi5nNyB7XG4gIGdyaWQtY29sdW1uLXN0YXJ0OiAyO1xuICBncmlkLWNvbHVtbi1lbmQ6IDQ7XG4gIGdyaWQtcm93LXN0YXJ0OiAzO1xufVxuIl19 */"]
      });
      /***/
    },

    /***/
    4740:
    /*!***************************************************!*\
      !*** ./src/app/bonus-point/bonus-point.module.ts ***!
      \***************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "BonusPointModule": function BonusPointModule() {
          return (
            /* binding */
            _BonusPointModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      8583);
      /* harmony import */


      var _bonus_point_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./bonus-point.component */
      4601);
      /* harmony import */


      var _bs_js1_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./bs-js1.service */
      2624);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      7716);

      var _BonusPointModule = /*#__PURE__*/_createClass(function _BonusPointModule() {
        _classCallCheck(this, _BonusPointModule);
      });

      _BonusPointModule.ɵfac = function BonusPointModule_Factory(t) {
        return new (t || _BonusPointModule)();
      };

      _BonusPointModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
        type: _BonusPointModule
      });
      _BonusPointModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
        providers: [_bs_js1_service__WEBPACK_IMPORTED_MODULE_1__.BsJs1Service],
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](_BonusPointModule, {
          declarations: [_bonus_point_component__WEBPACK_IMPORTED_MODULE_0__.BonusPointComponent],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule],
          exports: [_bonus_point_component__WEBPACK_IMPORTED_MODULE_0__.BonusPointComponent]
        });
      })();
      /***/

    },

    /***/
    2624:
    /*!***********************************************!*\
      !*** ./src/app/bonus-point/bs-js1.service.ts ***!
      \***********************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "BsJs1Service": function BsJs1Service() {
          return (
            /* binding */
            _BsJs1Service
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      7716);

      var _BsJs1Service = /*#__PURE__*/function () {
        function _BsJs1Service() {
          _classCallCheck(this, _BsJs1Service);
        }

        _createClass(_BsJs1Service, [{
          key: "extend",
          value: function extend(arg) {
            arg.fn(arg.arraySource[arg.index]);
            return arg.arraySource;
          }
        }, {
          key: "getSample",
          value: function getSample() {
            var arraySource = Array.from(Array(9), function (_, index) {
              return {
                value: undefined
              };
            });
            this.extend({
              arraySource: arraySource,
              index: 0,
              fn: function fn(_source) {
                _source.parent = arraySource[2];
                _source.value = 'child_1_1';
              }
            });
            this.extend({
              arraySource: arraySource,
              index: 1,
              fn: function fn(_source) {
                _source.parent = arraySource[2];
                _source.value = 'child_1_2';
              }
            });
            this.extend({
              arraySource: arraySource,
              index: 2,
              fn: function fn(_source) {
                _source.child = [arraySource[0], arraySource[1]];
                _source.value = 'parent_1';
              }
            });
            this.extend({
              arraySource: arraySource,
              index: 3,
              fn: function fn(_source) {
                _source.parent = arraySource[4];
                _source.value = 'child_2_1';
              }
            });
            this.extend({
              arraySource: arraySource,
              index: 4,
              fn: function fn(_source) {
                _source.child = [arraySource[3]];
                _source.value = 'parent_2';
              }
            });
            this.extend({
              arraySource: arraySource,
              index: 5,
              fn: function fn(_source) {
                _source.parent = arraySource[8];
                _source.value = 'child_3_1';
              }
            });
            this.extend({
              arraySource: arraySource,
              index: 6,
              fn: function fn(_source) {
                _source.parent = arraySource[8];
                _source.value = 'child_3_2';
              }
            });
            this.extend({
              arraySource: arraySource,
              index: 7,
              fn: function fn(_source) {
                _source.parent = arraySource[8];
                _source.value = 'child_3_3';
              }
            });
            this.extend({
              arraySource: arraySource,
              index: 8,
              fn: function fn(_source) {
                _source.child = [arraySource[5], arraySource[6], arraySource[7]];
                _source.value = 'parent_3';
              }
            });
            var source = [arraySource[0], arraySource[1], arraySource[3], arraySource[5], arraySource[6], arraySource[7]];
            var sample = {
              forEachChilds: function forEachChilds(fn) {
                source.forEach(function (item) {
                  fn(item);
                });
              },
              source: source
            };
            return sample;
          }
        }]);

        return _BsJs1Service;
      }();

      _BsJs1Service.ɵfac = function BsJs1Service_Factory(t) {
        return new (t || _BsJs1Service)();
      };

      _BsJs1Service.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: _BsJs1Service,
        factory: _BsJs1Service.ɵfac
      });
      /***/
    },

    /***/
    4358:
    /*!********************************************************************!*\
      !*** ./src/app/dialog/confirm-template/confirm-template.dialog.ts ***!
      \********************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ConfirmTemplateDialog": function ConfirmTemplateDialog() {
          return (
            /* binding */
            _ConfirmTemplateDialog
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      7716);
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/material/dialog */
      2238);
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/button */
      1095);

      var _ConfirmTemplateDialog = /*#__PURE__*/_createClass(function _ConfirmTemplateDialog(dialog) {
        _classCallCheck(this, _ConfirmTemplateDialog);

        this.dialog = dialog;
      });

      _ConfirmTemplateDialog.ɵfac = function ConfirmTemplateDialog_Factory(t) {
        return new (t || _ConfirmTemplateDialog)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialog));
      };

      _ConfirmTemplateDialog.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: _ConfirmTemplateDialog,
        selectors: [["app-confirm-template"]],
        decls: 9,
        vars: 1,
        consts: [[1, "main-section"], [1, "mat-typography"], ["align", "end"], ["mat-button", "", "mat-dialog-close", ""], ["mat-button", "", "cdkFocusInitial", "", 3, "mat-dialog-close"]],
        template: function ConfirmTemplateDialog_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-dialog-content", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Do you really want to clear ?");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-dialog-actions", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Cancel");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Confirm");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mat-dialog-close", true);
          }
        },
        directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogContent, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogActions, _angular_material_button__WEBPACK_IMPORTED_MODULE_2__.MatButton, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogClose],
        styles: [".main-section[_ngcontent-%COMP%] {\n  width: 500px;\n  border-radius: 9px;\n}\n\n.mat-dialog-actions[_ngcontent-%COMP%] {\n  border-top: 1px solid black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbmZpcm0tdGVtcGxhdGUuZGlhbG9nLmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQVk7RUFDWixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSwyQkFBMkI7QUFDN0IiLCJmaWxlIjoiY29uZmlybS10ZW1wbGF0ZS5kaWFsb2cuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1haW4tc2VjdGlvbiB7XG4gIHdpZHRoOiA1MDBweDtcbiAgYm9yZGVyLXJhZGl1czogOXB4O1xufVxuXG4ubWF0LWRpYWxvZy1hY3Rpb25zIHtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIGJsYWNrO1xufVxuIl19 */"]
      });
      /***/
    },

    /***/
    4598:
    /*!******************************************************!*\
      !*** ./src/app/hero-detail/hero-detail.component.ts ***!
      \******************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "HeroDetailComponent": function HeroDetailComponent() {
          return (
            /* binding */
            _HeroDetailComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      7716);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      9895);
      /* harmony import */


      var _services_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../services/index */
      1866);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      8583);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      3679);

      function HeroDetailComponent_div_0_Template(rf, ctx) {
        if (rf & 1) {
          var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "uppercase");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "id: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "name: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "input", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function HeroDetailComponent_div_0_Template_input_ngModelChange_11_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r2);

            var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r1.hero.name = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "button", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HeroDetailComponent_div_0_Template_button_click_12_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r2);

            var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r3.goBack();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "go back");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "button", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HeroDetailComponent_div_0_Template_button_click_14_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r2);

            var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r4.save();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "save");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 3, ctx_r0.hero.name), " Details");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.hero.id);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r0.hero.name);
        }
      }

      var _HeroDetailComponent = /*#__PURE__*/function () {
        function _HeroDetailComponent(route, heroService, location) {
          _classCallCheck(this, _HeroDetailComponent);

          this.route = route;
          this.heroService = heroService;
          this.location = location;
        }

        _createClass(_HeroDetailComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.getHero();
          }
        }, {
          key: "getHero",
          value: function getHero() {
            var _this3 = this;

            var id = +this.route.snapshot.paramMap.get('id');
            this.heroService.getHero(id).subscribe(function (hero) {
              return _this3.hero = hero;
            });
          }
        }, {
          key: "goBack",
          value: function goBack() {
            this.location.back();
          }
        }, {
          key: "save",
          value: function save() {
            var _this4 = this;

            this.heroService.updateHero(this.hero).subscribe(function () {
              return _this4.goBack();
            });
          }
        }]);

        return _HeroDetailComponent;
      }();

      _HeroDetailComponent.ɵfac = function HeroDetailComponent_Factory(t) {
        return new (t || _HeroDetailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_index__WEBPACK_IMPORTED_MODULE_0__.HeroService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_3__.Location));
      };

      _HeroDetailComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: _HeroDetailComponent,
        selectors: [["app-hero-detail"]],
        inputs: {
          hero: "hero"
        },
        decls: 1,
        vars: 1,
        consts: [[4, "ngIf"], ["placeholder", "name", 3, "ngModel", "ngModelChange"], [3, "click"]],
        template: function HeroDetailComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, HeroDetailComponent_div_0_Template, 16, 5, "div", 0);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.hero);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgModel],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.UpperCasePipe],
        styles: ["label[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 3em;\n  margin: .5em 0;\n  color: #607D8B;\n  font-weight: bold;\n}\ninput[_ngcontent-%COMP%] {\n  height: 2em;\n  font-size: 1em;\n  padding-left: .4em;\n}\nbutton[_ngcontent-%COMP%] {\n  margin-top: 20px;\n  font-family: Arial;\n  background-color: #eee;\n  border: none;\n  padding: 5px 10px;\n  border-radius: 4px;\n  cursor: pointer; cursor: hand;\n}\nbutton[_ngcontent-%COMP%]:hover {\n  background-color: #cfd8dc;\n}\nbutton[_ngcontent-%COMP%]:disabled {\n  background-color: #eee;\n  color: #ccc;\n  cursor: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlcm8tZGV0YWlsLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsNkNBQTZDO0FBQzdDO0VBQ0UscUJBQXFCO0VBQ3JCLFVBQVU7RUFDVixjQUFjO0VBQ2QsY0FBYztFQUNkLGlCQUFpQjtBQUNuQjtBQUNBO0VBQ0UsV0FBVztFQUNYLGNBQWM7RUFDZCxrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsc0JBQXNCO0VBQ3RCLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLGVBQWUsRUFBRSxZQUFZO0FBQy9CO0FBQ0E7RUFDRSx5QkFBeUI7QUFDM0I7QUFDQTtFQUNFLHNCQUFzQjtFQUN0QixXQUFXO0VBQ1gsWUFBWTtBQUNkIiwiZmlsZSI6Imhlcm8tZGV0YWlsLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBIZXJvRGV0YWlsQ29tcG9uZW50J3MgcHJpdmF0ZSBDU1Mgc3R5bGVzICovXG5sYWJlbCB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IDNlbTtcbiAgbWFyZ2luOiAuNWVtIDA7XG4gIGNvbG9yOiAjNjA3RDhCO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbmlucHV0IHtcbiAgaGVpZ2h0OiAyZW07XG4gIGZvbnQtc2l6ZTogMWVtO1xuICBwYWRkaW5nLWxlZnQ6IC40ZW07XG59XG5idXR0b24ge1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICBmb250LWZhbWlseTogQXJpYWw7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlZWU7XG4gIGJvcmRlcjogbm9uZTtcbiAgcGFkZGluZzogNXB4IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgY3Vyc29yOiBwb2ludGVyOyBjdXJzb3I6IGhhbmQ7XG59XG5idXR0b246aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2ZkOGRjO1xufVxuYnV0dG9uOmRpc2FibGVkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcbiAgY29sb3I6ICNjY2M7XG4gIGN1cnNvcjogYXV0bztcbn1cbiJdfQ== */"]
      });
      /***/
    },

    /***/
    5298:
    /*!************************************************!*\
      !*** ./src/app/messages/messages.component.ts ***!
      \************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "MessagesComponent": function MessagesComponent() {
          return (
            /* binding */
            _MessagesComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _dialog_confirm_template_confirm_template_dialog__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./../dialog/confirm-template/confirm-template.dialog */
      4358);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      7716);
      /* harmony import */


      var _services_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../services/index */
      1866);
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/dialog */
      2238);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      8583);

      function MessagesComponent_div_0_div_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var message_r2 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", message_r2, " ");
        }
      }

      function MessagesComponent_div_0_Template(rf, ctx) {
        if (rf & 1) {
          var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Messages");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "button", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function MessagesComponent_div_0_Template_button_click_3_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r4);

            var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

            return ctx_r3.openDialog();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "clear");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, MessagesComponent_div_0_div_5_Template, 2, 1, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r0.messageService.messages);
        }
      }

      var _MessagesComponent = /*#__PURE__*/function () {
        function _MessagesComponent(messageService, dialog) {
          _classCallCheck(this, _MessagesComponent);

          this.messageService = messageService;
          this.dialog = dialog;
        }

        _createClass(_MessagesComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "openDialog",
          value: function openDialog() {
            var _this5 = this;

            var dialogRef = this.dialog.open(_dialog_confirm_template_confirm_template_dialog__WEBPACK_IMPORTED_MODULE_0__.ConfirmTemplateDialog);
            dialogRef.afterClosed().subscribe(function (result) {
              result ? _this5.messageService.clear() : undefined;
            });
          }
        }]);

        return _MessagesComponent;
      }();

      _MessagesComponent.ɵfac = function MessagesComponent_Factory(t) {
        return new (t || _MessagesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_index__WEBPACK_IMPORTED_MODULE_1__.MessageService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MatDialog));
      };

      _MessagesComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
        type: _MessagesComponent,
        selectors: [["app-messages"]],
        decls: 1,
        vars: 1,
        consts: [[4, "ngIf"], [1, "clear", 3, "click"], [4, "ngFor", "ngForOf"]],
        template: function MessagesComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, MessagesComponent_div_0_Template, 6, 1, "div", 0);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.messageService.messages.length);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf],
        styles: ["h2[_ngcontent-%COMP%] {\n  color: red;\n  font-family: Arial, Helvetica, sans-serif;\n  font-weight: lighter;\n}\nbody[_ngcontent-%COMP%] {\n  margin: 2em;\n}\nbody[_ngcontent-%COMP%], input[text][_ngcontent-%COMP%], button[_ngcontent-%COMP%] {\n  color: crimson;\n  font-family: Cambria, Georgia;\n}\nbutton.clear[_ngcontent-%COMP%] {\n  font-family: Arial;\n  background-color: #eee;\n  border: none;\n  padding: 5px 10px;\n  border-radius: 4px;\n  cursor: pointer;\n  cursor: hand;\n}\nbutton[_ngcontent-%COMP%]:hover {\n  background-color: #cfd8dc;\n}\nbutton[_ngcontent-%COMP%]:disabled {\n  background-color: #eee;\n  color: #aaa;\n  cursor: auto;\n}\nbutton.clear[_ngcontent-%COMP%] {\n  color: #888;\n  margin-bottom: 12px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lc3NhZ2VzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsMkNBQTJDO0FBQzNDO0VBQ0UsVUFBVTtFQUNWLHlDQUF5QztFQUN6QyxvQkFBb0I7QUFDdEI7QUFDQTtFQUNFLFdBQVc7QUFDYjtBQUNBOzs7RUFHRSxjQUFjO0VBQ2QsNkJBQTZCO0FBQy9CO0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsc0JBQXNCO0VBQ3RCLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixZQUFZO0FBQ2Q7QUFDQTtFQUNFLHlCQUF5QjtBQUMzQjtBQUNBO0VBQ0Usc0JBQXNCO0VBQ3RCLFdBQVc7RUFDWCxZQUFZO0FBQ2Q7QUFDQTtFQUNFLFdBQVc7RUFDWCxtQkFBbUI7QUFDckIiLCJmaWxlIjoibWVzc2FnZXMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIE1lc3NhZ2VzQ29tcG9uZW50J3MgcHJpdmF0ZSBDU1Mgc3R5bGVzICovXG5oMiB7XG4gIGNvbG9yOiByZWQ7XG4gIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogbGlnaHRlcjtcbn1cbmJvZHkge1xuICBtYXJnaW46IDJlbTtcbn1cbmJvZHksXG5pbnB1dFt0ZXh0XSxcbmJ1dHRvbiB7XG4gIGNvbG9yOiBjcmltc29uO1xuICBmb250LWZhbWlseTogQ2FtYnJpYSwgR2VvcmdpYTtcbn1cblxuYnV0dG9uLmNsZWFyIHtcbiAgZm9udC1mYW1pbHk6IEFyaWFsO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xuICBib3JkZXI6IG5vbmU7XG4gIHBhZGRpbmc6IDVweCAxMHB4O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgY3Vyc29yOiBoYW5kO1xufVxuYnV0dG9uOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2NmZDhkYztcbn1cbmJ1dHRvbjpkaXNhYmxlZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlZWU7XG4gIGNvbG9yOiAjYWFhO1xuICBjdXJzb3I6IGF1dG87XG59XG5idXR0b24uY2xlYXIge1xuICBjb2xvcjogIzg4ODtcbiAgbWFyZ2luLWJvdHRvbTogMTJweDtcbn1cbiJdfQ== */"]
      });
      /***/
    },

    /***/
    1267:
    /*!******************************************!*\
      !*** ./src/app/models/dashboard-link.ts ***!
      \******************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "DashboardLink": function DashboardLink() {
          return (
            /* binding */
            _DashboardLink
          );
        }
        /* harmony export */

      });

      var _DashboardLink = /*#__PURE__*/_createClass(function _DashboardLink() {
        _classCallCheck(this, _DashboardLink);
      });
      /***/

    },

    /***/
    737:
    /*!****************************************************!*\
      !*** ./src/app/services/dashboard-link.service.ts ***!
      \****************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "DashboardLinkService": function DashboardLinkService() {
          return (
            /* binding */
            _DashboardLinkService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common/http */
      1841);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs/operators */
      8307);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs/operators */
      5304);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs */
      5917);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/core */
      7716);
      /* harmony import */


      var _message_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./message.service */
      2684);

      var httpOptions = {
        headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({
          'Content-Type': 'appliaction/json'
        })
      };

      var _DashboardLinkService = /*#__PURE__*/function () {
        function _DashboardLinkService(http, messageService) {
          _classCallCheck(this, _DashboardLinkService);

          this.http = http;
          this.messageService = messageService;
          this.apiUrl = 'api/dashboard';
        }

        _createClass(_DashboardLinkService, [{
          key: "getDashboard",
          value: function getDashboard() {
            return this.http.get(this.apiUrl).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.tap)(function (dashboard_link) {
              return console.log("");
            }), (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(this.handleError('getDashboard', {})));
          }
        }, {
          key: "handleError",
          value: function handleError() {
            var _this6 = this;

            var operation = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'operation';
            var result = arguments.length > 1 ? arguments[1] : undefined;
            return function (error) {
              // TODO: send the error to remote logging infrastructure
              console.error(error); // log to console instead
              // TODO: better job of transforming error for user consumption

              _this6.log("".concat(operation, " failed: ").concat(error.message)); // Let the app keep running by returning an empty result.


              return (0, rxjs__WEBPACK_IMPORTED_MODULE_4__.of)(result);
            };
          }
        }, {
          key: "log",
          value: function log(message) {
            this.messageService.add('HeroService: ' + message);
          }
        }]);

        return _DashboardLinkService;
      }();

      _DashboardLinkService.ɵfac = function DashboardLinkService_Factory(t) {
        return new (t || _DashboardLinkService)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_message_service__WEBPACK_IMPORTED_MODULE_0__.MessageService));
      };

      _DashboardLinkService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({
        token: _DashboardLinkService,
        factory: _DashboardLinkService.ɵfac
      });
      /***/
    },

    /***/
    9405:
    /*!******************************************!*\
      !*** ./src/app/services/hero.service.ts ***!
      \******************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "HeroService": function HeroService() {
          return (
            /* binding */
            _HeroService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common/http */
      1841);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs/operators */
      8307);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs/operators */
      5304);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! rxjs/operators */
      8002);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs */
      6215);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! rxjs */
      5917);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/core */
      7716);
      /* harmony import */


      var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./index */
      1866);

      var httpOptions = {
        headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({
          'Content-Type': 'application/json'
        })
      };

      var _HeroService = /*#__PURE__*/function () {
        function _HeroService(http, messageService) {
          _classCallCheck(this, _HeroService);

          this.http = http;
          this.messageService = messageService;
          this.heroesUrl = 'api/heroes'; // URL to web api

          this.heroes$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject([]);
        }
        /** GET heroes from the server */


        _createClass(_HeroService, [{
          key: "getHeroes",
          value: function getHeroes() {
            var _this7 = this;

            return this.http.get(this.heroesUrl).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.tap)(function (heroes) {
              return _this7.heroes$.next(heroes);
            }), (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.catchError)(this.handleError('getHeroes', [])));
          }
          /** GET hero by id. Return `undefined` when id not found */

        }, {
          key: "getHeroNo404",
          value: function getHeroNo404(id) {
            var _this8 = this;

            var url = "".concat(this.heroesUrl, "/?id=").concat(id);
            return this.http.get(url).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(function (heroes) {
              return heroes[0];
            }), // returns a {0|1} element array
            (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.tap)(function (h) {
              var outcome = h ? "fetched" : "did not find";

              _this8.log("".concat(outcome, " hero id=").concat(id));
            }), (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.catchError)(this.handleError("getHero id=".concat(id))));
          }
          /** GET hero by id. Will 404 if id not found */

        }, {
          key: "getHero",
          value: function getHero(id) {
            var _this9 = this;

            var url = "".concat(this.heroesUrl, "/").concat(id);
            return this.http.get(url).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.tap)(function (_) {
              return _this9.log("fetched hero id=".concat(id));
            }), (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.catchError)(this.handleError("getHero id=".concat(id))));
          }
          /* GET heroes whose name contains search term */

        }, {
          key: "searchHeroes",
          value: function searchHeroes(term) {
            var _this10 = this;

            if (!term.trim()) {
              // if not search term, return empty hero array.
              return (0, rxjs__WEBPACK_IMPORTED_MODULE_6__.of)([]);
            }

            return this.http.get("api/heroes/?name=".concat(term)).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.tap)(function (_) {
              return _this10.log("found heroes matching \"".concat(term, "\""));
            }), (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.catchError)(this.handleError('searchHeroes', [])));
          } //////// Save methods //////////

          /** POST: add a new hero to the server */

        }, {
          key: "addHero",
          value: function addHero(hero) {
            var _this11 = this;

            return this.http.post(this.heroesUrl, hero, httpOptions).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.tap)(function (hero) {
              return _this11.log("added hero w/ id=".concat(hero.id));
            }), (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.catchError)(this.handleError('addHero')));
          }
          /** DELETE: delete the hero from the server */

        }, {
          key: "deleteHero",
          value: function deleteHero(hero) {
            var _this12 = this;

            var id = typeof hero === 'number' ? hero : hero.id;
            var url = "".concat(this.heroesUrl, "/").concat(id);
            return this.http["delete"](url, httpOptions).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.tap)(function (_) {
              return _this12.log("deleted hero id=".concat(id));
            }), (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.catchError)(this.handleError('deleteHero')));
          }
          /** PUT: update the hero on the server */

        }, {
          key: "updateHero",
          value: function updateHero(hero) {
            var _this13 = this;

            return this.http.put(this.heroesUrl, hero, httpOptions).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.tap)(function (_) {
              return _this13.log("updated hero id=".concat(hero.id));
            }), (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.catchError)(this.handleError('updateHero')));
          }
          /**
           * Handle Http operation that failed.
           * Let the app continue.
           * @param operation - name of the operation that failed
           * @param result - optional value to return as the observable result
           */

        }, {
          key: "handleError",
          value: function handleError() {
            var _this14 = this;

            var operation = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'operation';
            var result = arguments.length > 1 ? arguments[1] : undefined;
            return function (error) {
              // TODO: send the error to remote logging infrastructure
              console.error(error); // log to console instead
              // TODO: better job of transforming error for user consumption

              _this14.log("".concat(operation, " failed: ").concat(error.message)); // Let the app keep running by returning an empty result.


              return (0, rxjs__WEBPACK_IMPORTED_MODULE_6__.of)(result);
            };
          }
          /** Log a HeroService message with the MessageService */

        }, {
          key: "log",
          value: function log(message) {
            this.messageService.add('HeroService: ' + message);
          }
        }]);

        return _HeroService;
      }();

      _HeroService.ɵfac = function HeroService_Factory(t) {
        return new (t || _HeroService)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_index__WEBPACK_IMPORTED_MODULE_0__.MessageService));
      };

      _HeroService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjectable"]({
        token: _HeroService,
        factory: _HeroService.ɵfac
      });
      /***/
    },

    /***/
    505:
    /*!****************************************************!*\
      !*** ./src/app/services/in-memory-data.service.ts ***!
      \****************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "InMemoryDataService": function InMemoryDataService() {
          return (
            /* binding */
            _InMemoryDataService
          );
        }
        /* harmony export */

      });

      var _InMemoryDataService = /*#__PURE__*/function () {
        function _InMemoryDataService() {
          _classCallCheck(this, _InMemoryDataService);
        }

        _createClass(_InMemoryDataService, [{
          key: "createDb",
          value: function createDb() {
            var heroes = [{
              id: 11,
              name: 'Mr. Nice'
            }, {
              id: 12,
              name: 'Narco'
            }, {
              id: 13,
              name: 'Bombasto'
            }, {
              id: 14,
              name: 'Celeritas'
            }, {
              id: 15,
              name: 'Magneta'
            }, {
              id: 16,
              name: 'RubberMan'
            }, {
              id: 17,
              name: 'Dynama'
            }, {
              id: 18,
              name: 'Dr IQ'
            }, {
              id: 19,
              name: 'Magma'
            }, {
              id: 20,
              name: 'Tornado'
            }];
            var dashboard = {
              heroes: "考題-Heroes",
              dashboard: "考題-Dashboard"
            };
            return {
              heroes: heroes,
              dashboard: dashboard
            };
          }
        }]);

        return _InMemoryDataService;
      }();
      /***/

    },

    /***/
    1866:
    /*!***********************************!*\
      !*** ./src/app/services/index.ts ***!
      \***********************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "DashboardLinkService": function DashboardLinkService() {
          return (
            /* reexport safe */
            _dashboard_link_service__WEBPACK_IMPORTED_MODULE_0__.DashboardLinkService
          );
        },

        /* harmony export */
        "HeroService": function HeroService() {
          return (
            /* reexport safe */
            _hero_service__WEBPACK_IMPORTED_MODULE_1__.HeroService
          );
        },

        /* harmony export */
        "InMemoryDataService": function InMemoryDataService() {
          return (
            /* reexport safe */
            _in_memory_data_service__WEBPACK_IMPORTED_MODULE_2__.InMemoryDataService
          );
        },

        /* harmony export */
        "MessageService": function MessageService() {
          return (
            /* reexport safe */
            _message_service__WEBPACK_IMPORTED_MODULE_3__.MessageService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _dashboard_link_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./dashboard-link.service */
      737);
      /* harmony import */


      var _hero_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./hero.service */
      9405);
      /* harmony import */


      var _in_memory_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./in-memory-data.service */
      505);
      /* harmony import */


      var _message_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./message.service */
      2684);
      /***/

    },

    /***/
    2684:
    /*!*********************************************!*\
      !*** ./src/app/services/message.service.ts ***!
      \*********************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "MessageService": function MessageService() {
          return (
            /* binding */
            _MessageService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      7716);

      var _MessageService = /*#__PURE__*/function () {
        function _MessageService() {
          _classCallCheck(this, _MessageService);

          this.messages = [];
        }

        _createClass(_MessageService, [{
          key: "add",
          value: function add(message) {
            this.messages.push(message);
          }
        }, {
          key: "clear",
          value: function clear() {
            this.messages = [];
          }
        }]);

        return _MessageService;
      }();

      _MessageService.ɵfac = function MessageService_Factory(t) {
        return new (t || _MessageService)();
      };

      _MessageService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: _MessageService,
        factory: _MessageService.ɵfac
      });
      /***/
    },

    /***/
    6094:
    /*!******************************************!*\
      !*** ./src/app/share/material.module.ts ***!
      \******************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "MaterialModule": function MaterialModule() {
          return (
            /* binding */
            _MaterialModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/material/button */
      1095);
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/dialog */
      2238);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      7716);

      var _MaterialModule = /*#__PURE__*/_createClass(function _MaterialModule() {
        _classCallCheck(this, _MaterialModule);
      });

      _MaterialModule.ɵfac = function MaterialModule_Factory(t) {
        return new (t || _MaterialModule)();
      };

      _MaterialModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: _MaterialModule
      });
      _MaterialModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        providers: [],
        imports: [[_angular_material_button__WEBPACK_IMPORTED_MODULE_1__.MatButtonModule, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__.MatDialogModule], _angular_material_button__WEBPACK_IMPORTED_MODULE_1__.MatButtonModule, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__.MatDialogModule]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](_MaterialModule, {
          imports: [_angular_material_button__WEBPACK_IMPORTED_MODULE_1__.MatButtonModule, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__.MatDialogModule],
          exports: [_angular_material_button__WEBPACK_IMPORTED_MODULE_1__.MatButtonModule, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__.MatDialogModule]
        });
      })();
      /***/

    },

    /***/
    2340:
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "environment": function environment() {
          return (
            /* binding */
            _environment
          );
        }
        /* harmony export */

      }); // This file can be replaced during build by using the `fileReplacements` array.
      // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
      // The list of file replacements can be found in `angular.json`.


      var _environment = {
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

      /***/
    },

    /***/
    4431:
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/platform-browser */
      9075);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      7716);
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./app/app.module */
      6747);
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./environments/environment */
      2340);

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
        (0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
      }

      _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)["catch"](function (err) {
        return console.error(err);
      });
      /***/

    }
  },
  /******/
  function (__webpack_require__) {
    // webpackRuntimeModules

    /******/
    "use strict";
    /******/

    /******/

    var __webpack_exec__ = function __webpack_exec__(moduleId) {
      return __webpack_require__(__webpack_require__.s = moduleId);
    };
    /******/


    __webpack_require__.O(0, ["vendor"], function () {
      return __webpack_exec__(4431);
    });
    /******/


    var __webpack_exports__ = __webpack_require__.O();
    /******/

  }]);
})();
//# sourceMappingURL=main-es5.js.map