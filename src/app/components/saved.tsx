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
  const { save, setsave, short ,activeTab } = useContext(AppContext);
  const shortbyfun = (everyman: Exercise[]) => {
    const shorteveryman = [...everyman];
    if (short === "Duration") {
      shorteveryman.sort((a, b) => b.duration - a.duration);
    } else if (short === "Calories") {
      shorteveryman.sort((a, b) => b.caloriesBurned - a.caloriesBurned);
    } else if (short === "Rating") {
      shorteveryman.sort((a, b) => b.rating - a.rating);
    }
    return shorteveryman;
  };
  const evenforsaved = shortbyfun(save);
  const remaningfun = (redata: Exercise) => {
    const remaningdata = save.filter((savedata) => savedata.id !== redata.id);
    setsave(remaningdata);
    toast.info(`${redata.name} remove from save list card`);
  };
  if (save.length === 0) {
    return (
      <div className="w-full h-80 rounded-2xl border-2 border-gray-700 shadow-2xl  ">
        <h2 className="text-3xl font-semibold text-center items-center mt-20">
          Your Saved Workouts
        </h2>
        <p className="text-center mt-2">Save your favorite lifts and find them easily anytime.</p>
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
        className="my-4 mx-2 md:my-6 md:mx-4 flex flex-col md:flex-row md:justify-between gap-4"
        key={saveper.name}
      >
        <div className="flex gap-2 md:gap-3 min-w-0">
          <div className="shrink-0">
            <Image
              className="rounded-2xl w-16 h-16 md:w-20 md:h-20 object-cover"
              width={200}
              height={200}
              src={saveper.image}
              alt="Image"
            />
          </div>

          <div className="text-[.8rem] md:text-[1rem] min-w-0">
            <p className="font-semibold truncate">{saveper.name}</p>

            <p className="truncate">{saveper.equipment}</p>

            <div className="flex flex-wrap w-fit gap-2 md:gap-5 text-[.8rem] md:text-[1rem] font-semibold">
              <p className="flex items-center gap-1">
                <IoMdTime className="text-[1rem]" />
                {saveper.duration}
              </p>

              <p className="flex items-center gap-1">
                <FaFirefox className="text-[1rem]" />
                {saveper.caloriesBurned}
              </p>

              <p className="flex items-center gap-1">
                <FaRegStar className="text-[1rem]" />
                {saveper.rating}
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap items-center gap-2 md:gap-3 md:shrink-0">
          <Link href={`/${saveper.id}`}>
            <button className="text-white border-2 border-gray-600 py-1 px-2 md:py-2 md:px-3 text-[.8rem] md:text-[1rem] rounded-full shadow-2xl">
              View Detail
            </button>
          </Link>

          <button
            onClick={() => remaningfun(saveper)}
            className="flex items-center gap-1 md:gap-2 border-2 border-gray-600 py-1 px-2 md:py-2 md:px-3 text-[.8rem] md:text-[1rem] rounded-full shadow-2xl bg-lime-500 text-black"
          >
            <TiTick />
            Marks as Done
          </button>

          <button
            onClick={() => remaningfun(saveper)}
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

export default SavedPage;
