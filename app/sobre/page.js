import Link from "next/link";

export default function Sobre() {
  return (
    <div className="flex flex-col items-center justify-start text-center min-h-screen px-6 bg-white pb-24">
      {/* Back Button */}
      <div className="w-full text-black bg-white bg-opacity-90 py-4 px-6 flex justify-start fixed top-0 shadow-md z-50">
        <Link
          href="/"
          className="px-4 py-2 rounded-full hover:bg-gray-200 transition-all duration-300 ease-in-out"
        >
          Voltar
        </Link>
      </div>

      {/* About Section - Fixed height */}
      <div className="mt-24 text-black h-40">
        <h1 className="text-3xl font-bold mb-6">Sobre Nós</h1>
        <p className="mt-4 text-lg max-w-3xl mx-auto">
          Iniciamos nossas atividades em 2017, com a união de profissionais de
          engenharia e arquitetura com experiência acumulada em diversos tipos
          de obras.
        </p>
      </div>

      {/* Card Section - Adjust spacing */}
      <div className="mt-12 w-full px-4 mb-24">
        <h2 className="text-2xl font-semibold text-gray-800 mb-12">
          Nossos Projetos
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Metro Card */}
          <div className="relative h-48 overflow-hidden group">
            <div
              className="absolute inset-0 bg-[url('/imgs/fotometro.jpeg')] bg-cover bg-center opacity-80 
                         group-hover:opacity-100 group-hover:scale-110 transition-all duration-500 ease-in-out"
            ></div>
            <div className="relative z-10 h-full flex flex-col justify-between">
              <div className="h-32 p-4 bg-white/80 backdrop-blur-sm group-hover:opacity-0 transition-all duration-300">
                <h3 className="text-xl font-bold text-gray-800">Metrô</h3>
                <p className="mt-2 text-gray-600">
                  Projetos de construção e expansão de linhas de metrô.
                </p>
              </div>
              <div
                className="absolute bottom-0 left-0 right-0 h-16 bg-[url('/imgs/metro.jpg')] 
                           bg-cover bg-center group-hover:opacity-0 transition-all duration-500"
              ></div>
            </div>
          </div>

          {/* Porto Card */}
          <div className="relative h-48 overflow-hidden group">
            <div
              className="absolute inset-0 bg-[url('/imgs/FotoPortos.jpeg')] bg-cover bg-center opacity-80 
                         group-hover:opacity-100 group-hover:scale-110 transition-all duration-500 ease-in-out"
            ></div>
            <div className="relative z-10 h-full flex flex-col justify-between">
              <div className="h-32 p-4 bg-white/80 backdrop-blur-sm group-hover:opacity-0 transition-all duration-300">
                <h3 className="text-xl font-bold text-gray-800">Portos</h3>
                <p className="mt-2 text-gray-600">
                  Desenvolvimento e modernização de portos marítimos.
                </p>
              </div>
              <div
                className="absolute bottom-0 left-0 right-0 h-16 bg-[url('/imgs/porto.jpg')] 
                           bg-cover bg-center group-hover:opacity-0 transition-all duration-500"
              ></div>
            </div>
          </div>

          {/* Aeroporto Card */}
          <div className="relative h-48 overflow-hidden group">
            <div
              className="absolute inset-0 bg-[url('/imgs/FotoAeroporto.jpeg')] bg-cover bg-center opacity-80 
                         group-hover:opacity-100 group-hover:scale-110 transition-all duration-500 ease-in-out"
            ></div>
            <div className="relative z-10 h-full flex flex-col justify-between">
              <div className="h-32 p-4 bg-white/80 backdrop-blur-sm group-hover:opacity-0 transition-all duration-300">
                <h3 className="text-xl font-bold text-gray-800">Aeroportos</h3>
                <p className="mt-2 text-gray-600">
                  Construção e ampliação de terminais aeroportuários.
                </p>
              </div>
              <div
                className="absolute bottom-0 left-0 right-0 h-16 bg-[url('/imgs/aeroporto.jpg')] 
                           bg-cover bg-center group-hover:opacity-0 transition-all duration-500"
              ></div>
            </div>
          </div>

          {/* Barragens Card */}
          <div className="relative h-48 overflow-hidden group">
            <div
              className="absolute inset-0 bg-[url('/imgs/FotoBarragem.jpeg')] bg-cover bg-center opacity-80 
                         group-hover:opacity-100 group-hover:scale-110 transition-all duration-500 ease-in-out"
            ></div>
            <div className="relative z-10 h-full flex flex-col justify-between">
              <div className="h-32 p-4 bg-white/80 backdrop-blur-sm group-hover:opacity-0 transition-all duration-300">
                <h3 className="text-xl font-bold text-gray-800">Barragens</h3>
                <p className="mt-2 text-gray-600">
                  Projetos de construção e manutenção de barragens.
                </p>
              </div>
              <div
                className="absolute bottom-0 left-0 right-0 h-16 bg-[url('/imgs/FotoBarragem.jpeg')] 
                           bg-cover bg-center group-hover:opacity-0 transition-all duration-500"
              ></div>
            </div>
          </div>

          {/* Construcao Card */}
          <div className="relative h-48 overflow-hidden group">
            <div
              className="absolute inset-0 bg-[url('/imgs/fotoConstrucao.jpeg')] bg-cover bg-center opacity-80 
                         group-hover:opacity-100 group-hover:scale-110 transition-all duration-500 ease-in-out"
            ></div>
            <div className="relative z-10 h-full flex flex-col justify-between">
              <div className="h-32 p-4 bg-white/80 backdrop-blur-sm group-hover:opacity-0 transition-all duration-300">
                <h3 className="text-xl font-bold text-gray-800">
                  Construção Industrial/Civil
                </h3>
                <p className="mt-2 text-gray-600">
                  Edificações industriais e civis de grande porte.
                </p>
              </div>
              <div
                className="absolute bottom-0 left-0 right-0 h-16 bg-[url('/imgs/FotoConstrucao.jpeg')] 
                           bg-cover bg-center group-hover:opacity-0 transition-all duration-500"
              ></div>
            </div>
          </div>
          {/* Dique Card */}
          <div className="relative h-48 overflow-hidden group">
            <div
              className="absolute inset-0 bg-[url('/imgs/fotoDique.jpeg')] bg-cover bg-center opacity-80 
                         group-hover:opacity-100 group-hover:scale-110 transition-all duration-500 ease-in-out"
            ></div>
            <div className="relative z-10 h-full flex flex-col justify-between">
              <div className="h-32 p-4 bg-white/80 backdrop-blur-sm group-hover:opacity-0 transition-all duration-300">
                <h3 className="text-xl font-bold text-gray-800">Dique Seco</h3>
                <p className="mt-2 text-gray-600">
                  Construção e manutenção de diques secos para estaleiros.
                </p>
              </div>
              <div className="absolute bottom-0 left-0 right-0 h-16 bg-[url('/imgs/FotoDique.jpeg')] bg-cover bg-center group-hover:opacity-0 transition-all duration-500"></div>
            </div>
          </div>
          {/*Rodovia Card */}
          <div className="relative h-48 overflow-hidden group">
            <div
              className="absolute inset-0 bg-[url('/imgs/fotoRodovia.jpeg')] bg-cover bg-center opacity-80 
                         group-hover:opacity-100 group-hover:scale-110 transition-all duration-500 ease-in-out"
            ></div>
            <div className="relative z-10 h-full flex flex-col justify-between">
              <div className="h-32 p-4 bg-white/80 backdrop-blur-sm group-hover:opacity-0 transition-all duration-300">
                <h3 className="text-xl font-bold text-gray-800">Rodovias</h3>
                <p className="mt-2 text-gray-600">
                  Construção e pavimentação de rodovias.
                </p>
              </div>
              <div className="absolute bottom-0 left-0 right-0 h-16 bg-[url('/imgs/FotoRodovia.jpeg')] bg-cover bg-center group-hover:opacity-0 transition-all duration-500"></div>
            </div>
          </div>
          {/* Hidreletrica Card */}
          <div className="relative h-48 overflow-hidden group">
            <div
              className="absolute inset-0 bg-[url('/imgs/FotoHidreletrica.jpeg')] bg-cover bg-center opacity-80 
                         group-hover:opacity-100 group-hover:scale-110 transition-all duration-500 ease-in-out"
            ></div>
            <div className="relative z-10 h-full flex flex-col justify-between">
              <div className="h-32 p-4 bg-white/80 backdrop-blur-sm group-hover:opacity-0 transition-all duration-300">
                <h3 className="text-xl font-bold text-gray-800">
                  Hidrelétricas
                </h3>
                <p className="mt-2 text-gray-600">
                  Projetos de construção de usinas hidrelétricas.
                </p>
              </div>
              <div className="absolute bottom-0 left-0 right-0 h-16 bg-[url('/imgs/FotoHidreletrica.jpeg')] bg-cover bg-center group-hover:opacity-0 transition-all duration-500"></div>
            </div>
          </div>
          {/* Tunel Card */}
          <div className="relative h-48 overflow-hidden group">
            <div
              className="absolute inset-0 bg-[url('/imgs/FotoTunel.jpeg')] bg-cover bg-center opacity-80 
                         group-hover:opacity-100 group-hover:scale-110 transition-all duration-500 ease-in-out"
            ></div>
            <div className="relative z-10 h-full flex flex-col justify-between">
              <div className="h-32 p-4 bg-white/80 backdrop-blur-sm group-hover:opacity-0 transition-all duration-300">
                <h3 className="text-xl font-bold text-gray-800">Túneis</h3>
                <p className="mt-2 text-gray-600">
                  Construção de túneis para transporte e infraestrutura.
                </p>
              </div>
              <div className="absolute bottom-0 left-0 right-0 h-16 bg-[url('/imgs/FotoTunel.jpeg')] bg-cover bg-center group-hover:opacity-0 transition-all duration-500"></div>
            </div>
          </div>
          {/* Adutora Card */}
          <div className="relative h-48 overflow-hidden group">
            <div
              className="absolute inset-0 bg-[url('/imgs/FotoAdutora.jpeg')] bg-cover bg-center opacity-80 
                         group-hover:opacity-100 group-hover:scale-110 transition-all duration-500 ease-in-out"
            ></div>
            <div className="relative z-10 h-full flex flex-col justify-between">
              <div className="h-32 p-4 bg-white/80 backdrop-blur-sm group-hover:opacity-0 transition-all duration-300">
                <h3 className="text-xl font-bold text-gray-800">Adutoras</h3>
                <p className="mt-2 text-gray-600">
                  Construção de sistemas de adutoras para abastecimento de água.
                </p>
              </div>
              <div className="absolute bottom-0 left-0 right-0 h-16 bg-[url('/imgs/FotoAdutora.jpeg')] bg-cover bg-center group-hover:opacity-0 transition-all duration-500"></div>
            </div>
          </div>
          {/* ETA Card */}
          <div className="relative h-48 overflow-hidden group">
            <div
              className="absolute inset-0 bg-[url('/imgs/fotoETA.jpeg')] bg-cover bg-center opacity-80 
                         group-hover:opacity-100 group_hover:scale-110 transition-all duration-500 ease-in-out"
            ></div>
            <div className="relative z-10 h-full flex flex-col justify-between">
              <div className="h-32 p-4 bg-white/80 backdrop-blur-sm group-hover:opacity-0 transition-all duration-300">
                <h3 className="text-xl font-bold text-gray-800">
                  Estação de Tratamento de Água
                </h3>
                <p className="mt-2 text-gray-600">
                  Construção de estações para tratamento e distribuição de água
                  potável.
                </p>
              </div>
              <div className="absolute bottom-0 left-0 right-0 h-16 bg-[url('/imgs/FotoETA.jpeg')] bg-cover bg-center group-hover:opacity-0 transition-all duration-500"></div>
            </div>
          </div>
          {/* ETE Card */}
          <div className="relative h-48 overflow-hidden group">
            <div
              className="absolute inset-0 bg-[url('/imgs/fotoETE.jpeg')] bg-cover bg-center opacity-80 
                         group-hover:opacity-100 group-hover:scale-110 transition-all duration-500 ease-in-out"
            ></div>
            <div className="relative z-10 h-full flex flex-col justify-between">
              <div className="h-32 p-4 bg-white/80 backdrop-blur-sm group-hover:opacity-0 transition-all duration-300">
                <h3 className="text-xl font-bold text-gray-800">
                  Estação de Tratamento de Esgotos
                </h3>
                <p className="mt-2 text-gray-600">
                  Projetos de estações para tratamento de esgotos sanitários.
                </p>
              </div>
              <div className="absolute bottom-0 left-0 right-0 h-16 bg-[url('/imgs/FotoETE.jpeg')] bg-cover bg-center group-hover:opacity-0 transition-all duration-500"></div>
            </div>
          </div>

          {/* Redes Card */}
          <div className="relative h-48 overflow-hidden group">
            <div
              className="absolute inset-0 bg-[url('/imgs/fotoRedes.jpeg')] bg-cover bg-center opacity-80 
                         group-hover:opacity-100 group-hover:scale-110 transition-all duration-500 ease-in-out"
            ></div>
            <div className="relative z-10 h-full flex flex-col justify-between">
              <div className="h-32 p-4 bg-white/80 backdrop-blur-sm group-hover:opacity-0 transition-all duration-300">
                <h3 className="text-xl font-bold text-gray-800">
                  Interceptores e Redes Domiciliares de Esgoto
                </h3>
                <p className="mt-2 text-gray-600">
                  Construção de interceptores e redes de esgoto para
                  residências.
                </p>
              </div>
              <div className="absolute bottom-0 left-0 right-0 h-16 bg-[url('/imgs/FotoRedes.jpeg')] bg-cover bg-center group-hover:opacity-0 transition-all duration-500"></div>
            </div>
          </div>
          {/* TermoEletrica Card */}
          <div className="relative h-48 overflow-hidden group">
            <div
              className="absolute inset-0 bg-[url('/imgs/fotoTermoeletrica.jpeg')] bg-cover bg-center opacity-80 
                         group-hover:opacity-100 group_hover:scale-110 transition-all duration-500 ease-in-out"
            ></div>
            <div className="relative z-10 h-full flex flex-col justify-between">
              <div className="h-32 p-4 bg-white/80 backdrop-blur-sm group-hover:opacity-0 transition-all duration-300">
                <h3 className="text-xl font-bold text-gray-800">
                  Termoelétrica
                </h3>
                <p className="mt-2 text-gray-600">
                  Desenvolvimento de usinas termoelétricas para geração de
                  energia.
                </p>
              </div>
              <div className="absolute bottom-0 left-0 right-0 h-16 bg-[url('/imgs/FotoTermoeletrica.jpeg')] bg-cover bg-center group-hover:opacity-0 transition-all duration-500"></div>
            </div>
          </div>
          {/* Cimento Card */}
          <div className="relative h-48 overflow-hidden group">
            <div
              className="absolute inset-0 bg-[url('/imgs/fotoCimento.jpeg')] bg-cover bg-center opacity-80 
                         group-hover:opacity-100 group-hover:scale-110 transition-all duration-500 ease-in-out"
            ></div>
            <div className="relative z-10 h-full flex flex-col justify-between">
              <div className="h-32 p-4 bg-white/80 backdrop-blur-sm group-hover:opacity-0 transition-all duration-300">
                <h3 className="text-xl font-bold text-gray-800">
                  Fábrica de Cimento
                </h3>
                <p className="mt-2 text-gray-600">
                  Construção de fábricas de cimento para produção industrial.
                </p>
              </div>
              <div className="absolute bottom-0 left-0 right-0 h-16 bg-[url('/imgs/FotoCimento.jpeg')] bg-cover bg-center group-hover:opacity-0 transition-all duration-500"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
