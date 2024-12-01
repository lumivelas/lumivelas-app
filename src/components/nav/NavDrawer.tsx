import { Drawer } from '@mui/material';
import React, { useState } from 'react';
import NavDrawerItems from './NavDrawerItems';
import DehazeIcon from '@mui/icons-material/Dehaze';

interface Props {
  className: string;
}

const NavDrawer: React.FC<Props> = ({ className }) => {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen: boolean) => {
    setOpen(newOpen);
  };

  const afterClickItem = () => {
    setOpen(false);
  }

  return (
    <menu className={className}>
      <DehazeIcon onClick={() => toggleDrawer(true)} />
      <Drawer anchor='right' open={open} onClose={() => toggleDrawer(false)}>
        <NavDrawerItems locations={[ { href: '/', title: 'Home' }, { href: 'carrinho', title: 'Carrinho' } ]} afterClickItem={afterClickItem} />
      </Drawer>
    </menu>
  );
};

export default NavDrawer;