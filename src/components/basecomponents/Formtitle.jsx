import React from "react";

const Formtitle = ({ children, building1, profetional, titletext }) => {
  return (
    <>
      <div className="relative  max-w-2xl  p-6  my-4 md:my-8  bg-custom-slate mx-auto mt-3 rounded-r-[15px]">
        <img
          src={building1}
          className="bg-black text-white rounded-l-[15px] absolute left-0 top-0  h-full p-6"
          width={70}
          height={70}
        />
        {children}
      </div>
      {/* header part */}
      <div className="flex  flex-start  max-w-4xl mx-auto text-center gap-7 mt-20">
        <img src={profetional} width={45} height={45} />
        <div>
          {" "}
          <h1 className="text-2xl md:text-4xl text-center font-semibold  font-kantumruy">
            {titletext}
          </h1>
        </div>
      </div>
    </>
  );
};
export default Formtitle;