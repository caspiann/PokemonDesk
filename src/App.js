"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var App_module_scss_1 = __importDefault(require("./App.module.scss"));
var App = function () {
    return react_1.default.createElement("h1", { className: App_module_scss_1.default.header }, "This is App Component!");
};
exports.default = App;
//# sourceMappingURL=App.js.map