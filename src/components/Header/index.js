"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var HeaderLogo_1 = __importDefault(require("./HeaderLogo"));
var HeaderMenu_1 = __importDefault(require("./HeaderMenu"));
var Header_module_scss_1 = __importDefault(require("./Header.module.scss"));
var Header = function () {
    return (react_1.default.createElement("div", { className: Header_module_scss_1.default.wrapper },
        react_1.default.createElement(HeaderLogo_1.default, null),
        react_1.default.createElement(HeaderMenu_1.default, null)));
};
exports.default = Header;
//# sourceMappingURL=index.js.map