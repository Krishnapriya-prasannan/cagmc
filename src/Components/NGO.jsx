import React from "react";

const NGORegistrationCards = () => {
  const registrations = [
    {
      title: "Trust Registration",
      description:
        "A Trust is an arrangement where the owner or trust transfers the property to a trustee.",
      img: "/images/trust.jpeg", // Image from public/images folder
    },
    {
      title: "Society Registration",
      description:
        "A group of people working together to promote charitable activities like sports, music, culture, religion, art, education, etc.",
      img: "/images/society.jpeg", // Image from public/images folder
    },
    {
      title: "Section-8 Company",
      description:
        "Company formed with an object to promote commerce, art, science, sports, research, education, religion, protection of the environment, charity, etc.",
      img: "/images/section8.jpeg", // Image from public/images folder
    },
    {
      title: "FCRA Registration",
      description:
        "Foreign contributions or income from nations outside of India are governed by the Foreign Contribution Regulation Act (FCRA).",
      img: "/images/FCRA.jpeg", // Image from public/images folder
    },
  ];

  return (
    <div className="container mx-auto py-10">
      <h2 className="text-3xl font-bold text-center mb-8 text-[#2E5077]">
        NGO Registrations
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {registrations.map((item, index) => (
          <div
            key={index}
            className="bg-white border border-[#2E5077] rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 hover:translate-y-3"
          >
            <div className="relative w-full h-48">
              <img
                src={item.img}
                alt={item.title}
                className="object-cover w-full h-full opacity-80 transition-opacity duration-300 hover:opacity-100"
              />
              <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 transition-all duration-300 hover:opacity-40"></div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-[#2E5077] mb-4">
                {item.title}
              </h3>
              <p className="text-gray-700 mb-6">{item.description}</p>
              <button className="bg-[#2E5077] text-white py-2 px-6 rounded-lg text-sm font-semibold transition-transform duration-200 transform hover:scale-105">
                Learn More
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NGORegistrationCards;
