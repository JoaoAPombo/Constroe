"use client"; // Enable client-side interactivity
import Link from "next/link";

export default function Home() {
  const scrollToFooter = () => {
    document.getElementById("footer-contact").scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div
      className="flex flex-col min-h-screen"
      style={{
        backgroundImage: "url('/imgs/fotoNoite.jpeg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Top Bar */}
      <div className="w-full bg-white py-4 px-6 flex justify-between items-center fixed top-0 shadow-md z-50">
        <h1
          className="text-xl font-bold text-gray-800"
          style={{ fontFamily: "var(--font-geist-sans)" }}
        >
          CONSTROE ENGENHARIA
        </h1>
        <nav className="flex space-x-4 font-bold text-xl text-gray-800">
          <Link
            href="/sobre"
            className="hover:bg-gray-200 px-2 py-1 rounded transition-colors duration-300"
            style={{ fontFamily: "var(--font-geist-sans)" }}
          >
            Sobre Nós
          </Link>
          <Link
            href="/servicos"
            className="hover:bg-gray-200 px-2 py-1 rounded transition-colors duration-300"
            style={{ fontFamily: "var(--font-geist-sans)" }}
          >
            Serviços
          </Link>
          <Link
            href="/contato"
            className="hover:bg-gray-200 px-2 py-1 rounded transition-colors duration-300"
            style={{ fontFamily: "var(--font-geist-sans)" }}
          >
            Contato
          </Link>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-grow flex flex-col items-center justify-center text-white text-center mt-16 px-4">
        <h1
          className="text-6xl font-bold drop-shadow-lg"
          style={{
            fontFamily: "var(--font-geist-sans)",
            textShadow: "2px 2px 4px rgba(0, 0, 0, 0.7)",
          }}
        >
          CONSTROE ENGENHARIA
        </h1>
        <p className="mt-4 text-2xl font-semibold drop-shadow-lg">
          Excelência em projetos de engenharia civil e construção.
        </p>
      </div>
    </div>
  );
}
