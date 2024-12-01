import { Button, Drawer } from '@mui/material';
import React, { useState } from 'react';
import NavDrawerItems from './NavDrawerItems';

interface Props {
  className: string;
}

const NavDrawer: React.FC<Props> = ({ className }) => {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };
  
  return (
    <menu className={className}>
      <Button onClick={toggleDrawer(true)}>Open drawer</Button>
      <Drawer anchor='right' open={open} onClose={toggleDrawer(false)}>
        <NavDrawerItems locations={[ { href: '/', title: 'Home' }, { href: 'carrinho', title: 'Carrinho' } ]} />
      </Drawer>
    </menu>
  );
};

export default NavDrawer;