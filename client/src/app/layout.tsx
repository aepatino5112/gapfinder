import { Manrope } from "next/font/google";
import "./globals.css";

const manropeSans = Manrope({
  variable: "--font-sans",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${manropeSans.variable} h-full antialiased`}
    >
      <body>
        {children}
      </body>
    </html>
  );
}
