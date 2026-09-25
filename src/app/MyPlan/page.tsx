"use client";

import React, { useContext } from "react";
import PlanPage from "../components/plan";
import SavedPage from "../components/saved";
import ShortByPage from "../components/shortBy";
import { AppContext } from "../context/provider";

const MyPlanPage = () => {
  const { activeTab, save, plan, setActiveTab } = useContext(AppContext);
  let totalMinutes = 0;
  let totalCalories = 0;

  if (activeTab === "plan") {
    totalMinutes = plan.reduce(
      (total, exercise) => total + exercise.duration,
      0,
    );

    totalCalories = plan.reduce(
      (total, exercise) => total + exercise.caloriesBurned,
      0,
    );
  } else if (activeTab === "saved") {
    totalMinutes = save.reduce(
      (total, exercise) => total + exercise.duration,
      0,
    );

    totalCalories = save.reduce(
      (total, exercise) => total + exercise.caloriesBurned,
      0,
    );
  }

  console.log("Selected Tab:", activeTab);

  return (
    <div className="container mx-auto mt-15 px-3 md:p-0">
      <div>
        <h2 className="text-5xl font-bold mb-3 text-center md:text-start">
          My Plan
        </h2>

        <p className="text-center md:text-start">
          Cap of five lifts for today. Finish them, then load more.
        </p>
      </div>

      <div className="border-2  flex md:justify-start justify-center gap-15 md:gap-30 items-center border-gray-600 shadow-2xl w-full h-30 mt-5 rounded-2xl">
        <div className="md:ml-15">
          <p className="font-semibold">Exercises</p>

          <p className="text-lime-400 text-3xl font-bold">
            {activeTab === "plan" ? plan.length : save.length}
          </p>
        </div>

        <div>
          <p className="font-semibold">Minutes</p>

          <p className="text-3xl font-bold">{totalMinutes}</p>
        </div>

        <div>
          <p className="font-semibold">Calories</p>

          <p className="text-3xl font-bold">{totalCalories}</p>
        </div>
      </div>

      <div>
        <ShortByPage />

        <div className="tabs tabs-lift h-fit mt-5">
          <input
            type="radio"
            name="my_tabs_3"
            className="tab"
            aria-label="Today's Plan"
            value="plan"
            onChange={(e) => setActiveTab(e.target.value as "plan" | "saved")}
          />

          <div className="tab-content bg-base-100 border-base-300 p-6">
            <PlanPage />
          </div>

          <input
            type="radio"
            name="my_tabs_3"
            className="tab"
            aria-label="Saved"
            value="saved"
            defaultChecked
            onChange={(e) => setActiveTab(e.target.value as "plan" | "saved")}
          />

          <div className="tab-content bg-base-100 border-base-300 p-6">
            <SavedPage />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyPlanPage;
