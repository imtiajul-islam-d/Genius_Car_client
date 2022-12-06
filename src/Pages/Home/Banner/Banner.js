import React from "react";
import img1 from "./../../../assets/images/banner/1.jpg";
import img2 from "./../../../assets/images/banner/2.jpg";
import img3 from "./../../../assets/images/banner/3.jpg";
import img4 from "./../../../assets/images/banner/4.jpg";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const Banner = () => {
  return (
    <Carousel
      autoPlay
      swipeable={false}
      interval="6000"
      infiniteLoop
      transitionTime="1000"
      showThumbs={false}
      showIndicators={false}
    >
      <div className="from carousel-item relative w-full">
        <img src={img1} className="w-full h-screen" alt="" />
        <div className="absolute h-full w-full bg-[rgb(0,0,0,0.6)]"></div>
        <div className="absolute h-full w-full">
          <div className="flex items-center h-full px-8 md:container mx-auto">
            <div className="flex flex-col justify-center text-start text-5xl font-bold md:text-6xl lg:text-8xl xl:text-9xl h-full text-white">
              <h3 style={{ letterSpacing: "5px" }}>
                <span className="text-red-700">Affordable Price</span> <br />{" "}
                For <br /> Car Servicing
              </h3>
              <div className="text-lg lg:text-2xl ">
                <p className="text-lg md:text-2xl my-4 md:max-w-2xl">
                  Lorem ipsum dolor sit amet Lorem ipsum dolor sit, amet
                  consectetur adipisicing elit. Beatae, saepe. consectetur
                  adipisicing elit. Dolores, nulla. lorem20
                </p>
                <button className="btn text-xs bg-red-600">
                  Discover More
                </button>
                <button className="btn border text-xs mt-2 border-red-600 bg-white text-red-700 hover:bg-red-700 hover:text-white md:ml-3">
                  Latest Project
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*  */}
      <div className="from carousel-item relative w-full">
        <img src={img2} className="w-full h-screen" alt="" />
        <div className="absolute h-full w-full bg-[rgb(0,0,0,0.6)]"></div>
        <div className="absolute h-full w-full">
          <div className="flex items-center h-full px-8 md:container mx-auto">
            <div className="flex flex-col justify-center text-start text-5xl font-bold md:text-6xl lg:text-8xl xl:text-9xl h-full text-white">
              <h3 style={{ letterSpacing: "5px" }}>
                <span className="text-red-700">Affordable Price</span> <br />{" "}
                For <br /> Car Servicing
              </h3>
              <div className="text-lg lg:text-2xl">
                <p className="text-lg md:text-2xl my-4 md:max-w-2xl">
                  Lorem ipsum dolor sit amet Lorem ipsum dolor sit, amet
                  consectetur adipisicing elit. Beatae, saepe. consectetur
                  adipisicing elit. Dolores, nulla.
                </p>
                <button className="btn text-xs bg-red-600">
                  Discover More
                </button>
                <button className="btn border text-xs mt-2 border-red-600 bg-white text-red-700 hover:bg-red-700 hover:text-white md:ml-3">
                  Latest Project
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*  */}
      <div className="from carousel-item relative w-full">
        <img src={img3} className="w-full h-screen" alt="" />
        <div className="absolute h-full w-full bg-[rgb(0,0,0,0.6)]"></div>
        <div className="absolute h-full w-full">
          <div className="flex items-center h-full px-8 md:container mx-auto">
            <div className="flex flex-col justify-center text-start text-5xl font-bold md:text-6xl lg:text-8xl xl:text-9xl h-full text-white">
              <h3 style={{ letterSpacing: "5px" }}>
                <span className="text-red-700">Affordable Price</span> <br />{" "}
                For <br /> Car Servicing
              </h3>
              <div className="text-lg lg:text-2xl">
                <p className="text-lg md:text-2xl my-4 md:max-w-2xl">
                  Lorem ipsum dolor sit amet Lorem ipsum dolor sit, amet
                  consectetur adipisicing elit. Beatae, saepe. consectetur
                  adipisicing elit. Dolores, nulla.
                </p>
                <button className="btn text-xs bg-red-600">
                  Discover More
                </button>
                <button className="btn border text-xs mt-2 border-red-600 bg-white text-red-700 hover:bg-red-700 hover:text-white md:ml-3">
                  Latest Project
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*  */}
      <div className="from carousel-item relative w-full">
        <img src={img4} className="w-full h-screen" alt="" />
        <div className="absolute h-full w-full bg-[rgb(0,0,0,0.6)]"></div>
        <div className="absolute h-full w-full">
          <div className="flex items-center h-full px-8 md:container mx-auto">
            <div className="flex flex-col justify-center text-start text-5xl font-bold md:text-6xl lg:text-8xl xl:text-9xl h-full text-white">
              <h3 style={{ letterSpacing: "5px" }}>
                <span className="text-red-700">Affordable Price</span> <br />{" "}
                For <br /> Car Servicing
              </h3>
              <div className="text-lg lg:text-2xl">
                <p className="text-lg md:text-2xl my-4 md:max-w-2xl">
                  Lorem ipsum dolor sit amet Lorem ipsum dolor sit, amet
                  consectetur adipisicing elit. Beatae, saepe. consectetur
                  adipisicing elit. Dolores, nulla.
                </p>
                <button className="btn text-xs bg-red-600">
                  Discover More
                </button>
                <button className="btn border text-xs mt-2 border-red-600 bg-white text-red-700 hover:bg-red-700 hover:text-white md:ml-3">
                  Latest Project
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Carousel>
    // <div className="carousel w-full ">
    //   <div id="slide1" className="carousel-item relative w-full">
    //     <img src={img1} className="w-full max-h-[92vh]" alt="" />
    //     <div className="absolute h-full w-full">
    //       <div className="flex h-full items-center justify-center text-white">
    //         <h3 className="text-5xl">
    //           Affordable <br /> Price For Car <br /> Servicing
    //         </h3>
    //       </div>
    //       {/* this is independent */}
    //       <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-2">
    //         <a href="#slide4" className="btn btn-circle">
    //           ❮
    //         </a>
    //         <a href="#slide2" className="btn btn-circle">
    //           ❯
    //         </a>
    //       </div>
    //     </div>
    //   </div>
    //   {/* two */}
    //   <div id="slide2" className="carousel-item relative w-full">
    //     <img src={img2} className="w-full max-h-[92vh]" alt="" />
    //     <div className="absolute h-full w-full">
    //       <div className="flex h-full items-center justify-center text-white">
    //         <h3 className="text-5xl">
    //           Affordable <br /> Price For Car <br /> Servicing
    //         </h3>
    //       </div>
    //       {/* this is independent */}
    //       <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-2">
    //         <a href="#slide1" className="btn btn-circle">
    //           ❮
    //         </a>
    //         <a href="#slide3" className="btn btn-circle">
    //           ❯
    //         </a>
    //       </div>
    //     </div>
    //   </div>
    //   {/* three */}
    //   <div id="slide3" className="carousel-item relative w-full">
    //     <img src={img3} className="w-full max-h-[92vh]" alt="" />
    //     <div className="absolute h-full w-full">
    //       <div className="flex h-full items-center justify-center text-white">
    //         <h3 className="text-5xl">
    //           Affordable <br /> Price For Car <br /> Servicing
    //         </h3>
    //       </div>
    //       {/* this is independent */}
    //       <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-2">
    //         <a href="#slide2" className="btn btn-circle">
    //           ❮
    //         </a>
    //         <a href="#slide4" className="btn btn-circle">
    //           ❯
    //         </a>
    //       </div>
    //     </div>
    //   </div>
    //   {/* four */}
    //   <div id="slide4" className="carousel-item relative w-full">
    //     <img src={img4} className="w-full max-h-[92vh]" alt="" />
    //     <div className="absolute h-full w-full">
    //       <div className="flex h-full items-center justify-center text-white">
    //         <h3 className="text-5xl">
    //           Affordable <br /> Price For Car <br /> Servicing
    //         </h3>
    //       </div>
    //       {/* this is independent */}
    //       <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-2">
    //         <a href="#slide3" className="btn btn-circle">
    //           ❮
    //         </a>
    //         <a href="#slide1" className="btn btn-circle">
    //           ❯
    //         </a>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};

export default Banner;
