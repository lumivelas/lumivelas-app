import { Box, List, ListItem, ListItemButton } from '@mui/material';
import Link from 'next/link';
import React from 'react';
import routes from '@/constants/nav/routes';

interface Props {
    onClickItem: Function;
}

const NavDrawerItems: React.FC<Props> = ({ onClickItem }) => {
    return (
        <Box sx={{ width: 250 }} role="presentation">
            <List>
                {
                    routes.map((route) => (
                        <ListItem key={route.title} disablePadding>
                            <ListItemButton>
                                <Link href={route.location} onClick={() => onClickItem()}>
                                    { route.title }
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