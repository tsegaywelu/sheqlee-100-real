import React from "react";
import Location from "../components/basecomponents/Location";
import { useParams } from "react-router-dom";
import devops from "../assets/SVG/ui.svg";
import Jobicons from "../components/onetimecmponent/Jobicons";
import clock from "../assets/SVG/clock.svg";
import companyb from "../assets/SVG/companyb.svg";
import calendar from "../assets/SVG/calendar.svg";
import tagsvg from "../assets/SVG/ags.svg";
import Qestion from "../components/basecomponents/Qestion";
import { FaFacebook, FaTwitter, FaTelegram, FaLinkedin } from "react-icons/fa";
const Jobdetail = () => {
  const { theidtodisplay } = useParams();

  return (
    <div>
      <Location />
      <div className="flex flex-col items-center justify-center gap-10 my-10">
        <div className="flex justify-center items-center gap-4">
          <img src={devops} alt="job icon " width={48} height={48} />
          <span className=" text-sm md:text-5xl  font-kantumruy font-medium capitalize">
            {" "}
            {theidtodisplay}
          </span>
        </div>
        <div className="flex justify-center items-center gap-x-5">
          <Jobicons text={"1hr ago"}>
            <img
              src={companyb}
              width={14}
              height={14}
              className="mr-1"
              alt=""
            />
          </Jobicons>
          <Jobicons text={"Infosys"}>
            <img
              src={companyb}
              width={14}
              height={14}
              className="mr-1"
              alt=""
            />
          </Jobicons>
          <Jobicons text={"full time"}>
            <img src={clock} width={14} height={14} className="mr-1" alt="" />
          </Jobicons>
          <Jobicons text={"intermidate"}>
            <img
              src={calendar}
              width={14}
              height={14}
              className="mr-1"
              alt=""
            />
          </Jobicons>

          <Jobicons text={"$20/hr"}>
            <img
              src={companyb}
              width={14}
              height={14}
              className="mr-1"
              alt=""
            />
          </Jobicons>
        </div>
        <div className="space-y-1.5">
          <button className="bg-custom-purple px-16 py-3 rounded-lg text-white font-kantumruy font-semibold text-2xl">
            Apply now
          </button>
          <p className="text-xs font-kantumruy">
            Please mention <span className="font-semibold">Sheqlee</span> when
            you apply.
          </p>
        </div>
      </div>
      {/* //body parts */}
      <div className=" max-w-6xl mx-auto  bg-custom-slate text-start p-10 rounded-[15px]">
        We need one to Designs and maintains prospect websites including graphic
        development, regular site updates, usability reviews and traffic
        reporting. QUALIFICATIONS - Bachelor's degree with major in graphic
        design or a related field from an accredited college or university
        preferred. Experience - Four (4) years of graphic/web design experience
        or equivalent combination of education and experience required. Skills &
        Knowledge - Excellent knowledge of graphic and photo software - Good
        knowledge of web technology - Excellent oral and written communication,
        including presentation skills - PC literate, including Microsoft Office
        products - Strong organizational skills - Excellent interpersonal skills
        - Ability to work on multiple projects and meet deadlines - Ability to
        work in a team environment - Ability to meet or exceed Performance
        Competencies Description For a career path that is both challenging and
        rewarding, join Sedgwick’s talented team of 27,000 colleagues around the
        globe. Sedgwick is a leading provider of technology-enabled risk,
        benefits and integrated business solutions. Taking care of people is at
        the heart of everything we do. Millions of people and organizations
        count on Sedgwick each year to take care of their needs when they face a
        major life event or something unexpected happens. Whether they have a
        workplace injury, suffer property or financial loss or damage from a
        natural or manmade disaster, are involved in an auto or other type of
        accident, or need time away from work for the birth of a child or
        another medical situation, we are here to provide compassionate care and
        expert guidance. Our clients depend on our talented colleagues to take
        care of their most valuable assets—their employees, their customers and
        their property. At Sedgwick, caring counts®. Join our team of creative
        and caring people of all backgrounds, and help us make a difference in
        the lives of others. PRIMARY PURPOSE: To design and produce
        presentations, technical and conceptual web graphics, interactive
        marketing materials, and print materials.
      </div>
      <div className=" flex  flex-col justify-center items-center mt-10 gap-5 mb-10">
        <div className="flex justify-center items-center gap-5 mb-5">
          <div className="bg-black   flex justify-center items-center p-1   rounded-[4px]">
            <img src={tagsvg} width={16} height={16} className="mr-1" alt="" />
          </div>

          <Jobicons text={"Java"}></Jobicons>
          <Jobicons text={"User Interface"}></Jobicons>
          <Jobicons text={"Python"}></Jobicons>
          <Jobicons text={"C++"}></Jobicons>
          <Jobicons text={"Flutter"}></Jobicons>
        </div>
        <div className="space-y-1.5 flex flex-col justify-center items-center ">
          <button className="bg-custom-purple px-16 py-3 rounded-lg text-white font-kantumruy font-semibold text-2xl">
            Apply now
          </button>
          <p className="text-xs font-kantumruy">
            Please mention <span className="font-semibold">Sheqlee</span> when
            you apply.
          </p>
        </div>

        <div className="space-y-2">
          <p>Share with others</p>
          <div className="flex gap-4  text-gray-700">
            <FaFacebook
              size={20}
              className="hover:text-purple-400 cursor-pointer"
            />
            <FaTwitter
              size={20}
              className="hover:text-purple-400 cursor-pointer"
            />
            <FaTelegram
              size={20}
              className="hover:text-purple-400 cursor-pointer"
            />
            <FaLinkedin
              size={20}
              className="hover:text-purple-400 cursor-pointer"
            />
          </div>
        </div>
      </div>
      <Qestion />
    </div>
  );
};

export default Jobdetail;
