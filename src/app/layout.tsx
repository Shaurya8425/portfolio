import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { Toaster } from "sonner"; // ✅ import Toaster
import { ThemeProvider } from "next-themes";
import type { Metadata } from "next";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://byshaurya.com"),
  title: "Shaurya Yadav — Full-stack developer",
  description: "A portfolio of thoughtful products, experiments, and open-source work.",
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-icon.png",
  },
  openGraph: {
    title: "Shaurya Yadav — Full-stack developer",
    description: "A portfolio of thoughtful products, experiments, and open-source work.",
    url: "https://byshaurya.com",
    siteName: "byshaurya.com",
    type: "website",
    images: [
      {
        url: "/icon.png",
        alt: "Shaurya Yadav logo",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "Shaurya Yadav — Full-stack developer",
    description: "A portfolio of thoughtful products, experiments, and open-source work.",
    images: ["/icon.png"],
  },
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
