'use client';

import React from 'react';
import { LoggedHeader } from '../dashboard/loggedheader';
import { NavigationBar } from '../dashboard/navigationbar';
import { Footer } from '../dashboard/Footer';

const featuredImageUrl =
  'https://soupetropolis.com/wp-content/uploads/2021/12/WhatsApp-Image-2021-12-03-at-20.40.01.jpeg'; // imagem ilustrativa de mudas

export default function MudasForm() {
  return (
    <div className="w-full bg-gray-50">
      <LoggedHeader />
      <NavigationBar />

      {/* HERO SECTION */}
      <div className="relative w-full h-96 md:h-[500px] mb-14">
        <img
          src={featuredImageUrl}
          alt="Imagem do Projeto de Mudas"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center px-6">
          <h1 className="text-white text-3xl md:text-5xl font-bold text-center drop-shadow-lg">
            Controle de Mudas 🌱
          </h1>
        </div>
      </div>

      {/* CONTEÚDO PRINCIPAL */}
      <main className="max-w-6xl mx-auto px-4 mb-12">
        <section className="bg-white p-8 rounded-lg shadow-md">
          <div className="space-y-6 text-gray-700 text-justify text-base leading-relaxed">
            <p>
              O processo de <strong>produção de mudas</strong> é essencial para garantir o sucesso de qualquer projeto de reflorestamento ou cultivo agrícola.
              Cada fase exige cuidados específicos, desde a germinação até o transplante, assegurando o desenvolvimento saudável das plantas.
            </p>
            <p>
              As mudas bem cuidadas aumentam significativamente as chances de sobrevivência e adaptação das espécies no ambiente definitivo.
              Este processo é uma oportunidade de envolver comunidades com práticas sustentáveis e educativas, contribuindo para a regeneração ambiental e o fortalecimento da biodiversidade.
            </p>
          </div>

          {/* CARDS INFORMATIVOS */}
          <div className="grid md:grid-cols-3 gap-6 mt-14">
            {/* CARD 1 - Germinação */}
            <div className="bg-[#f0fdfb] p-6 rounded-lg shadow">
              <h3 className="text-lg font-semibold text-green-800 mb-3">🌱 Germinação</h3>
              <img
                src="https://manualdojardim.com.br/wp-content/uploads/2020/10/REPOLHO-03-Como-fazer-muda-scaled.jpg"
                alt="Germinação"
                className="w-full h-40 object-cover rounded mb-4"
              />
              <p className="text-sm text-gray-600 mb-2">
                Fase inicial onde a semente começa a brotar. Requer cuidados especiais com temperatura e umidade.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>🌡️ Temperatura: 20~25ºC</li>
                <li>💧 Irrigação: 2x ao dia</li>
                <li>🪴 Substrato: Especial para mudas</li>
              </ul>
            </div>

            {/* CARD 2 - Desenvolvimento */}
            <div className="bg-[#f0fdfb] p-6 rounded-lg shadow">
              <h3 className="text-lg font-semibold text-green-800 mb-3">🌿 Desenvolvimento</h3>
              <img
                src="https://rondonia.ro.gov.br/wp-content/uploads/2019/04/IMG_5377.jpg"
                alt="Desenvolvimento"
                className="w-full h-40 object-cover rounded mb-4"
              />
              <p className="text-sm text-gray-600 mb-2">
                Período de crescimento das primeiras folhas. Momento crucial para o fortalecimento da muda.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>☀️ Luz: 6h diárias</li>
                <li>🧪 Nutrientes: Semanalmente</li>
                <li>🛡️ Proteção: Contra pragas</li>
              </ul>
            </div>

            {/* CARD 3 - Transplante */}
            <div className="bg-[#f0fdfb] p-6 rounded-lg shadow">
              <h3 className="text-lg font-semibold text-green-800 mb-3">🌳 Transplante</h3>
              <img
                src="https://lac.wetlands.org/wp-content/uploads/sites/3/2021/06/mudas-nativas-1.jpg"
                alt="Transplante"
                className="w-full h-40 object-cover rounded mb-4"
              />
              <p className="text-sm text-gray-600 mb-2">
                 Momento de transferir a muda para o local definitivo, exigindo cuidado e atenção no manuseio.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>🌾 Solo: Preparado</li>
                <li>📏 Profundidade: Adequada</li>
                <li>🚿 Rega: Abundante</li>
              </ul>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
