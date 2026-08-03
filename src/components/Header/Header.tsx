'use client';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/Button';
import { BurgerMenu } from '@/components/Header/BurgerMenu';
import './header.css';
import { useState } from 'react';
import { MobileMenu } from '@/components/Header/MobileMenu';


export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className='fixed top-0 left-0 right-0 z-50'>
      <div className='flex justify-center h-19 bg-white/80 backdrop-blur-sm border-b border-gray-200'>
          <div className='container flex justify-between items-center'> 
          <div className='flex items-center gap-4'>
            <Image loading="eager" src="/logo.svg" alt="logo" width={106} height={26} />
          </div>
          <div className='hidden md:flex items-center gap-7'>
            <Link className='text-body font-medium' href="/">How it works</Link>
            <Link className='text-body font-medium' href="/">Find a trainer</Link>
            <Link className='text-body font-medium' href="/">Pricing</Link>
          </div>
          <div className='flex items-center gap-4'>
            <Button underline label="Login">Login</Button> 
            <Button primary label="List yourself">List yourself</Button>
            <BurgerMenu open={open} setOpen={setOpen} />
          </div>
        </div>
      </div>
      <MobileMenu open={open} setOpen={setOpen} />
    </header>
  );
}
