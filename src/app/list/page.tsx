export default function List() {
  const products = ['Tomatoes', 'Pasta', 'Coconut'];

  return (
    <div className="flex justify-center bg-gray-800 p-10">
      <div className=" text-center text-white">
        <h1 className="mb-4 text-3xl">상품목록</h1>
        {products.map((p) => {
          return (
            <div className="mb-2" key={p.toString()}>
              <strong className="p-4 pt-2">{p} 40$</strong>
            </div>
          );
        })}
      </div>
    </div>
  );
}
