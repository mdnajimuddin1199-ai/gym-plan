const Loading = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <span className="loading loading-spinner loading-lg text-lime-400"></span>

        <p className="text-lg font-semibold">
          Loading...
        </p>
      </div>
    </div>
  );
};

export default Loading;