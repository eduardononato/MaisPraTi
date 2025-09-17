const Skeleton = () => {
  return (
    <div className="max-w-xs w-full bg-white rounded-xl shadow-lg animate-pulse dark:bg-gray-700" aria-hidden="true">
      <div className="relative w-full pb-[100%] bg-gray-200 dark:bg-gray-600 rounded-t-xl"></div>
      <div className="p-4 space-y-3">
        <div className="h-4 bg-gray-200 dark:bg-gray-600 rounded-md w-3/4"></div>
        <div className="h-3 bg-gray-200 dark:bg-gray-600 rounded-md w-1/2"></div>
        <div className="h-10 bg-gray-200 dark:bg-gray-600 rounded-lg"></div>
      </div>
    </div>
  );
};


export default Skeleton;