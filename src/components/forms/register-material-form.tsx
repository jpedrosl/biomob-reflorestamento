'use client'

import { useRouter } from 'next/navigation'
import { useState } from 'react'

const categorias = [
  'Compostagem',
  'Horta Orgânica',
  'Técnicas de Plantio',
  'Educação Ambiental',
  'Sustentabilidade',
  'Agrofloresta',
]

const tipos = ['PDF', 'Vídeo', 'Slides', 'Infográfico']

export function RegisterMaterialForm() {
  const router = useRouter()
  const [arquivo, setArquivo] = useState<File | null>(null)
  const [categoria, setCategoria] = useState('')
  const [tipo, setTipo] = useState('')

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setArquivo(e.target.files[0])
    }
  }

  const handleCancel = () => {
    router.push('/dashboard')
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Aqui você pode fazer o envio do formulário
    router.push('/dashboard')
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-6 rounded-lg shadow-md w-full max-w-3xl mx-auto"
    >
      <h1 className="text-2xl font-bold text-emerald-700 mb-1">Novo Material</h1>
      <p className="text-sm text-gray-500 mb-6">
        Adicione um novo material informativo à plataforma
      </p>

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Título</label>
          <input
            type="text"
            className="w-full border border-gray-300 rounded px-3 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-emerald-600"
            placeholder="Digite o título do material"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Descrição</label>
          <textarea
            className="w-full border border-gray-300 rounded px-3 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-emerald-600"
            rows={3}
            placeholder="Descreva o material"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Categoria</label>
            <select
              className="w-full border border-gray-300 rounded px-3 py-2 bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-emerald-600"
              value={categoria}
              onChange={(e) => setCategoria(e.target.value)}
            >
              <option value="" disabled>
                Selecione uma categoria
              </option>
              {categorias.map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Tipo</label>
            <select
              className="w-full border border-gray-300 rounded px-3 py-2 bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-emerald-600"
              value={tipo}
              onChange={(e) => setTipo(e.target.value)}
            >
              <option value="" disabled>
                Selecione um tipo
              </option>
              {tipos.map((t) => (
                <option key={t} value={t}>
                  {t}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Arquivo</label>
          <input
            type="file"
            onChange={handleFileChange}
            className="w-full border border-gray-300 rounded px-3 py-2 bg-white file:mr-4 file:py-2 file:px-4 file:border-0 file:text-sm file:font-semibold file:bg-green-700 file:text-white hover:file:bg-green-800 focus:outline-none focus:ring-2 focus:ring-emerald-600"
          />
          {arquivo && (
            <p className="text-sm mt-1 text-gray-600">Selecionado: {arquivo.name}</p>
          )}
        </div>

        {/* Botões */}
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
