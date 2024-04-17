import type { Metadata } from "next";
import "./globals.css";
import { roboto } from "./fonts";
import Navbar from "./navbar/Navbar";



export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        {/* <p>Layout</p> */}
        <Navbar/>
        {children}
      </body>
    </html>
  );
}
