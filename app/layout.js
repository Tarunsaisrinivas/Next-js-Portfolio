import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "PORTFOLIO",
  description: "Hi there! I am Tarun Sai Srinivas, a passionate Frontend Developer with expertise in React.js. I specialize in crafting dynamic,responsive websites that provide exceptional user experiences. I excel in creating intuitive interfaces from concept to execution, focusing on clean code, modular architecture, and performance optimization.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
