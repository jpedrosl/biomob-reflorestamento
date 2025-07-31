'use client';

import React, { useState } from 'react';
import { LoggedHeader } from '../dashboard/loggedheader';
import { NavigationBar } from '../dashboard/navigationbar';
import { Footer } from '../dashboard/Footer';

const featuredImageUrl =
  'https://ocp.news/wp-content/uploads/2023/05/horta-comunitaria.jpg';

export default function HortasForm() {
  const [showModal, setShowModal] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [confirmationMessage, setConfirmationMessage] = useState('');

  const options = [
    { id: 'reflorestamento', label: '🌳 Reflorestamento' },
    { id: 'hortas', label: '🌱 Hortas Comunitárias' },
    { id: 'ambos', label: '🌍 Ambos' },
  ];

  const handleConfirm = () => {
    if (selectedOption) {
      setShowModal(false);
      setConfirmationMessage('Obrigado! Nossa equipe entrará em contato com você por e-mail em breve.');
      setSelectedOption(null);
    }
  };

  return (
    <div className="w-full bg-gray-50">
      <LoggedHeader />
      <NavigationBar />

      {/* HERO SECTION */}
      <div className="relative w-full h-96 md:h-[500px] mb-14">
        <img
          src={featuredImageUrl}
          alt="Imagem do Projeto de Hortas Urbanas"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center px-6">
          <h1 className="text-white text-3xl md:text-5xl font-bold text-center drop-shadow-lg">
            Hortas Comunitárias em Petrópolis 🍅
          </h1>
        </div>
      </div>

      {/* CONTEÚDO PRINCIPAL */}
      <main className="max-w-6xl mx-auto px-4 mb-12">
        <section className="bg-white p-8 rounded-lg shadow-md">
          <div className="space-y-6 text-gray-700 text-justify text-base leading-relaxed">
            <p>
              As <strong>Hortas Comunitárias em Petrópolis</strong> têm como propósito transformar espaços urbanos ociosos em áreas produtivas, incentivando o cultivo de alimentos orgânicos e promovendo segurança alimentar, educação ambiental e integração comunitária.
            </p>
            <p>
              Por meio da mobilização de moradores, instituições e voluntários, são implementadas hortas comunitárias em escolas, praças e centros de convivência...
            </p>
          </div>

          {/* CARDS INFORMATIVOS */}
          <div className="grid md:grid-cols-3 gap-6 mt-14">
            {/* CARD 1 */}
            <div className="bg-[#f0fdfb] p-6 rounded-lg shadow">
              <h3 className="text-lg font-semibold text-green-800 mb-3">🌿 Planejamento</h3>
              <img
                src="https://images.adsttc.com/media/images/5a02/d2e5/b22e/38b1/dc00/07f2/slideshow/HORTAS_ATUAL01.jpg?1510134493"
                alt="Planejamento"
                className="w-full h-40 object-cover rounded mb-4"
              />
              <p className="text-sm text-gray-600">
                Escolha de um local ideal, preparo do solo e seleção das culturas adequadas para cada estação.
              </p>
            </div>

            {/* CARD 2 */}
            <div className="bg-[#f0fdfb] p-6 rounded-lg shadow">
              <h3 className="text-lg font-semibold text-green-800 mb-3">🌱 Cultivo</h3>
              <img
                src="https://blog.belagro.com.br/content/uploads/2021/06/o-que-plantar-na-horta-750x422.jpg"
                alt="Cultivo"
                className="w-full h-40 object-cover rounded mb-4"
              />
              <p className="text-sm text-gray-600">
                Aprendizado de técnicas de plantio, irrigação e fertilização para garantir o crescimento saudável das plantas.
              </p>
            </div>

            {/* CARD 3 */}
            <div className="bg-[#f0fdfb] p-6 rounded-lg shadow">
              <h3 className="text-lg font-semibold text-green-800 mb-3">🥕 Colheita</h3>
              <img
                src="https://prefeitura.rio/wp-content/uploads/2022/01/WhatsApp-Image-2022-01-04-at-17.03.56.jpeg"
                alt="Colheita"
                className="w-full h-40 object-cover rounded mb-4"
              />
              <p className="text-sm text-gray-600">
                Escolha do momento ideal para colher cada tipo de vegetal e como armazenar adequadamente.
              </p>
            </div>
          </div>

          {/* BOTÃO DE AÇÃO */}
          <div className="mt-12 flex justify-center">
            <button
              onClick={() => setShowModal(true)}
              className="text-white font-semibold text-lg px-8 py-3 rounded-md transition hover:scale-105"
              style={{ backgroundColor: 'rgba(63,180,152,1)' }}
            >
              Quero ser Voluntário
            </button>
          </div>

          {/* MENSAGEM DE CONFIRMAÇÃO */}
          {confirmationMessage && (
            <div className="mt-8 p-4 bg-green-100 text-green-800 text-center rounded shadow">
              {confirmationMessage}
            </div>
          )}
        </section>
      </main>

      <Footer />

      {/* MODAL */}
      {showModal && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center transition-opacity duration-300">
          <div className="bg-white rounded-lg shadow-lg w-full max-w-md mx-4 p-6 animate-fade-in relative">

            {/* Botão X de fechar */}
            <button
              onClick={() => {
                setShowModal(false);
                setSelectedOption(null);
              }}
              aria-label="Fechar modal"
              className="absolute top-0 right-2 text-gray-400 hover:text-gray-700 transition text-2xl font-bold"
            >
              &times;
            </button>

            <h2 className="text-[25px] font-semibold text-gray-800 mb-[24px] text-center">
              Deseja se tornar um voluntário?
            </h2>
            <p className="text-gray-600 text-[18px] text-center mb-[32px]">
              Selecione o tipo de voluntariado que deseja participar:
            </p>

            <div className="flex flex-col gap-3">
              {options.map((option) => (
                <button
                  key={option.id}
                  onClick={() => setSelectedOption(option.id)}
                  style={
                    selectedOption === option.id
                      ? { backgroundColor: 'rgba(63,180,152,1)', color: 'white', borderColor: 'rgba(63,180,152,1)' }
                      : undefined
                  }
                  className={`py-4 px-6 rounded-md border text-lg font-semibold transition ${selectedOption === option.id
                      ? ''
                      : 'bg-white text-gray-800 border-gray-300 hover:border-green-500 hover:text-green-800'
                    }`}
                >
                  {option.label}
                </button>
              ))}
            </div>

            <div className="mt-10 flex justify-end gap-6">
              <button
                onClick={() => {
                  setShowModal(false);
                  setSelectedOption(null);
                }}
                className="px-6 py-3 text-gray-700 text-base hover:text-gray-900 transition rounded-md"
              >
                Cancelar
              </button>
              <button
                onClick={handleConfirm}
                disabled={!selectedOption}
                className={`px-6 py-3 rounded-md text-white font-semibold text-base ${selectedOption
                    ? 'bg-green-600 hover:bg-green-700 transition'
                    : 'bg-gray-300 cursor-not-allowed'
                  }`}
              >
                Confirmar
              </button>
            </div>
          </div>
        </div>
      )}

      {/* FADE-IN ANIMATION */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fadeIn 0.3s ease-out;
        }
      `}</style>
    </div>
  );
}
