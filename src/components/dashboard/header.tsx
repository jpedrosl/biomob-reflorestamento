'use client';

import React, { useState } from 'react';
import Link from 'next/link';

interface HeaderProps {
  className?: string;
  onFontSizeChange?: (size: 'small' | 'medium' | 'large') => void;
}

export const Header: React.FC<HeaderProps> = ({ className = '' }) => {
  const [fontSize, setFontSize] = useState(1);

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const fontSizeValue = parseFloat(e.target.value);
    setFontSize(fontSizeValue);
  };

  return (
    <header
      className={`bg-[rgba(120,227,202,0.49)] w-full px-6 max-md:px-5 ${className}`}
      style={{ fontSize: '1.125rem', height: '72px', boxSizing: 'border-box' }}
    >
      <div className="flex justify-between items-center h-full gap-3">
        {/* Logo */}
        <div className="flex items-center h-full min-w-[150px]">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/e7262b26dbb34d6d8b6b89dae6d0dd5b/ed537994aaea7dcde4b397de770c50faf3696c13?placeholderIfAbsent=true"
            alt="Logo da organização"
            className="object-contain h-14 max-w-[220px]"
          />
        </div>

        {/* Centro: Acessibilidade + ícones */}
        <div className="flex items-center gap-4 mx-auto">
          {/* Texto acessibilidade */}
          <span
            className="text-black font-bold whitespace-nowrap flex-shrink-0 max-w-[150px] overflow-hidden text-ellipsis tracking-wide"
            style={{
              fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
              fontSize: '1.20rem',
              paddingLeft: '4px',
              paddingRight: '4px',
              marginRight: '-6px',
              textShadow: '0 0 2px rgba(0,0,0,0.1)',
            }}
          >
            Acessibilidade
          </span>

          {/* Modo Escuro */}
          <button
            onClick={() => {
              const body = document.body;
              const isDark = body.classList.toggle('dark');
              localStorage.setItem('theme', isDark ? 'dark' : 'light');
            }}
            className="w-12 h-12 bg-transparent flex items-center justify-center rounded focus:outline-none shrink-0"
          >
            <img
              src="https://www.svgrepo.com/show/445683/dark-mode.svg"
              alt="Modo Escuro"
              className="w-10 h-10 object-contain"
            />
          </button>

          {/* Slider de fonte */}
          <div className="flex flex-col items-center gap-0.5 shrink-0 min-w-[110px]">
            <label htmlFor="fontSize" className="text-base text-black whitespace-nowrap">
              Tamanho da fonte
            </label>
            <input
              id="fontSize"
              type="range"
              min="0.8"
              max="2"
              step="0.1"
              value={fontSize}
              onChange={handleSliderChange}
              aria-label="Controle de tamanho da fonte"
              className="w-full cursor-pointer"
              style={{ height: '24px' }}
            />
          </div>

          {/* Ícones */}
          <nav className="flex items-center gap-4 whitespace-nowrap text-black text-lg shrink-0">
            <button aria-label="Libras" className="flex items-center w-12 h-12">
              <img
                src="https://www.svgrepo.com/show/352458/sign-language.svg"
                alt="Libras"
                className="w-10 h-10 object-contain"
              />
            </button>

            <button aria-label="Narrador" className="flex items-center w-12 h-12">
              <img
                src="https://www.svgrepo.com/show/341308/voice-activate.svg"
                alt="Narrador"
                className="w-10 h-10 object-contain"
              />
            </button>

            <button aria-label="Tradutor" className="flex items-center w-12 h-12">
              <img
                src="https://www.svgrepo.com/show/112579/google-translate.svg"
                alt="Tradutor"
                className="w-10 h-10 object-contain"
              />
            </button>
          </nav>
        </div>

        {/* Entrar e Criar conta */}
        <div className="flex items-center gap-8 ml-8">
          <Link href="/login" passHref>
            <span
              className="text-black cursor-pointer hover:text-gray-600 transition-colors duration-200 select-none text-lg"
              role="button"
              tabIndex={0}
              onKeyDown={e => {
                if (e.key === 'Enter') window.location.href = '/login';
              }}
            >
              Entrar
            </span>
          </Link>

          <Link href="/cadastro" passHref>
            <button
              className="bg-[rgba(63,180,152,1)] text-white font-semibold px-6 rounded hover:bg-[rgba(63,180,152,0.85)] transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[rgba(63,180,152,0.6)] text-lg flex items-center justify-center"
              style={{ height: '42px', lineHeight: '1' }}
            >
              Criar uma conta
            </button>
          </Link>
        </div>
      </div>
    </header>
  );
};
