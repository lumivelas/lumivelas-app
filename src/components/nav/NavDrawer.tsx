import { Divider, Drawer } from '@mui/material';
import React, { useState } from 'react';
import NavDrawerItems from './NavDrawerItems';
import DehazeIcon from '@mui/icons-material/Dehaze';
import Logo from './Logo';

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
        <NavDrawerItems locations={[ { href: '/', title: 'Home' }, { href: 'carrinho', title: 'Carrinho' } ]} onClickItem={onClickItem} />
      </Drawer>
    </menu>
  );
};

export default NavDrawer;