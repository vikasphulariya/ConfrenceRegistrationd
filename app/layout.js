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
      <body >
        {children}
      </body>
    </html>
  );
}
