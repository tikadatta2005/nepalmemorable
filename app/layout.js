import "./globals.css";
import Navbar from "@/components/navbar/Nav";
import Footer from "@/components/footer/Footer";
import { Roboto, Raleway } from "next/font/google";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const roboto = Roboto({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-roboto",
});

const raleway = Raleway({
  weight: ["400", "600", "700"],
  subsets: ["latin"],
  variable: "--font-raleway",
});

export const metadata =async()=>{
  
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${roboto.variable} ${raleway.variable}`}>
      <body className="custom-scroll">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
