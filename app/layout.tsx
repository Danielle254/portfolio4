import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="max-w-[1000px] mx-auto min-h-screen flex flex-col justify-between px-4">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
