import { useState } from 'react';
import { HiArrowRight } from 'react-icons/hi';
import SidebarLogo from '../../molecules/SidebarLogo/SidebarLogo';

const Sidebar = () => {
  const [isOpenSidebar, setOpenSidebar] = useState(false);

  return (
    <div className={`h-screen border-r bg-white duration-300 ${isOpenSidebar ? 'w-[241.125px]' : 'w-20'}`}>
      <div className="relative flex border-b p-4">
        <button
          className={`absolute right-0 bottom-0 translate-y-1/2 translate-x-1/2 cursor-pointer rounded-full border bg-white p-2`}
          onClick={() => {
            setOpenSidebar(!isOpenSidebar);
          }}
        >
          <HiArrowRight className={`duration-300 ${isOpenSidebar && 'rotate-180'}`} />
        </button>
        <SidebarLogo isOpen={isOpenSidebar} />
      </div>
    </div>
  );
};

export default Sidebar;
