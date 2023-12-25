import { Inter } from "next/font/google";
import Head from "next/head";
import "./globals.css";
import "./styles.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
  icons: {
    icon: "/avatar.jpg",
  },
};

export default function RootLayout({ children }) {
  return (
    <>
      <Head>
        <link rel="icon" href="./avatar.jpg" />
      </Head>
      <html lang="en">
        <body className={inter.className}>{children}</body>
      </html>
    </>
  );
}
