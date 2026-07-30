'use client';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/Button';
import { BurgerMenu } from '@/components/Header/BurgerMenu';
import './header.css';
import { useState } from 'react';



export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header>
      <div className='container flex justify-between items-center h-19'>
        <div className='flex items-center gap-4'>
          <Image loading="eager" src="/logo.svg" alt="logo" width={106} height={26} />
        </div>
        <div className='flex items-center gap-4'>
          <Link className='text-[--fs-sm] font-medium' href="/">How it works</Link>
          <Link className='text-[--fs-sm] font-medium' href="/">Find a trainer</Link>
          <Link className='text-[--fs-sm] font-medium' href="/">Pricing</Link>
        </div>
        <div className='flex items-center gap-4'>
          <Button underline label="Login">Login</Button> 
          <Button primary label="Sign up">List yourself</Button>
          <BurgerMenu open={open} setOpen={setOpen} />
        </div>
      </div>
    </header>
  );
}
