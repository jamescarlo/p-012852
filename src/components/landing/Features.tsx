import React from "react";
import FeatureCard from "./FeatureCard";

const Features = () => {
  const featureCards = [
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/f9c27e5b6e85449a85aa3f3e7207a1e5/4bda2080ea8b0d3ff1e64799781eb6c760f5051509a57a4cf3945eefbef5ec12?placeholderIfAbsent=true",
      title: "Blog Content",
      description: "Write optimized blog posts in\na fraction of the time",
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/f9c27e5b6e85449a85aa3f3e7207a1e5/2b51368b49c867588b2346483a2d6c18cccdb63dac1602c4c2340760c815874d?placeholderIfAbsent=true",
      title: "Article",
      description: "Write optimized blog posts in\na fraction of the time",
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/f9c27e5b6e85449a85aa3f3e7207a1e5/d2e9f762daa938927a253e396ea13a47e891bf0ee1598fcede5b23c6228c655d?placeholderIfAbsent=true",
      title: "Content Writing",
      description: "Write optimized blog posts in\na fraction of the time",
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/f9c27e5b6e85449a85aa3f3e7207a1e5/677bcbe07ae58de3551cedbaac8229d9b0a1e0af0e29f893cd81cf6114ea15ea?placeholderIfAbsent=true",
      title: "Seo",
      description: "Write optimized blog posts in\na fraction of the time",
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/f9c27e5b6e85449a85aa3f3e7207a1e5/2b51368b49c867588b2346483a2d6c18cccdb63dac1602c4c2340760c815874d?placeholderIfAbsent=true", // Using same icon as placeholder for Design
      title: "Design",
      description: "Write optimized blog posts in\na fraction of the time",
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/f9c27e5b6e85449a85aa3f3e7207a1e5/f978faf0420a4ee83e933ab6496dbeffeaf29faf584c14d6f74af1d8110f13c9?placeholderIfAbsent=true",
      title: "Coding",
      description: "Write optimized blog posts in\na fraction of the time",
    },
  ];

  return (
    <section aria-labelledby="features-heading">
      <div
        className="text-[rgba(22,6,71,1)] text-5xl font-bold leading-none tracking-[0.96px] self-center mt-[150px] max-md:text-[40px] max-md:mt-10"
        id="features-heading"
      >
        Our Features
      </div>

      <div className="w-full max-w-[1169px] mt-[100px] max-md:max-w-full max-md:mt-10">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
          {featureCards.slice(0, 3).map((card, index) => (
            <div key={index} className="w-[33%] max-md:w-full max-md:ml-0">
              <FeatureCard
                icon={card.icon}
                title={card.title}
                description={card.description}
              />
            </div>
          ))}
        </div>
      </div>

      <div className="w-full max-w-[1169px] mt-[30px] max-md:max-w-full">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
          {featureCards.slice(3).map((card, index) => (
            <div key={index} className="w-[33%] max-md:w-full max-md:ml-0">
              <FeatureCard
                icon={card.icon}
                title={card.title}
                description={card.description}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
