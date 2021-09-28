"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.usdc = exports.token = exports.bridge = exports.addresses = void 0;
var addresses_json_1 = __importDefault(require("../artifacts/addresses.json"));
var bridge_json_1 = __importDefault(require("../artifacts/bridge.json"));
var package_json_1 = __importDefault(require("../package.json"));
var token_json_1 = __importDefault(require("../artifacts/token.json"));
var usdc_json_1 = __importDefault(require("../artifacts/usdc.json"));
exports.addresses = addresses_json_1["default"];
exports.bridge = bridge_json_1["default"];
exports.token = token_json_1["default"];
exports.usdc = usdc_json_1["default"];
var mod = {
    version: package_json_1["default"].version,
    addresses: exports.addresses,
    bridge: exports.bridge,
    token: exports.token,
    usdc: exports.usdc
};
exports["default"] = mod;
