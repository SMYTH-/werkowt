import React from 'react';

import { Header } from '@/components/Header';
import { HeroBanner } from '@/components/HeroBanner/HeroBanner';
import { IconGrid } from '@/components/IconGrid/IconGrid';

export default function Page() {
  return <div>
    <Header />
    <main>
      <div className='container'>
        <HeroBanner />
      </div>
      <div>
        <IconGrid />
      </div>
    </main>
  </div>;
}
