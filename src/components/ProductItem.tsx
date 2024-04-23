import {ProductProps} from "@/lib/types/product";

function ProductItem(
  props: ProductProps
) {
  const { name, quantity, brand, content } = props;


  return (
    <article className="w-full mb-10 flex flex-col items-center pt-20">
      <h1 className="text-6xl font-black mb-8">{name}</h1>
      <div>Brand: {brand}</div>
      <div>Quantity: {quantity}</div>
      {content && 
      <div
        className="text-xl mt-4 max-w-3xl leading-10 prose prose-p:text-white prose-headings:text-white"
        dangerouslySetInnerHTML={{ __html: content }}
      ></div>
      }
    </article>
  );
}

export default ProductItem;
