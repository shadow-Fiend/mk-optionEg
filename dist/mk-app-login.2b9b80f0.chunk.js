webpackJsonp([18],{

/***/ 1606:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = undefined;

var _extends2 = __webpack_require__(2);

var _extends3 = _interopRequireDefault(_extends2);

var _getPrototypeOf = __webpack_require__(54);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(5);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(9);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(7);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(8);

var _inherits3 = _interopRequireDefault(_inherits2);

var _dec, _class;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _mkMetaEngine = __webpack_require__(254);

var _index = __webpack_require__(592);

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var C = (_dec = (0, _mkMetaEngine.wrapper)(_index2.default), _dec(_class = function (_Component) {
	(0, _inherits3.default)(C, _Component);

	function C() {
		(0, _classCallCheck3.default)(this, C);
		return (0, _possibleConstructorReturn3.default)(this, (C.__proto__ || (0, _getPrototypeOf2.default)(C)).apply(this, arguments));
	}

	(0, _createClass3.default)(C, [{
		key: 'render',
		value: function render() {
			return this.props.monkeyKing((0, _extends3.default)({}, this.props, { path: 'root' }));
		}
	}]);
	return C;
}(_react.Component)) || _class);
exports.default = C;
module.exports = exports['default'];

/***/ }),

/***/ 1607:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _assign = __webpack_require__(21);

var _assign2 = _interopRequireDefault(_assign);

var _extends2 = __webpack_require__(2);

var _extends3 = _interopRequireDefault(_extends2);

var _getIterator2 = __webpack_require__(82);

var _getIterator3 = _interopRequireDefault(_getIterator2);

var _regenerator = __webpack_require__(568);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(569);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _classCallCheck2 = __webpack_require__(5);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

exports.default = creator;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _mkMetaEngine = __webpack_require__(254);

var _config = __webpack_require__(571);

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var action = function action(option) {
    var _this = this;

    (0, _classCallCheck3.default)(this, action);

    this.onInit = function (_ref) {
        var component = _ref.component,
            injections = _ref.injections;

        _this.component = component;
        _this.injections = injections;
        injections.reduce('init');
    };

    this.getLogo = function () {
        return _this.config.logo;
    };

    this.login = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
        var form, ok, response;
        return _regenerator2.default.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        form = _this.metaAction.gf('data.form').toJS();
                        _context.next = 3;
                        return _this.check([{
                            path: 'data.form.mobile', value: form.mobile
                        }, {
                            path: 'data.form.password', value: form.password
                        }]);

                    case 3:
                        ok = _context.sent;

                        if (ok) {
                            _context.next = 6;
                            break;
                        }

                        return _context.abrupt('return');

                    case 6:
                        _context.next = 8;
                        return _this.webapi.user.login(form);

                    case 8:
                        response = _context.sent;

                        _this.metaAction.context.set('currentUser', response);

                        if (_this.component.props.onRedirect && _this.config.goAfterLogin) {
                            _this.component.props.onRedirect(_this.config.goAfterLogin);
                        }

                    case 11:
                    case 'end':
                        return _context.stop();
                }
            }
        }, _callee, _this);
    }));

    this.goRegister = function () {
        if (!_this.config.apps['mk-app-register']) {
            throw '请将这个应用加入到带mk-app-root和mk-app-register的网站中，跳转功能才能正常使用';
        }
        if (_this.component.props.onRedirect && _this.config.goRegister) {
            _this.component.props.onRedirect(_this.config.goRegister);
        }
    };

    this.goForgot = function () {
        if (!_this.config.apps['mk-app-forgot-password']) {
            throw '请将这个应用加入到带mk-app-root和mk-app-forgot-password的网站中，跳转功能才能正常使用';
        }
        if (_this.component.props.onRedirect && _this.config.goForgot) {
            _this.component.props.onRedirect(_this.config.goForgot);
        }
    };

    this.fieldChange = function () {
        var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(fieldPath, value) {
            return _regenerator2.default.wrap(function _callee2$(_context2) {
                while (1) {
                    switch (_context2.prev = _context2.next) {
                        case 0:
                            _context2.next = 2;
                            return _this.check([{ path: fieldPath, value: value }]);

                        case 2:
                        case 'end':
                            return _context2.stop();
                    }
                }
            }, _callee2, _this);
        }));

        return function (_x, _x2) {
            return _ref3.apply(this, arguments);
        };
    }();

    this.check = function () {
        var _ref4 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3(fieldPathAndValues) {
            var checkResults, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, o, r, json, hasError;

            return _regenerator2.default.wrap(function _callee3$(_context3) {
                while (1) {
                    switch (_context3.prev = _context3.next) {
                        case 0:
                            if (fieldPathAndValues) {
                                _context3.next = 2;
                                break;
                            }

                            return _context3.abrupt('return');

                        case 2:
                            checkResults = [];
                            _iteratorNormalCompletion = true;
                            _didIteratorError = false;
                            _iteratorError = undefined;
                            _context3.prev = 6;
                            _iterator = (0, _getIterator3.default)(fieldPathAndValues);

                        case 8:
                            if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
                                _context3.next = 31;
                                break;
                            }

                            o = _step.value;
                            r = (0, _extends3.default)({}, o);

                            if (!(o.path == 'data.form.mobile')) {
                                _context3.next = 20;
                                break;
                            }

                            _context3.t0 = _assign2.default;
                            _context3.t1 = r;
                            _context3.next = 16;
                            return _this.checkMobile(o.value);

                        case 16:
                            _context3.t2 = _context3.sent;
                            (0, _context3.t0)(_context3.t1, _context3.t2);
                            _context3.next = 27;
                            break;

                        case 20:
                            if (!(o.path == 'data.form.password')) {
                                _context3.next = 27;
                                break;
                            }

                            _context3.t3 = _assign2.default;
                            _context3.t4 = r;
                            _context3.next = 25;
                            return _this.checkPassword(o.value);

                        case 25:
                            _context3.t5 = _context3.sent;
                            (0, _context3.t3)(_context3.t4, _context3.t5);

                        case 27:
                            checkResults.push(r);

                        case 28:
                            _iteratorNormalCompletion = true;
                            _context3.next = 8;
                            break;

                        case 31:
                            _context3.next = 37;
                            break;

                        case 33:
                            _context3.prev = 33;
                            _context3.t6 = _context3['catch'](6);
                            _didIteratorError = true;
                            _iteratorError = _context3.t6;

                        case 37:
                            _context3.prev = 37;
                            _context3.prev = 38;

                            if (!_iteratorNormalCompletion && _iterator.return) {
                                _iterator.return();
                            }

                        case 40:
                            _context3.prev = 40;

                            if (!_didIteratorError) {
                                _context3.next = 43;
                                break;
                            }

                            throw _iteratorError;

                        case 43:
                            return _context3.finish(40);

                        case 44:
                            return _context3.finish(37);

                        case 45:
                            json = {};
                            hasError = true;

                            checkResults.forEach(function (o) {
                                json[o.path] = o.value;
                                json[o.errorPath] = o.message;
                                if (o.message) hasError = false;
                            });

                            _this.metaAction.sfs(json);

                            return _context3.abrupt('return', hasError);

                        case 50:
                        case 'end':
                            return _context3.stop();
                    }
                }
            }, _callee3, _this, [[6, 33, 37, 45], [38,, 40, 44]]);
        }));

        return function (_x3) {
            return _ref4.apply(this, arguments);
        };
    }();

    this.checkMobile = function () {
        var _ref5 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee4(mobile) {
            var message;
            return _regenerator2.default.wrap(function _callee4$(_context4) {
                while (1) {
                    switch (_context4.prev = _context4.next) {
                        case 0:

                            if (!mobile) message = '请录入手机号';else if (!/^1[3|4|5|8][0-9]\d{8}$/.test(mobile)) message = '请录入有效的手机号';

                            return _context4.abrupt('return', { errorPath: 'data.other.error.mobile', message: message });

                        case 2:
                        case 'end':
                            return _context4.stop();
                    }
                }
            }, _callee4, _this);
        }));

        return function (_x4) {
            return _ref5.apply(this, arguments);
        };
    }();

    this.checkPassword = function () {
        var _ref6 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee5(password) {
            var message;
            return _regenerator2.default.wrap(function _callee5$(_context5) {
                while (1) {
                    switch (_context5.prev = _context5.next) {
                        case 0:

                            if (!password) message = '请录入密码';

                            return _context5.abrupt('return', { errorPath: 'data.other.error.password', message: message });

                        case 2:
                        case 'end':
                            return _context5.stop();
                    }
                }
            }, _callee5, _this);
        }));

        return function (_x5) {
            return _ref6.apply(this, arguments);
        };
    }();

    this.metaAction = option.metaAction;
    this.config = _config2.default.current;
    this.webapi = this.config.webapi;
};

function creator(option) {
    var metaAction = new _mkMetaEngine.action(option),
        o = new action((0, _extends3.default)({}, option, { metaAction: metaAction })),
        ret = (0, _extends3.default)({}, metaAction, o);

    metaAction.config({ metaHandlers: ret });

    return ret;
}
module.exports = exports['default'];

/***/ }),

/***/ 1608:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = __webpack_require__(2);

var _extends3 = _interopRequireDefault(_extends2);

var _classCallCheck2 = __webpack_require__(5);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

exports.default = creator;

var _immutable = __webpack_require__(167);

var _mkMetaEngine = __webpack_require__(254);

var _config = __webpack_require__(571);

var _config2 = _interopRequireDefault(_config);

var _data = __webpack_require__(593);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var reducer = function reducer(option) {
    var _this = this;

    (0, _classCallCheck3.default)(this, reducer);

    this.init = function (state, option) {
        return _this.metaReducer.init(state, (0, _data.getInitState)());
    };

    this.metaReducer = option.metaReducer;
};

function creator(option) {
    var metaReducer = new _mkMetaEngine.reducer(option),
        o = new reducer((0, _extends3.default)({}, option, { metaReducer: metaReducer }));

    return (0, _extends3.default)({}, metaReducer, o);
}
module.exports = exports['default'];

/***/ })

});
//# sourceMappingURL=mk-app-login.2b9b80f0.chunk.js.map