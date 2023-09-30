import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Registration Form",
  description: "Registration Form for ACC Computing",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className + " mx-auto max-w-7xl p-6 lg:p-8 w-full"}>
        {children}
      </body>
    </html>
  );
}
