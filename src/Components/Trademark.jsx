import React from "react";

const TrademarkRegistrationCards = () => {
  const registrations = [
    {
      title: "Trademark Registration",
      description:
        "Register your brand name/logo and create your goodwill in the market.",
      icon: "/images/tm.jpeg", 
    },
    {
      title: "Copyright Registration",
      description:
        "Copyright is the legal right to ownership and enjoyment entitled to creators.",
      icon: "/images/copy.jpeg", 
    },
    {
      title: "Design Registration",
      description:
        "Protect any newly created shape, configuration, patterns, and composition of lines or colours.",
      icon: "/images/design.jpeg", 
    },
    {
      title: "Patent Registration",
      description:
        "Secured invention or the special right given to an inventor by a govt to manufacture, sell or use invention.",
      icon: "/images/patent.jpeg", 
    },
  ];

  return (
    <div className="container mx-auto py-12">
      <h2 className="text-3xl font-bold text-center mb-12 text-[#2E5077]">
        Trademark Registration
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
        {registrations.map((item, index) => (
          <div
            key={index}
            className="transform perspective-1500 hover:scale-105 hover:rotate-y-12 transition-all duration-300"
          >
            <div className="relative w-full h-[350px] bg-gradient-to-r from-[#2E5077] to-[#1c3d5d] rounded-lg shadow-xl group flex flex-col">
              {/* Image Container with Overlay */}
              <div className="relative w-full h-[350px] overflow-hidden rounded-t-lg transition-all duration-500 ease-in-out group-hover:rotate-x-12">
                <img
                  src={item.icon}
                  alt={item.title}
                  className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                />
                {/* Black Overlay for better readability */}
                <div className="absolute inset-0 bg-black opacity-60 transition-opacity duration-300"></div>
              </div>
              {/* Text Content */}
              <div className="absolute inset-0 p-8 text-white flex flex-col justify-between items-center transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-10">
                <div className="flex flex-col items-center mb-6 flex-grow">
                  <h3 className="text-2xl font-semibold mb-2 text-center">{item.title}</h3>
                  <p className="text-lg text-center mb-4">{item.description}</p>
                </div>
                <div className="flex justify-center w-full">
                  <button className="bg-[#2E5077] text-white py-3 px-8 rounded-lg text-sm font-semibold transform transition-all duration-200 hover:scale-110 hover:bg-[#1c3d5d]">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrademarkRegistrationCards;
