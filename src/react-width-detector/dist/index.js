"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var lodash_debounce_1 = __importDefault(require("lodash.debounce"));
var _a = react_1.createContext({ width: 0 }), Provider = _a.Provider, Consumer = _a.Consumer;
exports.WidthProvider = function (_a) {
    var children = _a.children, singleElement = _a.singleElement;
    var _b = react_1.useState(0), width = _b[0], setWidth = _b[1];
    var el = singleElement ? document.querySelectorAll(singleElement)[0] : window;
    var elWidth = el !== window ? el.offsetWidth : el.innerWidth;
    react_1.useEffect(function () {
        var handleResize = function () { return setWidth(elWidth); };
        handleResize();
        el.addEventListener("resize", lodash_debounce_1.default(handleResize));
        return function () { return el.removeEventListener("resize", lodash_debounce_1.default(handleResize)); };
    }, [lodash_debounce_1.default]);
    return react_1.default.createElement(Provider, { value: { width: width } }, children);
};
exports.WidthConsumer = Consumer;
//# sourceMappingURL=index.js.map