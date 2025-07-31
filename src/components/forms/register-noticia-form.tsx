'use client'

import { useRouter } from 'next/navigation'
import { useState, useMemo } from 'react'

// Simulando o array de notícias para extrair categorias existentes
const noticiasData = [
  { categoria: 'Ecologia' },
  { categoria: 'Tecnologia' },
  { categoria: 'Educação' },
  { categoria: 'Legislação' },
  { categoria: 'Comunidade' },
  // ... (pode manter seu array completo importado)
]

const categoriasExistentes = [...new Set(noticiasData.map(n => n.categoria))]

export function RegisterNoticiaForm() {
  const router = useRouter()

  const [titulo, setTitulo] = useState('')
  const [redator, setRedator] = useState('')
  const [categoria, setCategoria] = useState('')
  const [resumo, setResumo] = useState('')
  const [conteudo, setConteudo] = useState('')

  const handleCancel = () => {
    router.push('/dashboard')
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Lógica para envio do formulário aqui
    router.push('/dashboard')
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-6 rounded-lg shadow-md w-full max-w-3xl mx-auto"
    >
      <h1 className="text-2xl font-bold text-emerald-700 mb-1">Nova Notícia</h1>
      <p className="text-sm text-gray-500 mb-6">
        Preencha os dados abaixo para cadastrar uma nova notícia
      </p>

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="titulo">
            Título
          </label>
          <input
            id="titulo"
            type="text"
            value={titulo}
            onChange={e => setTitulo(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-emerald-600"
            placeholder="Digite o título da notícia"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="redator">
            Redator
          </label>
          <input
            id="redator"
            type="text"
            value={redator}
            onChange={e => setRedator(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-emerald-600"
            placeholder="Nome do redator"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="categoria">
            Categoria
          </label>
          <select
            id="categoria"
            value={categoria}
            onChange={e => setCategoria(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2 bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-emerald-600"
            required
          >
            <option value="" disabled>
              Selecione uma categoria
            </option>
            {categoriasExistentes.map(cat => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="resumo">
            Resumo
          </label>
          <textarea
            id="resumo"
            rows={3}
            value={resumo}
            onChange={e => setResumo(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-emerald-600"
            placeholder="Escreva um resumo breve da notícia"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="conteudo">
            Conteúdo
          </label>
          <textarea
            id="conteudo"
            rows={6}
            value={conteudo}
            onChange={e => setConteudo(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-emerald-600"
            placeholder="Escreva o conteúdo completo da notícia"
            required
          />
        </div>

        <div className="flex justify-end gap-2 pt-6">
          <button
            type="button"
            onClick={handleCancel}
            className="px-4 py-2 border border-gray-400 text-gray-600 rounded-md hover:bg-gray-100 transition"
          >
            Cancelar
          </button>
          <button
            type="submit"
            className="px-5 py-2 bg-emerald-700 text-white rounded-md hover:bg-emerald-800 transition"
          >
            Salvar
          </button>
        </div>
      </div>
    </form>
  )
}
