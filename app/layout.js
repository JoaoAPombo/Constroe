import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Constroe Engenharia",
  description: "Excelência em projetos de engenharia civil",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <head>
        <meta name="apple-mobile-web-app-title" content="Constroe" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-cover bg-center`}
        style={{ backgroundImage: "url('/imgs/fotoNoite.jpeg')" }}
      >
        <div className="bg-black bg-opacity-50 min-h-screen flex flex-col">
          {children}
        </div>
      </body>
    </html>
  );
}
