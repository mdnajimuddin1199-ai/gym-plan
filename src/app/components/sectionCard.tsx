import React from "react";
import Image from "next/image";
import { IoMdTime } from "react-icons/io";
import { FaFirefox, FaRegStar } from "react-icons/fa";
import Link from "next/link";
interface cardtype {
  singleman: Exercise;
}
const SectionCard = ({ singleman }: cardtype) => {
  return (
    <div>
      <Link href={`/${singleman.id}`}>

      <div className="card  shadow-2xl hover:translate-y-0.5 scale-100 border-2 border-gray-600">
        <figure>
          <Image width={500} height={300} src={singleman.image} alt="Shoes" />
        </figure>
        <div className="card-body container">
          <div className="gap-3 flex ">
            <button className="hover:-translate-y-0.5 hover:scale-100 px-3 py-1 font-extrabold rounded-3xl  bg-lime-400 text-black">
              CHEST
            </button>
            <button className="px-3 py-1 hover:-translate-y-0.5 hover:scale-100 font-extrabold rounded-3xl  bg-lime-400 text-black">
              ARMS
            </button>
          </div>
          <div>
            <h2 className="card-title mt-3 text-[1.5rem] font-semibold">
              {singleman.name.toUpperCase()}
            </h2>
            <p className="mt-2 font-semibold text-[1.2rem]">
              {singleman.equipment}
            </p>
          </div>
          <div className="flex w-fit  gap-7 font-semibold justify-start">
            <p className="flex items-center gap-1"> <IoMdTime className="text-[1rem]" /> {singleman.duration}</p>
            <p className="flex items-center gap-1"> <FaFirefox className="text-[1rem]" />{singleman.caloriesBurned}</p>
            <p className="flex items-center gap-1"> <FaRegStar className="text-[1rem]"/>{singleman.rating}</p>
          </div>

          <div className="card-actions justify-end"></div>
        </div>
      </div>

      </Link>

    </div>
  );
};

export default SectionCard;
