'use client';

import React from 'react';
import { LoggedHeader } from '../dashboard/loggedheader';
import { NavigationBar } from '../dashboard/navigationbar';
import { Sidebar } from '../dashboard/sidebar';

import { DashboardContent } from '../dashboard/dashboardcontent'; // Importa o conteúdo principal já pronto

interface DashboardFormProps {
  selectedIndex: number;
  setSelectedIndex: React.Dispatch<React.SetStateAction<number>>;
}

const DashboardForm: React.FC<DashboardFormProps> = ({ selectedIndex, setSelectedIndex }) => {
  const renderContent = () => {
    switch (selectedIndex) {
      case 0:
        return <DashboardContent />;
      case 1:
        return <div>Conteúdo de Áreas</div>;
      case 2:
        return <div>Conteúdo de Mudas</div>;
      case 3:
        return <div>Conteúdo de Hortas comunitárias</div>;
      case 4:
        return <div>Conteúdo de Eventos</div>;
      case 5:
        return <div>Conteúdo de Materiais</div>;
      case 6:
        return <div>Conteúdo de Notícias</div>;
      default:
        return <div>Bem-vindo ao painel</div>;
    }
  };

  return (
    <div className="w-full min-h-screen relative bg-neutral-100">
      <LoggedHeader />
      <NavigationBar />

      <div className="flex relative">
        <Sidebar activeIndex={selectedIndex} onItemClick={setSelectedIndex} />

        <main className="flex-1 p-6 max-md:p-4 max-sm:p-3">{renderContent()}</main>
      </div>
    </div>
  );
};

export default DashboardForm;
