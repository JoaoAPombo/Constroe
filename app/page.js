"use client";

export default function Home() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Top Bar */}
      <div className="w-full h-12 bg-white py-5 px-8 flex justify-between items-center fixed top-0 shadow-lg z-50 rounded-2xl">
        <div className="flex items-center gap-3">
          <h1
            className="text-2xl font-bold text-gray-800 hover:text-gray-600 transition-colors duration-300 cursor-pointer"
            style={{ fontFamily: "var(--font-geist-sans)" }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            CONSTROE ENGENHARIA
          </h1>
        </div>
        <nav className="flex items-center space-x-8">
          <button
            onClick={() => scrollToSection("sobre")}
            className="text-black px-3 py-2 rounded-lg font-semibold"
            style={{ fontFamily: "var(--font-geist-sans)" }}
          >
            Sobre Nós
          </button>
          <button
            onClick={() => scrollToSection("servicos")}
            className="text-black px-3 py-2 rounded-lg font-semibold"
            style={{ fontFamily: "var(--font-geist-sans)" }}
          >
            Serviços
          </button>
        </nav>
      </div>

      {/* Hero Section */}
      <div
        className="min-h-screen flex flex-col items-center justify-center text-white text-center px-4"
        style={{
          backgroundImage: "url('/imgs/fotoNoite.jpeg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
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
          Excelência em gerenciamente de projetos de engenharia civil e
          construção.
        </p>
      </div>

      {/* Sobre Section */}
      <section id="sobre" className="min-h-screen bg-white">
        <div className="flex flex-col items-center justify-start text-center min-h-screen px-6 bg-white pb-24">
          <div className="mt-24 text-black h-40">
            <h1 className="text-3xl font-bold mb-6">Sobre Nós</h1>
            <p className="mt-4 text-lg max-w-3xl mx-auto">
              Iniciamos nossas atividades em 2017, com a união de profissionais
              de engenharia e arquitetura com experiência acumulada em diversos
              tipos de obras.
            </p>
          </div>

          <div className="mt-12 w-full px-4 mb-24">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Metro Card - Example of fixed structure */}
              <div className="relative h-48 overflow-hidden group">
                <div
                  className="absolute inset-0 bg-[url('/imgs/fotometro.jpeg')] bg-cover bg-center opacity-80 
                               group-hover:opacity-100 group-hover:scale-110 transition-all duration-500 ease-in-out"
                ></div>
                <div className="relative z-10 h-full flex flex-col justify-between">
                  <div className="h-16 p-4 bg-white/80 backdrop-blur-sm group-hover:opacity-0 transition-all duration-300">
                    <h3 className="text-xl font-bold text-gray-800">Metrô</h3>
                  </div>
                </div>
              </div>

              {/* Porto Card - Example of fixed structure */}
              <div className="relative h-48 overflow-hidden group">
                <div
                  className="absolute inset-0 bg-[url('/imgs/FotoPortos.jpeg')] bg-cover bg-center opacity-80 
                         group-hover:opacity-100 group-hover:scale-110 transition-all duration-500 ease-in-out"
                ></div>
                <div className="relative z-10 h-full flex flex-col justify-between">
                  <div className="h-16 p-4 bg-white/80 backdrop-blur-sm group-hover:opacity-0 transition-all duration-300">
                    <h3 className="text-xl font-bold text-gray-800">Portos</h3>
                  </div>
                </div>
              </div>

              {/* Aeroporto Card */}
              <div className="relative h-48 overflow-hidden group">
                <div
                  className="absolute inset-0 bg-[url('/imgs/FotoAeroporto.jpeg')] bg-cover bg-center opacity-80 
                         group-hover:opacity-100 group-hover:scale-110 transition-all duration-500 ease-in-out"
                ></div>
                <div className="relative z-10 h-full flex flex-col justify-between">
                  <div className="h-16 p-4 bg-white/80 backdrop-blur-sm group-hover:opacity-0 transition-all duration-300">
                    <h3 className="text-xl font-bold text-gray-800">
                      Aeroportos
                    </h3>
                  </div>
                </div>
              </div>

              {/* Barragens Card */}
              <div className="relative h-48 overflow-hidden group">
                <div
                  className="absolute inset-0 bg-[url('/imgs/FotoBarragem.jpeg')] bg-cover bg-center opacity-80 
                         group-hover:opacity-100 group-hover:scale-110 transition-all duration-500 ease-in-out"
                ></div>
                <div className="relative z-10 h-full flex flex-col justify-between">
                  <div className="h-16 p-4 bg-white/80 backdrop-blur-sm group-hover:opacity-0 transition-all duration-300">
                    <h3 className="text-xl font-bold text-gray-800">
                      Barragens
                    </h3>
                  </div>
                </div>
              </div>

              {/* Construcao Card */}
              <div className="relative h-48 overflow-hidden group">
                <div
                  className="absolute inset-0 bg-[url('/imgs/fotoConstrucao.jpeg')] bg-cover bg-center opacity-80 
                         group-hover:opacity-100 group-hover:scale-110 transition-all duration-500 ease-in-out"
                ></div>
                <div className="relative z-10 h-full flex flex-col justify-between">
                  <div className="h-16 p-4 bg-white/80 backdrop-blur-sm group-hover:opacity-0 transition-all duration-300">
                    <h3 className="text-xl font-bold text-gray-800">
                      Construção Industrial/Civil
                    </h3>
                  </div>
                </div>
              </div>
              {/* Dique Card */}
              <div className="relative h-48 overflow-hidden group">
                <div
                  className="absolute inset-0 bg-[url('/imgs/fotoDique.jpeg')] bg-cover bg-center opacity-80 
                         group-hover:opacity-100 group-hover:scale-110 transition-all duration-500 ease-in-out"
                ></div>
                <div className="relative z-10 h-full flex flex-col justify-between">
                  <div className="h-16 p-4 bg-white/80 backdrop-blur-sm group-hover:opacity-0 transition-all duration-300">
                    <h3 className="text-xl font-bold text-gray-800">
                      Dique Seco
                    </h3>
                  </div>
                </div>
              </div>
              {/*Rodovia Card */}
              <div className="relative h-48 overflow-hidden group">
                <div
                  className="absolute inset-0 bg-[url('/imgs/fotoRodovia.jpeg')] bg-cover bg-center opacity-80 
                         group-hover:opacity-100 group-hover:scale-110 transition-all duration-500 ease-in-out"
                ></div>
                <div className="relative z-10 h-full flex flex-col justify-between">
                  <div className="h-16 p-4 bg-white/80 backdrop-blur-sm group-hover:opacity-0 transition-all duration-300">
                    <h3 className="text-xl font-bold text-gray-800">
                      Rodovias
                    </h3>
                  </div>
                </div>
              </div>
              {/* Hidreletrica Card */}
              <div className="relative h-48 overflow-hidden group">
                <div
                  className="absolute inset-0 bg-[url('/imgs/FotoHidreletrica.jpeg')] bg-cover bg-center opacity-80 
                         group-hover:opacity-100 group-hover:scale-110 transition-all duration-500 ease-in-out"
                ></div>
                <div className="relative z-10 h-full flex flex-col justify-between">
                  <div className="h-16 p-4 bg-white/80 backdrop-blur-sm group-hover:opacity-0 transition-all duration-300">
                    <h3 className="text-xl font-bold text-gray-800">
                      Hidrelétricas
                    </h3>
                  </div>
                </div>
              </div>
              {/* Tunel Card */}
              <div className="relative h-48 overflow-hidden group">
                <div
                  className="absolute inset-0 bg-[url('/imgs/FotoTunel.jpeg')] bg-cover bg-center opacity-80 
                         group-hover:opacity-100 group-hover:scale-110 transition-all duration-500 ease-in-out"
                ></div>
                <div className="relative z-10 h-full flex flex-col justify-between">
                  <div className="h-16 p-4 bg-white/80 backdrop-blur-sm group-hover:opacity-0 transition-all duration-300">
                    <h3 className="text-xl font-bold text-gray-800">Túneis</h3>
                  </div>
                </div>
              </div>
              {/* Adutora Card */}
              <div className="relative h-48 overflow-hidden group">
                <div
                  className="absolute inset-0 bg-[url('/imgs/FotoAdutora.jpeg')] bg-cover bg-center opacity-80 
                         group-hover:opacity-100 group-hover:scale-110 transition-all duration-500 ease-in-out"
                ></div>
                <div className="relative z-10 h-full flex flex-col justify-between">
                  <div className="h-16 p-4 bg-white/80 backdrop-blur-sm group-hover:opacity-0 transition-all duration-300">
                    <h3 className="text-xl font-bold text-gray-800">
                      Adutoras
                    </h3>
                  </div>
                </div>
              </div>
              {/* ETA Card */}
              <div className="relative h-48 overflow-hidden group">
                <div
                  className="absolute inset-0 bg-[url('/imgs/fotoETA.jpeg')] bg-cover bg-center opacity-80 
                         group-hover:opacity-100 group_hover:scale-110 transition-all duration-500 ease-in-out"
                ></div>
                <div className="relative z-10 h-full flex flex-col justify-between">
                  <div className="h-16 p-4 bg-white/80 backdrop-blur-sm group-hover:opacity-0 transition-all duration-300">
                    <h3 className="text-xl font-bold text-gray-800">
                      Estação de Tratamento de Água
                    </h3>
                  </div>
                </div>
              </div>
              {/* ETE Card */}
              <div className="relative h-48 overflow-hidden group">
                <div
                  className="absolute inset-0 bg-[url('/imgs/fotoETE.jpeg')] bg-cover bg-center opacity-80 
                         group-hover:opacity-100 group-hover:scale-110 transition-all duration-500 ease-in-out"
                ></div>
                <div className="relative z-10 h-full flex flex-col justify-between">
                  <div className="h-16 p-4 bg-white/80 backdrop-blur-sm group-hover:opacity-0 transition-all duration-300">
                    <h3 className="text-xl font-bold text-gray-800">
                      Estação de Tratamento de Esgotos
                    </h3>
                  </div>
                </div>
              </div>

              {/* Redes Card */}
              <div className="relative h-48 overflow-hidden group">
                <div
                  className="absolute inset-0 bg-[url('/imgs/fotoRedes.jpeg')] bg-cover bg-center opacity-80 
                         group-hover:opacity-100 group-hover:scale-110 transition-all duration-500 ease-in-out"
                ></div>
                <div className="relative z-10 h-full flex flex-col justify-between">
                  <div className="h-16 p-4 bg-white/80 backdrop-blur-sm group-hover:opacity-0 transition-all duration-300">
                    <h3 className="text-xl font-bold text-gray-800">
                      Interceptores e Redes Domiciliares de Esgoto
                    </h3>
                  </div>
                </div>
              </div>
              {/* TermoEletrica Card */}
              <div className="relative h-48 overflow-hidden group">
                <div
                  className="absolute inset-0 bg-[url('/imgs/fotoTermoeletrica.jpeg')] bg-cover bg-center opacity-80 
                         group-hover:opacity-100 group_hover:scale-110 transition-all duration-500 ease-in-out"
                ></div>
                <div className="relative z-10 h-full flex flex-col justify-between">
                  <div className="h-16 p-4 bg-white/80 backdrop-blur-sm group-hover:opacity-0 transition-all duration-300">
                    <h3 className="text-xl font-bold text-gray-800">
                      Termoelétrica
                    </h3>
                  </div>
                </div>
              </div>
              {/* Cimento Card */}
              <div className="relative h-48 overflow-hidden group">
                <div
                  className="absolute inset-0 bg-[url('/imgs/fotoCimento.jpeg')] bg-cover bg-center opacity-80 
                         group-hover:opacity-100 group-hover:scale-110 transition-all duration-500 ease-in-out"
                ></div>
                <div className="relative z-10 h-full flex flex-col justify-between">
                  <div className="h-16 p-4 bg-white/80 backdrop-blur-sm group-hover:opacity-0 transition-all duration-300">
                    <h3 className="text-xl font-bold text-gray-800">
                      Fábrica de Cimento
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Serviços Section */}
      <section id="servicos" className="min-h-screen bg-white p-16">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center text-black">
            Nossos Serviços
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 hover:bg-gray-100 shadow-lg rounded-xl p-8 transition-all duration-300 transform hover:-translate-y-1">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                Planejamento e Orçamentação de Obras
              </h3>
              <p className="text-gray-600">
                Oferecemos serviços completos de planejamento e orçamentação
                para garantir a viabilidade e eficiência de seus projetos.
              </p>
            </div>

            <div className="bg-gray-50 hover:bg-gray-100 shadow-lg rounded-xl p-8 transition-all duration-300 transform hover:-translate-y-1">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                Auditorias Técnicas
              </h3>
              <p className="text-gray-600">
                Realizamos auditorias técnicas detalhadas para assegurar a
                conformidade e qualidade das obras.
              </p>
            </div>

            <div className="bg-gray-50 hover:bg-gray-100 shadow-lg rounded-xl p-8 transition-all duration-300 transform hover:-translate-y-1">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                Gerenciamento de Obra e Controle de Qualidade
              </h3>
              <p className="text-gray-600">
                Gerenciamos obras com foco em controle de qualidade, garantindo
                a execução dentro dos padrões exigidos.
              </p>
            </div>

            <div className="bg-gray-50 hover:bg-gray-100 shadow-lg rounded-xl p-8 transition-all duration-300 transform hover:-translate-y-1">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                Elaboração de Obra e Controle de Qualidade
              </h3>
              <p className="text-gray-600">
                Desenvolvemos projetos de obra com controle rigoroso de
                qualidade em todas as etapas.
              </p>
            </div>

            <div className="bg-gray-50 hover:bg-gray-100 shadow-lg rounded-xl p-8 transition-all duration-300 transform hover:-translate-y-1">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                Propostas Técnicas e Comerciais
              </h3>
              <p className="text-gray-600">
                Elaboramos propostas técnicas e comerciais personalizadas para
                atender às necessidades de nossos clientes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-b from-gray-900 to-black text-white py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Company Info */}
            <div className="space-y-4">
              <h3 className="text-3xl font-bold tracking-tight">
                CONSTROE ENGENHARIA
              </h3>
              <p className="text-gray-300 text-lg max-w-md">
                Excelência em projetos de engenharia civil e construção.
                Transformando ideias em realidade desde 2017.
              </p>
              <p className="text-white text-lg ">
                Eng Roberto Pombo
              </p>
              <p className="text-white text-lg">
                Crea: 38737 D/MG
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold mb-6">Entre em Contato</h3>
              <div className="space-y-4">
                <a
                  href="mailto:contato@constroe.com.br"
                  className="flex items-center text-gray-300 hover:text-white transition-colors group"
                >
                  <span className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center group-hover:bg-gray-700 transition-colors">
                    📧
                  </span>
                  <span className="ml-4 text-lg">constroese@gmail.com</span>
                  <span className="ml-4 text-lg">robertoafpombo@gmail.com</span>
                </a>
                <a
                  href="tel:+551199999999"
                  className="flex items-center text-gray-300 hover:text-white transition-colors group"
                >
                  <span className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center group-hover:bg-gray-700 transition-colors">
                    📱
                  </span>
                  <span className="ml-4 text-lg">(41) 99263-2582</span>
                  <span className="ml-4 text-lg">(35) 99847-1187</span>
                </a>
                <div className="flex items-center text-gray-300 group">
                  <span className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center">
                    📍
                  </span>
                  <span className="ml-4 text-lg">
                    Rua Dr Antônio Alves Sobrinho n⁰1958
                    <br />
                    LAMBARI - MG
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p className="text-sm">
              © {new Date().getFullYear()} Constroe Engenharia. Todos os
              direitos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
