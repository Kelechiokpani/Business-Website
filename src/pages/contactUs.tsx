import React from 'react';
import { Footer } from '@/components/Footer';
import SEO from '@/components/SEO';
import ContactForm from "@/components/contact/Contact";
import Contact_Hero from "@/components/contact/Contact_Hero";

export default function ContactUs() {
    return (
        <>
            <SEO />
            <Contact_Hero/>
            <ContactForm/>
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
