import React, { useState } from "react";
import down from "../assets/SVG/down.svg";
import up from "../assets/SVG/up.svg";
import Location from "../components/basecomponents/Location";
import question from "../assets/SVG/question.svg";
import Dashboaredtitle from "../components/onetimecmponent/Dashboaredtitle";
const FAQ1 = () => {
  const [activetab, setactivetab] = useState("freelancers");
  const [openquestion, setopenquestion] = useState(null);
  ///////////////////////////////////////////////////
  const faqData = {
    freelancers: [
      {
        question: "How do I post a job vacancy on Sheqlee?",
        answer:
          "In order to post a job vacancy on Sheqlee, you must first create an account as a company. Company account creation is done by just filling out a few basic information about your company. Then you can easily post a job vacancy by providing the details of the job post. It takes less than 15mins to post a job.",
      },
      {
        question: "How does Sheqlee benefit freelancers?",
        answer: "Sheqlee provides ... ",
      },
      {
        question:
          "I am a developer based out of Ethiopia. How do I get a job at one of the IT companies in S. Korea and get paid?",
        answer: "Freelancers can offer ... ",
      },
      {
        question: "How does Sheqlee benefit freelancers?",
        answer: "Freelancers can offer ... ",
      },
      {
        question: "How does Sheqlee benefit freelancers?",
        answer: "Freelancers can offer ... ",
      },
      {
        question:
          "I am a developer based out of Ethiopia. How do I get a job at one of the IT companies in S. Korea and get paid?",
        answer: "Freelancers can offer ... ",
      },
      {
        question: "How does Sheqlee benefit freelancers?",
        answer: "Freelancers can offer ... ",
      },
      {
        question: "How does Sheqlee benefit freelancers?",
        answer: "Freelancers can offer ... ",
      },
    ],
    companies: [
      {
        question: "How do I post a job vacancy on Sheqlee?",
        answer: "In order to post a job ... ",
      },
      {
        question: "What information is required to create a company account?",
        answer: "To create a company account ... ",
      },
    ],
  };
  ///////////////////////////////////////////////
  function togleanswer(index) {
    return setopenquestion(openquestion === index ? null : index);
  }
  return (
    <div>
      <Location />
      <div className="p-6 max-w-4xl mx-auto  mt-2 md:mt-6 ">
        <Dashboaredtitle
          text={
            "The following are some of the most commonly asked questions by our users."
          }
          heading={"FAQ"}
          css
        >
          <img src={question} width={66} height={66} />
        </Dashboaredtitle>

        {/* //button sections */}
        <div className="flex justify-center items-center  my-4 ">
          <div className="mb-4 bg-custom-tags  font-kantumruy font-medium w-fit m-3  rounded-[10px]">
            <button
              onClick={(e) => setactivetab("freelancers")}
              className={`px-10 py-3 text-xl font-semibold rounded-[10px] 
        ${
          activetab === "freelancers"
            ? "bg-black text-white m-2"
            : "bg-custom-tags text-gray-800"
        }`}
            >
              Freelancers
            </button>

            <button
              onClick={() => setactivetab("companies")}
              className={`px-10 py-3 text-xl font-semibold rounded-[10px] ${
                activetab === "companies"
                  ? "bg-black text-white m-2"
                  : "bg-custom-tags text-gray-800 "
              }`}
            >
              Companies
            </button>
          </div>
        </div>

        {/* //questions list  */}

        <div className="space-y-4">
          {faqData[activetab].map((item, index) => {
            return (
              <div key={index} className="border rounded-lg overflow-hidden">
                <button
                  className="w-full px-4 md:px-12 py-3 md:py-6 text-left text-sm md:text-xl bg-custom-tags font-kantumruy"
                  onClick={() => togleanswer(index)}
                >
                  {item.question}
                  <span className="float-right">
                    {openquestion === index ? (
                      <img src={up} width={16} height={16} />
                    ) : (
                      <img src={down} width={16} height={16} />
                    )}
                  </span>
                </button>
                {openquestion === index && (
                  <div className="p-4 bg-custom-slate text-lg text-custom-black font-kantumruy">
                    {" "}
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default FAQ1;