import React from "react";

interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
  linkText?: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  icon,
  title,
  description,
  linkText = "Try Blog Content",
}) => {
  return (
    <div className="bg-[rgba(255,255,255,0.7)] border flex w-full flex-col items-stretch mx-auto px-8 py-[49px] rounded-[5px] border-[rgba(241,241,241,1)] border-solid max-md:mt-[29px] max-md:px-5">
      <div className="flex items-stretch gap-5 justify-between">
        <img
          src={icon}
          className="aspect-[1] object-contain w-12 shrink-0"
          alt={`${title} icon`}
        />
        <div className="flex flex-col items-stretch">
          <div className="text-[rgba(22,6,71,1)] text-xl font-semibold leading-none">
            {title}
          </div>
          <div className="text-[rgba(122,137,148,1)] text-base font-normal leading-[17px] mt-[25px]">
            {description}
          </div>
        </div>
      </div>
      <div className="self-center flex w-[132px] max-w-full items-stretch gap-2 text-sm text-[rgba(71,190,186,1)] font-medium leading-none mt-[21px]">
        <div className="grow">{linkText}</div>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/f9c27e5b6e85449a85aa3f3e7207a1e5/06a4323304b5acfc077b885ea756906b50bdc98098a3ba318d64d1560f8440d6?placeholderIfAbsent=true"
          className="aspect-[1.25] object-contain w-2.5 shrink-0 my-auto"
          alt="Arrow right"
        />
      </div>
    </div>
  );
};

export default FeatureCard;
