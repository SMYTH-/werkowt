import React from 'react';

import { Header } from '@/components/Header';
import { ContentSection } from '@/components/ContentSection/ContentSection';
import { HeroBanner } from '@/components/HeroBanner/HeroBanner';
import { IconGrid } from '@/components/IconGrid/IconGrid';
import { CardGrid } from '@/components/CardGrid/CardGrid';

export default function Page() {
  return <div>
    <Header />
    <main className='mt-19'>
      <ContentSection container>
        <HeroBanner />
      </ContentSection>
      <ContentSection container border={{ top: true, bottom: true }} backgroundColor='white'>
        <IconGrid />
      </ContentSection>
      <ContentSection container>
        <CardGrid />
      </ContentSection>
    </main>
  </div>;
}
