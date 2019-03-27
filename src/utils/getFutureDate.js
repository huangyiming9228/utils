/**
 * get date of tomorrow
 * @returns {string} date format: YYYY-MM-DD
 * @example
 * today is '2019-03-27'
 * getTomorrowDate() => '2019-03-28'
 */
export const getTomorrowDate = () => {
  let date = new Date();
  date.setTime(date.getTime() + 24 * 60 * 60 * 1000);
  let month = date.getMonth() + 1;
  month = month < 10 ? ('0' + month) : month;
  let day = date.getDate();
  day = day < 10 ? ('0' + day) : day;
  return date.getFullYear() + '-' + month + '-' + day;
}

/**
 * get date of next few days
 * @returns {string} date format: YYYY-MM-DD
 * @example
 * today is '2019-03-27'
 * getTomorrowDate(3) => '2019-03-30'
 */
export const getNextDaysDate = (n) => {
  let date = new Date();
  date.setTime(date.getTime() + 24 * 60 * 60 * 1000 * n);
  let month = date.getMonth() + 1;
  month = month < 10 ? ('0' + month) : month;
  let day = date.getDate();
  day = day < 10 ? ('0' + day) : day;
  return date.getFullYear() + '-' + month + '-' + day;
}
