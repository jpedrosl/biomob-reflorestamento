'use client';

import React, { useState } from 'react';
import { LoggedHeader } from '../dashboard/loggedheader';
import { NavigationBar } from '../dashboard/navigationbar';
import { Footer } from '../dashboard/Footer';

const featuredImageUrl =
  'https://biomob.org/_next/image?url=%2Fcarousel%2Fsolucoes%2FImagem%20(5).jpg&w=3840&q=75';

export default function ContatosForm() {
  const [confirmationMessage, setConfirmationMessage] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Evita recarregar a página
    setConfirmationMessage('Formulário enviado! Nossa equipe fará contato com você pelo seu e-mail em breve.');
  };

  return (
    <div className="w-full bg-gray-50">
      <LoggedHeader />
      <NavigationBar />

      {/* HERO SECTION */}
      <div className="relative w-full h-96 md:h-[500px] mb-14">
        <img
          src={featuredImageUrl}
          alt="Imagem de Contato"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center px-6">
          <h1 className="text-white text-3xl md:text-5xl font-bold text-center drop-shadow-lg">
            Fale Conosco 📞
          </h1>
        </div>
      </div>

      {/* CONTEÚDO PRINCIPAL */}
      <main className="max-w-6xl mx-auto px-4 mb-8">
        <section className="bg-white p-8 rounded-lg shadow-md">
          <div className="space-y-6 text-gray-700 text-base leading-relaxed mb-10 text-justify">
            <p>
              Caso você tenha interesse em participar de nossos projetos de reflorestamento ou hortas comunitárias,
              ou queira tirar dúvidas, propor parcerias ou enviar sugestões, entre em contato com a gente!
            </p>
            <p className="mt-8">
              Nossa equipe está disponível para ouvir e construir soluções sustentáveis junto com a comunidade.
            </p>
          </div>

          {/* OBJETIVO DO FORMULÁRIO */}
          <div className="mb-10 bg-green-50 border-l-4 border-green-400 p-4 rounded">
            <p className="text-sm text-gray-800">
              Preencha o formulário abaixo para enviar uma mensagem diretamente para a equipe do projeto.
              Assim que possível, responderemos para o e-mail informado. Seja para tirar dúvidas, participar das ações, propor parcerias ou enviar sugestões — sua voz é bem-vinda! 🌱
            </p>
          </div>

          {/* CONTATO E FORMULÁRIO */}
          <div className="grid md:grid-cols-2 gap-10">
            {/* Informações de contato */}
            <div className="space-y-4 text-sm text-gray-700">
              <h2 className="text-xl font-semibold text-green-800 mb-4">Informações de Contato 📬</h2>
              <p><strong>Email:</strong> biomob@biomob.org</p>
              <p><strong>WhatsApp:</strong> (21) 96537-9669</p>
              <p><strong>Endereço:</strong> R. Afrânio Melo Franco, 333 - Quitandinha, Petrópolis - RJ, 25650-000</p>
              <p><strong>Horário de atendimento:</strong> Seg. a Sex., das 9h às 17h</p>
            </div>

            {/* Formulário de contato */}
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="nome" className="block text-sm font-medium text-gray-700">
                  Nome
                </label>
                <input
                  type="text"
                  id="nome"
                  name="nome"
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                  placeholder="Seu nome"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                  placeholder="seuemail@exemplo.com"
                />
              </div>

              <div>
                <label htmlFor="mensagem" className="block text-sm font-medium text-gray-700">
                  Mensagem
                </label>
                <textarea
                  id="mensagem"
                  name="mensagem"
                  rows={4}
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                  placeholder="Digite sua mensagem aqui..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="bg-[rgba(63,180,152,1)] text-white px-6 py-2 rounded hover:brightness-90 transition"
              >
                Enviar
              </button>

              {/* MENSAGEM DE CONFIRMAÇÃO */}
              {confirmationMessage && (
                <div className="mt-4 p-4 bg-green-100 text-green-800 text-center rounded shadow">
                  {confirmationMessage}
                </div>
              )}
            </form>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
