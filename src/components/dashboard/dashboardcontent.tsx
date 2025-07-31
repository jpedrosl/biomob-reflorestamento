import React from 'react';
import { MapSection } from './mapsection';
import { GrowthChart } from './growthchart';

const statsData = [
  {
    title: 'Áreas',
    value: '10',
    description: 'Áreas de reflorestamento',
    iconUrl: 'https://www.svgrepo.com/show/481600/forest.svg',
  },
  {
    title: 'Mudas',
    value: '20',
    description: 'Mudas plantadas',
    iconUrl: 'https://www.svgrepo.com/show/352432/seedling.svg',
  },
  {
    title: 'Hortas',
    value: '10',
    description: 'Hortas comunitárias',
    iconUrl: 'https://www.svgrepo.com/show/503602/tomato.svg',
  },
  {
    title: 'Eventos',
    value: '3',
    description: 'Eventos este mês',
    iconUrl: 'https://www.svgrepo.com/show/374875/event.svg',
  },
];

interface StatsCardProps {
  title: string;
  value: string | number;
  description: string;
  iconUrl?: string;
}

const StatsCard: React.FC<StatsCardProps> = ({ title, value, description, iconUrl }) => (
  <article
    className="flex flex-col items-center justify-center bg-white rounded-lg shadow-md p-6 gap-2
               w-[220px] h-[260px]
               sm:w-[calc((100%/2)-1rem)] sm:max-w-[300px]
               md:w-[calc((100%/4)-1.5rem)]"
  >
    {iconUrl && <img src={iconUrl} alt={`${title} icon`} className="w-9 h-9 mb-1 object-contain" />}
    <h3 className="text-black text-2xl font-light m-0">{title}</h3>
    <div className="text-black text-3xl font-black m-0">{value}</div>
    <p className="text-black text-lg font-light leading-tight m-0 text-center">{description}</p>
  </article>
);

interface Activity {
  id: string;
  title: string;
  time: string;
  iconUrl: string;
}

const RecentActivities: React.FC = () => {
  const activities: Activity[] = [
    {
      id: '1',
      title: 'Nova muda de ipê amarela plantada',
      time: 'Hoje, 10h30',
      iconUrl: 'https://www.svgrepo.com/show/352432/seedling.svg',
    },
    {
      id: '2',
      title: 'Manunteção realizada na área "Bosque da Luz"',
      time: 'Ontem, 15h45',
      iconUrl: 'https://www.svgrepo.com/show/477715/road-closed.svg',
    },
    {
      id: '3',
      title: 'Novo voluntário registrado',
      time: '2 dias atrás',
      iconUrl: 'https://www.svgrepo.com/show/26769/eco-volunteer.svg',
    },
    {
      id: '4',
      title: 'Área de reflorestamento "Jardim do Mirante" adicionada',
      time: '3 dias atrás',
      iconUrl: 'https://www.svgrepo.com/show/481600/forest.svg',
    },
  ];

  return (
    <section className="w-full max-w-[420px] bg-white shadow-md p-[39px_43px] rounded-lg flex flex-col min-h-[450px]">
      <h2 className="text-[32px] text-black font-normal mb-[27px] text-center">Atividades Recentes</h2>
      <ul className="flex flex-col p-0 m-0 list-none gap-3 flex-1">
        {activities.map(({ id, title, time, iconUrl }) => (
          <li key={id} className="flex items-center gap-3 min-w-0 w-full">
            <img
              src={iconUrl}
              alt={`${title} icon`}
              className="w-[31px] h-[28px] object-contain flex-shrink-0"
            />
            <div className="overflow-hidden break-words flex-1">
              <p className="m-0 font-bold">{title}</p>
              <p className="m-0 text-gray-600 text-sm">{time}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

interface Event {
  id: string;
  title: string;
  location: string;
  date: string;
  month: string;
}

const UpcomingEvents: React.FC = () => {
  const events: Event[] = [
    {
      id: '1',
      title: 'Plantio Comunitário',
      location: 'Vale Verde - 09:00',
      date: '15',
      month: 'Mar',
    },
    {
      id: '2',
      title: 'Workshop de Compostagem',
      location: 'Horta Central - 14:00',
      date: '17',
      month: 'Mar',
    },
    {
      id: '3',
      title: 'Manutenção Coletiva',
      location: 'Serra da Estrela - 08:30',
      date: '19',
      month: 'Mar',
    },
  ];

  return (
    <section className="w-full max-w-[420px] bg-white shadow-md p-[39px_43px] rounded-lg flex flex-col min-h-[450px]">
      <h2 className="text-[32px] text-black font-normal mb-[27px] text-center">Próximos Eventos</h2>
      <ul className="list-none p-0 m-0 flex flex-col gap-5 flex-1">
        {events.map(({ id, title, location, date, month }) => (
          <li key={id} className="flex items-center gap-4 w-full">
            <div
              className="w-[60px] h-[70px] bg-[#e0f2e9] rounded-lg flex flex-col justify-center items-center flex-shrink-0 font-sans text-[#2e7d32] font-extrabold"
            >
              <span className="text-[32px] leading-[32px]">{date}</span>
              <span className="text-[14px] mt-[2px]">{month}</span>
            </div>
            <div className="flex-1">
              <h3 className="m-0 text-[20px] font-medium text-black mb-1">{title}</h3>
              <p className="m-0 text-[16px] text-gray-600">{location}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export const DashboardContent: React.FC = () => {
  return (
    <>
      {/* Stats */}
      <section className="flex flex-wrap justify-center gap-x-8 gap-y-6 mb-8 px-4 sm:px-6 md:px-8">
        {statsData.map((stat, index) => (
          <StatsCard key={index} {...stat} />
        ))}
      </section>

      {/* MapSection + GrowthChart */}
      <section className="flex flex-col gap-10 mb-12 px-4 sm:px-6 md:px-8 max-w-[1200px] mx-auto">
        <MapSection />
        <GrowthChart />
      </section>

      {/* RecentActivities e UpcomingEvents lado a lado */}
      <section className="flex flex-col md:flex-row md:justify-center md:items-stretch md:gap-16 gap-10 px-4 sm:px-6 md:px-8 max-w-[900px] mx-auto">
        <div className="flex-1 max-w-[420px] w-full">
          <RecentActivities />
        </div>
        <div className="flex-1 max-w-[420px] w-full">
          <UpcomingEvents />
        </div>
      </section>
    </>
  );
};
