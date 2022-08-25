import React from "react";


const MissionValues: React.FC = ( ) => {

    return (
        <div className="relative bg-neutral-50 px-4 py-16  md:px-24 lg:px-8 lg:py-20 ">
            <img
                src="https://dtworldserver.verydeeptech.com/file/6303e23a89867ff91ebc1b25?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                className="absolute inset-0 object-cover w-full h-full"
                alt=""
            />
            <div className=" mb-15 mt-13 md:mx-auto sm:text-center">
                <h2 className="mb-24 font-sans text-5xl font-bold  text-purple-800 sm:text-3xl md:mx-auto">
                    Mission & Vision
                </h2>
                <p className=" text-base text-gray-700 font-bold md:text-lg">
                    Our mission is to help enterprises accelerate adoption of
                    new technologies, untangle complex issues that always emerge
                    during digital evolution, and orchestrate ongoing innovation.
                    Whether it is a consumer-oriented app or a transformative
                    enterprise-class solution, the company
                    leads the process from ideation and concept to delivery, and
                    provides ongoing support through its IS360 framework.
                </p>
            </div>
        </div>
    );
};


export default MissionValues;