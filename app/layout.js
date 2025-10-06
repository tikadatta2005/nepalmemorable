import "./globals.css";
import Navbar from "@/components/navbar/Nav";
import { Pacifico, Open_Sans } from "next/font/google";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from "@/components/footer/Footer";

const pacifico = Pacifico({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-pacifico",
});

const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-opensans",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${pacifico.variable} ${openSans.variable}`}>
      <body>
        <Navbar />
        {children}
        
      <Footer/>
      </body>
    </html>
  );
}

