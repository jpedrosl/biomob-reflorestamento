'use client';

import React from 'react';
import { LoggedHeader } from '../dashboard/loggedheader';
import { NavigationBar } from '../dashboard/navigationbar';
import { Footer } from '../dashboard/Footer';

const featuredImageUrl =
  'https://www.moblee.com.br/blog/wp-content/uploads/sites/2/2018/01/parceria-em-eventos.png';

export default function ParceirosForm() {
  return (
    <div className="w-full bg-gray-50">
      <LoggedHeader />
      <NavigationBar />

      {/* HERO SECTION */}
      <div className="relative w-full h-96 md:h-[500px] mb-14">
        <img
          src={featuredImageUrl}
          alt="Imagem de Parceria"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center px-6">
          <h1 className="text-white text-3xl md:text-5xl font-bold text-center drop-shadow-lg">
            Nossos Parceiros 🤝
          </h1>
        </div>
      </div>

      {/* CONTEÚDO PRINCIPAL */}
      <main className="max-w-6xl mx-auto px-4 mb-12">
        <section className="bg-white p-8 rounded-lg shadow-md">
          <div className="space-y-6 text-gray-700 text-justify text-base leading-relaxed">
            <p>
              A colaboração com <strong>parceiros estratégicos</strong> é fundamental para o sucesso e a expansão das nossas iniciativas. 
              São organizações, empresas e pessoas que compartilham dos nossos valores e nos ajudam a promover um impacto positivo.
            </p>
            <p>
              Abaixo destacamos alguns dos nossos principais parceiros, que contribuem de maneira significativa para nossos projetos.
            </p>
          </div>

          {/* CARDS DE PARCEIROS */}
          <div className="grid md:grid-cols-3 gap-6 mt-14">
            {/* PARCEIRO 1 */}
            <div className="bg-[#f0fdfb] p-6 rounded-lg shadow text-center">
              <div className="w-full h-32 mb-4 flex items-center justify-center bg-white rounded border border-gray-200">
                <img
                  src="https://rondonia.fiocruz.br/wp-content/uploads/2024/12/marcafiocruz_horizontal_POSITIVA_24052024-scaled-1.jpg"
                  alt="Logo Parceiro 1"
                  className="max-h-full max-w-full object-contain"
                />
              </div>
              <h3 className="text-lg font-semibold text-green-800 mb-2">Fundação Oswaldo Cruz (Fiocruz)</h3>
              <p className="text-sm text-gray-600">
                A Fiocruz é uma instituição pública brasileira dedicada à pesquisa, ciência e inovação em saúde. Referência nacional, atua no desenvolvimento de vacinas, estudos científicos e políticas públicas para a saúde.
              </p>
            </div>

            {/* PARCEIRO 2 */}
            <div className="bg-[#f0fdfb] p-6 rounded-lg shadow text-center">
              <div className="w-full h-32 mb-4 flex items-center justify-center bg-white rounded border border-gray-200">
                <img
                  src="https://c5gwmsmjx1.execute-api.us-east-1.amazonaws.com/prod/dados_processo_seletivo/logo_empresa/140690/T2M_logo-03.png"
                  alt="Logo Parceiro 2"
                  className="max-h-full max-w-full object-contain"
                />
              </div>
              <h3 className="text-lg font-semibold text-green-800 mb-2">T2M – Test to Market</h3>
              <p className="text-sm text-gray-600">
                A T2M (Test to Market) é uma empresa que conecta ciência, mercado e inovação. Atua na validação e aceleração de tecnologias, ajudando projetos a saírem do laboratório e chegarem ao mercado com impacto.
              </p>
            </div>

            {/* PARCEIRO 3 */}
            <div className="bg-[#f0fdfb] p-6 rounded-lg shadow text-center">
              <div className="w-full h-32 mb-4 flex items-center justify-center bg-white rounded border border-gray-200">
                <img
                  src="https://logodownload.org/wp-content/uploads/2020/02/ufrrj-logo-3-2048x740.png"
                  alt="Logo Parceiro 3"
                  className="max-h-full max-w-full object-contain"
                />
              </div>
              <h3 className="text-lg font-semibold text-green-800 mb-2">UFRRJ</h3>
              <p className="text-sm text-gray-600">
              A UFRRJ (Universidade Federal Rural do Rio de Janeiro) é uma instituição pública de ensino superior, reconhecida por sua atuação em pesquisa, ensino e extensão, com forte foco nas ciências agrárias, ambientais e sociais.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
