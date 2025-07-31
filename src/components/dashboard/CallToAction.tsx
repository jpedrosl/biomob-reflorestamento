'use client'

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

const slides = [
  {
    image:
      'https://aulaacriativa.com/wp-content/uploads/2024/10/WhatsApp-Image-2024-10-31-at-16.55.10-2.jpeg',
  },
  {
    image:
      'https://aulaacriativa.com/wp-content/uploads/2024/10/WhatsApp-Image-2024-10-31-at-16.55.10.jpeg',
  },
  {
    image:
      'https://aulaacriativa.com/wp-content/uploads/2024/10/WhatsApp-Image-2024-10-31-at-16.55.11-1.jpeg',
  },
];

export const CallToAction: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const router = useRouter();

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

  const handleRedirect = () => {
    router.push('/cadastro');
  };

  return (
    <section className="bg-[rgba(120,227,202,0.49)] w-full mt-[117px] pr-5 rounded-[0px_8px_8px_0px] max-md:max-w-full max-md:mt-10">
      <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
        <div className="w-[62%] max-md:w-full max-md:ml-0 relative min-h-[583px] rounded-[8px_0px_0px_8px] overflow-hidden">
          {slides.map((slide, index) => (
            <img
              key={index}
              src={slide.image}
              alt={`Slide ${index + 1}`}
              className={`absolute inset-0 object-cover w-full h-full transition-opacity duration-700 ease-in-out ${
                index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
              }`}
            />
          ))}

          <div className="absolute top-1/2 left-0 right-0 px-3 flex justify-between items-center -translate-y-1/2 z-20">
            <button onClick={handlePrev} aria-label="Navegar para material anterior">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/e7262b26dbb34d6d8b6b89dae6d0dd5b/2ee35b9c6b235368f809b4c66bf7116482dfee95?placeholderIfAbsent=true"
                alt="Seta para esquerda"
                className="w-[45px] hover:opacity-80 transition-opacity"
              />
            </button>
            <button onClick={handleNext} aria-label="Navegar para próximo material">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/e7262b26dbb34d6d8b6b89dae6d0dd5b/f5d2a77ce43abb7463abf0867554e086c399eb45?placeholderIfAbsent=true"
                alt="Seta para direita"
                className="w-[45px] hover:opacity-80 transition-opacity"
              />
            </button>
          </div>

          <div className="absolute bottom-[40px] left-0 right-0 flex justify-center gap-5 z-20">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => handleIndicatorClick(index)}
                className="w-[21px] h-[21px] rounded-full transition-all duration-300"
                aria-label={`Indicador de material ${index + 1}`}
                style={{
                  backgroundColor: index === currentSlide ? 'white' : 'rgba(255,255,255,0.4)',
                }}
              />
            ))}
          </div>
        </div>

        <div className="w-[38%] ml-5 max-md:w-full max-md:ml-0">
          <div className="flex w-full flex-col self-stretch items-stretch text-white font-bold my-auto max-md:max-w-full max-md:mt-[34px]">
            <header className="flex items-stretch gap-3 text-2xl mt-5">
              <div className="flex w-[63px] shrink-0 h-[3px] my-auto rounded-lg" style={{ backgroundColor: '#004D40' }} />
              <h2 className="text-[#0F5132]">Para você!</h2>
            </header>

            <div className="flex flex-col items-stretch text-xl mt-[19px] pl-[31px] max-md:max-w-full max-md:pl-5">
              <p className="text-[rgba(45,128,108,1)] text-2xl max-md:max-w-full">
                <span className="text-black">
                  Estamos entusiasmados em anunciar que agora você pode acessar
                </span>{' '}
                uma variedade de materiais didáticos diretamente do nosso portal web.
              </p>
              <p className="self-center mt-[20px] max-md:mt-5 text-[#2F2F2F]">
                Esses recursos foram cuidadosamente elaborados para apoiar o
                aprendizado e a conscientização sobre reflorestamento, gestão de
                hortas comunitárias e controle de mudas e sementes. Para baixar os
                materiais, basta realizar seu cadastro no portal e explorar o painel
                na seção de materiais com total liberdade e facilidade. Aproveite essa
                oportunidade!
              </p>

              <button
                onClick={handleRedirect}
                className="mt-6 bg-[rgba(0,124,94,1)] shadow-[4px_4px_4px_4px_rgba(0,0,0,0.07)] w-full px-3 py-4 rounded-lg hover:bg-[rgba(0,104,74,1)] transition-colors"
              >
                Cadastre-se agora!
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
