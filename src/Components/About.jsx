import { Link } from "react-router-dom"; // Ensure you have React Router set up for navigation

const AboutUs = () => {
  return (
    <div className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-lg border border-gray-200 hover:shadow-xl transition-shadow mt-10 transform hover:scale-105 hover:shadow-xl hover:shadow-gray-500/50">
      <h2 className="text-3xl font-semibold text-[#2E5077] mb-4">
        CA in Jaipur
      </h2>
      <p className="text-lg text-gray-700 mb-6">
        The Chartered Accountants have been a significant part of not just the Indian economy but also of all the companies in the country, playing a crucial role in ensuring financial health. A Chartered Accountant is a professional who provides financial and tax services to individuals, businesses, and organizations. They are also known as Certified Public Accountants (CAPs). CA in Jaipur works in all areas of finance, including auditing, taxation, financial planning, etc.
      </p>
      <div className="bg-[#2E5077] text-white p-4 rounded-lg">
        <h3 className="text-xl font-semibold">CA Goyal Mangal & Co.</h3>
        <p className="text-base text-white mt-2">
          Founded in 2011 by CA Pulkit Goyal, CA Goyal Mangal & Co. aims to provide the best consultancy and expertise. The team consists of highly skilled and experienced professionals offering tax consultancy, accounting, tax auditing, and financial advisory services to meet our diverse client needs.
        </p>
      </div>
      <div className="mt-6 flex justify-center">
        <button
          className="text-white font-semibold py-3 px-6 rounded-full bg-gradient-to-r from-[#2E5077] to-[#1e3a5f] hover:bg-gradient-to-l hover:from-[#1e3a5f] hover:to-[#2E5077] transition-all duration-300 transform hover:scale-105 hover:shadow-lg shadow-gray-500/50"
          onClick={() => alert('This will navigate to the full content page soon!')}
        >
          Read More
        </button>
      </div>
    </div>
  );
};

export default AboutUs;
