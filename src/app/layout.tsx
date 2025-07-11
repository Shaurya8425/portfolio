import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { Toaster } from "sonner"; // ✅ import Toaster

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "shaurya.space",
  description: "Building real-world web apps with modern tech stack",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <Navbar />
        <main className='min-h-screen px-6 sm:px-12 pt-24'>{children}</main>
        <Footer />
        <Toaster richColors position='top-center' /> {/* ✅ Add this line */}
      </body>
    </html>
  );
}
