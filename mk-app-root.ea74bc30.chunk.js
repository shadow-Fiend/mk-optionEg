webpackJsonp([3],{

/***/ 1668:
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

var _index = __webpack_require__(631);

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

/***/ 1669:
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

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _mkMetaEngine = __webpack_require__(254);

var _config = __webpack_require__(255);

var _config2 = _interopRequireDefault(_config);

var _mkUtils = __webpack_require__(15);

var _data = __webpack_require__(590);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var action = function action(option) {
    var _this = this;

    (0, _classCallCheck3.default)(this, action);

    this.onInit = function (_ref) {
        var component = _ref.component,
            injections = _ref.injections;

        _this.component = component;
        _this.injections = injections;
        var initState = (0, _data.getInitState)(),
            defaultAppName = initState.data.currentAppName;

        injections.reduce('init', { initState: initState });

        _mkUtils.history.listen('mk-app-root', _this.listen);
        _this.onRedirect({ appName: _mkUtils.history.getChildApp('mk-app-root') || defaultAppName });
    };

    this.listen = function (childApp, location, action) {
        var defaultAppName = (0, _data.getInitState)().data.currentAppName;
        var currentAppName = _this.metaAction.gf('data.currentAppName') || defaultAppName;
        var targetAppName = childApp || defaultAppName;
        if (targetAppName == currentAppName) {
            return;
        }
        _this.injections.reduce('redirect', targetAppName);
    };

    this.onRedirect = function (_ref2) {
        var appName = _ref2.appName;

        _mkUtils.history.pushChildApp('mk-app-root', appName);
    };

    this.componentWillUnmount = function () {
        _mkUtils.history.unlisten('mk-app-root', _this.listen);
    };

    this.metaAction = option.metaAction;
    this.config = _config2.default.current;
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

/***/ 1670:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = __webpack_require__(2);

var _extends3 = _interopRequireDefault(_extends2);

var _classCallCheck2 = __webpack_require__(5);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _class, _temp, _initialiseProps;

exports.default = creator;

var _immutable = __webpack_require__(167);

var _mkMetaEngine = __webpack_require__(254);

var _config = __webpack_require__(255);

var _config2 = _interopRequireDefault(_config);

var _data = __webpack_require__(590);

var _mkUtils = __webpack_require__(15);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var reducer = (_temp = _class = function reducer(option) {
    (0, _classCallCheck3.default)(this, reducer);

    _initialiseProps.call(this);

    this.metaReducer = option.metaReducer;
    this.config = _config2.default.current;
}, _initialiseProps = function _initialiseProps() {
    var _this = this;

    this.init = function (state, option) {
        return _this.metaReducer.init(state, option.initState);
    };

    this.redirect = function (state, appName) {
        return _this.metaReducer.sf(state, 'data.currentAppName', appName);
    };
}, _temp);
function creator(option) {
    var metaReducer = new _mkMetaEngine.reducer(option),
        o = new reducer((0, _extends3.default)({}, option, { metaReducer: metaReducer }));

    return (0, _extends3.default)({}, metaReducer, o);
}
module.exports = exports['default'];

/***/ })

});
//# sourceMappingURL=mk-app-root.ea74bc30.chunk.js.map