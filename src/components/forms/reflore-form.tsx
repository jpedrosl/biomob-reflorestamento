'use client';

import React, { useState } from 'react';
import { LoggedHeader } from '../dashboard/loggedheader';
import { NavigationBar } from '../dashboard/navigationbar';
import { Footer } from '../dashboard/Footer';

const featuredImageUrl =
  'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiqYt7rwpjsuwWOKnFqeKuNVuVm8fJflUOiT3J9hHw2xevlrvpDwys5UpXpWLaenrr_NAnRv4MYk_Vpn73oVbtt1DbC9jHoQfmE2eG1icPW9kf_KKg5gTZyDOKxwW3TyEg3vsD1ZoPp2vMjXaL3yxmobduHm7lWb3Kcg2r6VXLVoc7EWscBqLWkNBAZhA/s1600/REFLORESTAMENTO-DE-PETR%C3%93POLIS.jpeg';

export default function RefloreForm() {
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
          alt="Imagem do Projeto de Reflorestamento"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center px-6">
          <h1 className="text-white text-3xl md:text-5xl font-bold text-center drop-shadow-lg">
            Reflorestamento em Petrópolis 🌱
          </h1>
        </div>
      </div>

      {/* CONTEÚDO PRINCIPAL */}
      <main className="max-w-6xl mx-auto px-4 mb-12">
        <section className="bg-white p-8 rounded-lg shadow-md">
          <div className="space-y-6 text-gray-700 text-justify text-base leading-relaxed">
            <p>
              O <strong>Reflorestamento em Petrópolis</strong> é uma iniciativa socioambiental comprometida com a restauração ecológica de áreas degradadas da Mata Atlântica na região serrana do Rio de Janeiro.
            </p>
            <p>
              Desde sua criação, mais de <strong>100 hectares</strong> de vegetação nativa já foram restaurados com o plantio de espécies endêmicas como Ipê-Amarelo, Pau-Brasil, Jequitibá-Rosa e Araucária.
            </p>
            <p>
              O projeto também se destaca pelo seu <strong>papel educacional e social</strong>, promovendo oficinas, capacitações e mutirões com mais de <strong>150 voluntários</strong>.
            </p>
            <p>
              Além dos benefícios ecológicos, busca gerar impacto social positivo, criando oportunidades de trabalho verde e promovendo uma cultura de cuidado com o meio ambiente.
            </p>
            <p>
              Com uma abordagem científica, inclusiva e regenerativa, o projeto representa uma resposta concreta às mudanças climáticas.
            </p>
          </div>

          {/* CARDS INFORMATIVOS COM IMAGENS */}
          <div className="grid md:grid-cols-3 gap-6 mt-14">
            {/* CARD 1 */}
            <div className="bg-[#f0fdfb] p-6 rounded-lg shadow">
              <h3 className="text-lg font-semibold text-green-800 mb-3">🌳 Impacto Ambiental</h3>
              <img
                src="https://beauts.com.br/cdn/shop/articles/24583680e1f5403733381c6cd89434cd.jpg?v=1686095967&width=1100"
                alt="Impacto Ambiental"
                className="w-full h-40 object-cover rounded mb-4"
              />
              <p className="text-sm text-gray-600">
                Redução de <strong>40%</strong> nos deslizamentos em áreas críticas e retorno de polinizadores e fauna nativa.
              </p>
            </div>

            {/* CARD 2 */}
            <div className="bg-[#f0fdfb] p-6 rounded-lg shadow">
              <h3 className="text-lg font-semibold text-green-800 mb-3">👥 Envolvimento Comunitário</h3>
              <img
                src="https://diariodonordeste.verdesmares.com.br/image/contentid/policy:1.3560209:1726796736/Reflorestamento.jpg?f=default&$p$f=7e3054e"
                alt="Envolvimento Comunitário"
                className="w-full h-40 object-cover rounded mb-4"
              />
              <p className="text-sm text-gray-600">
                Oficinas e ações com escolas, ONGs e moradores para educação ambiental e participação cidadã.
              </p>
            </div>

            {/* CARD 3 */}
            <div className="bg-[#f0fdfb] p-6 rounded-lg shadow">
              <h3 className="text-lg font-semibold text-green-800 mb-3">🌱 Espécies Nativas</h3>
              <img
                src="https://www.sinteseambiental.com.br/wp-content/uploads/2018/12/reflorestamento-ambiental-1024x768.jpg"
                alt="Espécies Nativas"
                className="w-full h-40 object-cover rounded mb-4"
              />
              <p className="text-sm text-gray-600">
                Mais de <strong>30 espécies</strong> da Mata Atlântica como Ipê-Amarelo, Pau-Brasil, Jequitibá-Rosa e Araucária.
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
