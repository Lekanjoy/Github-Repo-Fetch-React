import React from "react";

const ProfileSkeletonLoading = () => {
  return (
    <div
      className="relative w-full bg-white shadow-xl flex flex-col justify-center border-t 
    rounded-xl items-center  pt-6 max-w-lg z-10 animate-pulse"
    >
      <p className="w-28 h-28 rounded-full mt-16 bg-gray-100"></p>
      <div className="w-full flex items-center justify-center flex-col mt-4 text-center px-4">
        <p className="w-2/4 h-8 mb-2 bg-gray-200 rounded-sm"></p>
        <p className="bg-gray-200 w-4/5 h-3 rounded-sm mb-1"></p>
        <p className="bg-gray-200 w-4/5 h-3 rounded-sm mb-1"></p>
        <p className="bg-gray-200 w-2/5 h-3 rounded-sm mb-1"></p>
      </div>
      <div className="my-1 flex items-center gap-x-2">
        <p className="w-2 h-2 rounded-full bg-gray-200"></p>
        <p className="w-16 h-3 rounded-sm bg-gray-200"></p>
      </div>
      <div className="flex justify-center gap-x-2 items-center my-4">
        <p className="h-[30px] w-[30px] rounded-full bg-gray-200"></p>
        <p className="h-[30px] w-[30px] rounded-full bg-gray-200"></p>
        <p className="h-[30px] w-[30px] rounded-full bg-gray-200"></p>
      </div>
      <div className="flex justify-between gap-x-2 p-2 w-full h-16 mt-8 rounded-b-xl bg-gray-200">
        <div className="bg-gray-300 w-1/3 "></div>
        <div className="bg-gray-300 w-1/3 "></div>
        <div className="bg-gray-300 w-1/3 "></div>
      </div>
      <p className="absolute -z-[10] top-0 bg-gray-200 rounded-t-xl w-full h-[150px]"></p>
    </div>
  );
};

export default ProfileSkeletonLoading;
