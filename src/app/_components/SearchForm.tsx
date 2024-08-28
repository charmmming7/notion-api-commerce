'use client';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useState } from 'react';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';

export default function SearchForm() {
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
    <div className="relative mx-auto my-6 max-w-lg px-4 sm:my-10 ">
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
            placeholder="Search (jean)"
            onChange={(e) => handleSearch(e.target.value)}
            defaultValue={searchParams.get('query')?.toString()}
          />
        </div>
        <button
          type="submit"
          className="absolute right-0 top-0 h-[40px] w-[40px]"
        >
          <span className="sr-only">Search</span>
          <MagnifyingGlassIcon aria-hidden="true" className="h-6 w-6" />
        </button>
      </form>
    </div>
  );
}
