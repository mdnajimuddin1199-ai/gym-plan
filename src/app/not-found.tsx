import Link from "next/link";

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center">

        <h1 className="text-8xl font-bold text-lime-400">
          404
        </h1>

        <h2 className="text-3xl font-bold mt-4">
          Page Not Found
        </h2>

        <p className="mt-3 text-gray-400">
          Sorry, the page you are looking for does not exist.
        </p>

        <Link
          href="/"
          className="btn bg-lime-400 text-black hover:bg-lime-500 mt-6"
        >
          Go Back Home
        </Link>

      </div>
    </div>
  );
};

export default NotFound;