export const toCurrency = (num: number) => {
  return Number(num).toLocaleString('vi-VN', {
    style: 'currency',
    currency: 'VND'
  });
};
