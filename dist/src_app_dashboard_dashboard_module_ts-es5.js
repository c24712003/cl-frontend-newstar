(function () {
  function _get() { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get.bind(); } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(arguments.length < 3 ? target : receiver); } return desc.value; }; } return _get.apply(this, arguments); }

  function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  (self["webpackChunkangular_io_example"] = self["webpackChunkangular_io_example"] || []).push([["src_app_dashboard_dashboard_module_ts"], {
    /***/
    2217:
    /*!**********************************************************!*\
      !*** ./node_modules/rxjs/_esm2015/internal/Scheduler.js ***!
      \**********************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "Scheduler": function Scheduler() {
          return (
            /* binding */
            _Scheduler
          );
        }
        /* harmony export */

      });

      var _Scheduler = /*#__PURE__*/function () {
        function _Scheduler(SchedulerAction) {
          var now = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _Scheduler.now;

          _classCallCheck(this, _Scheduler);

          this.SchedulerAction = SchedulerAction;
          this.now = now;
        }

        _createClass(_Scheduler, [{
          key: "schedule",
          value: function schedule(work) {
            var delay = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
            var state = arguments.length > 2 ? arguments[2] : undefined;
            return new this.SchedulerAction(this, work).schedule(state, delay);
          }
        }]);

        return _Scheduler;
      }();

      _Scheduler.now = function () {
        return Date.now();
      }; //# sourceMappingURL=Scheduler.js.map

      /***/

    },

    /***/
    4395:
    /*!***********************************************************************!*\
      !*** ./node_modules/rxjs/_esm2015/internal/operators/debounceTime.js ***!
      \***********************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "debounceTime": function debounceTime() {
          return (
            /* binding */
            _debounceTime
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _Subscriber__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../Subscriber */
      7393);
      /* harmony import */


      var _scheduler_async__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../scheduler/async */
      3637);

      function _debounceTime(dueTime) {
        var scheduler = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _scheduler_async__WEBPACK_IMPORTED_MODULE_0__.async;
        return function (source) {
          return source.lift(new DebounceTimeOperator(dueTime, scheduler));
        };
      }

      var DebounceTimeOperator = /*#__PURE__*/function () {
        function DebounceTimeOperator(dueTime, scheduler) {
          _classCallCheck(this, DebounceTimeOperator);

          this.dueTime = dueTime;
          this.scheduler = scheduler;
        }

        _createClass(DebounceTimeOperator, [{
          key: "call",
          value: function call(subscriber, source) {
            return source.subscribe(new DebounceTimeSubscriber(subscriber, this.dueTime, this.scheduler));
          }
        }]);

        return DebounceTimeOperator;
      }();

      var DebounceTimeSubscriber = /*#__PURE__*/function (_Subscriber__WEBPACK_) {
        _inherits(DebounceTimeSubscriber, _Subscriber__WEBPACK_);

        var _super = _createSuper(DebounceTimeSubscriber);

        function DebounceTimeSubscriber(destination, dueTime, scheduler) {
          var _this;

          _classCallCheck(this, DebounceTimeSubscriber);

          _this = _super.call(this, destination);
          _this.dueTime = dueTime;
          _this.scheduler = scheduler;
          _this.debouncedSubscription = null;
          _this.lastValue = null;
          _this.hasValue = false;
          return _this;
        }

        _createClass(DebounceTimeSubscriber, [{
          key: "_next",
          value: function _next(value) {
            this.clearDebounce();
            this.lastValue = value;
            this.hasValue = true;
            this.add(this.debouncedSubscription = this.scheduler.schedule(dispatchNext, this.dueTime, this));
          }
        }, {
          key: "_complete",
          value: function _complete() {
            this.debouncedNext();
            this.destination.complete();
          }
        }, {
          key: "debouncedNext",
          value: function debouncedNext() {
            this.clearDebounce();

            if (this.hasValue) {
              var lastValue = this.lastValue;
              this.lastValue = null;
              this.hasValue = false;
              this.destination.next(lastValue);
            }
          }
        }, {
          key: "clearDebounce",
          value: function clearDebounce() {
            var debouncedSubscription = this.debouncedSubscription;

            if (debouncedSubscription !== null) {
              this.remove(debouncedSubscription);
              debouncedSubscription.unsubscribe();
              this.debouncedSubscription = null;
            }
          }
        }]);

        return DebounceTimeSubscriber;
      }(_Subscriber__WEBPACK_IMPORTED_MODULE_1__.Subscriber);

      function dispatchNext(subscriber) {
        subscriber.debouncedNext();
      } //# sourceMappingURL=debounceTime.js.map

      /***/

    },

    /***/
    7519:
    /*!*******************************************************************************!*\
      !*** ./node_modules/rxjs/_esm2015/internal/operators/distinctUntilChanged.js ***!
      \*******************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "distinctUntilChanged": function distinctUntilChanged() {
          return (
            /* binding */
            _distinctUntilChanged
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _Subscriber__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../Subscriber */
      7393);

      function _distinctUntilChanged(compare, keySelector) {
        return function (source) {
          return source.lift(new DistinctUntilChangedOperator(compare, keySelector));
        };
      }

      var DistinctUntilChangedOperator = /*#__PURE__*/function () {
        function DistinctUntilChangedOperator(compare, keySelector) {
          _classCallCheck(this, DistinctUntilChangedOperator);

          this.compare = compare;
          this.keySelector = keySelector;
        }

        _createClass(DistinctUntilChangedOperator, [{
          key: "call",
          value: function call(subscriber, source) {
            return source.subscribe(new DistinctUntilChangedSubscriber(subscriber, this.compare, this.keySelector));
          }
        }]);

        return DistinctUntilChangedOperator;
      }();

      var DistinctUntilChangedSubscriber = /*#__PURE__*/function (_Subscriber__WEBPACK_2) {
        _inherits(DistinctUntilChangedSubscriber, _Subscriber__WEBPACK_2);

        var _super2 = _createSuper(DistinctUntilChangedSubscriber);

        function DistinctUntilChangedSubscriber(destination, compare, keySelector) {
          var _this2;

          _classCallCheck(this, DistinctUntilChangedSubscriber);

          _this2 = _super2.call(this, destination);
          _this2.keySelector = keySelector;
          _this2.hasKey = false;

          if (typeof compare === 'function') {
            _this2.compare = compare;
          }

          return _this2;
        }

        _createClass(DistinctUntilChangedSubscriber, [{
          key: "compare",
          value: function compare(x, y) {
            return x === y;
          }
        }, {
          key: "_next",
          value: function _next(value) {
            var key;

            try {
              var keySelector = this.keySelector;
              key = keySelector ? keySelector(value) : value;
            } catch (err) {
              return this.destination.error(err);
            }

            var result = false;

            if (this.hasKey) {
              try {
                var compare = this.compare;
                result = compare(this.key, key);
              } catch (err) {
                return this.destination.error(err);
              }
            } else {
              this.hasKey = true;
            }

            if (!result) {
              this.key = key;
              this.destination.next(value);
            }
          }
        }]);

        return DistinctUntilChangedSubscriber;
      }(_Subscriber__WEBPACK_IMPORTED_MODULE_0__.Subscriber); //# sourceMappingURL=distinctUntilChanged.js.map

      /***/

    },

    /***/
    2901:
    /*!*****************************************************************!*\
      !*** ./node_modules/rxjs/_esm2015/internal/scheduler/Action.js ***!
      \*****************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "Action": function Action() {
          return (
            /* binding */
            _Action
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _Subscription__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../Subscription */
      826);

      var _Action = /*#__PURE__*/function (_Subscription__WEBPAC) {
        _inherits(_Action, _Subscription__WEBPAC);

        var _super3 = _createSuper(_Action);

        function _Action(scheduler, work) {
          _classCallCheck(this, _Action);

          return _super3.call(this);
        }

        _createClass(_Action, [{
          key: "schedule",
          value: function schedule(state) {
            var delay = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
            return this;
          }
        }]);

        return _Action;
      }(_Subscription__WEBPACK_IMPORTED_MODULE_0__.Subscription); //# sourceMappingURL=Action.js.map

      /***/

    },

    /***/
    401:
    /*!**********************************************************************!*\
      !*** ./node_modules/rxjs/_esm2015/internal/scheduler/AsyncAction.js ***!
      \**********************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AsyncAction": function AsyncAction() {
          return (
            /* binding */
            _AsyncAction
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _Action__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./Action */
      2901);

      var _AsyncAction = /*#__PURE__*/function (_Action__WEBPACK_IMPO) {
        _inherits(_AsyncAction, _Action__WEBPACK_IMPO);

        var _super4 = _createSuper(_AsyncAction);

        function _AsyncAction(scheduler, work) {
          var _this3;

          _classCallCheck(this, _AsyncAction);

          _this3 = _super4.call(this, scheduler, work);
          _this3.scheduler = scheduler;
          _this3.work = work;
          _this3.pending = false;
          return _this3;
        }

        _createClass(_AsyncAction, [{
          key: "schedule",
          value: function schedule(state) {
            var delay = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

            if (this.closed) {
              return this;
            }

            this.state = state;
            var id = this.id;
            var scheduler = this.scheduler;

            if (id != null) {
              this.id = this.recycleAsyncId(scheduler, id, delay);
            }

            this.pending = true;
            this.delay = delay;
            this.id = this.id || this.requestAsyncId(scheduler, this.id, delay);
            return this;
          }
        }, {
          key: "requestAsyncId",
          value: function requestAsyncId(scheduler, id) {
            var delay = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
            return setInterval(scheduler.flush.bind(scheduler, this), delay);
          }
        }, {
          key: "recycleAsyncId",
          value: function recycleAsyncId(scheduler, id) {
            var delay = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

            if (delay !== null && this.delay === delay && this.pending === false) {
              return id;
            }

            clearInterval(id);
            return undefined;
          }
        }, {
          key: "execute",
          value: function execute(state, delay) {
            if (this.closed) {
              return new Error('executing a cancelled action');
            }

            this.pending = false;

            var error = this._execute(state, delay);

            if (error) {
              return error;
            } else if (this.pending === false && this.id != null) {
              this.id = this.recycleAsyncId(this.scheduler, this.id, null);
            }
          }
        }, {
          key: "_execute",
          value: function _execute(state, delay) {
            var errored = false;
            var errorValue = undefined;

            try {
              this.work(state);
            } catch (e) {
              errored = true;
              errorValue = !!e && e || new Error(e);
            }

            if (errored) {
              this.unsubscribe();
              return errorValue;
            }
          }
        }, {
          key: "_unsubscribe",
          value: function _unsubscribe() {
            var id = this.id;
            var scheduler = this.scheduler;
            var actions = scheduler.actions;
            var index = actions.indexOf(this);
            this.work = null;
            this.state = null;
            this.pending = false;
            this.scheduler = null;

            if (index !== -1) {
              actions.splice(index, 1);
            }

            if (id != null) {
              this.id = this.recycleAsyncId(scheduler, id, null);
            }

            this.delay = null;
          }
        }]);

        return _AsyncAction;
      }(_Action__WEBPACK_IMPORTED_MODULE_0__.Action); //# sourceMappingURL=AsyncAction.js.map

      /***/

    },

    /***/
    4548:
    /*!*************************************************************************!*\
      !*** ./node_modules/rxjs/_esm2015/internal/scheduler/AsyncScheduler.js ***!
      \*************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AsyncScheduler": function AsyncScheduler() {
          return (
            /* binding */
            _AsyncScheduler
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _Scheduler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../Scheduler */
      2217);

      var _AsyncScheduler = /*#__PURE__*/function (_Scheduler__WEBPACK_I) {
        _inherits(_AsyncScheduler, _Scheduler__WEBPACK_I);

        var _super5 = _createSuper(_AsyncScheduler);

        function _AsyncScheduler(SchedulerAction) {
          var _this4;

          var now = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _Scheduler__WEBPACK_IMPORTED_MODULE_0__.Scheduler.now;

          _classCallCheck(this, _AsyncScheduler);

          _this4 = _super5.call(this, SchedulerAction, function () {
            if (_AsyncScheduler.delegate && _AsyncScheduler.delegate !== _assertThisInitialized(_this4)) {
              return _AsyncScheduler.delegate.now();
            } else {
              return now();
            }
          });
          _this4.actions = [];
          _this4.active = false;
          _this4.scheduled = undefined;
          return _this4;
        }

        _createClass(_AsyncScheduler, [{
          key: "schedule",
          value: function schedule(work) {
            var delay = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
            var state = arguments.length > 2 ? arguments[2] : undefined;

            if (_AsyncScheduler.delegate && _AsyncScheduler.delegate !== this) {
              return _AsyncScheduler.delegate.schedule(work, delay, state);
            } else {
              return _get(_getPrototypeOf(_AsyncScheduler.prototype), "schedule", this).call(this, work, delay, state);
            }
          }
        }, {
          key: "flush",
          value: function flush(action) {
            var actions = this.actions;

            if (this.active) {
              actions.push(action);
              return;
            }

            var error;
            this.active = true;

            do {
              if (error = action.execute(action.state, action.delay)) {
                break;
              }
            } while (action = actions.shift());

            this.active = false;

            if (error) {
              while (action = actions.shift()) {
                action.unsubscribe();
              }

              throw error;
            }
          }
        }]);

        return _AsyncScheduler;
      }(_Scheduler__WEBPACK_IMPORTED_MODULE_0__.Scheduler); //# sourceMappingURL=AsyncScheduler.js.map

      /***/

    },

    /***/
    3637:
    /*!****************************************************************!*\
      !*** ./node_modules/rxjs/_esm2015/internal/scheduler/async.js ***!
      \****************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "asyncScheduler": function asyncScheduler() {
          return (
            /* binding */
            _asyncScheduler
          );
        },

        /* harmony export */
        "async": function async() {
          return (
            /* binding */
            _async
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _AsyncAction__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./AsyncAction */
      401);
      /* harmony import */


      var _AsyncScheduler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./AsyncScheduler */
      4548);

      var _asyncScheduler = new _AsyncScheduler__WEBPACK_IMPORTED_MODULE_0__.AsyncScheduler(_AsyncAction__WEBPACK_IMPORTED_MODULE_1__.AsyncAction);

      var _async = _asyncScheduler; //# sourceMappingURL=async.js.map

      /***/
    },

    /***/
    425:
    /*!*******************************************************!*\
      !*** ./src/app/dashboard/dashboard-routing.module.ts ***!
      \*******************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "DashboardRoutingModule": function DashboardRoutingModule() {
          return (
            /* binding */
            _DashboardRoutingModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      9895);
      /* harmony import */


      var _dashboard_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./dashboard.component */
      7528);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      7716);

      var routes = [{
        path: '',
        component: _dashboard_component__WEBPACK_IMPORTED_MODULE_0__.DashboardComponent
      }];

      var _DashboardRoutingModule = /*#__PURE__*/_createClass(function _DashboardRoutingModule() {
        _classCallCheck(this, _DashboardRoutingModule);
      });

      _DashboardRoutingModule.ɵfac = function DashboardRoutingModule_Factory(t) {
        return new (t || _DashboardRoutingModule)();
      };

      _DashboardRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
        type: _DashboardRoutingModule
      });
      _DashboardRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](_DashboardRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
        });
      })();
      /***/

    },

    /***/
    7528:
    /*!**************************************************!*\
      !*** ./src/app/dashboard/dashboard.component.ts ***!
      \**************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "DashboardComponent": function DashboardComponent() {
          return (
            /* binding */
            _DashboardComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      7716);
      /* harmony import */


      var _hero_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../hero.service */
      2342);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      8583);
      /* harmony import */


      var _hero_search_hero_search_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../hero-search/hero-search.component */
      3671);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      9895);

      function DashboardComponent_a_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "a", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var hero_r1 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate1"]("routerLink", "/detail/", hero_r1.id, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](hero_r1.name);
        }
      }

      var _DashboardComponent = /*#__PURE__*/function () {
        function _DashboardComponent(heroService) {
          _classCallCheck(this, _DashboardComponent);

          this.heroService = heroService;
          this.heroes = [];
        }

        _createClass(_DashboardComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.getHeroes();
          }
        }, {
          key: "getHeroes",
          value: function getHeroes() {
            var _this5 = this;

            this.heroService.getHeroes().subscribe(function (heroes) {
              return _this5.heroes = heroes.slice(1, 5);
            });
          }
        }]);

        return _DashboardComponent;
      }();

      _DashboardComponent.ɵfac = function DashboardComponent_Factory(t) {
        return new (t || _DashboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_hero_service__WEBPACK_IMPORTED_MODULE_0__.HeroService));
      };

      _DashboardComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
        type: _DashboardComponent,
        selectors: [["app-dashboard"]],
        decls: 5,
        vars: 1,
        consts: [[1, "grid", "grid-pad"], ["class", "col col-1", 3, "routerLink", 4, "ngFor", "ngForOf"], [1, "col", "col-1", 3, "routerLink"], [1, "module", "hero"]],
        template: function DashboardComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Top Heroes");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, DashboardComponent_a_3_Template, 4, 2, "a", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "app-hero-search");
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.heroes);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _hero_search_hero_search_component__WEBPACK_IMPORTED_MODULE_1__.HeroSearchComponent, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLinkWithHref],
        styles: ["[class*='col-'][_ngcontent-%COMP%] {\n  float: left;\n  padding-right: 20px;\n  padding-bottom: 20px;\n}\n[class*='col-'][_ngcontent-%COMP%]:last-of-type {\n  padding-right: 0;\n}\na[_ngcontent-%COMP%] {\n  text-decoration: none;\n}\n*[_ngcontent-%COMP%], *[_ngcontent-%COMP%]:after, *[_ngcontent-%COMP%]:before {\n  box-sizing: border-box;\n}\nh3[_ngcontent-%COMP%] {\n  text-align: center; margin-bottom: 0;\n}\nh4[_ngcontent-%COMP%] {\n  position: relative;\n}\n.grid[_ngcontent-%COMP%] {\n  margin: 0;\n  display: flex;\n  flex-wrap: wrap;\n}\n.col[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 31vw;\n}\n.module[_ngcontent-%COMP%] {\n  padding: 20px;\n  text-align: center;\n  color: #eee;\n  max-height: 120px;\n  min-width: 120px;\n  background-color: #607D8B;\n  border-radius: 2px;\n}\n.module[_ngcontent-%COMP%]:hover {\n  background-color: #EEE;\n  cursor: pointer;\n  color: #607d8b;\n}\n.grid-pad[_ngcontent-%COMP%] {\n  padding: 10px 0;\n}\n.grid-pad[_ngcontent-%COMP%]    > [class*='col-'][_ngcontent-%COMP%]:last-of-type {\n  padding-right: 20px;\n}\n@media (max-width: 600px) {\n  .module[_ngcontent-%COMP%] {\n    font-size: 10px;\n    max-height: 75px; }\n}\n@media (max-width: 850px) {\n  .grid[_ngcontent-%COMP%] {\n    margin: 0;\n    flex-wrap: unset;\n  }\n  .module[_ngcontent-%COMP%] {\n    min-width: 60px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhc2hib2FyZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDRDQUE0QztBQUM1QztFQUNFLFdBQVc7RUFDWCxtQkFBbUI7RUFDbkIsb0JBQW9CO0FBQ3RCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLHFCQUFxQjtBQUN2QjtBQUNBO0VBR0Usc0JBQXNCO0FBQ3hCO0FBQ0E7RUFDRSxrQkFBa0IsRUFBRSxnQkFBZ0I7QUFDdEM7QUFDQTtFQUNFLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0UsU0FBUztFQUNULGFBQWE7RUFDYixlQUFlO0FBQ2pCO0FBQ0E7RUFDRSxPQUFPO0VBQ1AsZUFBZTtBQUNqQjtBQUNBO0VBQ0UsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQix5QkFBeUI7RUFDekIsa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxzQkFBc0I7RUFDdEIsZUFBZTtFQUNmLGNBQWM7QUFDaEI7QUFDQTtFQUNFLGVBQWU7QUFDakI7QUFDQTtFQUNFLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0U7SUFDRSxlQUFlO0lBQ2YsZ0JBQWdCLEVBQUU7QUFDdEI7QUFDQTtFQUNFO0lBQ0UsU0FBUztJQUNULGdCQUFnQjtFQUNsQjtFQUNBO0lBQ0UsZUFBZTtFQUNqQjtBQUNGIiwiZmlsZSI6ImRhc2hib2FyZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogRGFzaGJvYXJkQ29tcG9uZW50J3MgcHJpdmF0ZSBDU1Mgc3R5bGVzICovXG5bY2xhc3MqPSdjb2wtJ10ge1xuICBmbG9hdDogbGVmdDtcbiAgcGFkZGluZy1yaWdodDogMjBweDtcbiAgcGFkZGluZy1ib3R0b206IDIwcHg7XG59XG5bY2xhc3MqPSdjb2wtJ106bGFzdC1vZi10eXBlIHtcbiAgcGFkZGluZy1yaWdodDogMDtcbn1cbmEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG4qLCAqOmFmdGVyLCAqOmJlZm9yZSB7XG4gIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgLW1vei1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuaDMge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7IG1hcmdpbi1ib3R0b206IDA7XG59XG5oNCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5ncmlkIHtcbiAgbWFyZ2luOiAwO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG59XG4uY29sIHtcbiAgZmxleDogMTtcbiAgbWluLXdpZHRoOiAzMXZ3O1xufVxuLm1vZHVsZSB7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6ICNlZWU7XG4gIG1heC1oZWlnaHQ6IDEyMHB4O1xuICBtaW4td2lkdGg6IDEyMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjA3RDhCO1xuICBib3JkZXItcmFkaXVzOiAycHg7XG59XG4ubW9kdWxlOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0VFRTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBjb2xvcjogIzYwN2Q4Yjtcbn1cbi5ncmlkLXBhZCB7XG4gIHBhZGRpbmc6IDEwcHggMDtcbn1cbi5ncmlkLXBhZCA+IFtjbGFzcyo9J2NvbC0nXTpsYXN0LW9mLXR5cGUge1xuICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gIC5tb2R1bGUge1xuICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICBtYXgtaGVpZ2h0OiA3NXB4OyB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogODUwcHgpIHtcbiAgLmdyaWQge1xuICAgIG1hcmdpbjogMDtcbiAgICBmbGV4LXdyYXA6IHVuc2V0O1xuICB9XG4gIC5tb2R1bGUge1xuICAgIG1pbi13aWR0aDogNjBweDtcbiAgfVxufVxuIl19 */"]
      });
      /***/
    },

    /***/
    4814:
    /*!***********************************************!*\
      !*** ./src/app/dashboard/dashboard.module.ts ***!
      \***********************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "DashboardModule": function DashboardModule() {
          return (
            /* binding */
            _DashboardModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _hero_search_hero_search_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./../hero-search/hero-search.component */
      3671);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      8583);
      /* harmony import */


      var _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./dashboard-routing.module */
      425);
      /* harmony import */


      var _dashboard_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./dashboard.component */
      7528);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      7716);

      var _DashboardModule = /*#__PURE__*/_createClass(function _DashboardModule() {
        _classCallCheck(this, _DashboardModule);
      });

      _DashboardModule.ɵfac = function DashboardModule_Factory(t) {
        return new (t || _DashboardModule)();
      };

      _DashboardModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
        type: _DashboardModule
      });
      _DashboardModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_1__.DashboardRoutingModule]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](_DashboardModule, {
          declarations: [_dashboard_component__WEBPACK_IMPORTED_MODULE_2__.DashboardComponent, _hero_search_hero_search_component__WEBPACK_IMPORTED_MODULE_0__.HeroSearchComponent],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_1__.DashboardRoutingModule]
        });
      })();
      /***/

    },

    /***/
    3671:
    /*!******************************************************!*\
      !*** ./src/app/hero-search/hero-search.component.ts ***!
      \******************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "HeroSearchComponent": function HeroSearchComponent() {
          return (
            /* binding */
            _HeroSearchComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs/operators */
      4395);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs/operators */
      7519);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! rxjs/operators */
      3190);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs */
      9765);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      7716);
      /* harmony import */


      var _hero_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../hero.service */
      2342);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common */
      8583);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/router */
      9895);

      function HeroSearchComponent_li_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var hero_r2 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("routerLink", "/detail/", hero_r2.id, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", hero_r2.name, " ");
        }
      }

      var _HeroSearchComponent = /*#__PURE__*/function () {
        function _HeroSearchComponent(heroService) {
          _classCallCheck(this, _HeroSearchComponent);

          this.heroService = heroService;
          this.searchTerms = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
        } // Push a search term into the observable stream.


        _createClass(_HeroSearchComponent, [{
          key: "search",
          value: function search(term) {
            this.searchTerms.next(term);
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this6 = this;

            this.heroes$ = this.searchTerms.pipe( // wait 300ms after each keystroke before considering the term
            (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.debounceTime)(300), // ignore new term if same as previous term
            (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.distinctUntilChanged)(), // switch to new search observable each time the term changes
            (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.switchMap)(function (term) {
              return _this6.heroService.searchHeroes(term);
            }));
          }
        }]);

        return _HeroSearchComponent;
      }();

      _HeroSearchComponent.ɵfac = function HeroSearchComponent_Factory(t) {
        return new (t || _HeroSearchComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_hero_service__WEBPACK_IMPORTED_MODULE_0__.HeroService));
      };

      _HeroSearchComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: _HeroSearchComponent,
        selectors: [["app-hero-search"]],
        decls: 8,
        vars: 3,
        consts: [["id", "search-component"], ["id", "search-box", 3, "keyup"], ["searchBox", ""], [1, "search-result"], [4, "ngFor", "ngForOf"], [3, "routerLink"]],
        template: function HeroSearchComponent_Template(rf, ctx) {
          if (rf & 1) {
            var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h4");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Hero Search");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "input", 1, 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keyup", function HeroSearchComponent_Template_input_keyup_3_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r3);

              var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](4);

              return ctx.search(_r0.value);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "ul", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, HeroSearchComponent_li_6_Template, 3, 2, "li", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](7, "async");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](7, 1, ctx.heroes$));
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterLinkWithHref],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.AsyncPipe],
        styles: [".search-result[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  border-bottom: 1px solid gray;\n  border-left: 1px solid gray;\n  border-right: 1px solid gray;\n  width:195px;\n  height: 16px;\n  padding: 5px;\n  background-color: white;\n  cursor: pointer;\n  list-style-type: none;\n}\n.search-result[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover {\n  background-color: #607D8B;\n}\n.search-result[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #888;\n  display: block;\n  text-decoration: none;\n}\n.search-result[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: white;\n}\n.search-result[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:active {\n  color: white;\n}\n#search-box[_ngcontent-%COMP%] {\n  width: 200px;\n  height: 20px;\n}\nul.search-result[_ngcontent-%COMP%] {\n  margin-top: 0;\n  padding-left: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlcm8tc2VhcmNoLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsOEJBQThCO0FBQzlCO0VBQ0UsNkJBQTZCO0VBQzdCLDJCQUEyQjtFQUMzQiw0QkFBNEI7RUFDNUIsV0FBVztFQUNYLFlBQVk7RUFDWixZQUFZO0VBQ1osdUJBQXVCO0VBQ3ZCLGVBQWU7RUFDZixxQkFBcUI7QUFDdkI7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjtBQUVBO0VBQ0UsV0FBVztFQUNYLGNBQWM7RUFDZCxxQkFBcUI7QUFDdkI7QUFFQTtFQUNFLFlBQVk7QUFDZDtBQUNBO0VBQ0UsWUFBWTtBQUNkO0FBQ0E7RUFDRSxZQUFZO0VBQ1osWUFBWTtBQUNkO0FBR0E7RUFDRSxhQUFhO0VBQ2IsZUFBZTtBQUNqQiIsImZpbGUiOiJoZXJvLXNlYXJjaC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogSGVyb1NlYXJjaCBwcml2YXRlIHN0eWxlcyAqL1xuLnNlYXJjaC1yZXN1bHQgbGkge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgZ3JheTtcbiAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCBncmF5O1xuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCBncmF5O1xuICB3aWR0aDoxOTVweDtcbiAgaGVpZ2h0OiAxNnB4O1xuICBwYWRkaW5nOiA1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbn1cblxuLnNlYXJjaC1yZXN1bHQgbGk6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjA3RDhCO1xufVxuXG4uc2VhcmNoLXJlc3VsdCBsaSBhIHtcbiAgY29sb3I6ICM4ODg7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbi5zZWFyY2gtcmVzdWx0IGxpIGE6aG92ZXIge1xuICBjb2xvcjogd2hpdGU7XG59XG4uc2VhcmNoLXJlc3VsdCBsaSBhOmFjdGl2ZSB7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbiNzZWFyY2gtYm94IHtcbiAgd2lkdGg6IDIwMHB4O1xuICBoZWlnaHQ6IDIwcHg7XG59XG5cblxudWwuc2VhcmNoLXJlc3VsdCB7XG4gIG1hcmdpbi10b3A6IDA7XG4gIHBhZGRpbmctbGVmdDogMDtcbn1cbiJdfQ== */"]
      });
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_dashboard_dashboard_module_ts-es5.js.map