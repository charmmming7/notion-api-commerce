import SearchForm from '@/app/_components/SearchForm';
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
  const products: any[] = await getDatabySearch(query);

  return (
    <div className="mx-auto mb-auto w-full max-w-screen-lg pb-14 lg:pb-4">
      <SearchForm />
      {query && (
        <div className="sm:px-18 mx-auto px-4 py-2 sm:py-6 lg:max-w-7xl lg:px-8 lg:py-14">
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
