import React, { useState } from "react";

import Mybutton from "../components/basecomponents/Mybutton";
import Postedjobs from "../components/basecomponents/Postedjobs";
import Location from "../components/basecomponents/Location";
// import arrowdown from "../../src/assets/SVG/arrowdown.svg";
import search from "../../src/assets/SVG/search.svg";
import Noresult from "../components/basecomponents/Noresult";
import Dropdownform from "../components/basecomponents/Dropdownform";
import Qestion from "../components/basecomponents/Qestion";
const Alljobs = () => {
  const [formData, setFormdata] = useState({
    category: "",
    type: "",
    level: "",
    programingName: "",
  });
  const updateFormData = (field, value) => {
    setFormdata((prevData) => ({
      ...prevData,
      [field]: value,
    }));
  };
  return (
    <>
      <div className="relative">
        <Location />
        {Object.entries(formData).map(([key, value]) => (
          <div className="flex justify-around" key={key}>
            {key}: {value}
          </div>
        ))}
      </div>

      <div className=" px-3 md:px-6 lg:px-8 my-3  p-3 md:p-6 lg:p-10 ">
        <div className="max-w-4xl mx-auto ">
          {/* header part */}
          <h1 className="text-center font-kantumruy font-semibold text-xl md:text-2xl lg:text-4xl mb-3   ">
            All job posts{" "}
          </h1>
          {/* text part */}
          <p className="text-center text-sm md:text-xl max-w-xl  mx-auto mb-10 font-kantumruy  ">
            Browse the latest jobs you can take up right now. Use filters to
            find the best jobs for your skillset.
          </p>
          {/* filetr part */}

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-y-3 gap-x-6  mx-1 md:mx-2 lg:mx-5 text-custom-placeholder ">
            <div className="relative   ">
              <Dropdownform
                options={["Category 1", "Category 2", "Category 3"]}
                defaultText="All categories"
                updateFormData={updateFormData}
                formData={formData}
                correctvalue2={"category"}
              />
            </div>
            <div className="relative">
              <Dropdownform
                options={["Type 1", "Type 2", "Type 3"]}
                defaultText="All types"
                updateFormData={updateFormData}
                formData={formData}
                correctvalue2={"type"}
              />
            </div>
            <div className="relative">
              <Dropdownform
                options={["Level 1", "Level 2", "Level 3"]}
                defaultText="All levels"
                updateFormData={updateFormData}
                formData={formData}
                correctvalue2={"level"}
              />
            </div>

            <div className="relative  col-span-2">
              <input
                // className="bg-custom-tags  placeholder:text-custom-placeholder font-kantumruy p-1  md:p-3 md:pl-12 rounded-[15px] lg:col-span-2    w-full outline-none "
                type="text"
                className="bg-custom-tags  rounded-lg  h-full outline-none p-3 w-full text-xl font-kantumruy placeholder:text-custom-placeholder lg:col-span-2  md:pl-12"
                placeholder="Search by programming technology or field..."
                value={formData.programingName}
                onChange={(e) =>
                  updateFormData("programingName", e.target.value)
                }
              />
              <img
                src={search}
                alt=""
                className="absolute left-4 bottom-3 h-6 w-5 "
              />
            </div>

            <Mybutton background="bg-custom-purple rounded-lg  text-xl text-white font-semibold  font-kantumruy ">
              Apply filter
            </Mybutton>
          </div>
        </div>
      </div>
      {/* //display all jobs from postedjobs.jsx   */}
      <Postedjobs showicon5 />
      {/* <Noresult /> */}
      <Qestion />
    </>
  );
};

export default Alljobs;
