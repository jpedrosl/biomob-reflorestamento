"use client"

import { useRouter } from "next/navigation"

export default function RegisterRefloreForm() {
  const router = useRouter()

  const handleCancel = () => {
    router.push("/dashboard")
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Aqui você pode adicionar lógica de envio de dados (ex: via fetch/axios)

    // Redireciona após salvar
    router.push("/dashboard")
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-3xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6 bg-white p-8 rounded-lg shadow-lg"
    >
      <div className="col-span-2 mb-2">
        <h1 className="text-2xl font-bold text-emerald-700">Nova Área de Reflorestamento</h1>
        <p className="text-sm text-gray-500 mt-1">Preencha os dados abaixo para cadastrar uma nova área</p>
      </div>

      {/* Nome da área */}
      <div className="flex flex-col">
        <label className="text-sm font-medium text-gray-700 mb-1">Nome da Área</label>
        <input
          type="text"
          placeholder="Ex: Fazenda Boa Esperança"
          className="p-3 border border-gray-300 rounded-md bg-white w-full focus:outline-none focus:ring-2 focus:ring-emerald-600"
        />
      </div>

      {/* Cidade */}
      <div className="flex flex-col">
        <label className="text-sm font-medium text-gray-700 mb-1">Cidade</label>
        <input
          type="text"
          placeholder="Ex: Petrópolis"
          className="p-3 border border-gray-300 rounded-md bg-white w-full focus:outline-none focus:ring-2 focus:ring-emerald-600"
        />
      </div>

      {/* Estado */}
      <div className="flex flex-col">
        <label className="text-sm font-medium text-gray-700 mb-1">Estado</label>
        <input
          type="text"
          placeholder="Ex: RJ"
          className="p-3 border border-gray-300 rounded-md bg-white w-full focus:outline-none focus:ring-2 focus:ring-emerald-600"
        />
      </div>

      {/* Tamanho */}
      <div className="flex flex-col">
        <label className="text-sm font-medium text-gray-700 mb-1">Tamanho (m²)</label>
        <input
          type="number"
          placeholder="Ex: 5000"
          className="p-3 border border-gray-300 rounded-md bg-white w-full focus:outline-none focus:ring-2 focus:ring-emerald-600"
        />
      </div>

      {/* Endereço */}
      <div className="col-span-2 flex flex-col">
        <label className="text-sm font-medium text-gray-700 mb-1">Endereço</label>
        <input
          type="text"
          placeholder="Rua das Árvores, 123"
          className="p-3 border border-gray-300 rounded-md bg-white w-full focus:outline-none focus:ring-2 focus:ring-emerald-600"
        />
      </div>

      {/* Descrição */}
      <div className="col-span-2 flex flex-col">
        <label className="text-sm font-medium text-gray-700 mb-1">Descrição</label>
        <textarea
          placeholder="Breve descrição da área..."
          className="p-3 border border-gray-300 rounded-md bg-white w-full resize-none h-28 focus:outline-none focus:ring-2 focus:ring-emerald-600"
        />
      </div>

      {/* Status */}
      <div className="flex flex-col">
        <label className="text-sm font-medium text-gray-700 mb-1">Status</label>
        <select
          className="p-3 border border-gray-300 rounded-md bg-white w-full text-gray-700 focus:outline-none focus:ring-2 focus:ring-emerald-600"
        >
          <option value="">Selecione</option>
          <option value="planejada">Planejada</option>
          <option value="em_andamento">Em andamento</option>
          <option value="concluida">Concluída</option>
        </select>
      </div>

      {/* Botões */}
      <div className="col-span-2 flex justify-end gap-4 mt-4">
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
