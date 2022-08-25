import Link from "next/link";

const Content = () => {
    return (
        <div className="bg-white mt-10 mb-8 px-8 py-16 mx-auto sm:max-w-xl md:max-w-full  md:px-30 lg:px-10 lg:py-25 lg:max-w-screen-xl ">
            <div className="grid gap-10 lg:grid-cols-2 ">
                <div className="flex flex-col justify-center md:pr-8 xl:pr-0 lg:max-w-lg">
                    <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-teal-accent-400">
                        <svg className="text-teal-900 w-7 h-7" viewBox="0 0 24 24">
                            <polyline
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeMiterlimit="10"
                                points=" 8,5 8,1 16,1 16,5"
                                strokeLinejoin="round"
                            />
                            <polyline
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeMiterlimit="10"
                                points="9,15 1,15 1,5 23,5 23,15 15,15"
                                strokeLinejoin="round"
                            />
                            <polyline
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeMiterlimit="10"
                                points="22,18 22,23 2,23 2,18"
                                strokeLinejoin="round"
                            />
                            <rect
                                x="9"
                                y="13"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeMiterlimit="10"
                                width="6"
                                height="4"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </div>
                    <div className="max-w-xl mb-6">
                        <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
                            Let us handle
                            <br className="hidden md:block" />
                            your next{' '}
                            <span className="inline-block text-deep-purple-accent-400">
                destination
              </span>
                        </h2>
                        <p className="text-base text-gray-700 md:text-md">
                            Our dedicated team of developers has been helping leading
                            companies across industries with their projects.
                            We know that the success of any dedicated development
                            team relies on expertise, skills, and mindset.
                            Deep tech supports multiple clients in meeting their technology needs.
                            We stick to the industry’s best practices in delivery, program management, and talent acquisition.
                            As a result, we have implemented a standard dedicated development team governance framework.
                        </p>
                    </div>
                    <div>
                        <Link href="/"
                            aria-label="">
                            Learn more
                            {/*<svg*/}
                            {/*    className="inline-block w-3 ml-2"*/}
                            {/*    fill="currentColor"*/}
                            {/*    viewBox="0 0 12 12"*/}
                            {/*>*/}
                            {/*    <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />*/}
                            {/*</svg>*/}
                        </Link>
                    </div>
                </div>
                <div className="flex items-center justify-center -mx-4 lg:pl-8">
                    <div className="flex flex-col items-end px-3">
                        <img
                            className="object-cover mb-6 rounded shadow-lg h-28 sm:h-48 xl:h-56 w-28 sm:w-48 xl:w-56"
                            src="https://dtworldserver.verydeeptech.com/file/6305d6a2c0c3f66c6ee22d1c?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                            alt=""
                        />
                        <img
                            className="object-cover w-20 h-20 rounded shadow-lg sm:h-32 xl:h-40 sm:w-32 xl:w-40"
                            src="https://dtworldserver.verydeeptech.com/file/6305e5b1c0c3f66c6ee2391a?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                            alt=""
                        />
                    </div>
                    <div className="px-3">
                        <img
                            className="object-cover w-40 h-40 rounded shadow-lg sm:h-64 xl:h-80 sm:w-64 xl:w-80"
                            src="https://dtworldserver.verydeeptech.com/file/6304fe5ac0c3f66c6ee22236?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;w=500"
                            alt=""
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Content