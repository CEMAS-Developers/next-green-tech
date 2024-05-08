import Link from 'next/link';
import NavLinks from '@/app/ui/dashboard/nav-links';
import AcmeLogo from '@/app/ui/acme-logo';
import { PowerIcon } from '@heroicons/react/24/outline';
import { signOut } from '@/auth';

export default function SideNav() {
  return (
    <div className="flex flex-col h-full px-3 py-4 md:px-2">
      <Link href="/" className="flex items-end justify-center mt-24 mb-2 rounded-md bg-gray-100 p-0 h-20 md:h-40 md:mt-10">
        <div className="w-32 text-white md:w-40">
          <AcmeLogo />
        </div>
      </Link>
      <div className="flex flex-col justify-between flex-grow space-y-2 md:space-y-0 md:space-x-0 md:flex-row">
        <NavLinks />
        <form action={async () => {
            'use server';
            await signOut();
          }} className="flex-none w-full md:w-auto">
          <button type="submit" className="flex items-center justify-center w-full h-12 gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:px-3">
            <PowerIcon className="w-6" />
            <span className="hidden md:block">Sign Out</span>
          </button>
        </form>
      </div>
    </div>
  );
}
