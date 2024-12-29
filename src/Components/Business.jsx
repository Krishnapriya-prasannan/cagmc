import React from "react";

const BusinessRegistrationCards = () => {
  const registrations = [
    { title: "Foreign Company Registration", description: "For setting up a foreign company to establish business as a subsidiary in India." },
    { title: "Private Limited Company", description: "The most popular form of corporate legal entity in India for Startups." },
    { title: "Public Limited Company Registration", description: "It is suitable for businesses that want to raise equity capital from the public." },
    { title: "LLP Registration", description: "An ideal approach for small business in the unorganized sector having multiple promoters." },
    { title: "Nidhi Company Registration", description: "Develop the habit of economizing by collecting deposits and lending to members." },
    { title: "Producer Company Registration", description: "Ideal for starting the company for farmers for agri purpose with 10 members." },
    { title: "One Person Company Registration", description: "Business Entity ideal for single entrepreneurs aiming to start business with limited liability." },
    { title: "Partnership Registration", description: "Ideal for like-minded people for forming an entity with less procedural compliances." },
  ];

  return (
    <div className="container mx-auto py-12 px-4">
      <h2 className="text-5xl font-bold text-center mb-12 text-[#1E293B] drop-shadow-lg">
        Business Registrations
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
        {registrations.map((item, index) => (
          <div
            key={index}
            className="group relative bg-gradient-to-tr from-[#e2f1f8] to-[#f8f8f8] rounded-2xl overflow-hidden shadow-lg p-8 transform transition-transform duration-300 hover:scale-105 flex flex-col h-[340px]"
          >
            {/* Gradient Border */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-[#2E5077] via-transparent to-[#C3E0E5] opacity-20"></div>

            {/* Content */}
            <div className="relative z-10 flex-grow">
              <h3 className="text-2xl font-semibold text-[#1E293B] mb-4 group-hover:text-[#2E5077] transition-colors duration-300">
                {item.title}
              </h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
            <button className="mt-auto bg-[#2E5077] text-white py-2 px-5 rounded-lg shadow-md hover:bg-[#1E4A64] transition-transform transform hover:-translate-y-1 hover:shadow-lg">
              Learn More
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BusinessRegistrationCards;
