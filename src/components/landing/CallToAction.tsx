import React from "react";

const CallToAction = () => {
  return (
    <div className="flex flex-col self-stretch relative min-h-[985px] w-full mt-[135px] pb-[286px] max-md:max-w-full max-md:mt-10 max-md:pb-[100px]">
      <img
        src="https://cdn.builder.io/api/v1/image/assets/f9c27e5b6e85449a85aa3f3e7207a1e5/5c57171d5ff0f1e31c58ee5d8e3b604f432c62c7944fa2b2f7bdfe85f11d90c2?placeholderIfAbsent=true"
        className="absolute h-full w-full object-cover inset-0"
        alt="CTA background"
      />
      <div className="flex flex-col relative min-h-[699px] mb-[-57px] w-full items-stretch pt-32 max-md:max-w-full max-md:mb-2.5 max-md:pt-[100px]">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/f9c27e5b6e85449a85aa3f3e7207a1e5/6526e6fa478bdf612404a00f40358fc4127d4613e6c273dc70bb008f47b2bd84?placeholderIfAbsent=true"
          className="absolute h-full w-full object-cover inset-0"
          alt="CTA overlay"
        />
        <h2 className="relative text-white text-[64px] font-bold leading-[94px] text-center self-center z-10 max-md:max-w-full max-md:text-[40px] max-md:leading-[65px]">
          Say 'Goodbye' to the blank
          <br />
          page <span className="text-[rgba(242,46,82,1)]">for good</span>
        </h2>
        <div className="flex flex-col relative z-10 min-h-[700px] mb-[-286px] w-full items-center text-sm pt-[414px] pb-36 px-20 max-md:max-w-full max-md:mb-2.5 max-md:px-5 max-md:py-[100px]">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/f9c27e5b6e85449a85aa3f3e7207a1e5/abd79fc2e1a440c69c2a8dc7719782afe56551a4531c995155f458fdae139745?placeholderIfAbsent=true"
            className="absolute h-full w-full object-cover inset-0"
            alt="Form background"
          />
          <div className="relative flex mb-[-29px] w-[431px] max-w-full flex-col items-center max-md:mb-2.5">
            <div className="text-white text-xl font-semibold tracking-[0.4px]">
              Get your free account today
            </div>
            <div className="self-stretch flex w-full items-stretch gap-[13px] font-medium mt-[31px] max-md:max-w-full">
              <button className="bg-white flex items-stretch gap-[9px] text-[rgba(22,6,71,1)] tracking-[0.28px] px-[17px] py-3.5 rounded-[50px]">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/f9c27e5b6e85449a85aa3f3e7207a1e5/80eac08b5a5acc5929ba76a1011470d29dc695ab91aa7349dc7ade6af4536ede?placeholderIfAbsent=true"
                  className="aspect-[1] object-contain w-[15px] shrink-0"
                  alt="Google icon"
                />
                <span className="basis-auto">signup with google</span>
              </button>
              <div className="text-[rgba(122,137,148,1)] font-semibold my-auto">
                or
              </div>
              <button className="bg-[rgba(71,190,186,1)] text-white tracking-[0.28px] px-[47px] py-3.5 rounded-[50px] max-md:px-5">
                signup with email
              </button>
            </div>
            <div className="text-[rgba(122,137,148,1)] font-normal mt-[25px]">
              No Credit Card Required
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;
