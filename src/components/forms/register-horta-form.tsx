'use client'

import { useRouter } from 'next/navigation'
import { useState } from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

export function RegisterHortaForm() {
  const router = useRouter()
  const [ultimaColheita, setUltimaColheita] = useState<Date>()
  const [proximaColheita, setProximaColheita] = useState<Date>()

  const handleCancel = () => {
    router.push('/dashboard')
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Aqui você pode adicionar lógica de envio se necessário
    router.push('/dashboard')
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-6 rounded-lg shadow-md w-full max-w-4xl mx-auto"
    >
      <h1 className="text-2xl font-bold text-emerald-700 mb-1">Nova Horta</h1>
      <p className="text-sm text-gray-500 mb-6">Preencha os dados da horta comunitária abaixo</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Coluna Esquerda */}
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Nome</label>
            <input
              type="text"
              placeholder="Ex: Horta Esperança"
              className="w-full border border-gray-300 rounded px-3 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-emerald-600"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Endereço</label>
            <input
              type="text"
              placeholder="Rua das Hortaliças, 456"
              className="w-full border border-gray-300 rounded px-3 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-emerald-600"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Tamanho (m²)</label>
            <input
              type="number"
              placeholder="Ex: 800"
              className="w-full border border-gray-300 rounded px-3 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-emerald-600"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Famílias atendidas</label>
            <input
              type="number"
              placeholder="Ex: 15"
              className="w-full border border-gray-300 rounded px-3 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-emerald-600"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Responsável</label>
            <input
              type="text"
              placeholder="Ex: Maria da Silva"
              className="w-full border border-gray-300 rounded px-3 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-emerald-600"
            />
          </div>
        </div>

        {/* Coluna Direita */}
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Cultivos Atuais</label>
            <input
              type="text"
              placeholder="Ex: Alface, cenoura, beterraba"
              className="w-full border border-gray-300 rounded px-3 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-emerald-600"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Produção Mensal (kg)</label>
            <input
              type="text"
              placeholder="Ex: 120"
              className="w-full border border-gray-300 rounded px-3 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-emerald-600"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Última Colheita</label>
            <DatePicker
              selected={ultimaColheita}
              onChange={(date: Date) => setUltimaColheita(date)}
              dateFormat="dd/MM/yyyy"
              className="w-full border border-gray-300 rounded px-3 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-emerald-600"
              placeholderText="dd/mm/aaaa"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Próxima Colheita</label>
            <DatePicker
              selected={proximaColheita}
              onChange={(date: Date) => setProximaColheita(date)}
              dateFormat="dd/MM/yyyy"
              className="w-full border border-gray-300 rounded px-3 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-emerald-600"
              placeholderText="dd/mm/aaaa"
            />
          </div>
        </div>
      </div>

      {/* Botões */}
      <div className="flex justify-end gap-2 mt-6">
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
    </form>
  )
}
