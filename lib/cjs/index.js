"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _binaryParser = require("binary-parser");

function divideByOneHundred(value) {
  return value / 100;
}

const atcMiThermometerParser = new _binaryParser.Parser().endianess('little').buffer('mac', {
  length: 6,
  formatter: macBuffer => macBuffer.reverse()
}).int16('temperature', {
  formatter: divideByOneHundred
}).int16('humidity', {
  formatter: divideByOneHundred
}).uint16('batteryVoltage').uint8('batteryLevel').uint8('counter').uint8('flags');
var _default = atcMiThermometerParser;
exports.default = _default;
module.exports = exports.default;