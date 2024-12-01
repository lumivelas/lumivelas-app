import React from 'react'
import PersonIcon from '@mui/icons-material/Person';

export default function NavBar() {
  return (
    <div className='flex w-full bg-white bg-opacity-10 p-5'>
        <div className='select-none text-xl'>
          <strong>Lumi</strong>Velas
        </div>
        
        <div className='flex w-full justify-end items-center text-sm font-bold'>
          <span className='mx-5'>Home</span>
          <span className='mx-5'>Velas</span>
          <div className='mx-5'>
            <PersonIcon />
          </div>
        </div>
    </div>
  )
}
