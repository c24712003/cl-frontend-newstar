(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkangular_io_example"] = self["webpackChunkangular_io_example"] || []).push([["src_app_heroes_heroes_module_ts"], {
    /***/
    5775:
    /*!*************************************************!*\
      !*** ./src/app/heroes/heroes-routing.module.ts ***!
      \*************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "HeroesRoutingModule": function HeroesRoutingModule() {
          return (
            /* binding */
            _HeroesRoutingModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      9895);
      /* harmony import */


      var _heroes_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./heroes.component */
      1680);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      7716);

      var routes = [{
        path: '',
        component: _heroes_component__WEBPACK_IMPORTED_MODULE_0__.HeroesComponent
      }];

      var _HeroesRoutingModule = /*#__PURE__*/_createClass(function _HeroesRoutingModule() {
        _classCallCheck(this, _HeroesRoutingModule);
      });

      _HeroesRoutingModule.??fac = function HeroesRoutingModule_Factory(t) {
        return new (t || _HeroesRoutingModule)();
      };

      _HeroesRoutingModule.??mod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineNgModule"]({
        type: _HeroesRoutingModule
      });
      _HeroesRoutingModule.??inj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineInjector"]({
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["????setNgModuleScope"](_HeroesRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
        });
      })();
      /***/

    },

    /***/
    1680:
    /*!********************************************!*\
      !*** ./src/app/heroes/heroes.component.ts ***!
      \********************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "HeroesComponent": function HeroesComponent() {
          return (
            /* binding */
            _HeroesComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _models_hero__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../models/hero */
      8647);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      7716);
      /* harmony import */


      var _services_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../services/index */
      1866);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      8583);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      9895);

      function HeroesComponent_li_10_Template(rf, ctx) {
        if (rf & 1) {
          var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](1, "a", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](2, "span", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](5, "button", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????listener"]("click", function HeroesComponent_li_10_Template_button_click_5_listener() {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????restoreView"](_r4);

            var hero_r2 = restoredCtx.$implicit;

            var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????nextContext"]();

            return ctx_r3["delete"](hero_r2);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](6, "x");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        }

        if (rf & 2) {
          var hero_r2 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????propertyInterpolate1"]("routerLink", "/detail/", hero_r2.id, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????textInterpolate"](hero_r2.id);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????textInterpolate1"](" ", hero_r2.name, " ");
        }
      }

      var _HeroesComponent = /*#__PURE__*/function () {
        function _HeroesComponent(heroService) {
          _classCallCheck(this, _HeroesComponent);

          this.heroService = heroService;
        }

        _createClass(_HeroesComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.getHeroes();
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.subscription.unsubscribe();
          }
        }, {
          key: "getHeroes",
          value: function getHeroes() {
            var _this = this;

            this.heroService.getHeroes().subscribe();
            this.subscription = this.heroService.heroes$.subscribe(function (next) {
              return _this.heroes = next;
            });
          }
        }, {
          key: "add",
          value: function add(name) {
            var _this2 = this;

            name = name.trim();

            if (!name) {
              return;
            }

            var hero = new _models_hero__WEBPACK_IMPORTED_MODULE_0__.Hero();
            var length = this.heroes.length;
            hero.id = length !== 0 ? this.heroes[this.heroes.length - 1].id + 1 : length + 1;
            hero.name = name;
            this.heroService.addHero(hero).subscribe(function (hero) {
              _this2.heroes.push(hero);

              _this2.heroService.heroes$.next(_this2.heroes);
            });
          }
        }, {
          key: "delete",
          value: function _delete(hero) {
            this.heroes = this.heroes.filter(function (h) {
              return h !== hero;
            });
            this.heroService.deleteHero(hero).subscribe();
            this.heroService.heroes$.next(this.heroes);
          }
        }]);

        return _HeroesComponent;
      }();

      _HeroesComponent.??fac = function HeroesComponent_Factory(t) {
        return new (t || _HeroesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["????directiveInject"](_services_index__WEBPACK_IMPORTED_MODULE_1__.HeroService));
      };

      _HeroesComponent.??cmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["????defineComponent"]({
        type: _HeroesComponent,
        selectors: [["app-heroes"]],
        decls: 11,
        vars: 2,
        consts: [["heroName", ""], [3, "click"], [1, "heroes"], [4, "ngFor", "ngForOf"], [3, "routerLink"], [1, "badge"], ["title", "delete hero", 1, "delete", 3, "click"]],
        template: function HeroesComponent_Template(rf, ctx) {
          if (rf & 1) {
            var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????getCurrentView"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](2, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](3, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](4, "Hero name: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](5, "input", null, 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](7, "button", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????listener"]("click", function HeroesComponent_Template_button_click_7_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_2__["????restoreView"](_r5);

              var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????reference"](6);

              ctx.add(_r0.value);
              return _r0.value = "";
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](8, " add ");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](9, "ul", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](10, HeroesComponent_li_10_Template, 7, 3, "li", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????textInterpolate1"]("My ", ctx.heroes.length, " Heroes");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngForOf", ctx.heroes);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLinkWithHref],
        styles: [".heroes[_ngcontent-%COMP%] {\n  margin: 0 0 2em 0;\n  list-style-type: none;\n  padding: 0;\n  width: 15em;\n}\n.heroes[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  position: relative;\n  cursor: pointer;\n  background-color: #EEE;\n  margin: .5em;\n  padding: .3em 0;\n  height: 1.6em;\n  border-radius: 4px;\n}\n.heroes[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover {\n  color: #607D8B;\n  background-color: #DDD;\n  left: .1em;\n}\n.heroes[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #888;\n  text-decoration: none;\n  position: relative;\n  display: block;\n  width: 250px;\n}\n.heroes[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color:#607D8B;\n}\n.heroes[_ngcontent-%COMP%]   .badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  font-size: small;\n  color: white;\n  padding: 0.8em 0.7em 0 0.7em;\n  background-color: #607D8B;\n  line-height: 1em;\n  position: relative;\n  left: -1px;\n  top: -4px;\n  height: 1.8em;\n  min-width: 16px;\n  text-align: right;\n  margin-right: .8em;\n  border-radius: 4px 0 0 4px;\n}\n.button[_ngcontent-%COMP%] {\n  background-color: #eee;\n  border: none;\n  padding: 5px 10px;\n  border-radius: 4px;\n  cursor: pointer;\n  cursor: hand;\n  font-family: Arial;\n}\nbutton[_ngcontent-%COMP%]:hover {\n  background-color: #cfd8dc;\n}\nbutton.delete[_ngcontent-%COMP%] {\n  position: relative;\n  left: 194px;\n  top: -32px;\n  background-color: gray !important;\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlcm9lcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHlDQUF5QztBQUN6QztFQUNFLGlCQUFpQjtFQUNqQixxQkFBcUI7RUFDckIsVUFBVTtFQUNWLFdBQVc7QUFDYjtBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixzQkFBc0I7RUFDdEIsWUFBWTtFQUNaLGVBQWU7RUFDZixhQUFhO0VBQ2Isa0JBQWtCO0FBQ3BCO0FBRUE7RUFDRSxjQUFjO0VBQ2Qsc0JBQXNCO0VBQ3RCLFVBQVU7QUFDWjtBQUVBO0VBQ0UsV0FBVztFQUNYLHFCQUFxQjtFQUNyQixrQkFBa0I7RUFDbEIsY0FBYztFQUNkLFlBQVk7QUFDZDtBQUVBO0VBQ0UsYUFBYTtBQUNmO0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWiw0QkFBNEI7RUFDNUIseUJBQXlCO0VBQ3pCLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLFNBQVM7RUFDVCxhQUFhO0VBQ2IsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsMEJBQTBCO0FBQzVCO0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLFlBQVk7RUFDWixrQkFBa0I7QUFDcEI7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjtBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxVQUFVO0VBQ1YsaUNBQWlDO0VBQ2pDLFlBQVk7QUFDZCIsImZpbGUiOiJoZXJvZXMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIEhlcm9lc0NvbXBvbmVudCdzIHByaXZhdGUgQ1NTIHN0eWxlcyAqL1xuLmhlcm9lcyB7XG4gIG1hcmdpbjogMCAwIDJlbSAwO1xuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG4gIHBhZGRpbmc6IDA7XG4gIHdpZHRoOiAxNWVtO1xufVxuLmhlcm9lcyBsaSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRUVFO1xuICBtYXJnaW46IC41ZW07XG4gIHBhZGRpbmc6IC4zZW0gMDtcbiAgaGVpZ2h0OiAxLjZlbTtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xufVxuXG4uaGVyb2VzIGxpOmhvdmVyIHtcbiAgY29sb3I6ICM2MDdEOEI7XG4gIGJhY2tncm91bmQtY29sb3I6ICNEREQ7XG4gIGxlZnQ6IC4xZW07XG59XG5cbi5oZXJvZXMgYSB7XG4gIGNvbG9yOiAjODg4O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAyNTBweDtcbn1cblxuLmhlcm9lcyBhOmhvdmVyIHtcbiAgY29sb3I6IzYwN0Q4Qjtcbn1cblxuLmhlcm9lcyAuYmFkZ2Uge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGZvbnQtc2l6ZTogc21hbGw7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZzogMC44ZW0gMC43ZW0gMCAwLjdlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzYwN0Q4QjtcbiAgbGluZS1oZWlnaHQ6IDFlbTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBsZWZ0OiAtMXB4O1xuICB0b3A6IC00cHg7XG4gIGhlaWdodDogMS44ZW07XG4gIG1pbi13aWR0aDogMTZweDtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIG1hcmdpbi1yaWdodDogLjhlbTtcbiAgYm9yZGVyLXJhZGl1czogNHB4IDAgMCA0cHg7XG59XG5cbi5idXR0b24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xuICBib3JkZXI6IG5vbmU7XG4gIHBhZGRpbmc6IDVweCAxMHB4O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgY3Vyc29yOiBoYW5kO1xuICBmb250LWZhbWlseTogQXJpYWw7XG59XG5cbmJ1dHRvbjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNjZmQ4ZGM7XG59XG5cbmJ1dHRvbi5kZWxldGUge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGxlZnQ6IDE5NHB4O1xuICB0b3A6IC0zMnB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmF5ICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuIl19 */"]
      });
      /***/
    },

    /***/
    3058:
    /*!*****************************************!*\
      !*** ./src/app/heroes/heroes.module.ts ***!
      \*****************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "HeroesdModule": function HeroesdModule() {
          return (
            /* binding */
            _HeroesdModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      8583);
      /* harmony import */


      var _heroes_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./heroes-routing.module */
      5775);
      /* harmony import */


      var _heroes_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./heroes.component */
      1680);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      7716);

      var _HeroesdModule = /*#__PURE__*/_createClass(function _HeroesdModule() {
        _classCallCheck(this, _HeroesdModule);
      });

      _HeroesdModule.??fac = function HeroesdModule_Factory(t) {
        return new (t || _HeroesdModule)();
      };

      _HeroesdModule.??mod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["????defineNgModule"]({
        type: _HeroesdModule
      });
      _HeroesdModule.??inj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["????defineInjector"]({
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _heroes_routing_module__WEBPACK_IMPORTED_MODULE_0__.HeroesRoutingModule]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["????setNgModuleScope"](_HeroesdModule, {
          declarations: [_heroes_component__WEBPACK_IMPORTED_MODULE_1__.HeroesComponent],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _heroes_routing_module__WEBPACK_IMPORTED_MODULE_0__.HeroesRoutingModule]
        });
      })();
      /***/

    },

    /***/
    8647:
    /*!********************************!*\
      !*** ./src/app/models/hero.ts ***!
      \********************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "Hero": function Hero() {
          return (
            /* binding */
            _Hero
          );
        }
        /* harmony export */

      });

      var _Hero = /*#__PURE__*/_createClass(function _Hero() {
        _classCallCheck(this, _Hero);
      });
      /***/

    }
  }]);
})();
//# sourceMappingURL=src_app_heroes_heroes_module_ts-es5.js.map