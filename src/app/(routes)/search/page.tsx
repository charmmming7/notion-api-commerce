import Search from '@/app/_components/Search';
import { getDatabySearch } from '@/app/_utils/notion';
import ProductList from '@components/product/ProductList';

const SearchPage = async ({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    page?: string;
  };
}) => {
  const query = searchParams?.query || '';
  const products = await getDatabySearch(query);

  return (
    <div className="m-auto mt-[3rem] max-w-3xl">
      <Search />
      {query && (
        <div className="mt-6">
          {products.length > 0 ? (
            <ProductList products={products} />
          ) : (
            <p>검색 결과가 없습니다.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default SearchPage;
