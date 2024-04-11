import List from '@/components/List';

export const products = [
  { name: 'Iphone15Pro' },
  { name: 'Iphone15' },
  { name: 'Iphone14' },
];

export default function Home() {
  return (
    <div className="flex justify-center p-10">
      <List products={products} />
    </div>
  );
}
