import React from "react";

const Testimonials = () => {
  return (
    <section
      className="flex flex-col items-center"
      aria-labelledby="testimonials-heading"
    >
      <h2
        id="testimonials-heading"
        className="text-[rgba(22,6,71,1)] text-5xl font-extrabold leading-[63px] text-center w-[498px] mt-[150px] max-md:max-w-full max-md:text-[40px] max-md:leading-[59px] max-md:mt-10"
      >
        Let's See What Our Clients Says
      </h2>

      <div className="w-[752px] max-w-full mt-[100px] max-md:mt-10">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
          <div className="w-[17%] max-md:w-full max-md:ml-0">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/f9c27e5b6e85449a85aa3f3e7207a1e5/8919f0e908468ba833ffcdf8f776776d8845f3dcf2096c695b4dc400980d58db?placeholderIfAbsent=true"
              className="aspect-[9.62] object-contain w-[106px] shrink-0 max-w-full self-stretch my-auto max-md:mt-10"
              alt="Quote mark"
            />
          </div>
          <div className="w-[65%] ml-5 max-md:w-full max-md:ml-0">
            <div className="border flex w-full flex-col items-stretch px-[31px] py-[52px] rounded-[5px] border-[rgba(241,241,241,1)] border-solid max-md:mt-10 max-md:px-5">
              <div className="flex items-stretch gap-4">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/f9c27e5b6e85449a85aa3f3e7207a1e5/234d0bc63a1c042875285251323e4e4c81a8dfe3d425974ba126ade6bc34031e?placeholderIfAbsent=true"
                  className="aspect-[0.95] object-contain w-[41px] shrink-0 my-auto rounded-[50%]"
                  alt="Brooklyn Simmons profile"
                />
                <div className="flex flex-col items-stretch">
                  <div className="text-[rgba(22,6,71,1)] text-xl font-bold">
                    Brooklyn Simmons
                  </div>
                  <div className="text-[rgba(122,137,148,1)] text-[15px] font-medium mt-1.5">
                    Nursing Assistant
                  </div>
                </div>
              </div>
              <div className="text-[rgba(122,137,148,1)] text-base font-normal tracking-[0.32px] mt-6">
                Odio dictum lacus augue nulla sit integer facilisis massa. Nec
                et tellus eu amet. Faucibus sit sit massa ullamcorper
              </div>
            </div>
          </div>
          <div className="w-[17%] ml-5 max-md:w-full max-md:ml-0">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/f9c27e5b6e85449a85aa3f3e7207a1e5/52993c1e60c614b60356453c152bb56bf1c4780d5e437ab7c8adecb1c5d76c68?placeholderIfAbsent=true"
              className="aspect-[9.62] object-contain w-[106px] shrink-0 max-w-full self-stretch my-auto max-md:mt-10"
              alt="Quote mark"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
