import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    template: '%s | Greentech dashboard',
    default: 'Greentech dashboard',
  },
  description: 'La Web Oficial de Green Tech',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <link rel="icon" type="image/png" href="./Logo.png" />
      </head>
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
