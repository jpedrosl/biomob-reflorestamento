'use client'

import React from 'react';

interface SidebarProps {
  className?: string;
  activeIndex: number;
  onItemClick: (index: number) => void;
}

interface SidebarItem {
  icon: string;
  label: string;
}

export const Sidebar: React.FC<SidebarProps> = ({ className = '', activeIndex, onItemClick }) => {
  const sidebarItems: SidebarItem[] = [
    {
      icon: 'https://www.svgrepo.com/show/459910/dashboard-alt.svg',
      label: 'Dashboard'
    },
    {
      icon: 'https://www.svgrepo.com/show/481600/forest.svg',
      label: 'Áreas'
    },
    {
      icon: 'https://www.svgrepo.com/show/352432/seedling.svg',
      label: 'Mudas'
    },
    {
      icon: 'https://www.svgrepo.com/show/503602/tomato.svg',
      label: 'Hortas comunitárias'
    },
    {
      icon: 'https://www.svgrepo.com/show/374875/event.svg',
      label: 'Eventos'
    },
    {
      icon: 'https://www.svgrepo.com/show/495249/document-text.svg',
      label: 'Materiais'
    },
    {
      icon: 'https://www.svgrepo.com/show/311019/news.svg',
      label: 'Notícias'
    },
  ];

  return (
    <aside
      className={`bg-white shadow-[0px_5px_4px_rgba(0,0,0,0.38)] w-[229px] pt-[30px] pb-[80px] text-[rgba(0,30,23,1)] max-md:mt-10 max-md:pb-[80px] ${className}`}
    >
      <nav className="flex flex-col">
        {sidebarItems.map((item, index) => {
          const isActive = activeIndex === index;
          return (
            <button
              key={index}
              onClick={() => onItemClick(index)}
              className={`
                flex items-center gap-4 px-5 py-3 text-[15px] text-left transition-all duration-200
                ${isActive
                  ? 'bg-[rgba(213,251,242,0.49)] border-l-4 border-[rgba(0,124,94,1)] font-semibold'
                  : 'hover:bg-gray-100'
                }
                mt-${index === 0 ? '0' : '3'}
              `}
            >
              <img
                src={item.icon}
                alt={`${item.label} ícone`}
                className="w-7 h-7 object-contain"
              />
              <span className="truncate">{item.label}</span>
            </button>
          );
        })}
      </nav>
    </aside>
  );
};
