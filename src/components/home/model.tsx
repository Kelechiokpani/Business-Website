import Link from "next/link";

export const Model_Content = () => {
    return (
        <div className=" bg-white px-4 py-16 mx-auto sm:max-w-xl md:max-w-full  md:px-24 lg:px-8 lg:py-20 lg:max-w-screen-xl">
            <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
                <div>
                    <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
                        Deep code Academy
                    </p>
                </div>
                <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
          <span className="relative inline-block">
            <svg
                viewBox="0 0 52 24"
                fill="currentColor"
                className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
            >
              <defs>
                <pattern
                    id="34f481be-159a-4846-821d-9ca19fb6bcc5"
                    x="0"
                    y="0"
                    width=".135"
                    height=".30"
                >
                  <circle cx="1" cy="1" r=".7" />
                </pattern>
              </defs>
              <rect
                  fill="url(#34f481be-159a-4846-821d-9ca19fb6bcc5)"
                  width="52"
                  height="24"
              />
            </svg>
          </span>{' '}
                    DEEP TECHNOLOGIES ENGAGEMENT MODELS
                </h2>
                <p className="text-base text-gray-700 md:text-lg">
                    Whether you need to extend your in-house team,
                    build specific tech expertise, or speed up the development of your
                    software product, you can do it faster and more effectively through our engagement models.
                </p>
            </div>
            <div className="grid gap-8 row-gap-5 mb-8 md:row-gap-8 lg:grid-cols-4 sm:grid-cols-2">
                <div className="duration-300 transform bg-white border-l-4 border-purple-800 hover:-translate-y-2">
                    <div className="h-full p-5 border border-l-0 rounded-r shadow-sm">
                        <h6 className="mb-2 font-semibold leading-5 text-purple-800">Dedicated Team</h6>
                        <p className="text-sm text-gray-900">
                            Our dedicated team business model is specifically
                            designed to provide clients with Deep technologies’s
                            best-in-class software development professionals and experts on a long-term basis.
                        </p>
                    </div>
                </div>
                <div className="duration-300 transform bg-white border-l-4 border-purple-800 hover:-translate-y-2">
                    <div className="h-full p-5 border border-l-0 rounded-r shadow-sm">
                        <h6 className="mb-2 font-semibold leading-5 text-purple-800">Team Extension</h6>
                        <p className="text-sm text-gray-900">
                            The Team Extension model is intended to find a highly-skilled software
                            development team with the right expertise
                            and culture fit required for a specific
                            software development project.
                        </p>
                    </div>
                </div>
                <div className="duration-300 transform bg-white border-l-4 border-purple-800 hover:-translate-y-2">
                    <div className="h-full p-5 border border-l-0 rounded-r shadow-sm">
                        <h6 className="mb-2 font-semibold leading-5 text-purple-800">
                            Project Based Model
                        </h6>
                        <p className="text-sm text-gray-900">
                            A project-based model is designed to provide
                            a reliable collaboration between a customer
                            and Deep technologies specialists engaged in the specific project
                        </p>
                    </div>
                </div>
                <div className="duration-300 transform bg-white border-l-4 border-purple-800 hover:-translate-y-2">
                    <div className="h-full p-5 border border-l-0 rounded-r shadow-sm">
                        <h6 className="mb-2 font-semibold leading-5 text-purple-800">
                            Scaling Velocity
                        </h6>
                        <p className="text-sm text-gray-900">
                            The scale of the local
                            talent market and regulatory
                            framework allows versatile
                            flexibility in managing your software developers team.
                        </p>
                    </div>
                </div>
            </div>
            <div className="text-center">
                <Link
                    href="/">
                    Learn more
                </Link>
            </div>
        </div>
    );
};