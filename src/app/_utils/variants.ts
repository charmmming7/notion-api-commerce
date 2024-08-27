export const colorVariants: Record<string, string> = {
  BLACK: 'bg-black',
  DARKBLUE: 'bg-blue-800',
  DARKGRAY: 'bg-gray-800',
  GRAY: 'bg-gray-500',
  GREEN: 'bg-green-500',
  LIGHTBLUE: 'bg-blue-300',
  BLUE: 'bg-blue-500',
  RED: 'bg-red-500',
  WHITE: 'bg-white',
  YELLOW: 'bg-yellow-500',
};

export type TagType = 'HOT' | 'BEST' | 'NEW';

const normalizeName = (value: string): string => {
  return value
    .toUpperCase() // 대문자로 변환
    .replace(/[\s-]+/g, ''); // 공백 및 하이픈 제거
};

// 색상 변환
export const getColorVariant = (value: string): string => {
  const normalizedValue = normalizeName(value);
  return colorVariants[normalizedValue] || '';
};

// 태그 변환
export const getTagVariant = (value: string): string => {
  const normalizedValue = normalizeName(value);
  return normalizedValue;
};
