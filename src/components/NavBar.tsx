import React, { ReactNode } from 'react'
import PersonIcon from '@mui/icons-material/Person';
import Link from 'next/link';

interface Props {
  children: ReactNode;
}

const NavBar : React.FC<Props> = ({ children }) => {
  return (
    <>
      <nav className='flex w-full bg-white bg-opacity-10 p-5 fixed top-0 left-0'>
          <div className='select-none text-xl'>
            <strong>Lumi</strong>Velas
          </div>
          
          <div className='flex w-full justify-end items-center text-sm font-bold'>
            <Link className='mx-5' href={'/'}>Home</Link>
            <Link className='mx-5' href={'carrinho'}>Velas</Link>
            <div className='mx-5'>
              <PersonIcon />
            </div>
          </div>
      </nav>

      <main className='pt-[5rem]'>
        { children }
      </main>
    </>
  )
}

export default NavBar;