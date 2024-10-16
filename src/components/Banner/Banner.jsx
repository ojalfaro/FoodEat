import React from "react";
import BannerImg from "../../assets/2.png";

const Banner = () => {
  return (
    <>
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/*img section */}
          <div className="flex justify-center items-center">
            <img src={BannerImg} alt="" />
          </div>
          {/*text section */}
          <div className="flex flex-col justify-center">
            <h1 className="text-4xl font-semibold">Food is always good</h1>
            <p className="py-4 font-semibold">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta
              nam architecto repellendus. Voluptas, totam rerum.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
