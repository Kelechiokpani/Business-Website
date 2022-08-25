import React from 'react';
import { Footer } from '@/components/Footer';
import SEO from '@/components/SEO';
import About_Hero from "@/components/aboutUs/About_Hero";
import MissionValues from "@/components/aboutUs/Mission & Values";
import VirtualMobile from "@/components/aboutUs/Mobile_Analystics";

export default function About() {
    return (
        <>
            <SEO />
            <About_Hero />
            <MissionValues/>
            <main className='mx-auto max-w-screen-xl px-6 sm:px-8'>
                <div className='mt-16 space-y-20'>
                    <VirtualMobile/>
                </div>
            </main>
            <Footer />
        </>
    );
}
