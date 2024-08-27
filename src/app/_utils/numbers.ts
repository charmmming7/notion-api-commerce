export const isValidValue = (value: any): boolean => {
  return value !== undefined && value !== null && value !== 0;
};

export function formatCurrency(value: number) {
  return new Intl.NumberFormat('ko-KR', {
    style: 'decimal',
    maximumFractionDigits: 0,
  }).format(value);
}
