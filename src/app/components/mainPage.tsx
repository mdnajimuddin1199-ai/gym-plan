import React from "react";
import SectionCard from "./sectionCard";
const getdata = async () => {
  try {
    const res = await fetch("https://api.abcz.workers.dev/api/fitlog");
    const data = await res.json();
    return data;
  } catch (err) {
    console.error("you have error", err);
    return [];
  }
};
const MainPage = async() => {
    const mandata =await getdata();
    console.log(mandata);
  return <div className="container mx-auto mt-10">
    <div className="space-y-6 mb-5">
      <h2 className="text-4xl font-bold md:text-start text-center">THE LIBRARY</h2>
      <p className="md:text-start text-center text-[1.1rem] font-semibold">Twelve lifts covering every major muscle group.</p>
    </div>
    <div className="gap-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-6 md:px-0 ">
       {
        mandata.map((singleman:Exercise)=> <SectionCard singleman={singleman} key={singleman.id}></SectionCard> )
    }
    </div>
   
  </div>;
};

export default MainPage;
