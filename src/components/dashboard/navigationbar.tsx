'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface NavigationProps {
  className?: string;
}

const navigationItems = [
  {
    label: 'Painel',
    icon: 'https://www.svgrepo.com/show/459910/dashboard-alt.svg',
    href: '/dashboard',
  },
  {
    label: 'Sobre o Reflorestamento',
    icon: 'https://www.svgrepo.com/show/481600/forest.svg',
    href: '/reflore_page',
  },
  {
    label: 'Sobre as Hortas comunitárias',
    icon: 'https://www.svgrepo.com/show/503602/tomato.svg',
    href: '/hortas_page',   // <<<<< aqui adicionei o href
  },
  {
    label: 'Sobre as Mudas',
    icon: 'https://www.svgrepo.com/show/352432/seedling.svg',
    href: '/mudas_page',   // se quiser também colocar href aqui
  },
  {
    label: 'Parcerias',
    icon: 'https://www.svgrepo.com/show/453989/partner.svg',
    href: '/parcerias_page', // idem
  },
  {
    label: 'Contatos',
    icon: 'https://www.svgrepo.com/show/422037/contact.svg',
    href: '/contatos_page', // idem
  },
];


export const NavigationBar: React.FC<NavigationProps> = ({ className = '' }) => {
  const pathname = usePathname();

  return (
    <nav className={`bg-[rgba(63,180,152,1)] shadow-md w-full px-6 py-5 ${className}`}>
      <div className="flex justify-center items-center">
        <div className="flex gap-10 flex-wrap justify-center items-center">
          {navigationItems.map((item, index) => {
            const isActive = item.href === pathname;

            const baseClass =
              'flex items-center gap-2 text-white text-lg font-medium tracking-wide transition-all duration-200 ease-in-out';

            const activeClass = isActive
              ? 'underline underline-offset-4'
              : 'hover:underline hover:underline-offset-4';

            const iconClass = isActive ? 'filter brightness-0 invert' : '';

            const content = (
              <>
                <img
                  src={item.icon}
                  alt={`Ícone de ${item.label}`}
                  className={`w-5 h-5 object-contain ${iconClass}`}
                />
                {item.label}
              </>
            );

            return item.href ? (
              <Link
                key={index}
                href={item.href}
                className={`${baseClass} ${activeClass}`}
              >
                {content}
              </Link>
            ) : (
              <button
                key={index}
                className={`${baseClass} ${activeClass}`}
              >
                {content}
              </button>
            );
          })}
        </div>
      </div>
    </nav>
  );
};
