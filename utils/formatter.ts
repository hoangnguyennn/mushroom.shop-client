import { dayOfWeek } from '@constants/index';
import i18n from '@locales/index';

export const toCurrency = (num: number) => {
  return Number(num).toLocaleString('vi-VN', {
    style: 'currency',
    currency: 'VND'
  });
};

export const isoDateToNativeDate = (
  date?: string | number,
  showTimeBefore = false,
  withDayOfWeek = false
) => {
  let dateObject = new Date();

  if (date) {
    dateObject = new Date(date);
  }

  const currentDate = toNDigits(dateObject.getDate());
  const currentMonth = toNDigits(dateObject.getMonth() + 1);
  const currentYear = toNDigits(dateObject.getFullYear(), 4);
  const dateRes = [currentDate, currentMonth, currentYear].join('/');

  const currentHour = toNDigits(dateObject.getHours());
  const currentMin = toNDigits(dateObject.getMinutes());
  const currentSec = toNDigits(dateObject.getSeconds());
  const timeRes = [currentHour, currentMin, currentSec].join(':');

  const dayOfWeektText = withDayOfWeek
    ? i18n.t(dayOfWeek[dateObject.getDay()])
    : '';

  if (showTimeBefore) {
    return `${timeRes}${withDayOfWeek ? `, ${dayOfWeektText}` : ''} ${dateRes}`;
  }

  return `${withDayOfWeek ? dayOfWeektText : ''} ${dateRes}, ${timeRes}`;
};

/**
 *
 * Convert a number or string to a new string with specifical length
 * @param num
 * @param numberOfDigits
 * @returns
 */
export const toNDigits = (num: number | string, numberOfDigits = 2) => {
  const zeroBefore = Array.from(new Array(numberOfDigits))
    .fill(0)
    .join('');
  return `${zeroBefore}${num}`.slice(-numberOfDigits);
};

export const numberWithDot = (num: number | string) => {
  return String(num).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.');
};

export default {
  isoDateToNativeDate,
  numberWithDot,
  toCurrency
};
