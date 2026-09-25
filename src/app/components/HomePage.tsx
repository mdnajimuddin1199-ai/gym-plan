import Image from "next/image";
import Link from "next/link";
import benner from "@/assets/banner.png";

const Banner = () => {
  return (
<section className="px-4 py-5 md:px-8">
  <div className="relative overflow-hidden rounded-2xl border border-gray-800 bg-[#15161b]">

    <div className="flex min-h-86.25 flex-col md:flex-row md:items-center">

      <div className="z-10 w-full px-6 py-10 md:w-3/5 md:px-11">
        <p className="mb-5 text- font-bold text-center md:text-start text-lime-400">
          WORKOUT LIBRARY
        </p>

        <h1 className="max-w-2xl text-center md:text-start text-4xl font-black uppercase leading-[0.95] text-white sm:text-5xl md:text-6xl">
          TRAIN WITH INTENT. LOG
          <br />
          EVERY SET.
        </h1>

        <p className="mt-5 text-center md:text-start max-w-xl text-sm leading-6 text-gray-400 md:text-base">
          FitLog is a dark, no-nonsense gym companion: pick a lift, lock it
          into today&apos;s plan, and watch the week&apos;s work add up.
        </p>
        <div className="flex justify-center md:block">
                    <Link
          href="/workouts"
          className=" mt-6 inline-block rounded-md bg-lime-400 px-5 py-3 text-xs font-bold uppercase text-black transition hover:bg-lime-300"
        >
          Browse Workouts
        </Link>
        </div>

      </div>

     
      <div className="relative h-70 w-full md:absolute md:right-0 md:bottom-0 md:h-full md:w-[42%]">
        <Image
          src={benner}
          alt="Workout"
          fill
          priority
          className="object-contain object-bottom"
        />
      </div>

    </div>
  </div>
</section>
  );
};

export default Banner;
