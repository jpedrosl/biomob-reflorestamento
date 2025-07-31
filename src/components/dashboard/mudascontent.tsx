'use client';

import React, { useState, useMemo } from 'react';
import { useRouter } from 'next/navigation';

interface Muda {
    id: number;
    nome: string;
    alturaCm: number;
    area: string;
    especie: string;
    dataPlantio: string;
    status: 'Saudável' | 'Sob Observação' | 'Estado Crítico';
}

const mudasData: Muda[] = [
    { id: 1, nome: 'Ipê Amarelo', alturaCm: 120, area: 'Reflorestamento Cedro Alto', especie: 'Tabebuia', dataPlantio: '2024-01-10', status: 'Saudável' },
    { id: 2, nome: 'Jacarandá', alturaCm: 100, area: 'Reflorestamento Cedro Alto', especie: 'Jacaranda', dataPlantio: '2024-01-15', status: 'Sob Observação' },
    { id: 3, nome: 'Pau-Brasil', alturaCm: 80, area: 'Mata Serra Branca', especie: 'Paubrasilia', dataPlantio: '2024-02-05', status: 'Saudável' },
    { id: 4, nome: 'Ipê Roxo', alturaCm: 90, area: 'Bosque da Luz', especie: 'Tabebuia', dataPlantio: '2024-02-10', status: 'Estado Crítico' },
    { id: 5, nome: 'Jatobá', alturaCm: 110, area: 'Vale dos Pinheiros', especie: 'Hymenaea', dataPlantio: '2024-03-01', status: 'Sob Observação' },
    { id: 6, nome: 'Angico', alturaCm: 130, area: 'Floresta da Pedra', especie: 'Anadenanthera', dataPlantio: '2024-03-15', status: 'Saudável' },
    { id: 7, nome: 'Canafístula', alturaCm: 70, area: 'Reserva Morro Claro', especie: 'Peltophorum', dataPlantio: '2024-04-10', status: 'Saudável' },
    { id: 8, nome: 'Guapuruvu', alturaCm: 95, area: 'Jardim do Mirante', especie: 'Schizolobium', dataPlantio: '2024-04-20', status: 'Estado Crítico' },
    { id: 9, nome: 'Ipê Branco', alturaCm: 115, area: 'Refúgio das Bromélias', especie: 'Tabebuia', dataPlantio: '2024-05-01', status: 'Saudável' },
    { id: 10, nome: 'Copaíba', alturaCm: 105, area: 'Bosque das Águas Claras', especie: 'Copaifera', dataPlantio: '2024-05-10', status: 'Saudável' },
    { id: 11, nome: 'Mutamba', alturaCm: 85, area: 'Mata do Alto', especie: 'Guazuma', dataPlantio: '2024-06-05', status: 'Sob Observação' },
    { id: 12, nome: 'Jequitibá', alturaCm: 140, area: 'Vale dos Pinheiros', especie: 'Cariniana', dataPlantio: '2024-06-20', status: 'Saudável' },
    { id: 13, nome: 'Ingá', alturaCm: 90, area: 'Reserva Morro Claro', especie: 'Inga', dataPlantio: '2024-06-25', status: 'Saudável' },
    { id: 14, nome: 'Pitanga', alturaCm: 60, area: 'Jardim do Mirante', especie: 'Eugenia', dataPlantio: '2024-06-28', status: 'Saudável' },
    { id: 15, nome: 'Cajá-Manga', alturaCm: 100, area: 'Mata Serra Branca', especie: 'Spondias', dataPlantio: '2024-07-01', status: 'Sob Observação' },
    { id: 16, nome: 'Embaúba', alturaCm: 70, area: 'Floresta da Pedra', especie: 'Cecropia', dataPlantio: '2024-07-03', status: 'Estado Crítico' },
    { id: 17, nome: 'Maracujá', alturaCm: 55, area: 'Bosque da Luz', especie: 'Passiflora', dataPlantio: '2024-07-04', status: 'Saudável' },
    { id: 18, nome: 'Aroeira', alturaCm: 95, area: 'Refúgio das Bromélias', especie: 'Schinus', dataPlantio: '2024-07-06', status: 'Saudável' },
    { id: 19, nome: 'Urucum', alturaCm: 85, area: 'Mata do Alto', especie: 'Bixa', dataPlantio: '2024-07-07', status: 'Saudável' },
    { id: 20, nome: 'Pitangueira', alturaCm: 90, area: 'Bosque das Águas Claras', especie: 'Eugenia', dataPlantio: '2024-07-10', status: 'Saudável' },
];

const icons = {
    total: 'https://www.svgrepo.com/show/352432/seedling.svg',
    saudaveis: 'https://www.svgrepo.com/show/507332/heart.svg',
    observacao: 'https://www.svgrepo.com/show/532493/eye.svg',
    critico: 'https://www.svgrepo.com/show/479064/caution-mark.svg',
};

const allAreas = [...new Set(mudasData.map(m => m.area))];
const allEspecies = [...new Set(mudasData.map(m => m.especie))];
const statusOptions = ['Saudável', 'Sob Observação', 'Estado Crítico'];

const getStatusColor = (status: Muda['status']) => {
    switch (status) {
        case 'Saudável': return '#10B981';
        case 'Sob Observação': return '#F59E0B';
        case 'Estado Crítico': return '#EF4444';
        default: return '#3B82F6';
    }
};

export const MudasContent: React.FC = () => {
    const router = useRouter();

    const [statusFilter, setStatusFilter] = useState('');
    const [areaFilter, setAreaFilter] = useState('');
    const [especieFilter, setEspecieFilter] = useState('');
    const [searchText, setSearchText] = useState('');

    const total = mudasData.length;
    const saudaveis = mudasData.filter(m => m.status === 'Saudável').length;
    const observacao = mudasData.filter(m => m.status === 'Sob Observação').length;
    const criticas = mudasData.filter(m => m.status === 'Estado Crítico').length;

    const filteredMudas = useMemo(() => {
        const text = searchText.toLowerCase();

        return mudasData.filter((muda) => {
            const matchText =
                muda.nome.toLowerCase().includes(text) ||
                muda.especie.toLowerCase().includes(text) ||
                muda.area.toLowerCase().includes(text);

            return (
                matchText &&
                (statusFilter === '' || muda.status === statusFilter) &&
                (areaFilter === '' || muda.area === areaFilter) &&
                (especieFilter === '' || muda.especie === especieFilter)
            );
        });
    }, [statusFilter, areaFilter, especieFilter, searchText]);

    return (
        <section className="space-y-8">
            {/* Botão no topo */}
            <div className="mb-6">
                <button
                    onClick={() => router.push('/cadastro_muda')}
                    className="bg-[rgba(63,180,152,1)] text-white px-4 py-2 rounded flex items-center"
                >
                    Adicionar muda
                    <span className="ml-2 text-xl leading-none">+</span>
                </button>
            </div>


            {/* Resumo */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                    { label: 'Total de Mudas', value: total, text: 'Mudas plantadas', icon: icons.total },
                    { label: 'Saudáveis', value: saudaveis, text: `${((saudaveis / total) * 100).toFixed(0)}% do total`, icon: icons.saudaveis },
                    { label: 'Sob Observação', value: observacao, text: `${((observacao / total) * 100).toFixed(0)}% do total`, icon: icons.observacao },
                    { label: 'Estado Crítico', value: criticas, text: `${((criticas / total) * 100).toFixed(0)}% do total`, icon: icons.critico },
                ].map((item, index) => (
                    <div key={index} className="bg-white rounded-lg shadow p-4 flex flex-col justify-between">
                        <div className="flex items-center justify-between">
                            <h3 className="text-sm font-medium text-gray-700">{item.label}</h3>
                            <img src={item.icon} alt="" className="w-8 h-8" />
                        </div>
                        <p className="text-2xl font-bold mt-2">{item.value}</p>
                        <p className="text-xs text-gray-500">{item.text}</p>
                    </div>
                ))}
            </div>

            {/* Filtros */}
            <div className="flex flex-col md:flex-row gap-4 items-center">
                <select
                    value={statusFilter}
                    onChange={(e) => setStatusFilter(e.target.value)}
                    className="px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 w-full md:max-w-xs"
                >
                    <option value="">Todos os Status</option>
                    {statusOptions.map((status) => (
                        <option key={status} value={status}>{status}</option>
                    ))}
                </select>

                <select
                    value={areaFilter}
                    onChange={(e) => setAreaFilter(e.target.value)}
                    className="px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 w-full md:max-w-xs"
                >
                    <option value="">Todas as Áreas</option>
                    {allAreas.map((area) => (
                        <option key={area} value={area}>{area}</option>
                    ))}
                </select>

                <select
                    value={especieFilter}
                    onChange={(e) => setEspecieFilter(e.target.value)}
                    className="px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 w-full md:max-w-xs"
                >
                    <option value="">Todas as Espécies</option>
                    {allEspecies.map((especie) => (
                        <option key={especie} value={especie}>{especie}</option>
                    ))}
                </select>
            </div>
            <input
                type="text"
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
                placeholder="Pesquisar por nome, espécie ou área..."
                className="px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 w-full md:max-w-xs"
            />

            {/* Lista de Mudas */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredMudas.length > 0 ? (
                    filteredMudas.map((muda) => (
                        <div key={muda.id} className="bg-white rounded-lg shadow p-5 flex flex-col justify-between max-w-md">
                            <div className="flex items-center gap-3 mb-4 flex-wrap sm:flex-nowrap">
                                <h3 className="text-lg font-semibold flex-1 min-w-0">{muda.nome}</h3>
                                <span
                                    style={{ backgroundColor: getStatusColor(muda.status) }}
                                    className="text-white text-xs font-semibold px-3 py-1 rounded-full whitespace-nowrap"
                                >
                                    {muda.status}
                                </span>
                            </div>
                            <div className="flex flex-col gap-3 text-gray-700 text-sm">
                                <div className="flex items-center gap-2">
                                    <strong>Altura:</strong> <span>{muda.alturaCm} cm</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <strong>Área:</strong> <span>{muda.area}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <strong>Espécie:</strong> <span>{muda.especie}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <strong>Plantio:</strong> <span>{new Date(muda.dataPlantio).toLocaleDateString()}</span>
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <p className="col-span-full text-center text-gray-500">Nenhuma muda encontrada.</p>
                )}
            </div>
        </section>
    );
};
