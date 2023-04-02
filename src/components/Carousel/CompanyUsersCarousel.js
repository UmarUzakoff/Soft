import React, { Fragment } from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import baraka from "./images/baraka.webp";
import cleaning from "./images/cleaning.webp";
import imba from "./images/imba.webp";
import indebt from "./images/indebt.webp";
import jizzax from "./images/jizzax.webp";
import lazydev from "./images/lazydev.webp";
import mamirov from "./images/mamirov.webp";
import report from "./images/report.webp";
import suv from "./images/suv.webp";
import star from "./images/download.svg";


export default function CompanyUsersCarousel() {
  const data = [
    {
      id: 1,
      imgSrc: report,
      text: "InReport",
    },
    {
      id: 2,
      imgSrc: lazydev,
      text: "Lazydev",
    },
    {
      id: 3,
      imgSrc: indebt,
      text: "Indebt",
    },
    {
      id: 4,
      imgSrc: imba,
      text: "Imba_Studio",
    },
    {
      id: 5,
      imgSrc: baraka,
      text: "Fayz_Baraka",
    },
    {
      id: 6,
      imgSrc: mamirov,
      text: "Mamirov_Group",
    },
    {
      id: 7,
      imgSrc: jizzax,
      text: "Jizzax_City",
    },
    {
      id: 8,
      imgSrc: suv,
      text: "JS_Ta'minot",
    },
    {
      id: 9,
      imgSrc: cleaning,
      text: "Ideal_Cleaning",
    },
    // report,
    // lazydev,
    // indebt,
    // imba,
    // baraka,
    // mamirov,
    // jizzax,
    // suv,
    // cleaning,
  ];
  // const text = [
  //   "InReport",
  //   "Lazydev",
  //   "Indebt",
  //   "Imba Studio",
  //   "Fayz Baraka",
  //   "Mamirov Group",
  //   "Jizzax City",
  //   "JS Ta'minot",
  //   "Ideal Cleaning",
  // ];

  const responsiveOptions = {
    0: {
      items: 1,
    },
    560: {
      items: 2,
    },
    1025: {
      items: 3,
    },
    1400: {
      items: 4,
    },
  };

  const options = {
    autoplay: true,
    autoplaySpeed: 500,
    autoplayTimeout: 5000,
    loop: true,
    dots: false,
    responsive: { ...responsiveOptions },
  };


  return (
    <Fragment>
      <div className="container">
        <span className="mx-7 xl:mx-32 text-xl font-extrabold pt-60">
          Ishlar
        </span>
        {/* <h1 className="mx-32 mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
          DotSoft -&nbsp;
          <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
            bajargan ishlar.
          </span>{" "}
        </h1> */}
        <div className="wrapper xl:mx-24">
          <h1 className="text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
            DotSoft -
          </h1>
          <div className="words text-xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
            <span className="spann text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
              bajargan ishlar.
            </span>
            <span className="spann text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
              things done.
            </span>
            <span className="spann text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
              дела сделаны.
            </span>
            <span className="spann text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
              bajargan ishlar.
            </span>
            <span className="spann ">😉</span>
          </div>
        </div>
        <div className="xl:mx-28 mx-5 mt-5 flex justify-center items-center overflow-hidden">
          <OwlCarousel {...options}>
            {data.map((el) => (
              <div
                key={el.id}
                className="md:w-[300px] w-[250px] h-[200px] sm:w-[260px] md:h-[275px] sm:h-[235px] relative group overflow-hidden ml-16 bg-black sm:ml-1 md:ml-1 rounded-3xl ">
                <div className="relative group overflow-hidden bg-black m-auto rounded-3xl">
                  <div className="flex items-center justify-center">
                    <section className="mx-auto w-fit">
                      <div className="w-full h-fit group">
                        <div className="relative overflow-hidden">
                          <img src={el.imgSrc} alt={el.text} />
                          <div className="absolute h-full w-full bg-black/20 flex flex-col items-start justify-between hover:-bottom-1 group-hover:bottom-1 opacity-0 group-hover:opacity-100 transition-all duration-500">
                            <p className="bg-black text-white px-3 py-1 rounded-3xl uppercase font-bold ml-3 mt-3">
                              development
                            </p>
                            <button className="bg-black text-white w-full h-16 flex flex-row">
                              <div className="flex flex-row gap-2 items-center sm:mt-3 ml-3">
                                <img
                                  src={star}
                                  className="w-4 h-4 sm:w-7 sm:h-9"
                                  alt="star"
                                />
                                <p className="">{el.text}</p>
                                <button
                                  type="button"
                                  className="text-black border bg-white ml-16 md:ml-28 relative bottom-4 sm:bottom-8 -rotate-45 border-white hover:bg-gray-400 hover:text-black focus:ring-4 focus:outline-none focus:ring-gray-500 font-medium rounded-full text-sm p-2 md:p-4 text-center inline-flex items-center dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:focus:ring-blue-800 dark:hover:bg-blue-500">
                                  <svg
                                    aria-hidden="true"
                                    className="w-5 h-5"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                      fill-rule="evenodd"
                                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                      clip-rule="evenodd"></path>
                                  </svg>
                                  <span className="sr-only">
                                    Icon description
                                  </span>
                                </button>
                              </div>
                            </button>
                          </div>
                        </div>
                      </div>
                    </section>
                  </div>
                </div>
              </div>
            ))}
            {/* {images.map((image, el.id) => (
              <div
                key={el.id}
                className={`md:w-[300px] w-[250px] h-[200px] sm:w-[260px] md:h-[275px] sm:h-[235px] relative group overflow-hidden ml-16 bg-black sm:ml-1 md:ml-1 rounded-3xl ${
                  el.id === currentel.id ? "opacity-100" : "opacity-100"
                }`}>
                <div className="relative group overflow-hidden bg-black m-auto rounded-3xl">
                  <div className="flex items-center justify-center">
                    <section className="mx-auto w-fit">
                      <div className="w-full h-fit group">
                        <div className="relative overflow-hidden">
                          <img src={image} alt={`slide-${index}`} />
                          <div className="absolute h-full w-full bg-black/20 flex flex-col items-start justify-between hover:-bottom-1 group-hover:bottom-1 opacity-0 group-hover:opacity-100 transition-all duration-500">
                            <p className="bg-black text-white px-3 py-1 rounded-3xl uppercase font-bold ml-3 mt-3">
                              development
                            </p>
                            <button className="bg-black text-white w-full h-16 flex flex-row">
                              <div className="flex flex-row gap-2 items-center sm:mt-3 ml-3">
                                <img
                                  src={star}
                                  className="w-4 h-4 sm:w-7 sm:h-9"
                                  alt="star"
                                />
                                <p>DotSoft</p>
                                <button
                                  type="button"
                                  className="text-black border bg-white ml-16 md:ml-28 relative bottom-4 sm:bottom-8 -rotate-45 border-white hover:bg-gray-400 hover:text-black focus:ring-4 focus:outline-none focus:ring-gray-500 font-medium rounded-full text-sm p-2 md:p-4 text-center inline-flex items-center dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:focus:ring-blue-800 dark:hover:bg-blue-500">
                                  <svg
                                    aria-hidden="true"
                                    className="w-5 h-5"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                      fill-rule="evenodd"
                                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                      clip-rule="evenodd"></path>
                                  </svg>
                                  <span className="sr-only">
                                    Icon description
                                  </span>
                                </button>
                              </div>
                            </button>
                          </div>
                        </div>
                      </div>
                    </section>
                  </div>
                </div>
              </div>
            ))} */}
          </OwlCarousel>
        </div>
      </div>
    </Fragment>
  );
}
