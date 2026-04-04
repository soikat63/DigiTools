import React from "react";

const stats = [
  { value: "50K+", label: "Active Users" },
  { value: "200+", label: "Premium Tools" },
  { value: "4.9", label: "Rating" },
];

const BannerBottom = () => {
  return (
    <section className="bg-gradient-to-r from-[#4F39F6] to-[#9514FA] py-15">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-6 text-center text-white">
          {stats.map((stat, i) => (
            <div
              key={i}
              className={`
            flex flex-col items-center 
            border-b border-white/30 pb-6 mb-6 last:border-b-0 last:mb-0 
            md:border-b-0 md:pb-0 md:mb-0
            ${i === 1 ? "md:border-x md:border-white/30 md:px-6" : ""}
          `}
            >
              <h3 className="text-2xl md:text-6xl font-extrabold">
                {stat.value}
              </h3>
              <p className="text-purple-200 text-base md:text-2xl font-medium mt-3">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BannerBottom;
