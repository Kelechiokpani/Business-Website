export const OnBoardClient = () => {
    return (
        <div className=" bg-white relative flex flex-col-reverse px-4 py-12 mx-auto lg:block lg:flex-col lg:py-32 xl:py-38 md:px-8 sm:max-w-xl md:max-w-full">
            <div className="z-0 flex justify-center h-full -mx-4 overflow-hidden lg:pt-24 lg:pb-16 lg:pr-5 xl:pr-0 lg:w-1/2 lg:absolute lg:justify-end lg:bottom-0 lg:left-0 lg:items-center">
                <img
                    src="https://kitwind.io/assets/kometa/laptop.png"
                    className="object-cover object-right w-full h-auto lg:w-auto lg:h-full"
                    alt=""
                />
            </div>
            <div className="relative flex justify-end max-w-xl mx-auto xl:pr-25 lg:max-w-screen-xl">
                <div className="mb-16 lg:pr-6  lg:mb-0">
                    <div className="max-w-xl mb-6">
                        <div>
                            <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
                                Deep code Academy
                            </p>
                        </div>
                        <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
                            We will bring your
                            <br className="hidden md:block" />
                            business{' '}
                            <span className="inline-block text-deep-purple-accent-400">
                online
              </span>
                        </h2>
                        <p className="text-base text-gray-700 md:text-lg">
                             Deep technologies has steadily been growing and earning the trust of hundreds of businesses
                            by providing them with enterprise-grade software
                            solutions and turning their ideas into reality with the help of our highly qualified developers.
                        </p>
                    </div>
                    <form>
                        <div className="flex flex-col md:flex-row mb-5">
                            <input
                                placeholder="firstname"
                                required
                                type="text"
                                className="flex-grow w-full h-12 px-4 mb-2 transition duration-200  text-black bg-white border border-gray-300 rounded shadow-sm appearance-none md:mr-2 focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                            />
                            <input
                                placeholder="lastname"
                                required
                                type="text"
                                className="flex-grow w-full h-12 px-4 mb-3  transition duration-200 bg-white text-black border border-gray-300 rounded shadow-sm appearance-none md:mb-0 focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                            />
                        </div>
                        <div className="flex flex-col md:flex-row mb-5">
                            <input
                                placeholder="johncaleb@gmail.com"
                                required
                                type="email"
                                className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white  text-black border border-gray-300 rounded shadow-sm appearance-none md:mr-2 focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                            />
                            <input
                                placeholder="Phone"
                                required
                                type="phone"
                                className="flex-grow w-full h-12 px-4 mb-3 transition duration-200  text-black bg-white border border-gray-300 rounded shadow-sm appearance-none md:mb-0 focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                            />
                        </div>
                        <div className="flex items-center mt-4">
                            <button
                                type="submit"
                                className="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-purple-500 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                            >
                                Submit
                            </button>
                            <button
                                aria-label=""
                                className="inline-flex items-center font-semibold transition-colors duration-200 text-purple-700 hover:text-deep-purple-800"
                            >
                                Learn more
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};