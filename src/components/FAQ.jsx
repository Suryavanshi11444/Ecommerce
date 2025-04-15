// components/FAQ.js

import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";

// Static FAQ list
const faqList = [
  {
    isActive: true,
    question: "What is Easy Frontend?",
    answer:
      "When it comes to booking a holiday, we know everyone likes something different - so we've designed our getaways with you in mind.",
  },
  {
    isActive: false,
    question: "Who is Easy Frontend for?",
    answer:
      "When it comes to booking a holiday, we know everyone likes something different - so we've designed our getaways with you in mind.",
  },
  {
    isActive: false,
    question: "How does Easy Frontend work?",
    answer:
      "When it comes to booking a holiday, we know everyone likes something different - so we've designed our getaways with you in mind.",
  },
  {
    isActive: false,
    question: "How often does your team upload resources?",
    answer:
      "When it comes to booking a holiday, we know everyone likes something different - so we've designed our getaways with you in mind.",
  },
  {
    isActive: false,
    question: "Can I get a refund if I cancel my subscription?",
    answer:
      "When it comes to booking a holiday, we know everyone likes something different - so we've designed our getaways with you in mind.",
  },
  {
    isActive: false,
    question: "Can I use Easy Frontend designs in my portfolio?",
    answer:
      "When it comes to booking a holiday, we know everyone likes something different - so we've designed our getaways with you in mind.",
  },
  {
    isActive: false,
    question: "Can I buy Easy Frontend extended license?",
    answer:
      "When it comes to booking a holiday, we know everyone likes something different - so we've designed our getaways with you in mind.",
  },
];

// FAQ Item Component
const FaqItem = ({ faq }) => {
  const [isOpen, setIsOpen] = useState(faq.isActive || false);

  const toggleFaq = () => setIsOpen(!isOpen);

  return (
    <div className={`${isOpen && "active"} rounded-lg`}>
      <a
        href="#!"
        className="btn p-4 lg:p-6 w-full text-start flex justify-between items-center cursor-pointer"
        onClick={toggleFaq}
      >
        <span>{faq.question}</span>
        <FontAwesomeIcon icon={isOpen ? faChevronUp : faChevronDown} />
      </a>
      <div
        className={`${
          isOpen ? "block" : "hidden"
        } p-4 lg:p-6 bg-white shadow dark:shadow-none dark:bg-[#1E2735] rounded-xl`}
      >
        <p className="opacity-50">{faq.answer}</p>
      </div>
    </div>
  );
};

FaqItem.propTypes = {
  faq: PropTypes.object.isRequired,
};

// Main FAQ Section Component
const Faq10 = () => {
  return (
    <section className="ezy__faq10 light min-h-screen py-14 md:py-24 bg-white dark:bg-[#0b1727] text-zinc-900 dark:text-white">
      <div className="container mx-auto px-4 md:px-8 lg:px-16">
        
        {/* Centered Header Section */}
        <div className="flex flex-col items-center justify-center text-center min-h-[40vh] mb-12">
          <h2 className="font-bold text-[25px] md:text-[45px] leading-tight mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-lg opacity-70 max-w-3xl">
            Assumenda non repellendus distinctio nihil dicta sapiente,
            quibusdam maiores, illum at, aliquid blanditiis eligendi qui.
            Assumenda non repellendus distinctio nihil dicta sapiente,
            quibusdam maiores.
          </p>
        </div>

        {/* Main content: image + FAQs */}
        <div className="flex flex-col md:flex-row gap-6 items-center justify-center">
          {/* Image section */}
          <div className="w-full md:w-1/3">
  <div
    className="bg-center bg-no-repeat bg-contain w-full h-[300px] rounded-2xl"
    style={{
      backgroundImage:
        "url(https://th.bing.com/th/id/OIP.gG9l5-APZUM_-ilrvXFM5wHaDt?rs=1&pid=ImgDetMain)",
    }}
  ></div>
</div>

          {/* FAQ items */}
          <div className="w-full md:w-2/3 lg:pl-12">
            {faqList.map((faq, i) => (
              <FaqItem faq={faq} key={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq10;
