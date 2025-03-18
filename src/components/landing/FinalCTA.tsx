import React from "react";

const FinalCTA = () => {
  return (
    <section className="flex flex-col items-center mt-[177px] max-md:mt-10">
      <h2 className="text-[rgba(22,6,71,1)] text-5xl font-bold max-md:max-w-full max-md:text-[40px]">
        Ready to level-up?
      </h2>
      <p className="text-[rgba(22,6,71,1)] text-sm font-medium leading-none text-center mt-2">
        Id ipsum amet nibh dolor mi ac diam pellentesque.
      </p>
      <button className="bg-[rgba(71,190,186,1)] w-[193px] max-w-full text-sm text-white font-semibold mt-[33px] px-6 py-[17px] rounded-[5px] max-md:px-5">
        Get Started - It's Free
      </button>
      <div className="flex w-[795px] max-w-full items-stretch gap-5 text-sm text-[rgba(22,6,71,1)] font-medium tracking-[0.28px] flex-wrap justify-between mt-[53px] max-md:mt-10">
        <div className="flex items-stretch gap-3">
          <div className="bg-[rgba(247,251,250,1)] border flex w-[31px] shrink-0 h-[31px] rounded-[50%] border-[rgba(71,190,186,1)] border-solid" />
          <div className="basis-auto my-auto">No Credit Card Required</div>
        </div>
        <div className="flex items-stretch gap-3.5">
          <div className="bg-[rgba(247,251,250,1)] border flex w-[31px] shrink-0 h-[31px] rounded-[50%] border-[rgba(71,190,186,1)] border-solid" />
          <div className="basis-auto my-auto">30 credits on sign up</div>
        </div>
        <div className="flex items-stretch gap-3.5">
          <div className="bg-[rgba(247,251,250,1)] border flex w-[31px] shrink-0 h-[31px] rounded-[50%] border-[rgba(71,190,186,1)] border-solid" />
          <div className="basis-auto my-auto">90+ contents type to explore</div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
