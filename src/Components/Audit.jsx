import React from "react";
import {
  DocumentTextIcon,
  BriefcaseIcon,
  CurrencyDollarIcon,
  ChartBarIcon,
  IdentificationIcon,
  BanknotesIcon,
  UserGroupIcon,
  ClipboardDocumentCheckIcon,
} from "@heroicons/react/24/solid";

const AuditAndTaxManagement = () => {
  const services = [
    {
      title: "ITR Filing",
      description:
        "ITR is a form in which an Assessee files his information about Income and tax payable to the Income Tax Department.",
      icon: <DocumentTextIcon className="h-16 w-16 text-[#4AC0E0]" />,
    },
    {
      title: "ROC Filing",
      description:
        "Annual General Meeting of the company is conducted once a year and the due date for the first Annual General Meeting.",
      icon: <BriefcaseIcon className="h-16 w-16 text-[#4AC0E0]" />,
    },
    {
      title: "GST Return",
      description:
        "All business & entrepreneurs who are registered under the GST mechanism have to mandatorily file the GST returns in the relevant GST form.",
      icon: <CurrencyDollarIcon className="h-16 w-16 text-[#4AC0E0]" />,
    },
    {
      title: "TDS Return",
      description:
        "TDS return is a quarterly statement to be given to the IT department. It is compulsory for Deductor to submit a TDS return on time.",
      icon: <ChartBarIcon className="h-16 w-16 text-[#4AC0E0]" />,
    },
    {
      title: "GST Audit",
      description:
        "GST Audit refers to the examination of the returns, records and other important documents which a taxable individual maintains.",
      icon: <IdentificationIcon className="h-16 w-16 text-[#4AC0E0]" />,
    },
    {
      title: "Bank Audit",
      description:
        "They handle a huge amount of deposits and savings of the public, so they have to be closely monitored and reviewed.",
      icon: <BanknotesIcon className="h-16 w-16 text-[#4AC0E0]" />,
    },
    {
      title: "NGO Audit",
      description:
        "Non-profit making organization in which funds are raised from members, donors or contributors besides from receiving donations.",
      icon: <UserGroupIcon className="h-16 w-16 text-[#4AC0E0]" />,
    },
    {
      title: "Tax Audit",
      description:
        "There are various types of audits under different laws such as company audit, statutory audit, cost audit, stock audit, etc.",
      icon: <ClipboardDocumentCheckIcon className="h-16 w-16 text-[#4AC0E0]" />,
    },
  ];

  return (
    <div className="container mx-auto py-16">
      <h2 className="text-3xl font-bold text-center mb-12 text-[#134E6F]">
        Audit and Tax Management
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12">
        {services.map((service, index) => (
          <div
            key={index}
            className="group relative w-full h-[300px] bg-white rounded-lg shadow-xl overflow-hidden transform transition-all duration-500 hover:scale-105 hover:shadow-2xl"
          >
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#134E6F] to-[#1D809F] opacity-80"></div>

            {/* Sliding Icon and Label */}
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 text-center text-white">
              <div className="transform group-hover:translate-y-[-250px] transition-all duration-500">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold transform group-hover:translate-y-[-170px] transition-all duration-500">
                {service.title}
              </h3>
            </div>

            {/* Content */}
            <div className="absolute inset-0 p-8 flex flex-col justify-between items-center text-white">
              <div className="transform translate-y-20 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                <p className="text-lg text-center">{service.description}</p>
              </div>

              {/* Action Button */}
              <div className="absolute bottom-4 w-full text-center transform translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                <button className="bg-[#4AC0E0] text-[#134E6F] py-3 px-8 rounded-lg text-sm font-semibold transform transition-all duration-200 hover:scale-110 hover:bg-[#134E6F] hover:text-white">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AuditAndTaxManagement;
