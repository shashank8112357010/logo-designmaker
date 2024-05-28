import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"]
});

export const metadata = {
  title: "Home Page",
  description: "Logo Designer Home Page",
};

export default function RootLayout({ children }) {
  return (
    <>
      <html lang="en">
        <head>
          <meta name="robots" content="noindex, nofollow" />
        </head>
        <body className={poppins.className}>
          <Navbar />
          {children}
          <Footer />
        </body>
      </html>
    </>
  );
}
