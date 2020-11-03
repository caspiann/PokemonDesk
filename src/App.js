"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var App_module_scss_1 = __importDefault(require("./App.module.scss"));
var Header_1 = __importDefault(require("./components/Header"));
var Content_1 = __importDefault(require("./components/Content"));
var Footer_1 = __importDefault(require("./components/Footer"));
var App = function () {
    return (react_1.default.createElement("div", { className: App_module_scss_1.default.header },
        react_1.default.createElement(Header_1.default, null),
        react_1.default.createElement(Content_1.default, null),
        react_1.default.createElement(Footer_1.default, null)));
};
exports.default = App;
//# sourceMappingURL=App.js.map