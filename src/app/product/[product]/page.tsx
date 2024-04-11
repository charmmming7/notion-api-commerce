// slug(product): 'Iphone15Pro', 'Iphone15', ...
export default function productPage({
  params,
}: {
  params: { product: string };
}) {
  return <div>My page: {params.product}</div>;
}
