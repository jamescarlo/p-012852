import React from "react";

const HowItWorks = () => {
  return (
    <section
      className="flex flex-col items-center"
      aria-labelledby="how-it-works-heading"
    >
      <h2
        id="how-it-works-heading"
        className="text-[rgba(22,6,71,1)] text-5xl font-bold mt-[150px] max-md:text-[40px] max-md:mt-10"
      >
        How it works
      </h2>

      <div className="flex w-full max-w-[1062px] gap-5 justify-between mt-[100px] max-md:max-w-full max-md:mt-10">
        <div className="self-stretch max-md:max-w-full">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/f9c27e5b6e85449a85aa3f3e7207a1e5/ebce466d428235ba22cccaba69e622e9de32677b4c0724d72075991f3fe2faa7?placeholderIfAbsent=true"
            className="aspect-[1.51] object-contain w-full rounded-[10px] max-md:max-w-full"
            alt="Step 1 screenshot"
          />
          <img
            src="https://cdn.builder.io/api/v1/image/assets/f9c27e5b6e85449a85aa3f3e7207a1e5/0fb8cdfd2ebc9400c34db9ebbf432e3e7fd9f7330e770b9c7ff81d10dfbd7528?placeholderIfAbsent=true"
            className="aspect-[1.51] object-contain w-full mt-[30px] rounded-[10px] max-md:max-w-full"
            alt="Step 2 screenshot"
          />
        </div>
        <div className="flex flex-col items-stretch text-sm text-black font-bold whitespace-nowrap mt-1.5 max-md:hidden">
          <div className="border px-[9px] py-[5px] border-black border-solid">
            1
          </div>
          <div className="border self-center w-px shrink-0 h-[268px] mt-6 border-[rgba(180,180,180,1)] border-dashed" />
          <div className="border mt-5 px-[9px] py-[5px] border-black border-solid">
            2
          </div>
          <div className="border self-center w-px shrink-0 h-[268px] mt-6 border-[rgba(180,180,180,1)] border-dashed" />
        </div>
        <div className="flex flex-col items-stretch text-xl text-[rgba(22,6,71,1)] font-bold max-md:max-w-full">
          <div>Enter your copywrite project</div>
          <div className="text-base font-medium mt-[18px] max-md:max-w-full">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra est
            purus eu tempor tincidunt commodo.
          </div>
          <div className="flex flex-col text-sm font-normal mt-[43px] px-[35px] max-md:max-w-full max-md:mt-10 max-md:px-5">
            <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
            <div className="self-stretch mt-[17px]">
              Quam duis viverra amet, ultrices risus quis integer nec nulla.
            </div>
            <div className="mt-4">
              Tortor turpis nibh viverra nunc bibendum.
            </div>
          </div>
          <div className="mt-[134px] max-md:mt-10">Genarate Idea</div>
          <div className="text-base font-medium mt-[18px] max-md:max-w-full">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra est
            purus eu tempor tincidunt commodo.
          </div>
          <div className="flex flex-col text-sm font-normal mt-[43px] px-[35px] max-md:max-w-full max-md:mt-10 max-md:px-5">
            <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
            <div className="self-stretch mt-[17px]">
              Quam duis viverra amet, ultrices risus quis integer nec nulla.
            </div>
            <div className="mt-4">
              Tortor turpis nibh viverra nunc bibendum.
            </div>
          </div>
        </div>
      </div>

      <div className="flex w-full max-w-[1062px] gap-5 justify-between mt-5 max-md:max-w-full">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/f9c27e5b6e85449a85aa3f3e7207a1e5/809a78a2166d1b5e4bdf3da69789c731646bb6dddaca8526a8202e0783b6132c?placeholderIfAbsent=true"
          className="aspect-[1.51] object-contain w-full self-stretch rounded-[10px] max-md:max-w-full"
          alt="Step 3 screenshot"
        />
        <div className="border text-sm text-black font-bold whitespace-nowrap px-[9px] py-[5px] border-black border-solid">
          3
        </div>
        <div className="flex flex-col items-stretch text-[rgba(22,6,71,1)] max-md:max-w-full">
          <div className="text-xl font-bold">Copy & Use</div>
          <div className="text-base font-medium mt-[18px] max-md:max-w-full">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra est
            purus eu tempor tincidunt commodo.
          </div>
          <div className="flex flex-col text-sm font-normal mt-[43px] px-[35px] max-md:max-w-full max-md:mt-10 max-md:px-5">
            <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
            <div className="self-stretch mt-[17px]">
              Quam duis viverra amet, ultrices risus quis integer nec nulla.
            </div>
            <div className="mt-4">
              Tortor turpis nibh viverra nunc bibendum.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
