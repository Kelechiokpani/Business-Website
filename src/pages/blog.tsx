import React from 'react';
import Blog_Hero from '@/components/Blog/Blog_Hero';
import { Footer } from '@/components/Footer';
import SEO from '@/components/SEO';
import {Blogger} from "@/components/Blog/blog";

export default function NewsBlog() {
    return (
        <>
            <SEO />
            <Blog_Hero />
            <Blogger/>
            {/*<main className='mx-auto max-w-screen-xl px-6 sm:px-8'>*/}
            {/*    <div className='mt-16 space-y-20'>*/}
            {/*        <Marketers />*/}
            {/*        <LatestJobs />*/}
            {/*        <TopCompanies />*/}
            {/*    </div>*/}
            {/*</main>*/}
            <Footer />
        </>
    );
}
