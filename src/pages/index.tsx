import React from 'react';
import { Footer } from '@/components/Footer';
import { Marketers } from '@/components/home/Marketers';
import SEO from '@/components/SEO';
import Home_Hero from "@/components/home/Home_Hero";
import Content from "@/components/home/offer";
import {Model_Content} from "@/components/home/model";
import Banner from "@/components/home/banner";

export default function Home() {
  return (
    <>
      <SEO />
      <Home_Hero/>
      <main className='mx-auto max-w-screen-xl px-4 sm:px-5'>
        <div className='mt-16 space-y-20'>
          <Marketers />
            <Content/>
        </div>
      </main>

        <Banner/>
        <Model_Content/>
      <Footer />
    </>
  );
}
