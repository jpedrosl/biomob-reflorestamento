'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

const areasDisponiveis = [
  { id: 1, nome: 'Reflorestamento Cedro Alto' },
  { id: 2, nome: 'Mata Serra Branca' },
  { id: 3, nome: 'Bosque da Luz' },
  { id: 4, nome: 'Reserva Morro Claro' },
  { id: 5, nome: 'Floresta da Pedra' },
  { id: 6, nome: 'Vale dos Pinheiros' },
  { id: 7, nome: 'Jardim do Mirante' },
  { id: 8, nome: 'Refúgio das Bromélias' },
  { id: 9, nome: 'Bosque das Águas Claras' },
  { id: 10, nome: 'Mata do Alto' },
]

export function RegisterMudaForm() {
  const [nomeEspecie, setNomeEspecie] = useState('')
  const [nomeCientifico, setNomeCientifico] = useState('')
  const [areaSelecionada, setAreaSelecionada] = useState('')
  const [alturaInicial, setAlturaInicial] = useState('')
  const [dataPlantio, setDataPlantio] = useState<Date | null>(null)
  const [observacoes, setObservacoes] = useState('')

  const router = useRouter()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // lógica para envio dos dados
    router.push('/dashboard')
  }

  const handleCancel = () => {
    router.push('/dashboard')
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-3xl mx-auto bg-white rounded-lg shadow-md p-8 grid grid-cols-1 sm:grid-cols-2 gap-6"
    >
      <div className="col-span-2">
        <h1 className="text-2xl font-bold text-emerald-700">Nova Muda</h1>
        <p className="text-sm text-gray-500 mt-1">
          Preencha os dados abaixo para cadastrar uma nova muda
        </p>
      </div>

      {/* Nome da Espécie */}
      <div className="flex flex-col">
        <label
          htmlFor="nomeEspecie"
          className="text-sm font-medium text-gray-700 mb-1"
        >
          Nome da Espécie
        </label>
        <input
          id="nomeEspecie"
          type="text"
          placeholder="Ex: Ipê Amarelo"
          value={nomeEspecie}
          onChange={e => setNomeEspecie(e.target.value)}
          required
          className="px-4 py-3 border border-gray-300 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-emerald-600 w-full"
        />
      </div>

      {/* Nome Científico */}
      <div className="flex flex-col">
        <label
          htmlFor="nomeCientifico"
          className="text-sm font-medium text-gray-700 mb-1"
        >
          Nome Científico
        </label>
        <input
          id="nomeCientifico"
          type="text"
          placeholder="Ex: Handroanthus albus"
          value={nomeCientifico}
          onChange={e => setNomeCientifico(e.target.value)}
          required
          className="px-4 py-3 border border-gray-300 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-emerald-600 w-full"
        />
      </div>

      {/* Área de Reflorestamento */}
      <div className="flex flex-col sm:col-span-2">
        <label
          htmlFor="area"
          className="text-sm font-medium text-gray-700 mb-1"
        >
          Área de Reflorestamento
        </label>
        <select
          id="area"
          value={areaSelecionada}
          onChange={e => setAreaSelecionada(e.target.value)}
          required
          className="px-4 py-3 border border-gray-300 rounded-md bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-emerald-600 w-full"
        >
          <option value="" disabled>
            Selecione uma área
          </option>
          {areasDisponiveis.map(area => (
            <option key={area.id} value={area.nome}>
              {area.nome}
            </option>
          ))}
        </select>
      </div>

      {/* Altura Inicial */}
      <div className="flex flex-col">
        <label
          htmlFor="alturaInicial"
          className="text-sm font-medium text-gray-700 mb-1"
        >
          Altura Inicial (cm)
        </label>
        <input
          id="alturaInicial"
          type="number"
          placeholder="Ex: 25"
          value={alturaInicial}
          onChange={e => setAlturaInicial(e.target.value)}
          min={0}
          required
          className="px-4 py-3 border border-gray-300 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-emerald-600 w-full"
        />
      </div>

      {/* Data do Plantio */}
      <div className="flex flex-col">
        <label
          htmlFor="dataPlantio"
          className="text-sm font-medium text-gray-700 mb-1"
        >
          Data do Plantio
        </label>
        <DatePicker
          id="dataPlantio"
          selected={dataPlantio}
          onChange={date => setDataPlantio(date)}
          dateFormat="dd/MM/yyyy"
          placeholderText="dd/mm/aaaa"
          className="px-4 py-3 border border-gray-300 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-emerald-600 w-full"
          required
        />
      </div>

      {/* Observações */}
      <div className="flex flex-col sm:col-span-2">
        <label
          htmlFor="observacoes"
          className="text-sm font-medium text-gray-700 mb-1"
        >
          Observações
        </label>
        <textarea
          id="observacoes"
          placeholder="Digite observações relevantes..."
          value={observacoes}
          onChange={e => setObservacoes(e.target.value)}
          rows={5}
          className="px-4 py-3 border border-gray-300 rounded-md bg-white resize-none focus:outline-none focus:ring-2 focus:ring-emerald-600 w-full"
        />
      </div>

      {/* Botões */}
      <div className="sm:col-span-2 flex justify-end gap-4 pt-4">
        <button
          type="button"
          onClick={handleCancel}
          className="px-5 py-2 border border-gray-400 text-gray-600 rounded-md hover:bg-gray-100 transition"
        >
          Cancelar
        </button>
        <button
          type="submit"
          className="px-6 py-2 bg-emerald-700 text-white rounded-md hover:bg-emerald-800 transition"
        >
          Salvar
        </button>
      </div>
    </form>
  )
}
