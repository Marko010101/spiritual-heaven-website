import Logo from "@/app/_components/Logo.js";
import Navigation from "@/app/_components/Navigation.js";

import { Josefin_Sans } from "next/font/google";

import "@/app/_styles/globals.css";
import Header from "./_components/Header.js";

const josefin = Josefin_Sans({
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: {
    template: "%s / Spiritual Heaven",
    default: "Welcome / Spiritual Heaven",
  },
  description:
    "Luxurious cabin hotel, located in the heart of the Italian Dolomites, surrounded by beautiful mountains and dark forests.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${josefin.className} flex antialiased flex-col bg-primary-950 text-primary-100 min-h-screen relative`}
      >
        <Header />

        <div className="flex-1 px-8 py-12 grid">
          <main className="max-w-7xl  mx-auto w-full">{children}</main>
        </div>
      </body>
    </html>
  );
}
