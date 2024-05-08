'use client';

import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { useSearchParams, usePathname, useRouter } from 'next/navigation';
import { useDebouncedCallback } from 'use-debounce';

export default function Search({ placeholder }: { placeholder: string }) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();
  const handleSearch = useDebouncedCallback((term) => {
    const params = new URLSearchParams(searchParams);
    params.set('page', '1');
    if (term) {
      params.set('query', term);
    } else {
      params.delete('query');
    }
    replace(`${pathname}?${params.toString()}`);
  }, 300);
  return (
<div className="relative flex flex-1 flex-shrink-0">
  <label htmlFor="search" className="sr-only">
    Search
  </label>
  <input
    id="search"
    type="text"
    className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 pr-4 text-sm placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
    placeholder={placeholder}
    onChange={(e) => {
      handleSearch(e.target.value);
    }}
    defaultValue={searchParams.get('query')?.toString()}
  />
  <svg
    className="absolute left-3 top-1/2 h-5 w-5 text-gray-500 transform -translate-y-1/2 peer-focus:text-gray-900"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="currentColor"
    aria-hidden="true"
  >
    <path
      fillRule="evenodd"
      d="M8 3a5 5 0 015.41 8.21l5.52 5.52-1.42 1.42-5.52-5.52A5 5 0 118 3zm0 2a3 3 0 100 6 3 3 0 000-6z"
      clipRule="evenodd"
    />
  </svg>
</div>

  );
}
