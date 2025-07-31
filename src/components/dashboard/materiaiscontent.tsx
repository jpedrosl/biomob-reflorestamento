'use client';

import React, { useState, useMemo } from 'react';
import { useRouter } from 'next/navigation'; // ✅ Import necessário

interface Material {
    id: number;
    titulo: string;
    categoria: string;
    downloads: number;
    formato: 'PDF' | 'Vídeo' | 'Slides' | 'Infográfico';
    ultimaAtualizacao: string;
}

const materiaisData: Material[] = [
    { id: 1, titulo: 'Guia de Compostagem Doméstica', categoria: 'Compostagem', downloads: 75, formato: 'PDF', ultimaAtualizacao: '2025-07-15' },
    { id: 2, titulo: 'Introdução à Horta Orgânica', categoria: 'Horta Orgânica', downloads: 120, formato: 'Vídeo', ultimaAtualizacao: '2025-07-10' },
    { id: 3, titulo: 'Técnicas de Plantio para Iniciantes', categoria: 'Técnicas de Plantio', downloads: 95, formato: 'Slides', ultimaAtualizacao: '2025-06-30' },
    { id: 4, titulo: 'Ciclo do Solo e Fertilidade', categoria: 'Educação Ambiental', downloads: 40, formato: 'Infográfico', ultimaAtualizacao: '2025-06-20' },
    { id: 5, titulo: 'Uso sustentável da água na agricultura', categoria: 'Sustentabilidade', downloads: 20, formato: 'PDF', ultimaAtualizacao: '2025-07-01' },
    { id: 6, titulo: 'Benefícios da Agrofloresta', categoria: 'Agrofloresta', downloads: 30, formato: 'Vídeo', ultimaAtualizacao: '2025-07-12' },
    { id: 7, titulo: 'Como montar uma composteira', categoria: 'Compostagem', downloads: 50, formato: 'Slides', ultimaAtualizacao: '2025-06-25' },
    { id: 8, titulo: 'Rotação de culturas', categoria: 'Técnicas de Plantio', downloads: 60, formato: 'PDF', ultimaAtualizacao: '2025-05-15' },
    { id: 9, titulo: 'A importância dos polinizadores', categoria: 'Educação Ambiental', downloads: 35, formato: 'Infográfico', ultimaAtualizacao: '2025-06-18' },
    { id: 10, titulo: 'Planejamento de horta urbana', categoria: 'Horta Orgânica', downloads: 45, formato: 'Slides', ultimaAtualizacao: '2025-07-03' },
];

const icons = {
    total: 'https://www.svgrepo.com/show/495249/document-text.svg',
    downloads: 'https://www.svgrepo.com/show/510957/download.svg',
    categorias: 'https://www.svgrepo.com/show/334521/category.svg',
    novos: 'https://www.svgrepo.com/show/491285/new-document.svg',
    categoria: 'https://www.svgrepo.com/show/334521/category.svg',
    downloadsItem: 'https://www.svgrepo.com/show/510957/download.svg',
    data: 'https://www.svgrepo.com/show/503080/recent.svg',
    formato: 'https://www.svgrepo.com/show/532430/file.svg',
    downloadBtn: 'https://www.svgrepo.com/show/503018/download.svg',
};

const formatoColors: Record<Material['formato'], string> = {
    PDF: '#EF4444',
    Vídeo: '#3B82F6',
    Slides: '#10B981',
    Infográfico: '#F59E0B',
};

const todasCategorias = [...new Set(materiaisData.map(m => m.categoria))];
const todosFormatos = [...new Set(materiaisData.map(m => m.formato))];

export const MateriaisContent: React.FC = () => {
    const router = useRouter();

    const [categoriaFiltro, setCategoriaFiltro] = useState('');
    const [formatoFiltro, setFormatoFiltro] = useState('');

    const total = materiaisData.length;
    const totalDownloads = materiaisData.reduce((acc, m) => acc + m.downloads, 0);
    const totalCategorias = todasCategorias.length;
    const novosEsteMes = materiaisData.filter(m => new Date(m.ultimaAtualizacao).getMonth() === new Date().getMonth()).length;

    const materiaisFiltrados = useMemo(() => {
        return materiaisData.filter(m =>
            (categoriaFiltro === '' || m.categoria === categoriaFiltro) &&
            (formatoFiltro === '' || m.formato === formatoFiltro)
        );
    }, [categoriaFiltro, formatoFiltro]);

    return (
        <section className="space-y-8">
            {/* ✅ Botão no topo com mesmo estilo do código de hortas */}
            <div className="mb-8">
                <button
                    onClick={() => router.push('/cadastro_material')}
                    className="bg-[rgba(63,180,152,1)] text-white px-4 py-2 rounded flex items-center"
                >
                    Adicionar material
                    <span className="ml-2 text-xl flex items-center justify-center" style={{ lineHeight: 1 }}>
                        +
                    </span>
                </button>
            </div>

            {/* Cards de Resumo */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {[ 
                    { label: 'Total de Materiais', value: total, text: 'Materiais disponíveis', icon: icons.total },
                    { label: 'Downloads', value: totalDownloads, text: 'Download neste mês', icon: icons.downloads },
                    { label: 'Categorias', value: totalCategorias, text: 'Categorias diferentes', icon: icons.categorias },
                    { label: 'Novos materiais', value: novosEsteMes, text: 'Materiais adicionados neste mês', icon: icons.novos },
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
                    value={categoriaFiltro}
                    onChange={(e) => setCategoriaFiltro(e.target.value)}
                    className="px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-600 w-full md:max-w-xs"
                >
                    <option value="">Todas as Categorias</option>
                    {todasCategorias.map((cat) => (
                        <option key={cat} value={cat}>{cat}</option>
                    ))}
                </select>

                <select
                    value={formatoFiltro}
                    onChange={(e) => setFormatoFiltro(e.target.value)}
                    className="px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-600 w-full md:max-w-xs"
                >
                    <option value="">Todos os Formatos</option>
                    {todosFormatos.map((formato) => (
                        <option key={formato} value={formato}>{formato}</option>
                    ))}
                </select>
            </div>

            {/* Lista de Materiais */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {materiaisFiltrados.length > 0 ? (
                    materiaisFiltrados.map((material) => (
                        <div key={material.id} className="bg-white rounded-lg shadow p-5 flex flex-col justify-between max-w-md">
                            <div className="flex items-start justify-between gap-2 mb-4 min-h-[42px]">
                                <h3 className="text-lg font-semibold break-words flex-1">{material.titulo}</h3>
                                <span
                                    style={{ backgroundColor: formatoColors[material.formato] }}
                                    className="text-white text-xs font-semibold px-3 py-1 rounded-full whitespace-nowrap mt-0.5"
                                >
                                    {material.formato}
                                </span>
                            </div>

                            <div className="flex flex-col gap-3 text-gray-700 text-sm">
                                <div className="flex items-center gap-2">
                                    <img src={icons.categoria} alt="categoria" className="w-4 h-4" />
                                    <strong>Categoria:</strong> <span>{material.categoria}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <img src={icons.downloadsItem} alt="downloads" className="w-4 h-4" />
                                    <strong>Downloads:</strong> <span>{material.downloads}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <img src={icons.data} alt="data" className="w-4 h-4" />
                                    <strong>Atualização:</strong>{' '}
                                    <span>{new Date(material.ultimaAtualizacao).toLocaleDateString()}</span>
                                </div>
                            </div>

                            <div className="flex gap-2 mt-4">
                                <button
                                    style={{ backgroundColor: 'rgba(63,180,152,0.85)' }}
                                    className="hover:brightness-90 text-white px-4 py-2 rounded flex items-center gap-2 text-sm"
                                >
                                    <img
                                        src={icons.downloadBtn}
                                        alt="download"
                                        className="w-5 h-5 filter invert brightness-0"
                                    />
                                    Download
                                </button>
                                <button className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-4 py-2 rounded text-sm">
                                    Detalhes
                                </button>
                            </div>
                        </div>
                    ))
                ) : (
                    <p className="col-span-full text-center text-gray-500">Nenhum material encontrado.</p>
                )}
            </div>
        </section>
    );
};
