import React from "react";
import Image from "next/image";
import PlanBtnPage from "../components/planBtn";
import SaveBtnPage from "../components/saveBtn";

interface Exercise {
  id: number;
  name: string;
  image: string;
  muscleGroups: string[];
  equipment: string;
  difficulty: string;
  duration: number;
  caloriesBurned: number;
  sets: number;
  reps: string;
  rating: number;
  description: string;
  instructions: string[];
}

const getdata = async (): Promise<Exercise[]> => {
  try {
    const res = await fetch("https://api.abcz.workers.dev/api/fitlog");

    if (!res.ok) {
      throw new Error("Failed to fetch exercises");
    }

    const data = await res.json();

    return data;
  } catch (err) {
    console.error("You have an error", err);
    return [];
  }
};

const DetailPage = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const exercises = await getdata();

  const { id } = await params;

  const exercise = exercises.find(
    (item) => item.id === Number(id)
  );

  if (!exercise) {
    return (
      <div className="min-h-screen bg-[#0d0f12] flex items-center justify-center text-white">
        <h1 className="text-2xl font-bold">Exercise not found</h1>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-[#0d0f12] text-white px-6 py-8">
      <div className="max-w-7xl mx-auto">


        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">


          <div>
            <Image
            width={800}
            height={600}
              src={exercise.image}
              alt={exercise.name}
              className="w-full h-100 lg:h-150 object-cover rounded-xl"
            />
          </div>

    
          <div>


            <h1 className="text-4xl font-extrabold uppercase">
              {exercise.name}
            </h1>

  
            <p className="text-gray-400 mt-3 leading-relaxed">
              {exercise.description}
            </p>

    
            <div className="flex gap-2 mt-5 flex-wrap">
              {exercise.muscleGroups.map((muscle) => (
                <span
                  key={muscle}
                  className="bg-lime-400 text-black px-3 py-1 rounded-full text-xs font-bold"
                >
                  {muscle}
                </span>
              ))}
            </div>

      
            <div className="mt-6 border border-gray-800 rounded-xl overflow-hidden bg-[#15181e]">

              <div className="flex justify-between px-4 py-4 border-b border-gray-800">
                <span className="text-gray-400 text-sm">
                  EQUIPMENT
                </span>
                <span className="text-sm">
                  {exercise.equipment}
                </span>
              </div>

              <div className="flex justify-between px-4 py-4 border-b border-gray-800">
                <span className="text-gray-400 text-sm">
                  DIFFICULTY
                </span>
                <span className="text-sm">
                  {exercise.difficulty}
                </span>
              </div>

              <div className="flex justify-between px-4 py-4 border-b border-gray-800">
                <span className="text-gray-400 text-sm">
                  SETS
                </span>
                <span className="text-sm">
                  {exercise.sets}
                </span>
              </div>

              <div className="flex justify-between px-4 py-4 border-b border-gray-800">
                <span className="text-gray-400 text-sm">
                  REPS
                </span>
                <span className="text-sm">
                  {exercise.reps}
                </span>
              </div>

              <div className="flex justify-between px-4 py-4 border-b border-gray-800">
                <span className="text-gray-400 text-sm">
                  DURATION
                </span>
                <span className="text-sm">
                  {exercise.duration} min
                </span>
              </div>

              <div className="flex justify-between px-4 py-4 border-b border-gray-800">
                <span className="text-gray-400 text-sm">
                  CALORIES
                </span>
                <span className="text-sm">
                  {exercise.caloriesBurned} kcal
                </span>
              </div>

              <div className="flex justify-between px-4 py-4">
                <span className="text-gray-400 text-sm">
                  RATING
                </span>
                <span className="text-sm">
                  ⭐ {exercise.rating}
                </span>
              </div>

            </div>

    
            <div className="mt-8">
              <h2 className="font-bold text-lg mb-4">
                INSTRUCTIONS
              </h2>

              <ol className="space-y-3">
                {exercise.instructions.map((instruction, index) => (
                  <li
                    key={index}
                    className="text-gray-400 text-sm flex gap-3"
                  >
                    <span>{index + 1}.</span>
                    <span>{instruction}</span>
                  </li>
                ))}
              </ol>
            </div>
         <div className="flex gap-3 mt-8">

              <PlanBtnPage exercise={exercise} key={exercise.id}></PlanBtnPage>

              <SaveBtnPage exercise={exercise} key={exercise.name} ></SaveBtnPage>

            </div>

          </div>
        </div>
      </div>
    </main>
  );
};

export default DetailPage;