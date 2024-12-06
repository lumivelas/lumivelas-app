import { Divider, Drawer } from '@mui/material';
import React, { useState } from 'react';
import NavDrawerItems from './NavDrawerItems';
import DehazeIcon from '@mui/icons-material/Dehaze';
import Logo from './Logo';
import LumiButton from '../forms/LumiButton';
import Profile from '../profile/profile';

interface Props {
  className: string;
}

const NavDrawer: React.FC<Props> = ({ className }) => {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen: boolean) => {
    setOpen(newOpen);
  };

  const onClickItem = () => {
    setOpen(false);
  }

  return (
    <menu className={className}>
      <DehazeIcon onClick={() => toggleDrawer(true)} />
      <Drawer anchor='right' open={open} onClose={() => toggleDrawer(false)}>
        <Logo className='p-4' />
        <Divider />
        <NavDrawerItems onClickItem={onClickItem} />

        <div className='h-full flex items-end mb-5'>
          <Profile />
        </div>
      </Drawer>
    </menu>
  );
};

export default NavDrawer;