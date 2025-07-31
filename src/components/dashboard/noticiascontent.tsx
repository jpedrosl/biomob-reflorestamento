'use client';

import React, { useState, useMemo } from 'react';
import { useRouter } from 'next/navigation'; // Para redirecionar ao clicar no botão

interface Noticia {
    id: number;
    titulo: string;
    redator: string;
    categoria: string;
    visualizacoes: number;
    comentarios: number;
    dataPublicacao: string;
    resumo: string;
}

const noticiasData: Noticia[] = [
    {
        id: 1,
        titulo: 'Novo parque ecológico inaugurado na cidade',
        redator: 'Ana Silva',
        categoria: 'Ecologia',
        visualizacoes: 120,
        comentarios: 15,
        dataPublicacao: '2025-07-15',
        resumo:
            'Foi inaugurado ontem o novo parque ecológico que visa preservar a biodiversidade local e oferecer lazer para a população.',
    },
    {
        id: 2,
        titulo: 'Tecnologias sustentáveis revolucionam a agricultura',
        redator: 'Carlos Pereira',
        categoria: 'Tecnologia',
        visualizacoes: 90,
        comentarios: 8,
        dataPublicacao: '2025-07-12',
        resumo:
            'A introdução de novas tecnologias na agricultura tem aumentado a produtividade e reduzido impactos ambientais.',
    },
    {
        id: 3,
        titulo: 'Campanha de reciclagem mobiliza escolas',
        redator: 'Beatriz Souza',
        categoria: 'Educação',
        visualizacoes: 70,
        comentarios: 12,
        dataPublicacao: '2025-07-05',
        resumo:
            'Alunos de diversas escolas participam de uma campanha para incentivar a reciclagem e a conscientização ambiental.',
    },
    {
        id: 4,
        titulo: 'Importância da água para a sustentabilidade',
        redator: 'Ana Silva',
        categoria: 'Ecologia',
        visualizacoes: 40,
        comentarios: 5,
        dataPublicacao: '2025-06-30',
        resumo:
            'A água é um recurso essencial para a vida e sua preservação é fundamental para o futuro do planeta.',
    },
    {
        id: 5,
        titulo: 'Novas leis de proteção ambiental entram em vigor',
        redator: 'Carlos Pereira',
        categoria: 'Legislação',
        visualizacoes: 20,
        comentarios: 3,
        dataPublicacao: '2025-06-25',
        resumo:
            'O governo aprovou novas leis que visam fortalecer a proteção ambiental em todo o território nacional.',
    },
    {
        id: 6,
        titulo: 'Voluntariado em prol da limpeza urbana cresce',
        redator: 'Beatriz Souza',
        categoria: 'Comunidade',
        visualizacoes: 5,
        comentarios: 0,
        dataPublicacao: '2025-07-10',
        resumo:
            'Ações voluntárias têm aumentado a limpeza e conservação das ruas, envolvendo cada vez mais moradores.',
    },
    {
        id: 7,
        titulo: 'Educação ambiental nas empresas: um novo paradigma',
        redator: 'Ana Silva',
        categoria: 'Educação',
        visualizacoes: 15,
        comentarios: 0,
        dataPublicacao: '2025-07-01',
        resumo:
            'Empresas investem em programas de educação ambiental para colaboradores, promovendo sustentabilidade corporativa.',
    },
];

// Ícones
const icons = {
    titulo: 'https://www.svgrepo.com/show/311019/news.svg',
    redator: 'https://www.svgrepo.com/show/334967/user-circle.svg',
    categoria: 'https://www.svgrepo.com/show/334521/category.svg',
    visualizacoes: 'https://www.svgrepo.com/show/532493/eye.svg',
    comentarios: 'https://www.svgrepo.com/show/522071/comment-3.svg',
    dataPublicacao: 'https://www.svgrepo.com/show/374875/event.svg',
};

const categoriasExistentes = [...new Set(noticiasData.map(n => n.categoria))];
const redatoresExistentes = [...new Set(noticiasData.map(n => n.redator))];

export const NoticiasContent: React.FC = () => {
    const router = useRouter();

    const [filtroTitulo, setFiltroTitulo] = useState('');
    const [filtroCategoria, setFiltroCategoria] = useState('');
    const [filtroRedator, setFiltroRedator] = useState('');

    const totalNoticias = noticiasData.length;
    const totalVisualizacoes = noticiasData.reduce((acc, n) => acc + n.visualizacoes, 0);
    const totalComentarios = noticiasData.reduce((acc, n) => acc + n.comentarios, 0);
    const totalCategorias = categoriasExistentes.length;

    const noticiasFiltradas = useMemo(() => {
        return noticiasData.filter(n => {
            return (
                n.titulo.toLowerCase().includes(filtroTitulo.toLowerCase()) &&
                (filtroCategoria === '' || n.categoria === filtroCategoria) &&
                (filtroRedator === '' || n.redator === filtroRedator)
            );
        });
    }, [filtroTitulo, filtroCategoria, filtroRedator]);

    return (
        <section className="space-y-8 px-4 pt-0 max-w-7xl mx-auto">
            {/* Botão Adicionar Notícia */}
            <div className="mb-8">
                <button
                    onClick={() => router.push('/cadastro_noticia')}
                    className="bg-[rgba(63,180,152,1)] text-white px-4 py-2 rounded flex items-center"
                >
                    Adicionar notícia
                    <span className="ml-2 text-xl flex items-center justify-center" style={{ lineHeight: 1 }}>
                        +
                    </span>
                </button>
            </div>

            {/* Cards de resumo */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                    {
                        label: 'Total de Notícias',
                        value: totalNoticias,
                        text: 'Notícias publicadas',
                        icon: icons.titulo,
                    },
                    {
                        label: 'Visualizações',
                        value: totalVisualizacoes,
                        text: 'Visualizações este mês',
                        icon: icons.visualizacoes,
                    },
                    {
                        label: 'Comentários',
                        value: totalComentarios,
                        text: 'Comentários este mês',
                        icon: icons.comentarios,
                    },
                    {
                        label: 'Categorias',
                        value: totalCategorias,
                        text: 'Categorias existentes',
                        icon: icons.categoria,
                    },
                ].map((item, idx) => (
                    <div key={idx} className="bg-white rounded-lg shadow p-5 flex flex-col justify-between">
                        <div className="flex items-center justify-between">
                            <h3 className="text-sm font-medium text-gray-700">{item.label}</h3>
                            <img src={item.icon} alt="" className="w-8 h-8" />
                        </div>
                        <p className="text-3xl font-bold mt-2">{item.value}</p>
                        <p className="text-xs text-gray-500">{item.text}</p>
                    </div>
                ))}
            </div>

            {/* Filtros */}
            <div className="flex flex-col md:flex-row gap-4 items-center">
                <input
                    type="text"
                    placeholder="Filtrar por título"
                    value={filtroTitulo}
                    onChange={e => setFiltroTitulo(e.target.value)}
                    className="px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-600 w-full md:max-w-xs"
                />

                <select
                    value={filtroCategoria}
                    onChange={e => setFiltroCategoria(e.target.value)}
                    className="px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-600 w-full md:max-w-xs"
                >
                    <option value="">Todas as Categorias</option>
                    {categoriasExistentes.map(cat => (
                        <option key={cat} value={cat}>
                            {cat}
                        </option>
                    ))}
                </select>

                <select
                    value={filtroRedator}
                    onChange={e => setFiltroRedator(e.target.value)}
                    className="px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-600 w-full md:max-w-xs"
                >
                    <option value="">Todos os Redatores</option>
                    {redatoresExistentes.map(red => (
                        <option key={red} value={red}>
                            {red}
                        </option>
                    ))}
                </select>
            </div>

            {/* Lista de notícias */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {noticiasFiltradas.length > 0 ? (
                    noticiasFiltradas.map(noticia => (
                        <div
                            key={noticia.id}
                            className="bg-white rounded-lg shadow p-6 flex flex-col justify-between max-w-3xl"
                        >
                            <h2 className="text-2xl font-bold mb-4">{noticia.titulo}</h2>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3 text-gray-700 mb-4 text-sm">
                                <div className="flex items-center gap-2 min-w-0">
                                    <img src={icons.redator} alt="Redator" className="w-5 h-5 shrink-0" />
                                    <strong>Redator:</strong>
                                    <span className="truncate flex-1 whitespace-nowrap">{noticia.redator}</span>
                                </div>

                                <div className="flex items-center gap-2 min-w-0">
                                    <img src={icons.categoria} alt="Categoria" className="w-5 h-5 shrink-0" />
                                    <strong>Categoria:</strong>
                                    <span className="truncate flex-1 whitespace-nowrap">{noticia.categoria}</span>
                                </div>

                                <div className="flex items-center gap-2 min-w-0">
                                    <img src={icons.dataPublicacao} alt="Data" className="w-5 h-5 shrink-0" />
                                    <strong>Publicação:</strong>
                                    <span className="truncate flex-1 whitespace-nowrap">
                                        {new Date(noticia.dataPublicacao).toLocaleDateString()}
                                    </span>
                                </div>

                                <div className="flex items-center gap-2 min-w-0">
                                    <img src={icons.visualizacoes} alt="Visualizações" className="w-5 h-5 shrink-0" />
                                    <strong>Visualizações:</strong>
                                    <span className="truncate flex-1 whitespace-nowrap">{noticia.visualizacoes}</span>
                                </div>

                                <div className="flex items-center gap-2 col-span-1 sm:col-span-2 min-w-0">
                                    <img src={icons.comentarios} alt="Comentários" className="w-5 h-5 shrink-0" />
                                    <strong>Comentários:</strong>
                                    <span className="truncate flex-1 whitespace-nowrap">{noticia.comentarios}</span>
                                </div>
                            </div>

                            <p className="text-gray-600 mb-6">{noticia.resumo}</p>

                            <button
                                style={{ backgroundColor: 'rgba(63,180,152,0.85)' }}
                                className="text-white px-5 py-2 rounded hover:brightness-90 max-w-max"
                            >
                                Leia mais
                            </button>
                        </div>
                    ))
                ) : (
                    <p className="col-span-full text-center text-gray-500">Nenhuma notícia encontrada.</p>
                )}
            </div>
        </section>
    );
};
