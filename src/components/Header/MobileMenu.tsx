'use client';

import Link from 'next/link';

export interface MobileMenuProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

export function MobileMenu({ open, setOpen }: MobileMenuProps) {
  return (
    <div className={`fixed top-0 left-0 w-full h-full bg-white transition-all duration-300 ${open ? 'translate-y-0' : '-translate-y-full'}`}>
      <div className='container h-full flex flex-col'>
        <div className='flex flex-col gap-4 items-start justify-start pt-19'>
          <Link className='text-xl font-medium' href="/">How it works</Link>
          <Link className='text-xl font-medium' href="/">Find a trainer</Link>
          <Link className='text-xl font-medium' href="/">Pricing</Link>
        </div>
      </div>
    </div>
  );
}