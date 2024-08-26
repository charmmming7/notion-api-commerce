export const colorVariants: Record<string, string> = {
  BLACK: 'bg-black',
  DARKBLUE: 'bg-blue-900',
  DARKGRAY: 'bg-gray-800',
  GRAY: 'bg-gray-500',
  GREEN: 'bg-green-500',
  LIGHTBLUE: 'bg-blue-300',
  BLUE: 'bg-blue-500',
  RED: 'bg-red-500',
  WHITE: 'bg-white',
  YELLOW: 'bg-yellow-500',
};

const normalizeColor = (color: string): string => {
  return color
    .toUpperCase() // 대문자로 변환
    .replace(/[\s-]+/g, ''); // 공백 및 하이픈 제거
};

export const getColorVariant = (color: string): string => {
  const normalizedColor = normalizeColor(color);
  return colorVariants[normalizedColor] || '';
};
