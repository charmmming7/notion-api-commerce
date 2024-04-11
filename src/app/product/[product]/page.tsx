// slug: 'Iphone15Pro', 'Iphone15', ...
export default function productPage({ params }: { params: { slug: string } }) {
  return <div>My page: {params.slug}</div>;
}
