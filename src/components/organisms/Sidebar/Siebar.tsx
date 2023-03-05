import { useState } from 'react';
import SidebarHeader from '../../molecules/SidebarHeader/SidebarHeader';
import SidebarMenu from '../../molecules/SidebarMenu/SidebarMenu';

const Sidebar = () => {
  const [isOpenSidebar, setOpenSidebar] = useState(false);

  const handleToggleSidebar = () => {
    setOpenSidebar(!isOpenSidebar);
  };

  return (
    <div className={`h-screen border-r bg-white duration-300 ${isOpenSidebar ? 'w-72' : 'w-20'}`}>
      <SidebarHeader toggleSidebar={handleToggleSidebar} isOpen={isOpenSidebar} />
      <SidebarMenu handleIsOpen={isOpenSidebar} />
    </div>
  );
};

export default Sidebar;
