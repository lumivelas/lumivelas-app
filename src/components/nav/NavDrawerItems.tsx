import { Box, List, ListItem, ListItemButton } from '@mui/material';
import Link from 'next/link';
import React from 'react';

interface Location {
    href: string;
    title: string;
}

interface Props {
  locations: Location[];
}

const NavDrawerItems: React.FC<Props> = ({ locations }) => {
  return (
    <Box sx={{ width: 250 }} role="presentation">
        <List>
            {
                locations.map((location, index) => (
                    <ListItem key={location.title} disablePadding>
                        <ListItemButton>
                            <Link href={location.href}>
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