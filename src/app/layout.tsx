import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import "./globals.css";

import { Poppins } from 'next/font/google';

const poppins = Poppins({
  weight: "400",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <AppRouterCacheProvider>
          { children }
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
