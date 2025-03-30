import { Inter, Manrope, Poppins, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";


const inter = Inter({
  weight: ['400'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

const poppins = Poppins({
  weight: ['400'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
});

const manrope = Manrope({
  weight: ['400'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-manrope',
});

const jakarta = Plus_Jakarta_Sans({
  weight: ['400'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-jakarta',
});

export const metadata = {
  title: "Trackz",
  description: "CMR that works for you, not the other way around.",
  icons: {
    icon: "./favicon.ico",
  },
  openGraph: {
    title: "Trackz",
    description: "CMR that works for you, not the other way around. Try Trackz free today!",
    url: "https://trackz.vercel.app",
    siteName: "Trackz",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${manrope.variable} ${poppins.variable} ${jakarta.variable} antialiased overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  );
}
