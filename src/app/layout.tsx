"use client";

import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import { ThemeProvider } from '@emotion/react';
import { Poppins } from 'next/font/google';
import theme from '@/libs/theme';
import "./globals.css";

const poppins = Poppins({
  weight: "400",
});

export default function RootLayout({ children } : Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
          <AppRouterCacheProvider>
            <ThemeProvider theme={theme}>
              { children }
            </ThemeProvider>
          </AppRouterCacheProvider>
      </body>
    </html>
  );
}
