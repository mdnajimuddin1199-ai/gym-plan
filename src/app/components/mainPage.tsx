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
  return <div className="container mx-auto">
    <div className="gap-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-6 ">
       {
        mandata.map((singleman:Exercise)=> <SectionCard singleman={singleman} key={singleman.id}></SectionCard> )
    }
    </div>
   
  </div>;
};

export default MainPage;
