"use client";

import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import { ThemeProvider } from '@emotion/react';
import { Inter } from 'next/font/google';
import theme from '@/libs/theme';
import "./globals.css";

const inter = Inter({
  weight: ["100", "400", "700"],
  subsets: ['latin'],
})

export default function RootLayout({ children } : Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={inter.className}>
          <AppRouterCacheProvider>
            <ThemeProvider theme={theme}>
              { children }
            </ThemeProvider>
          </AppRouterCacheProvider>
      </body>
    </html>
  );
}
