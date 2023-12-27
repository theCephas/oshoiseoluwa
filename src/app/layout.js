import { Inter } from "next/font/google";
import Head from "next/head";
import "./globals.css";
import "./styles.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Osho Iseoluwa || theCephas",
  description: "Osho Iseoluwa: Frontend Developer and Technical Writer.",
  icons: {
    icon: "/avatar.jpg",
    seoImage: "/seoimage.jpg",
  },
};

export default function RootLayout({ children }) {
  return (
    <>
      <Head>
        {/* <link rel="icon" href="./avatar.jpg" /> */}
        <meta property="og:image" content="/seoimage.jpg" />
      </Head>
      <html lang="en">
        <body className={inter.className}>{children}</body>
      </html>
    </>
  );
}
