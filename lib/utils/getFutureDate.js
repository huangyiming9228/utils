'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * get date of tomorrow
 * @returns {string} date format: YYYY-MM-DD
 * @example
 * today date is '2019-03-27'
 * getTomorrowDate() => '2019-03-28'
 */
var getTomorrowDate = exports.getTomorrowDate = function getTomorrowDate() {
  var date = new Date();
  date.setTime(date.getTime() + 24 * 60 * 60 * 1000);
  var month = date.getMonth() + 1;
  month = month < 10 ? '0' + month : month;
  var day = date.getDate();
  day = day < 10 ? '0' + day : day;
  return date.getFullYear() + '-' + month + '-' + day;
};

/**
 * get date of next few days
 * @returns {string} date format: YYYY-MM-DD
 * @example
 * today date is '2019-03-27'
 * getTomorrowDate(3) => '2019-03-30'
 */
var getNextDaysDate = exports.getNextDaysDate = function getNextDaysDate(n) {
  var date = new Date();
  date.setTime(date.getTime() + 24 * 60 * 60 * 1000 * n);
  var month = date.getMonth() + 1;
  month = month < 10 ? '0' + month : month;
  var day = date.getDate();
  day = day < 10 ? '0' + day : day;
  return date.getFullYear() + '-' + month + '-' + day;
};