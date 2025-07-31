'use client';

import React, { useState } from 'react';
import Calendar, { CalendarProps } from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { useRouter } from 'next/navigation';

interface Event {
    id: string;
    title: string;
    location: string;
    date: string;
    month: string;
}

// Função para capitalizar mês
function capitalizeFirstLetter(str: string) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

// Ícones para os cards
const icons = {
    totalEvents: 'https://www.svgrepo.com/show/374875/event.svg',
    participants: 'https://www.svgrepo.com/show/391873/group.svg',
    nextEvent: 'https://www.svgrepo.com/show/459184/calendar-alert-4.svg',
    workshops: 'https://www.svgrepo.com/show/448913/workshop.svg',
};

export const EventsContent: React.FC = () => {
    const router = useRouter();
    const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());

    const events: Event[] = [
        {
            id: '1',
            title: 'Plantio Comunitário',
            location: 'Vale Verde - 09:00',
            date: '15',
            month: 'Jul',
        },
        {
            id: '2',
            title: 'Workshop de Compostagem',
            location: 'Horta Central - 14:00',
            date: '17',
            month: 'Jul',
        },
        {
            id: '3',
            title: 'Manutenção Coletiva',
            location: 'Serra da Estrela - 08:30',
            date: '19',
            month: 'Jul',
        },
    ];

    const statsCards = [
        {
            label: 'Qtd. de Eventos',
            value: 15,
            text: 'Eventos nesse mês',
            icon: icons.totalEvents,
        },
        {
            label: 'Participantes',
            value: 250,
            text: 'Pessoas Envolvidas',
            icon: icons.participants,
        },
        {
            label: 'Próximo Evento',
            value: 2,
            text: 'Dias restantes',
            icon: icons.nextEvent,
        },
        {
            label: 'Workshops',
            value: 5,
            text: 'Neste mês',
            icon: icons.workshops,
        },
    ];

    const handleDateChange: CalendarProps['onChange'] = (value) => {
        if (value instanceof Date) {
            setSelectedDate(value);
        }
    };

    const formatMonthYear = (locale: string, date: Date) => {
        const month = capitalizeFirstLetter(
            date.toLocaleDateString(locale, { month: 'long' })
        );
        const year = date.getFullYear();
        return `${month} ${year}`;
    };

    return (
        <>
            <style>{`
                .react-calendar {
                    width: 100%;
                    border: none;
                    font-family: 'Inter', sans-serif;
                    border-radius: 1rem;
                    overflow: hidden;
                    background-color: #f0fdf4;
                    color: #1b4332;
                    box-shadow: 0 4px 8px rgba(0,0,0,0.1);
                    padding: 8px;
                }
                .react-calendar__tile {
                    padding: 10px 6px;
                    border-radius: 12px;
                    transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out;
                    text-align: center;
                    line-height: 1.4;
                    font-weight: 600;
                    color: #14532d;
                }
                .react-calendar__tile:enabled:hover,
                .react-calendar__tile--now {
                    background-color: rgba(63,180,152,0.3);
                    color: rgba(0,85,70,1);
                }
                .react-calendar__tile--active {
                    background-color: rgba(63,180,152,0.85);
                    color: white;
                    font-weight: 700;
                }
                .react-calendar__month-view__weekdays {
                    text-align: center;
                    text-transform: uppercase;
                    font-weight: 600;
                    color: #166534;
                    font-size: 0.75rem;
                    padding-bottom: 4px;
                    border-bottom: 1px solid #bbf7d0;
                    margin-bottom: 8px;
                }
                .react-calendar__navigation button {
                    border-radius: 9999px;
                    background: rgba(63,180,152,0.85);
                    border: none;
                    color: white;
                    padding: 6px 12px;
                    margin: 0 4px;
                    font-weight: 600;
                    cursor: pointer;
                    transition: background-color 0.2s ease-in-out;
                }
                .react-calendar__navigation button:hover {
                    background: rgba(63,180,152,1);
                }
                .react-calendar__navigation button:disabled {
                    background: rgba(63,180,152,0.4);
                    cursor: not-allowed;
                    color: rgba(255,255,255,0.6);
                }
            `}</style>

            <section className="max-w-[1000px] mx-auto px-4 sm:px-6 md:px-8 pt-0 pb-4 flex flex-col gap-7">

                {/* Agrupando botão e cards para controlar o gap entre eles */}
                <div className="flex flex-col gap-4">
                    <div className="mt-0 mb-3">
                        <button
                            onClick={() => router.push('/cadastro_event')}
                            className="bg-[rgba(63,180,152,1)] text-white px-4 py-2 rounded flex items-center"
                        >
                            Adicionar evento
                            <span className="ml-2 text-xl flex items-center justify-center" style={{ lineHeight: 1 }}>
                                +
                            </span>
                        </button>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {statsCards.map(({ label, value, text, icon }, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-lg shadow p-6 flex flex-col justify-between"
                            >
                                <div className="flex items-center justify-between mb-2">
                                    <h3 className="text-base font-medium text-gray-700">{label}</h3>
                                    <img src={icon} alt="" className="w-8 h-8" />
                                </div>
                                <p className="text-3xl font-bold mb-1">{value}</p>
                                <p className="text-sm text-gray-500">{text}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Próximos Eventos e Calendário lado a lado */}
                <div className="flex flex-row justify-center gap-10">
                    {/* Próximos Eventos */}
                    <div className="w-full max-w-[400px] bg-white shadow-md p-[39px_43px] rounded-lg min-h-[450px]">
                        <h2 className="text-[32px] text-black font-normal mb-[27px] text-center">
                            Próximos Eventos
                        </h2>
                        <ul className="list-none p-0 m-0 flex flex-col gap-5">
                            {events.map(({ id, title, location, date, month }) => (
                                <li key={id} className="flex items-center gap-4 w-full">
                                    <div className="w-[60px] h-[70px] bg-[#e0f2e9] rounded-lg flex flex-col justify-center items-center flex-shrink-0 font-sans text-[#2e7d32] font-extrabold">
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
                    </div>

                    {/* Calendário */}
                    <div className="w-full max-w-[450px] bg-white shadow-md p-6 rounded-lg flex flex-col items-center">
                        <h2 className="text-[32px] text-black font-normal mb-4">Calendário</h2>
                        <Calendar
                            onChange={handleDateChange}
                            value={selectedDate}
                            calendarType="iso8601"
                            locale="pt-BR"
                            formatMonthYear={formatMonthYear}
                        />
                    </div>
                </div>
            </section>
        </>
    );
};
