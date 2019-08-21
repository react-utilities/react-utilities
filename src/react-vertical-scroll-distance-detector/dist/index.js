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
var _a = react_1.createContext({ verticalScrollDistance: 0 }), Provider = _a.Provider, Consumer = _a.Consumer;
exports.VerticalScrollDistanceProvider = function (_a) {
    var children = _a.children, singleElement = _a.singleElement;
    var _b = react_1.useState(0), verticalScrollDistance = _b[0], setVerticalScrollDistance = _b[1];
    var el = singleElement ? document.querySelectorAll(singleElement)[0] : window;
    react_1.useEffect(function () {
        var handleScroll = function () { return setVerticalScrollDistance(window.scrollY); };
        handleScroll();
        window.addEventListener("scroll", lodash_debounce_1.default(handleScroll));
        return function () { return window.removeEventListener("scroll", lodash_debounce_1.default(handleScroll)); };
    }, [lodash_debounce_1.default]);
    return react_1.default.createElement(Provider, { value: { verticalScrollDistance: verticalScrollDistance } }, children);
};
exports.VerticalScrollDistanceConsumer = Consumer;
exports.WidthConsumer = Consumer;
//# sourceMappingURL=index.js.map