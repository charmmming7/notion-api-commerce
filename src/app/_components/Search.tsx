'use client';
import { useState } from 'react';
import { usePathname, useSearchParams, useRouter } from 'next/navigation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

export default function Search() {
  const [searchInput, setSearchInput] = useState('');
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  // search submit
  const handleSearchSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const params = new URLSearchParams(searchParams);

    if (searchInput) {
      params.set('query', searchInput);
    } else {
      params.delete('query');
    }
    replace(`${pathname}?${params.toString()}`);

    setSearchInput('');
  };

  // input onchange event
  function handleSearch(keyword: string) {
    setSearchInput(keyword);
  }

  return (
    <div className="relative">
      <form onSubmit={handleSearchSubmit}>
        <div className="border-b-4 border-black pl-[10px] pr-[60px]">
          <label htmlFor="search" className="blind">
            검색
          </label>
          <input
            id="search"
            type="search"
            name="search"
            autoComplete="off"
            aria-autocomplete="list"
            className="w-full text-xl leading-10 outline-none"
            placeholder="Search"
            onChange={(e) => handleSearch(e.target.value)}
            defaultValue={searchParams.get('query')?.toString()}
          />
        </div>
        <button
          type="submit"
          aria-label="search"
          className="absolute right-0 top-0 h-[40px] w-[40px]"
        >
          <FontAwesomeIcon
            className="text-primary m-auto w-6"
            icon={faMagnifyingGlass}
          />
        </button>
      </form>
    </div>
  );
}
