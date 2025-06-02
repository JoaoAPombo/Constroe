import Link from "next/link";

export default function Servicos() {
  return (
    <div className="flex flex-col items-center justify-start text-center min-h-screen px-6 bg-white">
      {/* Back Button */}
      <div className="w-full text-black bg-white bg-opacity-90 py-4 px-6 flex justify-start fixed top-0 shadow-md z-50">
        <Link
          href="/"
          className="px-4 py-2 rounded-full hover:bg-gray-200 transition-all duration-300 ease-in-out"
        >
          Voltar
        </Link>
      </div>

      {/* Services Section */}
      <div className="mt-24 w-full px-4">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Nossos Serviços</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-gray-100 shadow-md rounded-lg p-6">
            <h2 className="text-2xl font-bold text-gray-800">Planejamento e Orçamentação de Obras</h2>
            <p className="mt-4 text-gray-600">
              Oferecemos serviços completos de planejamento e orçamentação para garantir a viabilidade e eficiência de seus projetos.
            </p>
          </div>
          <div className="bg-gray-100 shadow-md rounded-lg p-6">
            <h2 className="text-2xl font-bold text-gray-800">Auditorias Técnicas</h2>
            <p className="mt-4 text-gray-600">
              Realizamos auditorias técnicas detalhadas para assegurar a conformidade e qualidade das obras.
            </p>
          </div>
          <div className="bg-gray-100 shadow-md rounded-lg p-6">
            <h2 className="text-2xl font-bold text-gray-800">Gerenciamento de Obra e Controle de Qualidade</h2>
            <p className="mt-4 text-gray-600">
              Gerenciamos obras com foco em controle de qualidade, garantindo a execução dentro dos padrões exigidos.
            </p>
          </div>
          <div className="bg-gray-100 shadow-md rounded-lg p-6">
            <h2 className="text-2xl font-bold text-gray-800">Elaboração de Obra e Controle de Qualidade</h2>
            <p className="mt-4 text-gray-600">
              Desenvolvemos projetos de obra com controle rigoroso de qualidade em todas as etapas.
            </p>
          </div>
          <div className="bg-gray-100 shadow-md rounded-lg p-6">
            <h2 className="text-2xl font-bold text-gray-800">Propostas Técnicas e Comerciais</h2>
            <p className="mt-4 text-gray-600">
              Elaboramos propostas técnicas e comerciais personalizadas para atender às necessidades de nossos clientes.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
