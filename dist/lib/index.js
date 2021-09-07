"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var addresses_json_1 = __importDefault(require("../artifacts/addresses.json"));
var bridge_json_1 = __importDefault(require("../artifacts/bridge.json"));
var package_json_1 = __importDefault(require("../package.json"));
var token_json_1 = __importDefault(require("../artifacts/token.json"));
var mod = {
    version: package_json_1["default"].version,
    addresses: addresses_json_1["default"],
    bridge: bridge_json_1["default"],
    token: token_json_1["default"]
};
exports["default"] = mod;
