define("bundles/quiz-summative/components/CertificatePrice",["require","exports","module","react","underscore","bundles/payments-common/components/ReactPriceDisplay","bundles/payments/models/productPrice","bundles/payments/promises/productPrices","js/lib/getPropsFromPromise","js/lib/waitFor"],function(require,exports,module){"use strict";function _defaults(e,n){for(var s=Object.getOwnPropertyNames(n),r=0;r<s.length;r++){var t=s[r],o=Object.getOwnPropertyDescriptor(n,t);o&&o.configurable&&void 0===e[t]&&Object.defineProperty(e,t,o)}return e}function _classCallCheck(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(r,e){if(!r)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?r:e}function _inherits(r,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);r.prototype=Object.create(e&&e.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(r,e):_defaults(r,e))}var t,o,e=require("react"),a=require("underscore"),n=a.compose,s=require("bundles/payments-common/components/ReactPriceDisplay"),c=require("bundles/payments/models/productPrice"),i=require("bundles/payments/promises/productPrices"),p=require("js/lib/getPropsFromPromise"),u=require("js/lib/waitFor"),r=(o=t=function(r){function CertificatePrice(){return _classCallCheck(this,CertificatePrice),_possibleConstructorReturn(this,r.apply(this,arguments))}return _inherits(CertificatePrice,r),CertificatePrice.prototype.render=function render(){var r=this.props.price;return e.createElement(s,{value:r.getDisplayAmount(),currency:r.getDisplayCurrencyCode()})},CertificatePrice}(e.Component),t.propTypes={price:e.PropTypes.instanceOf(c)},o);module.exports=n(p(function(e){var r=e.courseId;return i.getPriceForVC({courseId:r})}),u(function(e){var r=e.price;return!!r}))(r),module.exports.BaseComp=r});