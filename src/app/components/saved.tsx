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

const SavedPage = () => {
  const { save,setsave ,short} = useContext(AppContext);
const shortbyfun = (everyman:Exercise[])=>{
  const shorteveryman = [...everyman];
  if(short==="Duration"){
    shorteveryman.sort((a,b)=> b.duration - a.duration)
  }else if (short==="Calories"){
    shorteveryman.sort((a,b)=> b.caloriesBurned - a.caloriesBurned)
  }else if(short==="Rating"){
    shorteveryman.sort((a,b)=> b.rating - a.rating)
  }
  return shorteveryman
}
const evenforsaved = shortbyfun(save)
const remaningfun = (redata:Exercise)=>{;
  const remaningdata = save.filter((savedata)=> savedata.id !== redata.id);
    setsave(remaningdata)
    toast.info(`${redata.name} remove from save list card`)

}
  if (save.length === 0) {
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
      {evenforsaved.map((saveper) => (
        <div
          className="my-6 mx-4 flex justify-between items-center"
          key={saveper.name}
        >
          <div className="flex gap-3">
            <div className="">
              <Image
                className="rounded-2xl"
                width={100}
                height={200}
                src={saveper.image}
                alt="Image"
              ></Image>
            </div>
            <div>
              <p>{saveper.name}</p>
              <p>{saveper.equipment}</p>
              <div className="flex w-fit  gap-7 font-semibold justify-start">
                <p className="flex items-center gap-1">
                  {" "}
                  <IoMdTime className="text-[1rem]" /> {saveper.duration}
                </p>
                <p className="flex items-center gap-1">
                  {" "}
                  <FaFirefox className="text-[1rem]" />
                  {saveper.caloriesBurned}
                </p>
                <p className="flex items-center gap-1">
                  {" "}
                  <FaRegStar className="text-[1rem]" />
                  {saveper.rating}
                </p>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-between gap-3">
            <Link href={`/${saveper.id}`}>
              {" "}
              <button className="text-white border-2 border-gray-600 py-2 px-3 rounded-full hover:translate-y-0.5 hover:scale-100 shadow-2xl ">
                View Detail{" "}
              </button>
            </Link>
            <Link href="">
              {" "}
              <button onClick={()=>remaningfun(saveper)} className="flex items-center gap-2 border-2 border-gray-600 py-2 px-3 rounded-full hover:translate-y-0.5 hover:scale-100 shadow-2xl bg-lime-500 text-black">
                {" "}
                <TiTick  />
                Marks as Done{" "}
              </button>
            </Link>
            <span>
              <RxCross2  onClick={()=>remaningfun(saveper)}/>
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SavedPage;
