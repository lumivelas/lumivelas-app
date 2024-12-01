import { Box, List, ListItem, ListItemButton } from '@mui/material';
import Link from 'next/link';
import React, { MouseEventHandler } from 'react';

interface Location {
    href: string;
    title: string;
}

interface Props {
  locations: Location[];
  onClickItem: Function;
}

const NavDrawerItems: React.FC<Props> = ({ locations, onClickItem }) => {
  return (
    <Box sx={{ width: 250 }} role="presentation">
        <List>
            {
                locations.map((location, index) => (
                    <ListItem key={location.title} disablePadding>
                        <ListItemButton>
                            <Link href={location.href} onClick={() => onClickItem()}>
                                { location.title }
                            </Link>
                        </ListItemButton>
                    </ListItem>        
                ))
            }
        </List>
  </Box>
  );
};

export default NavDrawerItems;