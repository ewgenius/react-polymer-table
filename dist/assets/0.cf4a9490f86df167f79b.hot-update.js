webpackHotUpdate(0,{

/***/ 281:
/***/ function(module, exports, __webpack_require__) {

	eval("/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(77), RootInstanceProvider = __webpack_require__(85), ReactMount = __webpack_require__(87), React = __webpack_require__(139); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {\n\n'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\n__webpack_require__(282);\n\n__webpack_require__(286);\n\n__webpack_require__(292);\n\nvar _react = __webpack_require__(139);\n\nvar _react2 = _interopRequireDefault(_react);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar Element = function (_React$Component) {\n  _inherits(Element, _React$Component);\n\n  function Element(props) {\n    _classCallCheck(this, Element);\n\n    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Element).call(this, props));\n\n    _this.state = {\n      style: {\n        element: {\n          width: props.width,\n          height: props.height\n        },\n        symbol: {\n          backgroundColor: props.background\n        }\n      }\n    };\n    return _this;\n  }\n\n  _createClass(Element, [{\n    key: 'render',\n    value: function render() {\n      return _react2.default.createElement(\n        'div',\n        { className: 'element', style: this.state.style.element },\n        _react2.default.createElement(\n          'div',\n          { style: this.state.style.symbol, className: 'symbol' },\n          this.props.symbol\n        )\n      );\n    }\n  }]);\n\n  return Element;\n}(_react2.default.Component);\n\nvar AppComponent = function (_React$Component2) {\n  _inherits(AppComponent, _React$Component2);\n\n  function AppComponent(props) {\n    _classCallCheck(this, AppComponent);\n\n    var _this2 = _possibleConstructorReturn(this, Object.getPrototypeOf(AppComponent).call(this, props));\n\n    _this2.state = {\n      cardWidth: 90,\n      cardHeight: 90\n    };\n    return _this2;\n  }\n\n  _createClass(AppComponent, [{\n    key: 'render',\n    value: function render() {\n      return _react2.default.createElement(\n        'div',\n        { className: 'app' },\n        _react2.default.createElement(Element, { width: this.state.cardWidth, height: this.state.cardHeight, symbol: 'H' })\n      );\n    }\n  }]);\n\n  return AppComponent;\n}(_react2.default.Component);\n\nAppComponent.defaultProps = {};\n\nexports.default = AppComponent;\n\n/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(289); if (makeExportsHot(module, __webpack_require__(139))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error(\"Cannot not apply hot update to \" + \"Main.js\" + \": \" + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }\n/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)(module)))//@ sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9NYWluLmpzPzdjZDQiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQU1NOzs7QUFDSixXQURJLE9BQ0osQ0FBWSxLQUFaLEVBQW1COzBCQURmLFNBQ2U7O3VFQURmLG9CQUVJLFFBRFc7O0FBRWpCLFVBQUssS0FBTCxHQUFhO0FBQ1gsYUFBTztBQUNMLGlCQUFTO0FBQ1AsaUJBQU8sTUFBTSxLQUFOO0FBQ1Asa0JBQVEsTUFBTSxNQUFOO1NBRlY7QUFJQSxnQkFBUTtBQUNOLDJCQUFpQixNQUFNLFVBQU47U0FEbkI7T0FMRjtLQURGLENBRmlCOztHQUFuQjs7ZUFESTs7NkJBZ0JLO0FBQ1AsYUFBTzs7VUFBSyxXQUFVLFNBQVYsRUFBb0IsT0FBTyxLQUFLLEtBQUwsQ0FBVyxLQUFYLENBQWlCLE9BQWpCLEVBQWhDO1FBQ0w7O1lBQUssT0FBTyxLQUFLLEtBQUwsQ0FBVyxLQUFYLENBQWlCLE1BQWpCLEVBQXlCLFdBQVUsUUFBVixFQUFyQztVQUNHLEtBQUssS0FBTCxDQUFXLE1BQVg7U0FGRTtPQUFQLENBRE87Ozs7U0FoQkw7RUFBZ0IsZ0JBQU0sU0FBTjs7SUF5QmhCOzs7QUFDSixXQURJLFlBQ0osQ0FBWSxLQUFaLEVBQW1COzBCQURmLGNBQ2U7O3dFQURmLHlCQUVJLFFBRFc7O0FBRWpCLFdBQUssS0FBTCxHQUFhO0FBQ1gsaUJBQVcsRUFBWDtBQUNBLGtCQUFZLEVBQVo7S0FGRixDQUZpQjs7R0FBbkI7O2VBREk7OzZCQVNLO0FBQ1AsYUFBTzs7VUFBSyxXQUFVLEtBQVYsRUFBTDtRQUNMLDhCQUFDLE9BQUQsSUFBUyxPQUFPLEtBQUssS0FBTCxDQUFXLFNBQVgsRUFBc0IsUUFBUSxLQUFLLEtBQUwsQ0FBVyxVQUFYLEVBQXVCLFFBQU8sR0FBUCxFQUFyRSxDQURLO09BQVAsQ0FETzs7OztTQVRMO0VBQXFCLGdCQUFNLFNBQU47O0FBZ0IzQixhQUFhLFlBQWIsR0FBNEIsRUFBNUI7O2tCQUVlLGEiLCJmaWxlIjoiMjgxLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICdub3JtYWxpemUuY3NzJztcbmltcG9ydCAnc3R5bGVzL0FwcC5zY3NzJztcbmltcG9ydCAnc3R5bGVzL0VsZW1lbnQuc2Nzcyc7XG5cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmNsYXNzIEVsZW1lbnQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgc3R5bGU6IHtcbiAgICAgICAgZWxlbWVudDoge1xuICAgICAgICAgIHdpZHRoOiBwcm9wcy53aWR0aCxcbiAgICAgICAgICBoZWlnaHQ6IHByb3BzLmhlaWdodFxuICAgICAgICB9LFxuICAgICAgICBzeW1ib2w6IHtcbiAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IHByb3BzLmJhY2tncm91bmRcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPSdlbGVtZW50JyBzdHlsZT17dGhpcy5zdGF0ZS5zdHlsZS5lbGVtZW50fT5cbiAgICAgIDxkaXYgc3R5bGU9e3RoaXMuc3RhdGUuc3R5bGUuc3ltYm9sfSBjbGFzc05hbWU9J3N5bWJvbCc+XG4gICAgICAgIHt0aGlzLnByb3BzLnN5bWJvbH1cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICB9XG59XG5cbmNsYXNzIEFwcENvbXBvbmVudCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBjYXJkV2lkdGg6IDkwLFxuICAgICAgY2FyZEhlaWdodDogOTBcbiAgICB9O1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT0nYXBwJz5cbiAgICAgIDxFbGVtZW50IHdpZHRoPXt0aGlzLnN0YXRlLmNhcmRXaWR0aH0gaGVpZ2h0PXt0aGlzLnN0YXRlLmNhcmRIZWlnaHR9IHN5bWJvbD1cIkhcIi8+XG4gICAgPC9kaXY+XG4gIH1cbn1cblxuQXBwQ29tcG9uZW50LmRlZmF1bHRQcm9wcyA9IHt9O1xuXG5leHBvcnQgZGVmYXVsdCBBcHBDb21wb25lbnQ7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9jb21wb25lbnRzL01haW4uanNcbiAqKi8iXSwic291cmNlUm9vdCI6IiJ9");

/***/ }

})