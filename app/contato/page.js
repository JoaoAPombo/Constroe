import Link from "next/link";

export default function Contato() {
  return (
    <div
      className="flex flex-col min-h-screen bg-cover bg-center"
      style={{
        backgroundImage:
          "linear-gradient(rgba(255, 255, 255, 0.92), rgba(255, 255, 255, 0.92)), url('/imgs/fotoNoite.jpeg')",
      }}
    >
      {/* Back Button */}
      <div className="w-full text-black bg-white bg-opacity-90 py-4 px-6 flex justify-start fixed top-0 shadow-md z-50">
        <Link
          href="/"
          className="px-4 py-2 rounded-full hover:bg-gray-200 transition-all duration-300 ease-in-out"
        >
          Voltar
        </Link>
      </div>

      {/* Contact Info */}
      <div className="flex-grow container mx-auto px-4 py-24 max-w-3xl">
        <h1 className="text-4xl font-bold text-gray-800 mb-12 text-center">
          Entre em Contato
        </h1>

        <div className="bg-white rounded-xl shadow-xl p-8 backdrop-blur-sm bg-white/80">
          {/* Engineer Info */}
          <div className="mb-8 pb-8 border-b border-gray-200">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              Engenheiro Responsável
            </h2>
            <div className="space-y-3">
              <p className="text-lg">
                <span className="font-semibold text-gray-700">Nome: </span>
                <span className="text-gray-600">Eng. Pedro Engenharia</span>
              </p>
              <p className="text-lg">
                <span className="font-semibold text-gray-700">CREA: </span>
                <span className="text-gray-600">123456/SP</span>
              </p>
            </div>
          </div>

          {/* Contact Details */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              Informações de Contato
            </h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-gray-700 mb-1">Endereço</h3>
                <p className="text-gray-600">
                  Av. Paulista, 1000, Bela Vista
                </p>
                <p className="text-gray-600">
                  São Paulo - SP, 01310-100
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-700 mb-1">Telefone</h3>
                <p className="text-gray-600">(11) 3456-7890</p>
                <p className="text-gray-600">(11) 98765-4321</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-700 mb-1">Email</h3>
                <a
                  href="mailto:contato@constroe.com.br"
                  className="text-blue-600 hover:text-blue-800 transition-colors"
                >
                  contato@constroe.com.br
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
