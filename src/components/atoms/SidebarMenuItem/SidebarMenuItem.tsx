import { type FC } from 'react';
import { type IconType } from 'react-icons';

interface SidebarMenuItemProps {
  title: string;
  isOpen: boolean;
  Icon: IconType;
}

const SidebarMenuItem: FC<SidebarMenuItemProps> = ({ title, isOpen, Icon }) => {
  return (
    <li className="flex cursor-pointer rounded-md p-3 hover:bg-gray-100">
      <div className="flex items-center gap-x-3 ">
        <Icon className="text-2xl" />
        <p className={`text-base text-gray-900 ${!isOpen && 'hidden'}`}>{title}</p>
      </div>
    </li>
  );
};

export default SidebarMenuItem;
