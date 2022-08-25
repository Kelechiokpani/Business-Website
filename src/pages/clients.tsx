import React from 'react';
import {Footer} from '@/components/Footer';
import SEO from '@/components/SEO';
import Clients_Hero from "@/components/Clients/clients_hero";
import {ChooseUS} from "@/components/Clients/chooseUS";
import {OnBoardClient} from "@/components/Clients/onBoardClient";

const Clients = ()=> {

	return (
		<>
			<SEO/>
			<Clients_Hero/>
			<OnBoardClient/>
			<ChooseUS/>
			<main className='mx-auto max-w-screen-xl px-6 sm:px-8 '>
				<div className='mt-16 space-y-20'>
					{/*<Marketers />*/}
					{/*<LatestJobs />*/}
					{/*<TopCompanies />*/}
				</div>
			</main>

			<Footer/>
		</>
	);
}

export default Clients;
