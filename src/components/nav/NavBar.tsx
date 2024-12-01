import PersonIcon from '@mui/icons-material/Person';
import routes from '@/constants/nav/routes';
import React, { ReactNode } from 'react'
import NavDrawer from './NavDrawer';
import Link from 'next/link';
import Logo from './Logo';
import { Avatar } from '@mui/material';
import LumiButton from '../LumiButton';

interface Props {
  children: ReactNode;
}

const NavBar : React.FC<Props> = ({ children }) => {
  return (
    <>
      <nav className='z-[1000] flex items-center w-full bg-whiteOpacity p-5 fixed top-0 left-0 shadow-sm'>
          <Logo />
          
          <div className='hidden md:flex w-full justify-end items-center text-sm font-bold'>
            {
              routes.map((route) => (
                <Link key={route.location} className='mx-5' href={route.location}>{route.title}</Link>    
              ))
            }
            
            <div className='mx-5'>
              <span className='mx-2'>
                <LumiButton title='Entrar' variant='text' />
              </span>
              <span className='mx-2'>
                <LumiButton title='Registrar-se' variant='outlined' />
              </span>
            </div>
          </div>

          <NavDrawer className='md:hidden flex w-full justify-end items-center' />
      </nav>

      <main className='pt-[5rem]'>
        { children }
      </main>
    </>
  )
}

export default NavBar;