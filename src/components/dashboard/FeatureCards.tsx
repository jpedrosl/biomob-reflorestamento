'use client'

import React from 'react';

interface FeatureCard {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  link: string;
}

const featureCards: FeatureCard[] = [
  {
    id: 'reflorestamento',
    title: 'Reflorestamento da Mata Atlântica',
    description:
      'O projeto visa restaurar áreas degradadas da Mata Atlântica, ajudando a recuperar a biodiversidade e o ecossistema local.',
    imageUrl:
      'https://ronildocampos.com.br/wp-content/uploads/2024/12/plants-2-scaled.jpg',
    link: '/login',
  },
  {
    id: 'hortas',
    title: 'Gestão de hortas comunitárias',
    description:
      'As hortas comunitárias fortalecem o vínculo entre os moradores e incentivam a produção de alimentos saudáveis e sustentáveis.',
    imageUrl:
      'https://www.direcional.com.br/wp-content/uploads/2023/01/horta-comunitaria-2.jpg',
    link: '/login',
  },
  {
    id: 'mudas',
    title: 'Controle de mudas e sementes',
    description:
      'Controle rigoroso das mudas e sementes distribuídas, com um acompanhamento do desenvolvimento das plantas.',
    imageUrl:
      'https://ciclovivo.com.br/wp-content/uploads/2020/06/joshua-lanzarini-FGvQKMP-iXY-unsplash.jpg',
    link: '/login',
  },
];

export const FeatureCards: React.FC = () => {
  return (
    <section className="self-center w-full max-w-[1321px] mt-32 max-md:max-w-full max-md:mt-10">
      <div className="flex gap-5 max-md:flex-col max-md:items-stretch">
        {featureCards.map((card, index) => (
          <article
            key={card.id}
            className="w-[33%] max-md:w-full max-md:ml-0"
            style={{ marginLeft: index > 0 ? '20px' : '0' }}
          >
            <div
              className="bg-white shadow-[4px_4px_4px_4px_rgba(0,0,0,0.06)] text-black font-normal w-full pb-8 rounded-lg max-md:mt-10 hover:shadow-[4px_4px_8px_8px_rgba(0,0,0,0.1)] transition-shadow flex flex-col"
              style={{ minHeight: '520px' }}
            >
              <img
                src={card.imageUrl}
                alt={`Imagem representativa de ${card.title}`}
                className="object-contain w-full rounded-t-lg"
                style={{ height: '200px', objectFit: 'cover' }}
              />
              <div className="flex flex-col flex-grow mt-6 px-8 max-md:px-5">
                <h3 className="text-2xl font-normal">{card.title}</h3>
                <p className="mt-6 flex-grow text-lg">{card.description}</p>
                <a
                  href={card.link}
                  className="text-[rgba(0,124,94,1)] underline mt-6 hover:opacity-80 transition-opacity text-xl"
>
                  Saiba mais
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};
