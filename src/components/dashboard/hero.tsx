'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const slides = [
  {
    image:
      'https://www.branco.com.br/content/dam/Branco/Latin%20America/Portuguese-BR/Images/newsroom/Reflorestramento%20-%2002.jpg',
    title: ['REFLORESTAMENTO', 'DA MATA ATLÂNTICA'],
  },
  {
    image:
      'https://diariodonordeste.verdesmares.com.br/image/contentid/policy:1.3560213:1726796979/Reflorestamento-5.jpg?f=default&$p$f=b942989',
    title: ['ÁREAS DEGRADADAS', 'EM RECUPERAÇÃO'],
  },
  {
    image:
      'https://www.canoas.rs.gov.br/wp-content/uploads/2022/12/Reduzidas_01_12_HORTA_COMUNITARIA_AZABEL_Guilherme_Pereira-28.jpg',
    title: ['HORTAS COMUNITÁRIAS', 'AUTOSSUSTENTÁVEIS'],
  },
];

export const Hero: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const handleIndicatorClick = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <section className="relative w-full h-[580px] overflow-hidden shadow-[0px_4px_4px_4px_rgba(0,0,0,0.25)]">
      <div
        className="flex h-full w-full transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div key={index} className="min-w-full h-full relative flex-shrink-0">
            {/* Imagem de fundo */}
            <img
              src={slide.image}
              alt={`Slide ${index + 1}`}
              className="absolute inset-0 w-full h-full object-cover"
            />
            {/* Overlay escura */}
            <div className="absolute inset-0 bg-black opacity-20 z-0" />

            {/* Texto */}
            <div className="relative z-10 h-full flex items-start pt-[98px] pl-[38px]">
              <h1 className="text-white text-[64px] font-extrabold max-md:text-[40px] leading-tight drop-shadow-lg">
                {slide.title.map((line, i) => (
                  <React.Fragment key={i}>
                    {line}
                    {i !== slide.title.length - 1 && <br />}
                  </React.Fragment>
                ))}
              </h1>
            </div>
          </div>
        ))}
      </div>

      {/* Setas de navegação */}
      <div className="absolute top-1/2 left-0 right-0 px-3 flex justify-between items-center -translate-y-1/2 z-20">
        <button onClick={handlePrev} aria-label="Projeto anterior">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/e7262b26dbb34d6d8b6b89dae6d0dd5b/2ee35b9c6b235368f809b4c66bf7116482dfee95?placeholderIfAbsent=true"
            alt="Seta para esquerda"
            className="w-[45px] hover:opacity-80 transition-opacity"
          />
        </button>
        <button onClick={handleNext} aria-label="Próximo projeto">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/e7262b26dbb34d6d8b6b89dae6d0dd5b/f5d2a77ce43abb7463abf0867554e086c399eb45?placeholderIfAbsent=true"
            alt="Seta para direita"
            className="w-[45px] hover:opacity-80 transition-opacity"
          />
        </button>
      </div>

      {/* Indicadores e botão */}
      <div className="absolute bottom-[40px] left-0 right-0 flex flex-col items-center gap-5 z-20">
        <div className="flex gap-4">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => handleIndicatorClick(index)}
              className="w-[14px] h-[14px] rounded-full transition-all duration-300"
              aria-label={`Indicador de slide ${index + 1}`}
              style={{
                backgroundColor:
                  index === currentSlide ? 'white' : 'rgba(255, 255, 255, 0.4)',
              }}
            />
          ))}
        </div>
        <Link href="/login" passHref>
          <button
            className="h-[45px] w-[230px] flex items-center justify-center bg-[#3FB498] text-white text-[19px] font-semibold tracking-wide rounded-full shadow-md whitespace-nowrap hover:bg-[#36a088] transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-[#3FB498]/50"
          >
            Acessar o Painel
          </button>
        </Link>
      </div>
    </section>
  );
};
