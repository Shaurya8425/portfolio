import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { Toaster } from "sonner"; // ✅ import Toaster
import { ThemeProvider } from "next-themes";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Shaurya Yadav — Full-stack developer",
  description: "A portfolio of thoughtful products, experiments, and open-source work.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute='class' defaultTheme='system' enableSystem>
          <Navbar />
          <main className='min-h-screen px-5 sm:px-8 pt-28'>{children}</main>
          <Footer />
          <Toaster richColors position='top-center' /> {/* ✅ Add this line */}
        </ThemeProvider>
      </body>
    </html>
  );
}
