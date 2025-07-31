'use client';

import React, { useState, useMemo, useEffect, useRef } from 'react';
import { MapSectionHortas } from './mapsection-hortas';
import { useRouter } from 'next/navigation';

interface Horta {
    id: number;
    nome: string;
    endereco: string;
    status: 'Em construção' | 'Planejada' | 'Ativa';
    especies: string[];
    unidadesPlantadas: number;
    unidadesColhidas: number;
    position: [number, number];
}

// Ícones para resumo
const icons = {
    totalHortas: 'https://www.svgrepo.com/show/503602/tomato.svg',
    familias: 'https://www.svgrepo.com/show/483728/family.svg',
    plantadas: 'https://www.svgrepo.com/show/297074/seed.svg',
    colhidas: 'https://www.svgrepo.com/show/267552/harvest.svg',
};

// Ícones para os cards das hortas (ao lado de cada tópico)
const enderecoIconUrl = 'https://www.svgrepo.com/show/535493/map-pin.svg';
const familiasIconUrl = 'https://www.svgrepo.com/show/483728/family.svg';
const especiesIconUrl = 'https://www.svgrepo.com/show/265723/vegetables-salad.svg';

// Dados simulados
const hortasData: Horta[] = [
    {
        id: 1,
        nome: 'Horta Sol Nascente',
        endereco: 'Rua das Palmeiras, 123',
        status: 'Ativa',
        especies: ['Alface', 'Tomate', 'Cenoura'],
        unidadesPlantadas: 200,
        unidadesColhidas: 120,
        position: [-22.3600, -43.1100],
    },
    {
        id: 2,
        nome: 'Horta Vila Nova',
        endereco: 'Av. Central, 456',
        status: 'Planejada',
        especies: ['Couve', 'Beterraba'],
        unidadesPlantadas: 150,
        unidadesColhidas: 0,
        position: [-22.4300, -43.2600],
    },
    {
        id: 3,
        nome: 'Horta Jardim das Oliveiras',
        endereco: 'Rua das Oliveiras, 10',
        status: 'Em construção',
        especies: ['Tomate', 'Pepino', 'Cebolinha'],
        unidadesPlantadas: 180,
        unidadesColhidas: 0,
        position: [-22.4550, -43.1400],
    },
    {
        id: 4,
        nome: 'Horta do Morro Verde',
        endereco: 'Morro Verde, 888',
        status: 'Ativa',
        especies: ['Alface', 'Cenoura', 'Rúcula'],
        unidadesPlantadas: 230,
        unidadesColhidas: 140,
        position: [-22.4900, -43.2100],
    },
    {
        id: 5,
        nome: 'Horta Pôr do Sol',
        endereco: 'Rua do Horizonte, 321',
        status: 'Ativa',
        especies: ['Abobrinha', 'Tomate'],
        unidadesPlantadas: 190,
        unidadesColhidas: 130,
        position: [-22.5100, -43.1800],
    },
    {
        id: 6,
        nome: 'Horta Vale do Cedro',
        endereco: 'Estrada do Cedro, 1010',
        status: 'Planejada',
        especies: ['Couve', 'Alface', 'Cenoura'],
        unidadesPlantadas: 170,
        unidadesColhidas: 0,
        position: [-22.4250, -43.1200],
    },
    {
        id: 7,
        nome: 'Horta do Bosque',
        endereco: 'Alameda das Árvores, 404',
        status: 'Em construção',
        especies: ['Alface', 'Espinafre'],
        unidadesPlantadas: 160,
        unidadesColhidas: 0,
        position: [-22.4500, -43.1600],
    },
    {
        id: 8,
        nome: 'Horta das Flores',
        endereco: 'Rua das Flores, 77',
        status: 'Ativa',
        especies: ['Tomate', 'Manjericão', 'Cebolinha'],
        unidadesPlantadas: 210,
        unidadesColhidas: 160,
        position: [-22.4750, -43.2350],
    },
    {
        id: 9,
        nome: 'Horta do Mirante',
        endereco: 'Rua do Mirante, 55',
        status: 'Ativa',
        especies: ['Cenoura', 'Beterraba'],
        unidadesPlantadas: 140,
        unidadesColhidas: 110,
        position: [-22.3950, -43.1500],
    },
    {
        id: 10,
        nome: 'Horta Verdejante',
        endereco: 'Travessa Verdejante, 12',
        status: 'Planejada',
        especies: ['Alface', 'Rúcula', 'Espinafre'],
        unidadesPlantadas: 130,
        unidadesColhidas: 0,
        position: [-22.4950, -43.1900],
    },
];

// Para número fixo de famílias por horta
const familiasPorHorta: Record<number, number> = {
    1: 10,
    2: 8,
    3: 7,
    4: 12,
    5: 9,
    6: 9,
    7: 7,
    8: 10,
    9: 10,
    10: 10,
};


const allEspecies = [...new Set(hortasData.flatMap(h => h.especies))];
const allHortas = hortasData.map(h => h.nome);
const statusOptions = ['Em construção', 'Planejada', 'Ativa'];

export const HortasContent: React.FC = () => {

    const router = useRouter();

    const [statusFilter, setStatusFilter] = useState('');
    const [hortaFilter, setHortaFilter] = useState('');
    const [especieFilter, setEspecieFilter] = useState<string[]>([]);
    const [searchText, setSearchText] = useState('');
    const [showEspecieDropdown, setShowEspecieDropdown] = useState(false);

    const dropdownRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setShowEspecieDropdown(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const totalPlantadas = hortasData.reduce((sum, h) => sum + h.unidadesPlantadas, 0);
    const totalColhidas = hortasData.reduce((sum, h) => sum + h.unidadesColhidas, 0);

    const toggleEspecie = (value: string) => {
        setEspecieFilter(prev =>
            prev.includes(value) ? prev.filter(e => e !== value) : [...prev, value]
        );
    };

    const filteredHortas = useMemo(() => {
        const text = searchText.toLowerCase();

        return hortasData.filter((horta) => {
            const matchText =
                horta.nome.toLowerCase().includes(text) ||
                horta.especies.some(e => e.toLowerCase().includes(text));

            const matchEspecies = especieFilter.length === 0 ||
                especieFilter.every(f => horta.especies.includes(f));

            return (
                matchText &&
                (statusFilter === '' || horta.status === statusFilter) &&
                (hortaFilter === '' || horta.nome === hortaFilter) &&
                matchEspecies
            );
        });
    }, [statusFilter, hortaFilter, especieFilter, searchText]);

    const especiesLabel = especieFilter.length === 0
        ? 'Todas as Espécies'
        : `${especieFilter.length} selecionada${especieFilter.length > 1 ? 's' : ''}`;

    return (
        <section className="space-y-8">
            {/* Botão no topo */}
            <div className="mb-8">  {/* <- aqui */}
                <button
                    onClick={() => router.push('/cadastro_horta')}
                    className="bg-[rgba(63,180,152,1)] text-white px-4 py-2 rounded flex items-center"
                >
                    Adicionar horta
                    <span className="ml-2 text-xl flex items-center justify-center" style={{ lineHeight: 1 }}>
                        +
                    </span>
                </button>
            </div>


            {/* Resumo */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                    { label: 'Total de Hortas', value: 10, icon: icons.totalHortas },
                    { label: 'Famílias', value: 92, icon: icons.familias },
                    { label: 'Unidades Plantadas', value: totalPlantadas, icon: icons.plantadas },
                    { label: 'Unidades Colhidas Após Germinação', value: totalColhidas, icon: icons.colhidas },
                ].map((item, index) => (
                    <div key={index} className="bg-white rounded-lg shadow p-4 flex flex-col justify-between">
                        <div className="flex items-center justify-between">
                            <h3 className="text-sm font-medium text-gray-700">{item.label}</h3>
                            <img src={item.icon} alt="" className="w-8 h-8" />
                        </div>
                        <p className="text-2xl font-bold mt-2">{item.value}</p>
                    </div>
                ))}
            </div>

            {/* Filtros */}
            <div className="flex flex-wrap gap-4 items-center py-2 relative z-20">
                <select
                    value={statusFilter}
                    onChange={(e) => setStatusFilter(e.target.value)}
                    className="flex-grow min-w-[150px] px-4 py-2 rounded border border-gray-300 focus:ring-2 focus:ring-green-500"
                >
                    <option value="">Todos os Status</option>
                    {statusOptions.map(status => (
                        <option key={status} value={status}>{status}</option>
                    ))}
                </select>

                <select
                    value={hortaFilter}
                    onChange={(e) => setHortaFilter(e.target.value)}
                    className="flex-grow min-w-[150px] px-4 py-2 rounded border border-gray-300 focus:ring-2 focus:ring-green-500"
                >
                    <option value="">Todas as Hortas</option>
                    {allHortas.map(nome => (
                        <option key={nome} value={nome}>{nome}</option>
                    ))}
                </select>

                {/* Dropdown múltiplo de espécies */}
                <div className="relative flex-grow min-w-[150px]" ref={dropdownRef}>
                    <button
                        onClick={() => setShowEspecieDropdown(v => !v)}
                        className="w-full h-[38px] px-4 pr-10 py-2 rounded border border-gray-300 bg-transparent text-base text-gray-900 focus:ring-2 focus:ring-green-500 text-left appearance-none relative"
                    >
                        <span className="truncate">{especiesLabel}</span>

                        {/* Ícone da seta idêntico aos <select> */}
                        <svg
                            className="w-4 h-4 text-gray-500 absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                        </svg>
                    </button>

                    {showEspecieDropdown && (
                        <div className="absolute left-0 top-full mt-1 w-full max-h-48 overflow-y-auto bg-white border border-gray-300 rounded shadow z-50">
                            {allEspecies.map(especie => (
                                <label
                                    key={especie}
                                    className="flex items-center px-3 py-2 cursor-pointer hover:bg-green-50 text-sm text-gray-700 whitespace-nowrap"
                                >
                                    <input
                                        type="checkbox"
                                        checked={especieFilter.includes(especie)}
                                        onChange={() => toggleEspecie(especie)}
                                        className="mr-2"
                                    />
                                    {especie}
                                </label>
                            ))}
                        </div>
                    )}
                </div>


                {/* Filtro de texto */}
                <input
                    type="text"
                    value={searchText}
                    onChange={e => setSearchText(e.target.value)}
                    placeholder="Pesquisar por nome ou espécie..."
                    className="flex-grow min-w-[220px] px-4 py-2 rounded border border-gray-300 focus:ring-2 focus:ring-green-500 text-sm truncate"
                />
            </div>

            {/* Cards das hortas */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredHortas.length > 0 ? (
                    filteredHortas.map(h => (
                        <div key={h.id} className="bg-white rounded-lg shadow p-5 flex flex-col justify-between">
                            <div className="flex items-start justify-between mb-3">
                                <h3 className="text-lg font-semibold flex-1">{h.nome}</h3>
                                <span
                                    style={{
                                        backgroundColor:
                                            h.status === 'Ativa' ? '#10B981' :
                                                h.status === 'Planejada' ? '#F59E0B' :
                                                    '#3B82F6',
                                    }}
                                    className="text-white text-xs font-semibold px-3 py-1 rounded-full whitespace-nowrap"
                                >
                                    {h.status}
                                </span>
                            </div>
                            <div className="flex flex-col gap-3 text-gray-700 text-sm">
                                <div className="flex items-center gap-2">
                                    <img src={enderecoIconUrl} alt="Endereço" className="w-5 h-5" />
                                    <span>{h.endereco}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <img src={familiasIconUrl} alt="Famílias" className="w-5 h-5" />
                                    <span>{familiasPorHorta[h.id]} famílias</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <img src={especiesIconUrl} alt="Espécies" className="w-5 h-5" />
                                    <span>{h.especies.join(', ')}</span>
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <p className="col-span-full text-center text-gray-500">Nenhuma horta encontrada.</p>
                )}
            </div>

            {/* Mapa */}
            <div>
                <MapSectionHortas hortas={filteredHortas} />
            </div>

        </section>
    );
};
