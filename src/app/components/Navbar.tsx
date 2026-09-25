"use client";

import Link from "next/link";
import React, { useContext } from "react";
import Image from "next/image";
import logo from "@/assets/logo.png";
import { AppContext } from "../context/provider";
import { usePathname } from "next/navigation";

const NavbarPage = () => {
  const { save, plan } = useContext(AppContext);

  const pathname = usePathname();

  const links = (
    <>
      <li>
        <Link
          href="/"
          className={
            pathname === "/"
              ? "text-lime-400 border rounded-2xl border-b-lime-200"
              : ""
          }
        >
          Workouts
        </Link>
      </li>

      <li>
        <Link
          href="/MyPlan"
          className={
            pathname === "/MyPlan"
              ? "text-lime-400 border rounded-2xl border-b-lime-200"
              : ""
          }
        >
          My Plan
        </Link>
      </li>
    </>
  );

  return (
    <div className="border-b-2 shadow-2xl border-gray-600">
      <div className="navbar bg-base-100 shadow-sm container mx-auto">

        {/* Left */}
        <div className="navbar-start">

          {/* Mobile menu */}
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost lg:hidden"
            >
              <svg
                aria-label="Menu"
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>

            <ul
              tabIndex={-1}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow flex justify-center gap-5 items-center text-center"
            >
              {links}
            </ul>
          </div>

          {/* Logo */}
          <div className="flex gap-3">
            <Image src={logo} alt="logo" />
            <p>FITLOG</p>
          </div>
        </div>

        {/* Desktop menu */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 flex gap-5">
            {links}
          </ul>
        </div>

        {/* Right */}
        <div className="navbar-end gap-5">

          <Link href="/MyPlan" className="flex items-center gap-2">
            <span>Plan</span>

            <span className="bg-lime-300 text-black w-7 h-7 rounded-full flex items-center justify-center">
              {plan.length}
            </span>
          </Link>

          <Link href="/MyPlan" className="flex items-center gap-2">
            <span>Saved</span>

            <span className="border border-gray-600 w-7 h-7 rounded-full flex items-center justify-center">
              {save.length}
            </span>
          </Link>

        </div>
      </div>
    </div>
  );
};

export default NavbarPage;