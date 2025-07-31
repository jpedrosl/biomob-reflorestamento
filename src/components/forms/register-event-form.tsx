'use client'

import { useRouter } from 'next/navigation'
import { useState } from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

export function RegisterEventForm() {
  const router = useRouter()
  const [data, setData] = useState<Date>()
  const [hora, setHora] = useState("")
  const [tipo, setTipo] = useState("")
  const [area, setArea] = useState("")
  const [local, setLocal] = useState("")

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
      <h1 className="text-2xl font-bold text-emerald-700 mb-1">Novo Evento</h1>
      <p className="text-sm text-gray-500 mb-6">Preencha os dados do evento abaixo</p>

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Título</label>
          <input
            type="text"
            className="w-full border border-gray-300 rounded px-3 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-emerald-600"
            placeholder="Digite o título do evento"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Tipo</label>
            <select
              className="w-full border border-gray-300 rounded px-3 py-2 bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-emerald-600"
              value={tipo}
              onChange={(e) => setTipo(e.target.value)}
            >
              <option value="" disabled>Selecione um tipo</option>
              <option value="Plantio">Plantio</option>
              <option value="Oficina">Oficina</option>
              <option value="Palestra">Palestra</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Área</label>
            <select
              className="w-full border border-gray-300 rounded px-3 py-2 bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-emerald-600"
              value={area}
              onChange={(e) => setArea(e.target.value)}
            >
              <option value="" disabled>Selecione uma área</option>
              <option value="Área 1">Área 1</option>
              <option value="Área 2">Área 2</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Data</label>
            <DatePicker
              selected={data}
              onChange={(date: Date) => setData(date)}
              dateFormat="dd/MM/yyyy"
              placeholderText="dd/mm/aaaa"
              className="w-full border border-gray-300 rounded px-3 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-emerald-600"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Horário</label>
            <input
              type="time"
              className="w-full border border-gray-300 rounded px-3 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-emerald-600"
              value={hora}
              onChange={(e) => setHora(e.target.value)}
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Local</label>
          <select
            className="w-full border border-gray-300 rounded px-3 py-2 bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-emerald-600"
            value={local}
            onChange={(e) => setLocal(e.target.value)}
          >
            <option value="" disabled>Selecione um local</option>
            <option value="Local 1">Local 1</option>
            <option value="Local 2">Local 2</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Descrição</label>
          <textarea
            className="w-full border border-gray-300 rounded px-3 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-emerald-600"
            rows={3}
            placeholder="Descreva o evento"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Máximo de participantes</label>
          <input
            type="number"
            className="w-full border border-gray-300 rounded px-3 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-emerald-600"
            placeholder="Ex: 30"
          />
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
