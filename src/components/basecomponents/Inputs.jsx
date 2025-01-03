import React from "react";
import Oneinputfor from "./Oneinputfor";
import blackedit from "../../assets/direction/editblack.svg";
import Mybutton from "./Mybutton";
import Divider from "./Divider";
//pass the id label and all props from user parent component
const Inputs = () => {
  return (
    <div>
      <div className="">
        {/* // i have to edit this one now  */}
        <div className=" mx-5 md:mx-16 lg:mx-48 ">
          <form action="" onSubmit={(e) => e.preventDefault()}>
            <div className="flex  max-sm:flex-col  gap-8 justify-center  md:mt-10">
              <div className="flex flex-col flex-grow relative ">
                <Oneinputfor
                  labeltext={"Full name"}
                  warn
                  placeholder={"Muruts Yifter"}
                  icon={blackedit}
                  id={"name"}
                />
              </div>
              <div className="flex flex-col flex-grow  relative ">
                <Oneinputfor
                  labeltext={"Email"}
                  warn
                  placeholder={"muruts.yifter@gmail.com"}
                  icon={blackedit}
                  id={"email"}
                />
              </div>
            </div>
            <div className="flex  max-sm:flex-col  gap-8 justify-center  md:mt-10">
              <div className="flex flex-col flex-grow relative ">
                <Oneinputfor
                  labeltext={"Password"}
                  warn
                  placeholder={"*************"}
                  icon={blackedit}
                  id={"password"}
                />
              </div>
              <div className="flex flex-col flex-grow relative  ">
                <Oneinputfor
                  labeltext={"Confirm password"}
                  warn
                  placeholder={"*************"}
                  icon={blackedit}
                  id={"confirmpassword"}
                />
              </div>
            </div>
          </form>
        </div>
        <div className="mx-5 md:mx-16 lg:mx-48 my-3">
          <p className="text-start  font-kantumruy">
            leave this empty if you do not change your password{" "}
          </p>
        </div>
      </div>
      {/* //butto section  */}
      <div className=" mt-10 mx-4 md:mx-12 lg:mx-52">
        <div className="flex justify-end  ">
          <Mybutton
            background={
              "bg-custom-purple font-kantumruy rounded-lg p-1 md:p-2 lg:py-3 lg:px-8 text-2xl font-semibold text-custom-white"
            }
          >
            Update setting
          </Mybutton>
        </div>
      </div>
      {/* dvider part */}
      <div className="  mx-5 md:mx-16 lg:mx-48">
        <Divider></Divider>
      </div>
    </div>
  );
};

export default Inputs;
