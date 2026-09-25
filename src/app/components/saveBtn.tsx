"use client";
import Link from "next/link";
import React, { useContext } from "react";
import { AppContext } from "../context/provider";
import { toast } from "react-toastify";

const SaveBtnPage = ({ exercise }: { exercise: Exercise }) => {
  const { save, setsave } = useContext(AppContext);
  const hendelplanbtn = () => {
    toast.success(`you have added ${exercise.name} to Save List`)
    setsave([...save, exercise]);

  };
  const alreadyadd = save.some((som) => som.id === exercise.id);
  return (
    <div>
      <Link href="">
        <button
          onClick={hendelplanbtn}
          disabled={alreadyadd}
          className={`px-5 py-3 rounded-lg font-semibold ${
          alreadyadd
            ? "bg-gray-500 text-gray-300 cursor-not-allowed"
            : "bg-lime-400 text-black hover:bg-lime-300"
        }`}
        >
         {`${alreadyadd ? "Already Added" : "Save for later"}`}
        </button>
      </Link>
    </div>
  );
};

export default SaveBtnPage;
