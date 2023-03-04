import { type FC } from 'react';
import { GiCook } from 'react-icons/gi';

interface SidebarLogoProps {
  isOpen: boolean;
}

const SidebarLogo: FC<SidebarLogoProps> = ({ isOpen }) => {
  return (
    <div className="inline-flex items-center gap-x-3">
      <GiCook
        className={`rounded-xl bg-blue-500 p-2 text-5xl text-white duration-300 ${isOpen && 'rotate-[360deg]'}`}
      />
      <h1 className={`origin-left text-2xl font-bold duration-300 ${!isOpen && 'scale-0'}`}>Recipestorm</h1>
    </div>
  );
};

export default SidebarLogo;
