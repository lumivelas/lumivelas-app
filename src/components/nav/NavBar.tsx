import React, { ReactNode } from 'react'
import PersonIcon from '@mui/icons-material/Person';
import Link from 'next/link';
import NavDrawer from './NavDrawer';
import Logo from './Logo';

interface Props {
  children: ReactNode;
}

const NavBar : React.FC<Props> = ({ children }) => {
  return (
    <>
      <nav className='z-[1000] flex items-center w-full bg-whiteOpacity p-5 fixed top-0 left-0 shadow-sm'>
          <Logo />
          
          <div className='hidden md:flex w-full justify-end items-center text-sm font-bold'>
            <Link className='mx-5' href={'/'}>Home</Link>
            <Link className='mx-5' href={'carrinho'}>Velas</Link>
            <div className='mx-5'>
              <PersonIcon />
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