webpackHotUpdate(0,{

/***/ 281:
/***/ function(module, exports, __webpack_require__) {

	eval("/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(77), RootInstanceProvider = __webpack_require__(85), ReactMount = __webpack_require__(87), React = __webpack_require__(139); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {\n\n'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(139);\n\nvar _react2 = _interopRequireDefault(_react);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\n__webpack_require__(282);\n__webpack_require__(286);\n\nvar ElementCard = function (_React$Component) {\n  _inherits(ElementCard, _React$Component);\n\n  function ElementCard(props) {\n    _classCallCheck(this, ElementCard);\n\n    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(ElementCard).call(this, props));\n\n    _this.state = {\n      style: {\n        symbol: {\n          width: props.width,\n          height: props.height,\n          'background-color': props.background\n        }\n      }\n    };\n    return _this;\n  }\n\n  _createClass(ElementCard, [{\n    key: 'render',\n    value: function render() {\n      return _react2.default.createElement(\n        'div',\n        { className: 'element' },\n        _react2.default.createElement(\n          'div',\n          { style: this.state.style.symbol, className: 'symbol' },\n          this.props.symbol\n        )\n      );\n    }\n  }]);\n\n  return ElementCard;\n}(_react2.default.Component);\n\nvar AppComponent = function (_React$Component2) {\n  _inherits(AppComponent, _React$Component2);\n\n  function AppComponent(props) {\n    _classCallCheck(this, AppComponent);\n\n    var _this2 = _possibleConstructorReturn(this, Object.getPrototypeOf(AppComponent).call(this, props));\n\n    _this2.state = {\n      cardWidth: 90,\n      cardHeight: 90\n    };\n    return _this2;\n  }\n\n  _createClass(AppComponent, [{\n    key: 'render',\n    value: function render() {\n      return _react2.default.createElement(\n        'div',\n        { className: 'app' },\n        _react2.default.createElement(ElementCard, { width: this.state.cardWidth, height: this.state.cardHeight, symbol: 'H' })\n      );\n    }\n  }]);\n\n  return AppComponent;\n}(_react2.default.Component);\n\nAppComponent.defaultProps = {};\n\nexports.default = AppComponent;\n\n/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(289); if (makeExportsHot(module, __webpack_require__(139))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error(\"Cannot not apply hot update to \" + \"Main.js\" + \": \" + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }\n/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)(module)))//@ sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9NYWluLmpzPzdjZDQiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFRLEdBQVI7QUFDQSxvQkFBUSxHQUFSOztJQUlNOzs7QUFDSixXQURJLFdBQ0osQ0FBWSxLQUFaLEVBQW1COzBCQURmLGFBQ2U7O3VFQURmLHdCQUVJLFFBRFc7O0FBRWpCLFVBQUssS0FBTCxHQUFhO0FBQ1gsYUFBTztBQUNMLGdCQUFRO0FBQ04saUJBQU8sTUFBTSxLQUFOO0FBQ1Asa0JBQVEsTUFBTSxNQUFOO0FBQ1IsOEJBQW9CLE1BQU0sVUFBTjtTQUh0QjtPQURGO0tBREYsQ0FGaUI7O0dBQW5COztlQURJOzs2QkFjSztBQUNQLGFBQU87O1VBQUssV0FBVSxTQUFWLEVBQUw7UUFDTDs7WUFBSyxPQUFPLEtBQUssS0FBTCxDQUFXLEtBQVgsQ0FBaUIsTUFBakIsRUFBeUIsV0FBVSxRQUFWLEVBQXJDO1VBQ0csS0FBSyxLQUFMLENBQVcsTUFBWDtTQUZFO09BQVAsQ0FETzs7OztTQWRMO0VBQW9CLGdCQUFNLFNBQU47O0lBdUJwQjs7O0FBQ0osV0FESSxZQUNKLENBQVksS0FBWixFQUFtQjswQkFEZixjQUNlOzt3RUFEZix5QkFFSSxRQURXOztBQUVqQixXQUFLLEtBQUwsR0FBYTtBQUNYLGlCQUFXLEVBQVg7QUFDQSxrQkFBWSxFQUFaO0tBRkYsQ0FGaUI7O0dBQW5COztlQURJOzs2QkFTSztBQUNQLGFBQU87O1VBQUssV0FBVSxLQUFWLEVBQUw7UUFDTCw4QkFBQyxXQUFELElBQWEsT0FBTyxLQUFLLEtBQUwsQ0FBVyxTQUFYLEVBQXNCLFFBQVEsS0FBSyxLQUFMLENBQVcsVUFBWCxFQUF1QixRQUFPLEdBQVAsRUFBekUsQ0FESztPQUFQLENBRE87Ozs7U0FUTDtFQUFxQixnQkFBTSxTQUFOOztBQWdCM0IsYUFBYSxZQUFiLEdBQTRCLEVBQTVCOztrQkFFZSxhIiwiZmlsZSI6IjI4MS5qcyIsInNvdXJjZXNDb250ZW50IjpbInJlcXVpcmUoJ25vcm1hbGl6ZS5jc3MnKTtcbnJlcXVpcmUoJ3N0eWxlcy9BcHAuc2NzcycpO1xuXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5jbGFzcyBFbGVtZW50Q2FyZCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBzdHlsZToge1xuICAgICAgICBzeW1ib2w6IHtcbiAgICAgICAgICB3aWR0aDogcHJvcHMud2lkdGgsXG4gICAgICAgICAgaGVpZ2h0OiBwcm9wcy5oZWlnaHQsXG4gICAgICAgICAgJ2JhY2tncm91bmQtY29sb3InOiBwcm9wcy5iYWNrZ3JvdW5kXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT0nZWxlbWVudCc+XG4gICAgICA8ZGl2IHN0eWxlPXt0aGlzLnN0YXRlLnN0eWxlLnN5bWJvbH0gY2xhc3NOYW1lPSdzeW1ib2wnPlxuICAgICAgICB7dGhpcy5wcm9wcy5zeW1ib2x9XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgfVxufVxuXG5jbGFzcyBBcHBDb21wb25lbnQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgY2FyZFdpZHRoOiA5MCxcbiAgICAgIGNhcmRIZWlnaHQ6IDkwXG4gICAgfTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9J2FwcCc+XG4gICAgICA8RWxlbWVudENhcmQgd2lkdGg9e3RoaXMuc3RhdGUuY2FyZFdpZHRofSBoZWlnaHQ9e3RoaXMuc3RhdGUuY2FyZEhlaWdodH0gc3ltYm9sPVwiSFwiLz5cbiAgICA8L2Rpdj5cbiAgfVxufVxuXG5BcHBDb21wb25lbnQuZGVmYXVsdFByb3BzID0ge307XG5cbmV4cG9ydCBkZWZhdWx0IEFwcENvbXBvbmVudDtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2NvbXBvbmVudHMvTWFpbi5qc1xuICoqLyJdLCJzb3VyY2VSb290IjoiIn0=");

/***/ }

})