import React from "react";

const About = () => {
  return (
    <div className="flex w-full max-w-[1211px] flex-col items-stretch ml-[21px] mt-[121px] max-md:max-w-full max-md:mt-10">
      <div className="flex w-[872px] max-w-full gap-5 flex-wrap justify-between mr-[72px] max-md:mr-2.5">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/f9c27e5b6e85449a85aa3f3e7207a1e5/a890848f80eda25b7f9319fd863d78bf4232b7d096384f2438b2711642adfdbb?placeholderIfAbsent=true"
          className="aspect-[6.49] object-contain w-[234px]"
          alt="Partner logo"
        />
        <img
          src="https://cdn.builder.io/api/v1/image/assets/f9c27e5b6e85449a85aa3f3e7207a1e5/a1a962c3372f553553f689a01311a41bfbf9cf73b4ad286b8bbabaab68777d14?placeholderIfAbsent=true"
          className="aspect-[8.33] object-contain w-[300px]"
          alt="Partner logo"
        />
      </div>
      <div className="text-[rgba(22,6,71,1)] text-5xl font-bold leading-none tracking-[0.96px] self-center mt-[155px] max-md:text-[40px] max-md:mt-10">
        More About Us
      </div>
      <div className="mt-[100px] max-md:max-w-full max-md:mt-10">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
          <div className="w-[38%] max-md:w-full max-md:ml-0">
            <div className="flex w-full flex-col self-stretch font-semibold my-auto max-md:max-w-full max-md:mt-10">
              <div className="text-[rgba(50,40,83,1)] text-[40px] leading-[53px] tracking-[0.8px] self-stretch max-md:max-w-full">
                professional & team choose copy.ai
              </div>
              <div className="text-[rgba(129,129,129,1)] text-base font-normal tracking-[0.32px] mt-[23px]">
                Odio dictum lacus augue nulla sit integer facilisis massa. Nec
                et tellus eu amet. Faucibus sit sit massa ullamcorper{" "}
              </div>
              <button className="bg-[rgba(71,190,186,1)] gap-2.5 text-sm text-white tracking-[0.28px] mt-[27px] px-[30px] py-[15px] rounded-[5px] max-md:px-5">
                Get Started
              </button>
            </div>
          </div>
          <div className="w-[62%] ml-5 max-md:w-full max-md:ml-0">
            <div className="flex flex-col relative min-h-[381px] grow text-8xl text-[rgba(22,6,71,1)] font-bold whitespace-nowrap pl-20 pr-[11px] pt-2 pb-[83px] rounded-[0px_0px_0px_0px] max-md:max-w-full max-md:text-[40px] max-md:mt-10 max-md:pl-5">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/f9c27e5b6e85449a85aa3f3e7207a1e5/826dc8ed04b33d522f992ff49241892d792baa748b44178b7b95a72af53c4527?placeholderIfAbsent=true"
                className="absolute h-full w-full object-cover inset-0"
                alt="About background"
              />
              <div className="relative bg-[rgba(181,208,217,1)] flex w-[18px] shrink-0 h-[18px] rounded-[3px]" />
              <div className="relative self-center mt-[103px] max-md:text-[40px] max-md:mt-10">
                silika
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
