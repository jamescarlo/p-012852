import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[rgba(22,6,71,1)] self-stretch flex w-full flex-col items-center justify-center mt-[225px] px-[70px] py-[122px] max-md:max-w-full max-md:mt-10 max-md:pt-[100px] max-md:px-5">
      <div className="w-full max-w-[1000px] ml-[15px] max-md:max-w-full">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
          <div className="w-1/5 max-md:w-full max-md:ml-0">
            <div className="flex w-full flex-col text-white font-medium max-md:mt-7">
              <div className="text-xs tracking-[0.24px]">Product</div>
              <div className="text-sm tracking-[0.28px] mt-[27px]">login</div>
              <div className="text-sm tracking-[0.28px] mt-[13px]">Pricing</div>
              <div className="text-sm tracking-[0.28px] mt-[13px]">
                Copy ai Reviews
              </div>
              <div className="text-sm tracking-[0.28px] mt-[13px]">
                Alternatives
              </div>
              <div className="text-sm tracking-[0.28px] mt-[13px]">
                25+ Languages
              </div>
              <div className="text-sm tracking-[0.28px] mt-[13px]">
                Free Ai Tools
              </div>
              <div className="self-stretch flex items-stretch gap-5 font-bold mt-[55px] max-md:mt-10">
                <div className="text-xl">
                  Silika<span className="text-white">.</span>ai
                </div>
                <div className="text-[10px] my-auto">© 2022 copy ai, Inc </div>
              </div>
            </div>
          </div>
          <div className="w-4/5 ml-5 max-md:w-full max-md:ml-0">
            <div className="flex w-full flex-col items-stretch max-md:max-w-full max-md:mt-7">
              <div className="w-[714px] max-w-full max-md:mr-2.5">
                <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
                  <div className="w-[30%] max-md:w-full max-md:ml-0">
                    <div className="flex grow flex-col text-sm text-white font-medium tracking-[0.28px] max-md:mt-10">
                      <div className="text-xs tracking-[0.24px]">Company</div>
                      <div className="mt-[27px]">Blog</div>
                      <div className="mt-[13px]">Careers</div>
                      <div className="mt-[13px]">Community</div>
                      <div className="mt-[13px]">Twitter</div>
                      <div className="mt-[13px]">Linkedin</div>
                      <div className="self-stretch mt-[13px]">
                        Affiliate Program
                      </div>
                    </div>
                  </div>
                  <div className="w-[41%] ml-5 max-md:w-full max-md:ml-0">
                    <div className="flex flex-col text-sm text-white font-medium tracking-[0.28px] max-md:mt-10">
                      <div className="text-xs tracking-[0.24px]">Support</div>
                      <div className="mt-[27px]">Weekly Deos</div>
                      <div className="mt-3.5">Contact Us</div>
                      <div className="mt-3.5">Report a Bug</div>
                      <div className="mt-3.5">Report an Outage</div>
                      <div className="self-stretch mt-3.5">
                        Request a New Feature
                      </div>
                    </div>
                  </div>
                  <div className="w-[29%] ml-5 max-md:w-full max-md:ml-0">
                    <div className="flex flex-col text-sm text-white font-medium tracking-[0.28px] max-md:mt-10">
                      <div className="text-xs tracking-[0.24px]">
                        User Cases
                      </div>
                      <div className="self-stretch mt-[27px] max-md:mr-[3px]">
                        For Blog Writers
                      </div>
                      <div className="self-stretch mt-3.5">
                        For Social Media
                      </div>
                      <div className="mt-3.5">Managers</div>
                      <div className="mt-3.5">Report</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex w-full gap-5 flex-wrap justify-between mt-[55px] max-md:max-w-full max-md:mt-10">
                <div className="flex items-stretch gap-7 text-[10px] text-white font-bold mt-[9px]">
                  <div>Privacy Notice</div>
                  <div>Terms of service</div>
                </div>
                <div className="flex gap-3.5">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets/f9c27e5b6e85449a85aa3f3e7207a1e5/c8303de2d810e5461ef5bf9b3dac604f024d0bd11f9ecdd338033ae21393f474?placeholderIfAbsent=true"
                    className="aspect-[1] object-contain w-6 shrink-0"
                    alt="Social icon"
                  />
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets/f9c27e5b6e85449a85aa3f3e7207a1e5/5d900da8ed9e2e4f3642b302e832d5e0f7b7f9d612b095bdddccd8454da84ae0?placeholderIfAbsent=true"
                    className="aspect-[1] object-contain w-6 shrink-0"
                    alt="Social icon"
                  />
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets/f9c27e5b6e85449a85aa3f3e7207a1e5/05c91ff69b2654cec895ee3a40297a66960a1090e1679a4fa21cf74fddb8f4ac?placeholderIfAbsent=true"
                    className="aspect-[1] object-contain w-6 shrink-0"
                    alt="Social icon"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
