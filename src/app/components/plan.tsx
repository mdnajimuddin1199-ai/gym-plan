"use client";
import React, { useContext } from "react";
import { AppContext } from "../context/provider";
import Link from "next/link";
import Image from "next/image";
import { IoMdTime } from "react-icons/io";
import { FaFirefox, FaRegStar } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import { TiTick } from "react-icons/ti";
import { toast } from "react-toastify";

const PlanPage = () => {
  const { plan,setplan, short } = useContext(AppContext);
  const shortedfun = (planman:Exercise[])=>{
    const shortedplan = [...planman];
    if(short==="Duration"){
      shortedplan.sort((a,b)=> b.duration - a.duration)
    }else if(short==="Calories"){
      shortedplan.sort((a,b)=> b.caloriesBurned - a.caloriesBurned)
    }else if(short==="Rating"){
      shortedplan.sort((a,b)=> b.rating - a.rating)
    }
    return shortedplan

  }
  const shortforplan = shortedfun(plan)
  const remaningfun = (redata:Exercise)=>{;
  const remaningdata = plan.filter((savedata)=> savedata.id !== redata.id);
 
    setplan(remaningdata)
    toast.info(`${redata.name} remove from plan card`)

}
  if (plan.length === 0) {
    return (
      <div className="w-full h-80 rounded-2xl border-2 border-gray-700 shadow-2xl  ">
        <h2 className="text-3xl font-semibold text-center items-center mt-20">
          Your Plan Is Emty
        </h2>
        <div className="flex items-center justify-center mt-4">
          <Link href="/">
            <button className="text-center items-center bg-lime-400 text-black hover:translate-y-0.5 hover:scale-100 py-2 px-3 rounded-full">
              {" "}
              Go to Workouts
            </button>
          </Link>
        </div>
      </div>
    );
  }
  return (
    <div className="w-full h-fit rounded-2xl border-2 border-gray-700 shadow-2xl">
      {shortforplan.map((sper, index) => (
        <div
          className="my-6 mx-4 flex justify-between items-center"
          key={index}
        >
          <div className="flex gap-3">
            <div className="">
              <Image
                className="rounded-2xl"
                width={100}
                height={200}
                src={sper.image}
                alt="Image"
              ></Image>
            </div>
            <div>
              <p>{sper.name}</p>
              <p>{sper.equipment}</p>
              <div className="flex w-fit  gap-7 font-semibold justify-start">
                <p className="flex items-center gap-1">
                  {" "}
                  <IoMdTime className="text-[1rem]" /> {sper.duration}
                </p>
                <p className="flex items-center gap-1">
                  {" "}
                  <FaFirefox className="text-[1rem]" />
                  {sper.caloriesBurned}
                </p>
                <p className="flex items-center gap-1">
                  {" "}
                  <FaRegStar className="text-[1rem]" />
                  {sper.rating}
                </p>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-between gap-3">
            <Link href={`/${sper.id}`}>
              {" "}
              <button className="text-white border-2 border-gray-600 py-2 px-3 rounded-full hover:translate-y-0.5 hover:scale-100 shadow-2xl ">
                View Detail{" "}
              </button>
            </Link>
            <Link href="">
              {" "}
              <button onClick={()=>remaningfun(sper)} className="flex items-center gap-2 border-2 border-gray-600 py-2 px-3 rounded-full hover:translate-y-0.5 hover:scale-100 shadow-2xl bg-lime-500 text-black">
                {" "}
                <TiTick  />
                Marks as Done{" "}
              </button>
            </Link>
            <span>
              <RxCross2  onClick={()=>remaningfun(sper)}/>
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PlanPage;
