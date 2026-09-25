import React from "react";
import footerlogo from "@/assets/logo.png";
import Image from "next/image";

const FooterPage = () => {
  return (
    <footer className="w-full h-30 flex justify-between items-center border-t-2 border-gray-500 shadow-2xl mt-20">
      <div className="container mx-auto flex flex-col gap-3 sm:flex-row justify-between items-center">
        <div className="flex items-center  gap-3">
          <Image
            src={footerlogo}
            alt="footerlogo"
            width={30}
            height={30}
          ></Image>
          <p className="text-[1.2rem] font-semibold">FITLOG</p>
        </div>
        <div>
          <p>© 2026 FitLog — Workout Library. Train hard, log honest.</p>
        </div>
      </div>
    </footer>
  );
};

export default FooterPage;
