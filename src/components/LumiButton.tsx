'use client';

import { Button, ButtonProps } from '@mui/material';
import { on } from 'events';
import React from 'react';

interface Props extends ButtonProps {
  title: string;
}

const LumiButton: React.FC<Props> = ({ title, color = "primary", ...props }) => {
  return (
    <Button
      {...props}
      sx={{
        textTransform: "none",
        fontWeight: "bold",
        borderWidth: 2,
        boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
        "&:hover": {
          boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
        },
      }}
      color={color}
      variant="outlined"
    >
      {title}
    </Button>
  );
};

export default LumiButton;
