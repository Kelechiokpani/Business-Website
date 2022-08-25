import React from "react";
import { FreeMode, Mousewheel, Navigation, Scrollbar } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Button } from "@/components/Button";
import { Chip } from "@/components/Chip";

const featuredJobsCategories = [
  "Deep tech Code Academy",
  "Software Upgrade & Maintenance",
  "Mobile App Development",
  "Project Management",
  "Marketing - Digital",
  "IT - Software Development",
  "Web development",
  "UI/UX Design",
];

const featuredMarketers = [
  {
    companyName: "JavaScript",
    jobTitle: "Marketer",
    image: "https://dtworldserver.verydeeptech.com/file/6305d989c0c3f66c6ee23769",
  },
  {
    companyName: "Html",
    jobTitle: "Team Lead",
    image: "https://dtworldserver.verydeeptech.com/file/6305d989c0c3f66c6ee2375b",
  },

  {
    companyName: "node Js",
    jobTitle: "Marketer",
    image: "https://dtworldserver.verydeeptech.com/file/6305d989c0c3f66c6ee23760",

  },
  {
    companyName: "Cascading Style sheet",
    jobTitle: "Marketer",
    image: "https://dtworldserver.verydeeptech.com/file/6305d988c0c3f66c6ee2374e",
  },
  {
    companyName: "Git Version",
    jobTitle: "Team Lead",
    image: "https://dtworldserver.verydeeptech.com/file/6305d989c0c3f66c6ee23756",
  },
  {
    companyName: "React Js",
    jobTitle: "Marketer",
    image: "https://dtworldserver.verydeeptech.com/file/6305d989c0c3f66c6ee23767",
  },
  {
    companyName: "Ios",
    jobTitle: "Marketer",
    image: "https://dtworldserver.verydeeptech.com/file/6305d989c0c3f66c6ee23763",
  },
  {
    companyName: "React Native",
    jobTitle: "Marketer",
    image: "https://dtworldserver.verydeeptech.com/file/6305d989c0c3f66c6ee2376d",
  },
  {
    companyName: "React Native",
    jobTitle: "Marketer",
    image: "https://dtworldserver.verydeeptech.com/file/6305d989c0c3f66c6ee23770",
  },
  {
    companyName: "React Native",
    jobTitle: "Marketer",
    image: "https://dtworldserver.verydeeptech.com/file/6305d989c0c3f66c6ee23772",
  },
  {
    companyName: "React Native",
    jobTitle: "Marketer",
    image: "https://dtworldserver.verydeeptech.com/file/6305d98ac0c3f66c6ee23776",
  },
  {
    companyName: "React Native",
    jobTitle: "Marketer",
    image: "https://dtworldserver.verydeeptech.com/file/6305d989c0c3f66c6ee23752",
  },
  {
    companyName: "React Native",
    jobTitle: "Marketer",
    image: "https://dtworldserver.verydeeptech.com/file/6305d988c0c3f66c6ee23748",
  },
  {
    companyName: "React Native",
    jobTitle: "Marketer",
    image: "https://dtworldserver.verydeeptech.com/file/6305d988c0c3f66c6ee2374b",
  },
];

export const Marketers = () => {
  return (
    <section id="featured-jobs">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-2xl font-bold">Tech Stacks</h2>
        <Button variant="outline" className="hidden xs:inline-flex">
          Show All
        </Button>
      </div>
      <div id="featured-jobs__categories" className="mb-4">
        <Swiper
          modules={[FreeMode, Scrollbar, Mousewheel]}
          direction="horizontal"
          freeMode={true}
          mousewheel={true}
          scrollbar={{ draggable: true, hide: true }}
          slidesPerView="auto"
          spaceBetween={8}
          id="featured-jobs__categories__slider"
          className="!py-4"
        >
          <SwiperSlide className="!w-auto">
            <Chip label="all" active />
          </SwiperSlide>
          {featuredJobsCategories.map((item, i) => (
            <SwiperSlide key={i} className="!w-auto">
              <Chip label={item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      {/* !-m-4 to fix box-shadow cropping due to overflow:hidden */}
      <div id="featured-jobs__items" className="!-m-4">
        <Swiper
          className="!p-4" // !p-4 to fix box-shadow cropping due to overflow:hidden
          modules={[Navigation]}
          navigation
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            "475": {
              slidesPerView: 2,
            },
            "640": {
              slidesPerView: 3,
            },
            "1024": {
              slidesPerView: 4,
            },
          }}
        >
          {featuredMarketers.map((item, i) => (
            <SwiperSlide key={i}>
              <>
                <a className="group block overflow-hidden rounded-2xl border border-slate-200  shadow-md transition-all duration-150 hover:-translate-y-1 hover:shadow-lg dark:border-slate-800 dark:bg-slate-700">
                  <div className="relative block overflow-hidden  p-[28%]">
                    <img
                      src={item.image}
                      alt={item.companyName}
                      className="transition-all duration-200 group-hover:scale-[80%] absolute inset-0  w-full h-full"
                    />
                  </div>

                  {/*<div className="flex flex-col border-t p-4 dark:border-slate-600">*/}
                  {/*  <h5 className="block truncate text-xl font-semibold capitalize">*/}
                  {/*    {item.jobTitle}*/}
                  {/*  </h5>*/}
                  {/*  <span className="block truncate text-slate-500 dark:text-slate-400">*/}
                  {/*    {item.companyName}*/}
                  {/*  </span>*/}
                  {/*</div>*/}
                </a>
              </>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};
