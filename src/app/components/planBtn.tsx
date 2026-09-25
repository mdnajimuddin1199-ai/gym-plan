"use client";

import React, { useContext } from "react";
import { AppContext } from "../context/provider";
import { toast } from "react-toastify";

const PlanBtnPage = ({ exercise }: { exercise: Exercise }) => {
  const { plan, setplan } = useContext(AppContext);

  const alreadyAdded = plan.some(
    (pl) => pl.id === exercise.id
  );

  const handlePlanBtn = () => {
    toast.success(`you have added ${exercise.name} to Plan List`)
    setplan([...plan, exercise]);
  };

  return (
    <div>
      <button
        onClick={handlePlanBtn}
        disabled={alreadyAdded}
        className={`px-5 py-3 rounded-lg font-semibold ${
          alreadyAdded
            ? "bg-gray-500 text-gray-300 cursor-not-allowed"
            : "bg-lime-400 text-black hover:bg-lime-300"
        }`}
      >
        {alreadyAdded
          ? "Already Added"
          : "Add to today's plan"}
      </button>
    </div>
  );
};

export default PlanBtnPage;