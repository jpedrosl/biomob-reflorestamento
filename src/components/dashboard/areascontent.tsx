'use client';

import React, { useState, useMemo } from 'react';
import { MapSectionAreas } from './mapsection-areas';
import { useRouter } from 'next/navigation';

type AreaStatus = 'Em andamento' | 'Planejada' | 'Concluída';

interface Area {
    id: number;
    nome: string;
    status: AreaStatus;
    endereco: string;
    enderecoIconUrl: string;
    espaco: string;
    espacoIconUrl: string;
    mudasPlantadas: number;
    mudasIconUrl: string;
    position: [number, number];
}

const enderecoIconUrl = 'https://www.svgrepo.com/show/535493/map-pin.svg';
const espacoIconUrl = 'https://www.svgrepo.com/show/333654/area.svg';
const mudasIconUrl = 'https://www.svgrepo.com/show/352432/seedling.svg';

const areasData: Area[] = [
    {
        id: 1,
        nome: 'Reflorestamento Cedro Alto',
        status: 'Em andamento',
        endereco: 'Rua das Flores, 123',
        enderecoIconUrl,
        espaco: '1500 m²',
        espacoIconUrl,
        mudasPlantadas: 350,
        mudasIconUrl,
        position: [-22.4200, -43.2100],
    },
    {
        id: 2,
        nome: 'Mata Serra Branca',
        status: 'Planejada',
        endereco: 'Av. das Montanhas, 45',
        enderecoIconUrl,
        espaco: '3000 m²',
        espacoIconUrl,
        mudasPlantadas: 0,
        mudasIconUrl,
        position: [-22.4750, -43.2700],
    },
    {
        id: 3,
        nome: 'Bosque da Luz',
        status: 'Concluída',
        endereco: 'Praça Central, 8',
        enderecoIconUrl,
        espaco: '1000 m²',
        espacoIconUrl,
        mudasPlantadas: 200,
        mudasIconUrl,
        position: [-22.4900, -43.1200],
    },
    {
        id: 4,
        nome: 'Reserva Morro Claro',
        status: 'Em andamento',
        endereco: 'Rua das Palmeiras, 77',
        enderecoIconUrl,
        espaco: '1200 m²',
        espacoIconUrl,
        mudasPlantadas: 250,
        mudasIconUrl,
        position: [-22.3500, -43.1600],
    },
    {
        id: 5,
        nome: 'Floresta da Pedra',
        status: 'Planejada',
        endereco: 'Estrada da Serra, 150',
        enderecoIconUrl,
        espaco: '2800 m²',
        espacoIconUrl,
        mudasPlantadas: 0,
        mudasIconUrl,
        position: [-22.4400, -43.1000],
    },
    {
        id: 6,
        nome: 'Vale dos Pinheiros',
        status: 'Concluída',
        endereco: 'Vale Verde, 22',
        enderecoIconUrl,
        espaco: '1300 m²',
        espacoIconUrl,
        mudasPlantadas: 180,
        mudasIconUrl,
        position: [-22.4000, -43.1700],
    },
    {
        id: 7,
        nome: 'Jardim do Mirante',
        status: 'Em andamento',
        endereco: 'Mirante Azul, 55',
        enderecoIconUrl,
        espaco: '1400 m²',
        espacoIconUrl,
        mudasPlantadas: 300,
        mudasIconUrl,
        position: [-22.4700, -43.1300],
    },
    {
        id: 8,
        nome: 'Refúgio das Bromélias',
        status: 'Planejada',
        endereco: 'Rua das Bromélias, 11',
        enderecoIconUrl,
        espaco: '1700 m²',
        espacoIconUrl,
        mudasPlantadas: 0,
        mudasIconUrl,
        position: [-22.4350, -43.2100],
    },
    {
        id: 9,
        nome: 'Bosque das Águas Claras',
        status: 'Concluída',
        endereco: 'Águas Claras, 90',
        enderecoIconUrl,
        espaco: '1600 m²',
        espacoIconUrl,
        mudasPlantadas: 220,
        mudasIconUrl,
        position: [-22.5100, -43.1800],
    },
    {
        id: 10,
        nome: 'Mata do Alto',
        status: 'Em andamento',
        endereco: 'Alto da Serra, 37',
        enderecoIconUrl,
        espaco: '1900 m²',
        espacoIconUrl,
        mudasPlantadas: 320,
        mudasIconUrl,
        position: [-22.4550, -43.1400],
    },
];

const statusOptions: AreaStatus[] = ['Em andamento', 'Planejada', 'Concluída'];

const getStatusColor = (status: AreaStatus): string => {
    switch (status) {
        case 'Concluída':
            return '#10B981';
        case 'Planejada':
            return '#F59E0B';
        case 'Em andamento':
        default:
            return '#3B82F6';
    }
};

export const AreasContent: React.FC = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [filterStatus, setFilterStatus] = useState<AreaStatus | 'Todos'>('Todos');
    const router = useRouter();

    const filteredAreas = useMemo(() => {
        return areasData.filter(area => {
            const matchesName = area.nome.toLowerCase().includes(searchTerm.toLowerCase());
            const matchesStatus = filterStatus === 'Todos' || area.status === filterStatus;
            return matchesName && matchesStatus;
        });
    }, [searchTerm, filterStatus]);

    const somaReal = useMemo(() => {
        return filteredAreas.reduce((acc, area) => acc + area.mudasPlantadas, 0);
    }, [filteredAreas]);

    const mudasDistribuidas = useMemo(() => {
        if (somaReal === 0) return filteredAreas.map(() => 0);

        const distribuicao = filteredAreas.map(area => (area.mudasPlantadas / somaReal) * 20);
        const distribuicaoArredondada = distribuicao.map(val => Math.round(val));
        const totalDistribuido = distribuicaoArredondada.reduce((acc, val) => acc + val, 0);
        const diferenca = 20 - totalDistribuido;

        if (diferenca !== 0 && distribuicaoArredondada.length > 0) {
            distribuicaoArredondada[0] += diferenca;
            if (distribuicaoArredondada[0] < 0) distribuicaoArredondada[0] = 0;
        }
        return distribuicaoArredondada;
    }, [filteredAreas, somaReal]);

    return (
        <section>
            {/* Botão e filtros */}
            <div className="mb-6 flex flex-col gap-6">
                <div className="flex justify-start">
                    <button
                        onClick={() => router.push('/cadastro_reflore')}
                        className="bg-[rgba(63,180,152,1)] text-white px-4 py-2 rounded flex items-center"
                    >
                        Adicionar área
                        <span className="ml-2 text-xl leading-none">+</span>
                    </button>
                </div>
                <div className="flex flex-col md:flex-row gap-4 items-center">
                    <input
                        type="text"
                        placeholder="Buscar área pelo nome..."
                        value={searchTerm}
                        onChange={e => setSearchTerm(e.target.value)}
                        className="flex-1 px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
                    />
                    <select
                        value={filterStatus}
                        onChange={e => setFilterStatus(e.target.value as AreaStatus | 'Todos')}
                        className="px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 max-w-xs"
                    >
                        <option value="Todos">Todas as situações</option>
                        {statusOptions.map(status => (
                            <option key={status} value={status}>
                                {status}
                            </option>
                        ))}
                    </select>
                </div>
            </div>

            {/* Cards de Áreas */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredAreas.length > 0 ? (
                    filteredAreas.map((area, index) => (
                        <div key={area.id} className="bg-white rounded-lg shadow p-5 flex flex-col justify-between">
                            <div className="flex items-start gap-3 mb-4">
                                <h3 className="text-lg font-semibold flex-1">{area.nome}</h3>
                                <span
                                    style={{ backgroundColor: getStatusColor(area.status) }}
                                    className="text-white text-xs font-semibold px-3 py-1 rounded-full whitespace-nowrap"
                                >
                                    {area.status}
                                </span>
                            </div>

                            <div className="flex flex-col gap-3 text-gray-700 text-sm">
                                <div className="flex items-center gap-2">
                                    <img src={area.enderecoIconUrl} alt="Endereço" className="w-5 h-5" />
                                    <span>{area.endereco}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <img src={area.espacoIconUrl} alt="Espaço" className="w-5 h-5" />
                                    <span>{area.espaco}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <img src={area.mudasIconUrl} alt="Mudas" className="w-5 h-5" />
                                    <span>{mudasDistribuidas[index]} mudas plantadas</span>
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <p className="col-span-full text-center text-gray-500">Nenhuma área encontrada.</p>
                )}
            </div>

            {/* Mapa com Áreas Filtradas */}
            <div className="pb-5 mt-10">
                <MapSectionAreas areas={filteredAreas} />
            </div>
        </section>
    );
};
