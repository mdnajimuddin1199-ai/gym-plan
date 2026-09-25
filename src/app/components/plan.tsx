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
        className="my-4 mx-2 md:my-6 md:mx-4 flex flex-col md:flex-row md:justify-between gap-4"
        key={index}
      >
        {/* Exercise Information */}
        <div className="flex gap-2 md:gap-3 min-w-0">
          <div className="shrink-0">
            <Image
              className="rounded-2xl w-16 h-16 md:w-20 md:h-20 object-cover"
              width={100}
              height={200}
              src={sper.image}
              alt="Image"
            />
          </div>

          <div className="min-w-0 text-[.8rem] md:text-[1rem]">
            <p className="font-semibold truncate">{sper.name}</p>

            <p className="truncate">{sper.equipment}</p>

            <div className="flex flex-wrap w-fit gap-2 md:gap-7 font-semibold">
              <p className="flex items-center gap-1">
                <IoMdTime className="text-[1rem]" />
                {sper.duration}
              </p>

              <p className="flex items-center gap-1">
                <FaFirefox className="text-[1rem]" />
                {sper.caloriesBurned}
              </p>

              <p className="flex items-center gap-1">
                <FaRegStar className="text-[1rem]" />
                {sper.rating}
              </p>
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex flex-wrap items-center gap-2 md:gap-3 md:shrink-0">
          <Link href={`/${sper.id}`}>
            <button className="text-white border-2 border-gray-600 py-1 px-2 md:py-2 md:px-3 text-[.8rem] md:text-[1rem] rounded-full shadow-2xl">
              View Detail
            </button>
          </Link>

          <button
            onClick={() => remaningfun(sper)}
            className="flex items-center gap-1 md:gap-2 border-2 border-gray-600 py-1 px-2 md:py-2 md:px-3 text-[.8rem] md:text-[1rem] rounded-full shadow-2xl bg-lime-500 text-black"
          >
            <TiTick />
            Marks as Done
          </button>

          <button
            onClick={() => remaningfun(sper)}
            className="p-2"
          >
            <RxCross2 />
          </button>
        </div>
      </div>
    ))}
  </div>
);
};

export default PlanPage;
