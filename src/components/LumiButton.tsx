'use client';

import { Button } from '@mui/material'
import React from 'react'

interface Props {
  title: string;
}

const LumiButton : React.FC<Props> = ({ title }) => {
  return (
    <Button color="secondary" variant="contained">{ title }</Button>
  )
}

export default LumiButton;