import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="flex flex-col self-stretch relative min-h-[803px] w-full items-center pt-[23px] pb-52 px-20 max-md:max-w-full max-md:pb-[100px] max-md:px-5">
      <img
        src="https://cdn.builder.io/api/v1/image/assets/f9c27e5b6e85449a85aa3f3e7207a1e5/66a40925c9cbf210ce9625c9685bbe372e4d12650d1f06c4bb6c42915d4333f4?placeholderIfAbsent=true"
        className="absolute h-full w-full object-cover inset-0"
        alt="Hero background"
      />
      <div className="relative flex mb-[-42px] w-full max-w-[1172px] flex-col items-center max-md:max-w-full max-md:mb-2.5">
        <div className="self-stretch flex w-full items-center gap-5 flex-wrap justify-between max-md:max-w-full">
          <div className="self-stretch flex items-stretch gap-1.5">
            <div className="text-[rgba(22,6,71,1)] text-[40px] font-bold grow">
              silika
            </div>
            <div className="bg-[rgba(242,46,82,1)] text-[10px] text-white font-semibold tracking-[0.2px] my-auto px-[11px] py-2 rounded-[5px]">
              We're Hiring
            </div>
          </div>
          <div className="self-stretch flex items-stretch gap-[23px] text-base text-[rgba(22,6,71,1)] font-medium my-auto max-md:max-w-full">
            <div className="flex items-stretch gap-1">
              <div className="grow">user cases</div>
              <img
                src="https://cdn.builder.io/api/v1/image/assets/f9c27e5b6e85449a85aa3f3e7207a1e5/4fe7c978fac9677039e2d86d22385d493905d4da3249f5ca72957964efdbfc64?placeholderIfAbsent=true"
                className="aspect-[1.67] object-contain w-2.5 shrink-0 my-auto"
                alt="Dropdown arrow"
              />
            </div>
            <div className="flex items-stretch gap-[5px] whitespace-nowrap">
              <div className="grow">resources</div>
              <img
                src="https://cdn.builder.io/api/v1/image/assets/f9c27e5b6e85449a85aa3f3e7207a1e5/4fe7c978fac9677039e2d86d22385d493905d4da3249f5ca72957964efdbfc64?placeholderIfAbsent=true"
                className="aspect-[1.67] object-contain w-2.5 shrink-0 my-auto"
                alt="Dropdown arrow"
              />
            </div>
            <div className="flex items-stretch gap-6">
              <div className="basis-auto">weekly demos</div>
              <div>pricing</div>
            </div>
          </div>
          <div className="self-stretch flex items-stretch gap-4 font-semibold my-auto">
            <div className="text-[rgba(22,6,71,1)] text-base grow my-auto">
              Login
            </div>
            <button className="bg-[rgba(71,190,186,1)] gap-2.5 text-sm text-white tracking-[0.28px] px-[30px] py-[15px] rounded-[5px] max-md:px-5">
              Get Started
            </button>
          </div>
        </div>
        <div className="text-[rgba(22,6,71,1)] text-[64px] font-bold tracking-[1.28px] mt-[177px] max-md:text-[40px] max-md:mt-10">
          Silika Helps
        </div>
        <div className="text-[rgba(22,6,71,1)] text-[64px] font-bold leading-none tracking-[1.28px] text-center mt-[7px] max-md:max-w-full max-md:text-[40px]">
          Marketing Agencies!
        </div>
        <div className="text-[rgba(108,108,108,1)] text-base font-normal leading-[25px] text-center w-[697px] mt-[29px] max-md:max-w-full">
          At nulla tristique facilisis augue. Lectus diam dignissim erat blandit
          pellentesque egestas nulla a. Nulla consectetur nunc egestas metus
          pellentesque.
        </div>
        <div className="flex w-[355px] max-w-full items-stretch gap-5 text-sm text-white font-semibold tracking-[0.28px] mt-[41px] max-md:mt-10">
          <button className="bg-[rgba(71,190,186,1)] gap-2.5 px-10 py-5 rounded-[5px] max-md:px-5">
            Get Started
          </button>
          <button className="bg-[rgba(242,46,82,1)] gap-2.5 px-10 py-5 rounded-[5px] max-md:px-5">
            How It Works
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
