// src/app/layout.tsx

import { Inter } from 'next/font/google';

import '@styles/index.scss';

import { Footer, Header } from '@components';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <head>
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <title>Ceavex</title>

        {/* Description */}
        <meta
          property='og:description'
          content='The best discord bot in the world'
        />

        {/* Favicon */}
        <link
          rel='icon'
          type='image/x-icon'
          sizes='16x16'
          href='/favicon/favicon_16x16.ico'
        />
        <link
          rel='icon'
          type='image/x-icon'
          sizes='32x32'
          href='/favicon/favicon_32x32.ico'
        />
        <link
          rel='icon'
          type='image/x-icon'
          sizes='48x48'
          href='/favicon/favicon_48x48.ico'
        />

        {/* PNG Icons */}
        <link
          rel='icon'
          type='image/png'
          sizes='32x32'
          href='/favicon/favicon_32x32.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='64x64'
          href='/favicon/favicon_64x64.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='128x128'
          href='/favicon/favicon_128x128.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='192x192'
          href='/favicon/favicon_192x192.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='512x512'
          href='/favicon/favicon_512x512.png'
        />

        {/* SVG Icon */}
        <link
          rel='icon'
          type='image/svg+xml'
          sizes='any'
          href='/favicon/favicon_128x128.svg'
        />

        {/* Apple Touch Icons */}
        <link
          rel='apple-touch-icon'
          sizes='152x152'
          href='/favicon/favicon_152x152.png'
        />
        <link
          rel='apple-touch-icon'
          sizes='180x180'
          href='/favicon/favicon_180x180.png'
        />
        <link
          rel='apple-touch-icon'
          sizes='192x192'
          href='/favicon/favicon_192x192.png'
        />

        {/* Manifest for Progressive Web Apps */}
        <link rel='manifest' href='/favicon/site.webmanifest.json' />
      </head>
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
