'use client';

import React, { useState } from 'react';
import { LoggedHeader } from '../../components/dashboard/loggedheader';
import { NavigationBar } from '../../components/dashboard/navigationbar';
import { Sidebar } from '../../components/dashboard/sidebar';
import { AreasContent } from '../../components/dashboard/areascontent';
import { MudasContent } from '../../components/dashboard/mudascontent';
import { DashboardContent } from '../../components/dashboard/dashboardcontent';
import { HortasContent } from '../../components/dashboard/hortascontent'
import { EventsContent } from '../../components/dashboard/eventscontent';
import { MateriaisContent } from '../../components/dashboard/materiaiscontent';
import { NoticiasContent } from '../../components/dashboard/noticiascontent';

// Componentes das outras abas


// Mapa dos conteúdos para sidebar
const contentMap: Record<number, React.ReactNode> = {
  0: <DashboardContent />,
  1: <AreasContent />,
  2: <MudasContent />,
  3: <HortasContent />,
  4: <EventsContent />,
  5: <MateriaisContent />,
  6: <NoticiasContent />,
};

const DashboardPage: React.FC = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <div className="w-full min-h-screen relative bg-neutral-100">
      <LoggedHeader />
      <NavigationBar />

      <div className="flex relative">
        <Sidebar activeIndex={selectedIndex} onItemClick={setSelectedIndex} />

        <main className="flex-1 p-6 max-md:p-4 max-sm:p-3">
          {contentMap[selectedIndex] ?? <div>Bem-vindo ao painel</div>}
        </main>
      </div>
    </div>
  );
};

export default DashboardPage;
