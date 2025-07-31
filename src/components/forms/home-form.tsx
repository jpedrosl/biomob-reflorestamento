'use client';

import React from 'react';
import { Header } from '../dashboard/header';
import { Hero } from '../dashboard/hero';
import { FeatureCards } from '../dashboard/FeatureCards';
import { Partners } from '../dashboard/partners';
import { News } from '../dashboard/news';
import { CallToAction } from '../dashboard/CallToAction';
import { Footer } from '../dashboard/Footer';

export default function Index() {
  const handleFontSizeChange = (size: 'small' | 'medium' | 'large') => {
    const root = document.documentElement;
    switch (size) {
      case 'small':
        root.style.fontSize = '14px';
        break;
      case 'medium':
        root.style.fontSize = '16px';
        break;
      case 'large':
        root.style.fontSize = '18px';
        break;
    }
  };

  return (
    <div className="bg-neutral-100 flex flex-col overflow-hidden items-stretch">
      <Header onFontSizeChange={handleFontSizeChange} />

      <main>
        <Hero />
        <FeatureCards />
        <Partners />
        <News />
        <CallToAction />
      </main>

      <Footer />
    </div>
  );
}
