import React from "react";
import { Link } from "react-router-dom";
import Dashboaredtitle from "../components/onetimecmponent/Dashboaredtitle";
import categories12 from "../assets/SVG/categories.svg";
import {
  FaGlobe,
  FaDatabase,
  FaBrush,
  FaMobileAlt,
  FaRobot,
  FaCode,
  FaShieldAlt,
  FaWrench,
} from "react-icons/fa";
import { GiMagnifyingGlass, GiGearHammer } from "react-icons/gi";
import CatagoriesCard from "../cards/CatagoriesCard";
import Location from "../components/basecomponents/Location";

const categories = [
  { title: "Web Frontend", jobs: 140, subscribers: 2173, icon: <FaGlobe /> },
  {
    title: "Backend & Database",
    jobs: 140,
    subscribers: 2173,
    icon: <FaDatabase />,
  },
  {
    title: "UI/UX & Product Design",
    jobs: 78,
    subscribers: 1045,
    icon: <FaBrush />,
  },
  {
    title: "Mobile Application",
    jobs: 140,
    subscribers: 2173,
    icon: <FaMobileAlt />,
  },
  {
    title: "Machine Learning",
    jobs: 140,
    subscribers: 2173,
    icon: <FaRobot />,
  },
  { title: "Web Full-Stack", jobs: 140, subscribers: 2173, icon: <FaCode /> },
  { title: "Security", jobs: 140, subscribers: 2173, icon: <FaShieldAlt /> },
  {
    title: "QA & DevOps Engineer",
    jobs: 140,
    subscribers: 2173,
    icon: <FaWrench />,
  },
  {
    title: "Web Frontend",
    jobs: 140,
    subscribers: 2173,
    icon: <GiMagnifyingGlass />,
  },
  {
    title: "UI/UX & Product Design",
    jobs: 78,
    subscribers: 1045,
    icon: <FaBrush />,
  },
  {
    title: "Mobile Application",
    jobs: 140,
    subscribers: 2173,
    icon: <FaMobileAlt />,
  },
  {
    title: "Backend & Database",
    jobs: 140,
    subscribers: 2173,
    icon: <FaDatabase />,
  },
  {
    title: "Machine Learning",
    jobs: 140,
    subscribers: 2173,
    icon: <FaRobot />,
  },
  {
    title: "Web Full-Stack",
    jobs: 140,
    subscribers: 2173,
    icon: <FaCode />,
  },
  {
    title: "Security",
    jobs: 140,
    subscribers: 2173,
    icon: <FaShieldAlt />,
  },
];

const Catagoris = () => {
  const fakeid = "catagorydetail";
  return (
    <div>
      <Location />
      <div className="mt-10">
        <Dashboaredtitle
          text={
            " Job categories along with their respective number of jobs posted and" +
            " number of subscribers."
          }
          heading={"All Categories"}
          css
        >
          <img src={categories12} width={96} height={96} />
        </Dashboaredtitle>
      </div>
      <div className="max-w-4xl mx-auto my-8 p-6">
        {/* {the title } */}

        {/* Categories Grid */}
        <Link to={`/sheqle/catagory/${fakeid}`}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 text-xl p-3">
            {categories.map((category) => (
              <CatagoriesCard
                key={category.title}
                title={category.title}
                jobs={category.jobs}
                subscribers={category.subscribers}
              >
                {category.icon}
              </CatagoriesCard>
            ))}
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Catagoris;
