import { type FC } from 'react';
import { HiOutlineHeart, HiOutlineHome, HiOutlineMenuAlt1, HiOutlinePlus } from 'react-icons/hi';
import SidebarMenuItem from '../../atoms/SidebarMenuItem/SidebarMenuItem';

const menus = [
  { title: 'Dashboard', Icon: HiOutlineHome },
  { title: 'Create', Icon: HiOutlinePlus },
  { title: 'List', Icon: HiOutlineMenuAlt1 },
  { title: 'Favourite', Icon: HiOutlineHeart },
];

interface SidebarMenuProps {
  handleIsOpen: boolean;
}

const SidebarMenu: FC<SidebarMenuProps> = ({ handleIsOpen }) => {
  return (
    <ul className="flex flex-col gap-y-4 p-4">
      {menus.map(({ title, Icon }) => (
        <SidebarMenuItem key={title} isOpen={handleIsOpen} title={title} Icon={Icon} />
      ))}
    </ul>
  );
};

export default SidebarMenu;
