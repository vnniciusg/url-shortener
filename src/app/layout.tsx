import "./globals.css";
import type { Metadata } from "next";
import { Nunito } from "next/font/google";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import * as dotenv from "dotenv";
dotenv.config();

const font = Nunito({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Short URL",
  description: "Crie urls curtas para sites longos",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <ToastContainer />
        <div className="bg-neutral-100">{children}</div>
      </body>
    </html>
  );
}
