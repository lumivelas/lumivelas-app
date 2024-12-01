import { Button, Menu, MenuItem } from '@mui/material';
import React, { useState } from 'react';
import LumiButton from '../LumiButton';

interface Props {
  className: string;
}

const NavBarSandwich: React.FC<Props> = ({ className }) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <menu className={className}>
      <LumiButton 
        title='Nothing'
        id="basic-button"
        onClick={handleClick}
      />

      <Menu id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              'aria-labelledby': 'basic-button',
            }}>

          <MenuItem onClick={handleClose}>Profile</MenuItem>
      </Menu>
    </menu>
  );
};

export default NavBarSandwich;