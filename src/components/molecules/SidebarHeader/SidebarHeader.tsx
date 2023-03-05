import { type FC } from 'react';
import { GiCook } from 'react-icons/gi';
import { HiArrowRight } from 'react-icons/hi';

interface SidebarHeaderProps {
  isOpen: boolean;
  toggleSidebar: () => void;
}

const SidebarHeader: FC<SidebarHeaderProps> = ({ isOpen, toggleSidebar }) => {
  return (
    <div className="relative flex border-b p-4">
      <button
        className={`absolute right-0 bottom-0 translate-y-1/2 translate-x-1/2 cursor-pointer rounded-full border bg-white p-2`}
        onClick={toggleSidebar}
      >
        <HiArrowRight className={`duration-300 ${isOpen && 'rotate-180'}`} />
      </button>
      <div className="flex items-center gap-x-3">
        <GiCook
          className={`rounded-xl bg-blue-500 p-2 text-5xl text-white duration-300 ${isOpen && 'rotate-[360deg]'}`}
        />
        <h1 className={`origin-left text-2xl font-bold text-gray-900 duration-300 ${!isOpen && 'scale-0'}`}>
          Recipestorm
        </h1>
      </div>
    </div>
  );
};

export default SidebarHeader;
