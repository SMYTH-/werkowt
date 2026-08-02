import React from 'react';

import { Header } from '@/components/Header';
import { HeroBanner } from '@/components/HeroBanner/HeroBanner';

export default function Page() {
  return <div>
    <Header />
    <main>
      <div className='container'>
        <HeroBanner />
      </div>
    </main>
  </div>;
}
