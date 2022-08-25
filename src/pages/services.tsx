import React from 'react';
import { Footer } from '@/components/Footer';
import SEO from '@/components/SEO';
import Services_Hero from "@/components/services/Services_Hero";
import Offerred_services from "@/components/services/Offerred_services";
import Product_LifeCycle from "@/components/services/product_LifeCycle";
import Service_banner from "@/components/services/Service_banner";
import Frequent from "@/components/services/Faq";

export default function Services() {
    return (
        <>
            <SEO />
            <Services_Hero />

            <main className='mx-auto max-w-screen-xl px-6 sm:px-8'>
                <div className='mt-16 space-y-20'>
                    <Offerred_services/>
                </div>
            </main>
            <Product_LifeCycle/>
            <Service_banner/>
            <Frequent/>
            <Footer />
        </>
    );
}
