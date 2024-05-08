function formatCurrency(value: number) {
  const formatter = new Intl.NumberFormat('ko-KR', {
    style: 'currency',
    currency: 'KRW',
    maximumFractionDigits: 0,
  });
  return formatter.format(value);
}

export default formatCurrency;
