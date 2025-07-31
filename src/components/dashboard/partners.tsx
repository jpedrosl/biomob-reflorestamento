'use client'

import React from 'react';

interface Partner {
  id: string;
  name: string;
  logoUrl: string;
  website?: string;
}

const partners: Partner[] = [
  {
    id: 'partner1',
    name: 'Parceiro 1',
    logoUrl:
      'https://rondonia.fiocruz.br/wp-content/uploads/2024/12/marcafiocruz_horizontal_POSITIVA_24052024-scaled-1.jpg',
    website: '#',
  },
  {
    id: 'partner2',
    name: 'Parceiro 2',
    logoUrl:
      'https://cdn.builder.io/api/v1/image/assets/e7262b26dbb34d6d8b6b89dae6d0dd5b/1db2fb2ab3581a4a015a1efa33f9cd5170671a2a?placeholderIfAbsent=true',
    website: '#',
  },
  {
    id: 'partner3',
    name: 'Parceiro 3',
    logoUrl:
      'https://institucional.ufrrj.br/ccs/files/2019/06/rural_logo03.png',
    website: '#',
  },
];

export const Partners: React.FC = () => {
  return (
    <section className="bg-[rgba(63,180,152,1)] shadow-[4px_4px_4px_4px_rgba(0,0,0,0.07)] flex flex-col items-center mt-[90px] pt-16 pb-[38px] px-20 max-md:max-w-full max-md:mt-10 max-md:px-5">
      <div className="w-full max-w-[950px] mx-auto flex flex-col items-center">
        <header className="text-white text-5xl font-bold max-md:max-w-full max-md:text-[40px] text-center">
          Alguns de nossos parceiros
        </header>
        <div className="mt-[57px] max-md:max-w-full max-md:mt-10 w-full">
          <div className="flex justify-center items-center gap-40 max-md:flex-col max-md:items-stretch w-full">
            {partners.map((partner, index) => (
              <div
                key={partner.id}
                className="flex justify-center max-md:w-full"
              >
                <a
                  href={partner.website}
                  className="block hover:opacity-80 transition-opacity"
                  aria-label={`Visitar site do ${partner.name}`}
                >
                  <img
                    src={partner.logoUrl}
                    alt={`Logo do ${partner.name}`}
                    className={`object-contain shrink-0 max-w-full max-md:mt-10 rounded-[20px] shadow-[4px_4px_4px_4px_rgba(0,0,0,0.07)] ${partner.id === 'partner1' ? 'w-[219px] aspect-[1.43] mt-[5px]' :
                        partner.id === 'partner2' ? 'w-[175px] aspect-[1] rounded-lg' :
                          'w-[143px] aspect-[0.82] mt-[5px] bg-white p-2'
                      }`}
                  />
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
