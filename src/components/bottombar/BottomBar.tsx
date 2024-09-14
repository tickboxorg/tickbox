import React from "react";
import {
  PlusIcon,
  //   CalendarIcon,
  //   ArrowRightIcon,
  //   MagnifyingGlassIcon as SearchIcon,
} from "@heroicons/react/24/solid"; // Example icons

interface BottomBarProps {
  onPlusIconClick: () => void;
}

export const BottomBar: React.FC<BottomBarProps> = ({ onPlusIconClick }) => {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white dark:bg-zinc-800 p-2 border-t border-gray-200 dark:border-zinc-900 flex justify-around items-center">
      <div className="hover:bg-gray-100 dark:hover:bg-zinc-700 rounded-md transition-all duration-200 ease-in-out cursor-pointer">
        <PlusIcon
          className="w-20 h-6 text-gray-500 dark:text-zinc-400"
          onClick={onPlusIconClick}
        />
      </div>

      {/* <CalendarIcon className="w-6 h-6 text-gray-500" />

      <ArrowRightIcon className="w-6 h-6 text-gray-500" />

      <SearchIcon className="w-6 h-6 text-gray-500" /> */}
    </div>
  );
};
