'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

export const LoggedHeader: React.FC = () => {
  const [fontSize, setFontSize] = useState(1);
  const router = useRouter();

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const fontSizeValue = parseFloat(e.target.value);
    setFontSize(fontSizeValue);
  };

  const handleLogout = () => {
    // Aqui vai sua lógica de logout (ex: limpar token/cookie)
    console.log('Logout');
    router.push('/home');
  };

  const handleLogoClick = () => {
    router.push('/home');
  };

  return (
    <header
      className="bg-[rgba(120,227,202,0.49)] w-full px-6 max-md:px-5"
      style={{ fontSize: '1.125rem', height: '72px', boxSizing: 'border-box' }}
    >
      <div className="flex justify-between items-center h-full gap-3">
        {/* Logo */}
        <div
          className="flex items-center h-full min-w-[150px] cursor-pointer"
          onClick={handleLogoClick}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              handleLogoClick();
            }
          }}
        >
          <img
            src="https://cdn.builder.io/api/v1/image/assets/e7262b26dbb34d6d8b6b89dae6d0dd5b/ed537994aaea7dcde4b397de770c50faf3696c13?placeholderIfAbsent=true"
            alt="Logo da organização"
            className="object-contain h-14 max-w-[220px]"
          />
        </div>

        {/* Centro: acessibilidade centralizada */}
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

          {/* Modo escuro */}
          <button
            onClick={() => {
              const isDark = document.body.classList.toggle('dark');
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

          {/* Ícones acessibilidade */}
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

        {/* Lado direito: Olá, visitante + logout */}
        <div className="flex items-center gap-2 ml-8 min-w-[220px] justify-end">
          <div className="flex flex-col items-end text-right">
            <span className="text-black font-semibold text-lg">Olá, Gestor</span>
            <button
              onClick={handleLogout}
              className="text-[#004D40] text-sm hover:underline focus:outline-none"
            >
              Sair/Logout
            </button>
          </div>
          <img
            src="https://www.svgrepo.com/show/334967/user-circle.svg"
            alt="Usuário"
            className="w-[48px] h-[48px] object-contain"
          />
        </div>
      </div>
    </header>
  );
};
