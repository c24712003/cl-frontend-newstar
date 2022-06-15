(function () {
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


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      9895);
      /* harmony import */


      var _bonus_point_bonus_point_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./bonus-point/bonus-point.component */
      4601);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      7716);

      var routes = [{
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
      }, {
        path: 'bonusPoint',
        component: _bonus_point_bonus_point_component__WEBPACK_IMPORTED_MODULE_0__.BonusPointComponent
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
            return m.DashboardModule;
          });
        }
      }];

      var _AppRoutingModule = /*#__PURE__*/_createClass(function _AppRoutingModule() {
        _classCallCheck(this, _AppRoutingModule);
      });

      _AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) {
        return new (t || _AppRoutingModule)();
      };

      _AppRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
        type: _AppRoutingModule
      });
      _AppRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](_AppRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
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


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      7716);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      9895);
      /* harmony import */


      var _messages_messages_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./messages/messages.component */
      5298);

      var _AppComponent = /*#__PURE__*/_createClass(function _AppComponent() {
        _classCallCheck(this, _AppComponent);

        this.title = 'Tour of Heroes';
      });

      _AppComponent.ɵfac = function AppComponent_Factory(t) {
        return new (t || _AppComponent)();
      };

      _AppComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: _AppComponent,
        selectors: [["app-root"]],
        decls: 11,
        vars: 1,
        consts: [["routerLink", "/cl-dashboard"], ["routerLink", "/cl-heroes"], ["routerLink", "/bonusPoint"]],
        template: function AppComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "nav");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "a", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Dashboard");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "a", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Heroes");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "a", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "bonusPoint");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "router-outlet");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "app-messages");
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.title);
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLinkWithHref, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterOutlet, _messages_messages_component__WEBPACK_IMPORTED_MODULE_0__.MessagesComponent],
        styles: ["h1[_ngcontent-%COMP%] {\n  font-size: 1.2em;\n  color: #999;\n  margin-bottom: 0;\n}\nh2[_ngcontent-%COMP%] {\n  font-size: 2em;\n  margin-top: 0;\n  padding-top: 0;\n}\nnav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  padding: 5px 10px;\n  text-decoration: none;\n  margin-top: 10px;\n  display: inline-block;\n  background-color: #eee;\n  border-radius: 4px;\n}\nnav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:visited, a[_ngcontent-%COMP%]:link {\n  color: #607D8B;\n}\nnav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #039be5;\n  background-color: #CFD8DC;\n}\nnav[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%] {\n  color: #039be5;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHNDQUFzQztBQUN0QztFQUNFLGdCQUFnQjtFQUNoQixXQUFXO0VBQ1gsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxjQUFjO0VBQ2QsYUFBYTtFQUNiLGNBQWM7QUFDaEI7QUFDQTtFQUNFLGlCQUFpQjtFQUNqQixxQkFBcUI7RUFDckIsZ0JBQWdCO0VBQ2hCLHFCQUFxQjtFQUNyQixzQkFBc0I7RUFDdEIsa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxjQUFjO0FBQ2hCO0FBQ0E7RUFDRSxjQUFjO0VBQ2QseUJBQXlCO0FBQzNCO0FBQ0E7RUFDRSxjQUFjO0FBQ2hCIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogQXBwQ29tcG9uZW50J3MgcHJpdmF0ZSBDU1Mgc3R5bGVzICovXG5oMSB7XG4gIGZvbnQtc2l6ZTogMS4yZW07XG4gIGNvbG9yOiAjOTk5O1xuICBtYXJnaW4tYm90dG9tOiAwO1xufVxuaDIge1xuICBmb250LXNpemU6IDJlbTtcbiAgbWFyZ2luLXRvcDogMDtcbiAgcGFkZGluZy10b3A6IDA7XG59XG5uYXYgYSB7XG4gIHBhZGRpbmc6IDVweCAxMHB4O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xufVxubmF2IGE6dmlzaXRlZCwgYTpsaW5rIHtcbiAgY29sb3I6ICM2MDdEOEI7XG59XG5uYXYgYTpob3ZlciB7XG4gIGNvbG9yOiAjMDM5YmU1O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjQ0ZEOERDO1xufVxubmF2IGEuYWN0aXZlIHtcbiAgY29sb3I6ICMwMzliZTU7XG59XG4iXX0= */"]
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


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/platform-browser */
      9075);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/common/http */
      1841);
      /* harmony import */


      var angular_in_memory_web_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! angular-in-memory-web-api */
      5233);
      /* harmony import */


      var _in_memory_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./in-memory-data.service */
      2003);
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


      var _hero_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./hero.service */
      2342);
      /* harmony import */


      var _message_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./message.service */
      4206);
      /* harmony import */


      var _messages_messages_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./messages/messages.component */
      5298);
      /* harmony import */


      var _bonus_point_bonus_point_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./bonus-point/bonus-point.module */
      4740);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/core */
      7716);

      var _AppModule = /*#__PURE__*/_createClass(function _AppModule() {
        _classCallCheck(this, _AppModule);
      });

      _AppModule.ɵfac = function AppModule_Factory(t) {
        return new (t || _AppModule)();
      };

      _AppModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineNgModule"]({
        type: _AppModule,
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__.AppComponent]
      });
      _AppModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjector"]({
        providers: [_hero_service__WEBPACK_IMPORTED_MODULE_5__.HeroService, _message_service__WEBPACK_IMPORTED_MODULE_6__.MessageService],
        imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__.BrowserModule, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormsModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_2__.AppRoutingModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_12__.HttpClientModule, // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
        // and returns simulated server responses.
        // Remove it when a real server is ready to receive requests.
        angular_in_memory_web_api__WEBPACK_IMPORTED_MODULE_0__.HttpClientInMemoryWebApiModule.forRoot(_in_memory_data_service__WEBPACK_IMPORTED_MODULE_1__.InMemoryDataService, {
          dataEncapsulation: false
        }), _bonus_point_bonus_point_module__WEBPACK_IMPORTED_MODULE_8__.BonusPointModule]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsetNgModuleScope"](_AppModule, {
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__.AppComponent, _hero_detail_hero_detail_component__WEBPACK_IMPORTED_MODULE_4__.HeroDetailComponent, _messages_messages_component__WEBPACK_IMPORTED_MODULE_7__.MessagesComponent],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__.BrowserModule, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormsModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_2__.AppRoutingModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_12__.HttpClientModule, angular_in_memory_web_api__WEBPACK_IMPORTED_MODULE_0__.HttpClientInMemoryWebApiModule, _bonus_point_bonus_point_module__WEBPACK_IMPORTED_MODULE_8__.BonusPointModule]
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


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
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
          value: function ngOnInit() {}
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
          key: "answerCookie1",
          value: function answerCookie1() {//ToDo..
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
          }
        }, {
          key: "answerJs1",
          value: function answerJs1() {
            var result;
            this.bsJs1Service.getSample().forEachChilds(function (child) {
              // ToDo : 實作你的解決方案...
              result = 'ToDo...';
            }); // 預期alert的結果 => js 1 answer : child_1_1 , child_1_2 , parent_1 , child_2_1 ,  parent_2 ,child_3_1 , child_3_2 , child_3_3 , parent_3

            alert("js 1 answer : ".concat(result));
          }
        }]);

        return _BonusPointComponent;
      }();

      _BonusPointComponent.ɵfac = function BonusPointComponent_Factory(t) {
        return new (t || _BonusPointComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_bs_js1_service__WEBPACK_IMPORTED_MODULE_0__.BsJs1Service));
      };

      _BonusPointComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
        type: _BonusPointComponent,
        selectors: [["app-bonus-point"]],
        decls: 101,
        vars: 0,
        consts: [[1, "page-title"], [1, "title"], [1, "keyword"], [1, "preview-img"], ["src", "assets/imgs/flex-9-grid-cell-sample.png", "alt", ""], ["src", "assets/imgs/grid-colum-row-span-sample.png", "alt", ""], [1, "keyword", 3, "click"], ["src", "assets/imgs/rxjs1.png", "alt", ""]],
        template: function BonusPointComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "p", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "\u51F1\u840A\u524D\u7AEF-\u52A0\u5206\u984C(\u53EF\u5728\u4E0B\u65B9\u6311\u9078\uFF0C\u60F3\u505A\u7684\u984C\u76EE)");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "section");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "p", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "\u984C\u76EE : \u8ACB\u7528Css FlexBox\u5EFA\u7ACB\u793A\u610F\u5716\u76849\u5BAE\u683C");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "p", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "\u8003\u984C\u9650\u5236:");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "ul", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, "\u6BCF\u4E00\u683C\u7684Width\u3001Height\u9700\u70BA200px");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11, "\u6240\u4EE59\u5BAE\u683C\u7684\u5927\u5C0F\u6703\u662F: 600 * 600");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14, "\u793A\u610F\u5716:");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](15, "img", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "p", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](17, "\u4F60\u7684\u5BE6\u4F5C\u7D50\u679C:");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](18, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](19, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](20, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](21, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](22, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](23, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "section");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "p", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](26, "\u984C\u76EE : \u8ACB\u7528Css Grid\u5EFA\u7ACB\u793A\u610F\u5716\u7684\u5167\u5BB9");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](28, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](29, "\u793A\u610F\u5716:");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](30, "img", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](31, "p", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](32, "\u4F60\u7684\u5BE6\u4F5C\u7D50\u679C:");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](33, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](34, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](35, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](36, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](37, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](38, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](39, "section");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](40, "p", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](41, "\u984C\u76EE : \u8CC7\u6599\u8655\u7406");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](42, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](43, "\u60C5\u5883 : \u4ECA\u5929\u5F9EAPI\u53D6\u5F97\u4E86\u4E00\u4E9B\u8CC7\u6599\uFF0C\u4F46\u6211\u5011\u9700\u8981\u81EA\u884C\u8F49\u63DB\u6210\u9801\u9762\u9700\u8981\u7684\u8CC7\u6599\u683C\u5F0F:");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](44, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](45, "\u8ACB\u81F3bonus-point.component.ts\u88E1\u7684answerJs1()\uFF0C\u5BE6\u4F5C\u4F60\u7684\u89E3\u6C7A\u65B9\u6848");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](46, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](47, "button", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function BonusPointComponent_Template_button_click_47_listener() {
              return ctx.answerJs1();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](48, "\u4F60\u7684\u5BE6\u4F5C\u7D50\u679C");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](49, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](50, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](51, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](52, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](53, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](54, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](55, "section");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](56, "p", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](57, "\u984C\u76EE : \u5171\u7528Cookie");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](58, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](59, "\u60C5\u5883 : \u8ACB\u81EA\u884C\u65B0\u589E\u4E00\u500BCookie(Key:ck1)\uFF0C\u4E26\u5728\u4EE5\u4E0B\u5169\u500B\u4E0D\u540C\u7684URL\u4E0B\u5171\u7528\u76F8\u540C\u7684Cookie:");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](60, "ul");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](61, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](62, " kei.careline.host/bonusPoint ");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](63, "button", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function BonusPointComponent_Template_button_click_63_listener() {
              return ctx.redirectToKeiPage();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](64, "\u524D\u5F80kei\u7684\u7DB2\u7AD9");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](65, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](66, " ann.careline.host/bonusPoint ");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](67, "button", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function BonusPointComponent_Template_button_click_67_listener() {
              return ctx.redirectToAnnPage();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](68, "\u524D\u5F80ann\u7684\u7DB2\u7AD9");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](69, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](70, "\u8ACB\u81F3bonus-point.component.ts\u88E1\u7684answerCookie1()\uFF0C\u5BE6\u4F5C\u4F60\u7684\u89E3\u6C7A\u65B9\u6848");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](71, "p", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](72, "\u8003\u984C\u9650\u5236:");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](73, "ul", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](74, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](75, "\u53EA\u80FD\u81EA\u884C\u65B0\u589E\u4E00\u500BCookie");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](76, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](77, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](78, "button", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function BonusPointComponent_Template_button_click_78_listener() {
              return ctx.answerCookie1();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](79, "\u4F60\u7684\u5BE6\u4F5C\u65B9\u5F0F");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](80, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](81, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](82, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](83, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](84, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](85, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](86, "section");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](87, "p", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](88, "\u984C\u76EE : Rxjs");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](89, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](90, "\u60C5\u5883 : API\u7684\u57F7\u884C\u662F\u6709\u9806\u5E8F\u6027\u7684\uFF0C\u9700\u7B49\u4E0A\u4E00\u500BAPI\u53D6\u5F97Http Repsonse\uFF0C\u624D\u80FD\u9032\u884C\u4E0B\u4E00\u500BHttp Request");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](91, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](92, "\u8ACB\u81F3bonus-point.component.ts\u88E1\u7684answerRxjs1()\uFF0C\u5BE6\u4F5C\u4F60\u7684\u89E3\u6C7A\u65B9\u6848");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](93, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](94, "img", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](95, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](96, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](97, "button", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function BonusPointComponent_Template_button_click_97_listener() {
              return ctx.answerRxjs1();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](98, "\u4F60\u7684\u5BE6\u4F5C\u65B9\u5F0F");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](99, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](100, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          }
        },
        styles: [".keyword[_ngcontent-%COMP%] {\n  color: #cd6f80;\n}\n.title[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  color: #666666;\n  text-align: center;\n}\n.page-title[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  color: #353535;\n  text-align: center;\n}\nimg[_ngcontent-%COMP%] {\n  max-width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJvbnVzLXBvaW50LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFjO0FBQ2hCO0FBQ0E7RUFDRSxpQkFBaUI7RUFDakIsY0FBYztFQUNkLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0UsZUFBZTtFQUNmLGNBQWM7RUFDZCxrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLGVBQWU7QUFDakIiLCJmaWxlIjoiYm9udXMtcG9pbnQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5rZXl3b3JkIHtcbiAgY29sb3I6ICNjZDZmODA7XG59XG4udGl0bGUge1xuICBmb250LXNpemU6IDEuNXJlbTtcbiAgY29sb3I6ICM2NjY2NjY7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5wYWdlLXRpdGxlIHtcbiAgZm9udC1zaXplOiAycmVtO1xuICBjb2xvcjogIzM1MzUzNTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuaW1nIHtcbiAgbWF4LXdpZHRoOiAxMDAlO1xufSJdfQ== */"]
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


      var _hero_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../hero.service */
      2342);
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
            var _this = this;

            var id = +this.route.snapshot.paramMap.get('id');
            this.heroService.getHero(id).subscribe(function (hero) {
              return _this.hero = hero;
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
            var _this2 = this;

            this.heroService.updateHero(this.hero).subscribe(function () {
              return _this2.goBack();
            });
          }
        }]);

        return _HeroDetailComponent;
      }();

      _HeroDetailComponent.ɵfac = function HeroDetailComponent_Factory(t) {
        return new (t || _HeroDetailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_hero_service__WEBPACK_IMPORTED_MODULE_0__.HeroService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_3__.Location));
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
    2342:
    /*!*********************************!*\
      !*** ./src/app/hero.service.ts ***!
      \*********************************/

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


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs/operators */
      8307);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs/operators */
      5304);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs/operators */
      8002);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! rxjs */
      5917);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/core */
      7716);
      /* harmony import */


      var _message_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./message.service */
      4206);

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
        }
        /** GET heroes from the server */


        _createClass(_HeroService, [{
          key: "getHeroes",
          value: function getHeroes() {
            var _this3 = this;

            return this.http.get(this.heroesUrl).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.tap)(function (heroes) {
              return _this3.log("fetched heroes");
            }), (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(this.handleError('getHeroes', [])));
          }
          /** GET hero by id. Return `undefined` when id not found */

        }, {
          key: "getHeroNo404",
          value: function getHeroNo404(id) {
            var _this4 = this;

            var url = "".concat(this.heroesUrl, "/?id=").concat(id);
            return this.http.get(url).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(function (heroes) {
              return heroes[0];
            }), // returns a {0|1} element array
            (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.tap)(function (h) {
              var outcome = h ? "fetched" : "did not find";

              _this4.log("".concat(outcome, " hero id=").concat(id));
            }), (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(this.handleError("getHero id=".concat(id))));
          }
          /** GET hero by id. Will 404 if id not found */

        }, {
          key: "getHero",
          value: function getHero(id) {
            var _this5 = this;

            var url = "".concat(this.heroesUrl, "/").concat(id);
            return this.http.get(url).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.tap)(function (_) {
              return _this5.log("fetched hero id=".concat(id));
            }), (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(this.handleError("getHero id=".concat(id))));
          }
          /* GET heroes whose name contains search term */

        }, {
          key: "searchHeroes",
          value: function searchHeroes(term) {
            var _this6 = this;

            if (!term.trim()) {
              // if not search term, return empty hero array.
              return (0, rxjs__WEBPACK_IMPORTED_MODULE_5__.of)([]);
            }

            return this.http.get("api/heroes/?name=".concat(term)).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.tap)(function (_) {
              return _this6.log("found heroes matching \"".concat(term, "\""));
            }), (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(this.handleError('searchHeroes', [])));
          } //////// Save methods //////////

          /** POST: add a new hero to the server */

        }, {
          key: "addHero",
          value: function addHero(hero) {
            var _this7 = this;

            return this.http.post(this.heroesUrl, hero, httpOptions).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.tap)(function (hero) {
              return _this7.log("added hero w/ id=".concat(hero.id));
            }), (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(this.handleError('addHero')));
          }
          /** DELETE: delete the hero from the server */

        }, {
          key: "deleteHero",
          value: function deleteHero(hero) {
            var _this8 = this;

            var id = typeof hero === 'number' ? hero : hero.id;
            var url = "".concat(this.heroesUrl, "/").concat(id);
            return this.http["delete"](url, httpOptions).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.tap)(function (_) {
              return _this8.log("deleted hero id=".concat(id));
            }), (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(this.handleError('deleteHero')));
          }
          /** PUT: update the hero on the server */

        }, {
          key: "updateHero",
          value: function updateHero(hero) {
            var _this9 = this;

            return this.http.put(this.heroesUrl, hero, httpOptions).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.tap)(function (_) {
              return _this9.log("updated hero id=".concat(hero.id));
            }), (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(this.handleError('updateHero')));
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
            var _this10 = this;

            var operation = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'operation';
            var result = arguments.length > 1 ? arguments[1] : undefined;
            return function (error) {
              // TODO: send the error to remote logging infrastructure
              console.error(error); // log to console instead
              // TODO: better job of transforming error for user consumption

              _this10.log("".concat(operation, " failed: ").concat(error.message)); // Let the app keep running by returning an empty result.


              return (0, rxjs__WEBPACK_IMPORTED_MODULE_5__.of)(result);
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
        return new (t || _HeroService)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_message_service__WEBPACK_IMPORTED_MODULE_0__.MessageService));
      };

      _HeroService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjectable"]({
        token: _HeroService,
        factory: _HeroService.ɵfac
      });
      /***/
    },

    /***/
    2003:
    /*!*******************************************!*\
      !*** ./src/app/in-memory-data.service.ts ***!
      \*******************************************/

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
            return {
              heroes: heroes
            };
          }
        }]);

        return _InMemoryDataService;
      }();
      /***/

    },

    /***/
    4206:
    /*!************************************!*\
      !*** ./src/app/message.service.ts ***!
      \************************************/

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


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      7716);
      /* harmony import */


      var _message_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../message.service */
      4206);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      8583);

      function MessagesComponent_div_0_div_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var message_r2 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", message_r2, " ");
        }
      }

      function MessagesComponent_div_0_Template(rf, ctx) {
        if (rf & 1) {
          var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Messages");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "button", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MessagesComponent_div_0_Template_button_click_3_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4);

            var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r3.messageService.clear();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "clear");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, MessagesComponent_div_0_div_5_Template, 2, 1, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r0.messageService.messages);
        }
      }

      var _MessagesComponent = /*#__PURE__*/function () {
        function _MessagesComponent(messageService) {
          _classCallCheck(this, _MessagesComponent);

          this.messageService = messageService;
        }

        _createClass(_MessagesComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return _MessagesComponent;
      }();

      _MessagesComponent.ɵfac = function MessagesComponent_Factory(t) {
        return new (t || _MessagesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_message_service__WEBPACK_IMPORTED_MODULE_0__.MessageService));
      };

      _MessagesComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: _MessagesComponent,
        selectors: [["app-messages"]],
        decls: 1,
        vars: 1,
        consts: [[4, "ngIf"], [1, "clear", 3, "click"], [4, "ngFor", "ngForOf"]],
        template: function MessagesComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, MessagesComponent_div_0_Template, 6, 1, "div", 0);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.messageService.messages.length);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf],
        styles: ["h2[_ngcontent-%COMP%] {\n  color: red;\n  font-family: Arial, Helvetica, sans-serif;\n  font-weight: lighter;\n}\nbody[_ngcontent-%COMP%] {\n  margin: 2em;\n}\nbody[_ngcontent-%COMP%], input[text][_ngcontent-%COMP%], button[_ngcontent-%COMP%] {\n  color: crimson;\n  font-family: Cambria, Georgia;\n}\nbutton.clear[_ngcontent-%COMP%] {\n  font-family: Arial;\n  background-color: #eee;\n  border: none;\n  padding: 5px 10px;\n  border-radius: 4px;\n  cursor: pointer;\n  cursor: hand;\n}\nbutton[_ngcontent-%COMP%]:hover {\n  background-color: #cfd8dc;\n}\nbutton[_ngcontent-%COMP%]:disabled {\n  background-color: #eee;\n  color: #aaa;\n  cursor: auto;\n}\nbutton.clear[_ngcontent-%COMP%] {\n  color: #888;\n  margin-bottom: 12px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lc3NhZ2VzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsMkNBQTJDO0FBQzNDO0VBQ0UsVUFBVTtFQUNWLHlDQUF5QztFQUN6QyxvQkFBb0I7QUFDdEI7QUFDQTtFQUNFLFdBQVc7QUFDYjtBQUNBO0VBQ0UsY0FBYztFQUNkLDZCQUE2QjtBQUMvQjtBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLHNCQUFzQjtFQUN0QixZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsWUFBWTtBQUNkO0FBQ0E7RUFDRSx5QkFBeUI7QUFDM0I7QUFDQTtFQUNFLHNCQUFzQjtFQUN0QixXQUFXO0VBQ1gsWUFBWTtBQUNkO0FBQ0E7RUFDRSxXQUFXO0VBQ1gsbUJBQW1CO0FBQ3JCIiwiZmlsZSI6Im1lc3NhZ2VzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBNZXNzYWdlc0NvbXBvbmVudCdzIHByaXZhdGUgQ1NTIHN0eWxlcyAqL1xuaDIge1xuICBjb2xvcjogcmVkO1xuICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XG59XG5ib2R5IHtcbiAgbWFyZ2luOiAyZW07XG59XG5ib2R5LCBpbnB1dFt0ZXh0XSwgYnV0dG9uIHtcbiAgY29sb3I6IGNyaW1zb247XG4gIGZvbnQtZmFtaWx5OiBDYW1icmlhLCBHZW9yZ2lhO1xufVxuXG5idXR0b24uY2xlYXIge1xuICBmb250LWZhbWlseTogQXJpYWw7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlZWU7XG4gIGJvcmRlcjogbm9uZTtcbiAgcGFkZGluZzogNXB4IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBjdXJzb3I6IGhhbmQ7XG59XG5idXR0b246aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2ZkOGRjO1xufVxuYnV0dG9uOmRpc2FibGVkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcbiAgY29sb3I6ICNhYWE7XG4gIGN1cnNvcjogYXV0bztcbn1cbmJ1dHRvbi5jbGVhciB7XG4gIGNvbG9yOiAjODg4O1xuICBtYXJnaW4tYm90dG9tOiAxMnB4O1xufVxuIl19 */"]
      });
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