'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getFutureDate = require('./utils/getFutureDate');

Object.defineProperty(exports, 'getTomorrowDate', {
  enumerable: true,
  get: function get() {
    return _getFutureDate.getTomorrowDate;
  }
});
Object.defineProperty(exports, 'getNextDaysDate', {
  enumerable: true,
  get: function get() {
    return _getFutureDate.getNextDaysDate;
  }
});