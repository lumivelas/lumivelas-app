import { Box, List, ListItem, ListItemButton } from '@mui/material';
import Link from 'next/link';
import React from 'react';
import routes from '@/constants/nav/routes';
import LumiButton from '../LumiButton';

interface Props {
    className?: string
}

const Profile: React.FC<Props> = ({ className }) => {
    return (
        <div className={className}>
            <span className='mx-2'>
                <LumiButton title='Entrar' variant='text' />
            </span>
            <span className='mx-2'>
                <LumiButton title='Registrar-se' variant='outlined' />
            </span>
        </div>
    );
};

export default Profile;