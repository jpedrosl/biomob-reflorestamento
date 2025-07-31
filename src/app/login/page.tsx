'use client'

import { useRouter } from 'next/navigation'
import LoginForm from '../../components/forms/login-form'

export default function LoginPage() {
  const router = useRouter()

  const handleClose = () => {
    router.push('/home')
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-800 px-4">
      <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-6">
        <div className="flex justify-between items-center mb-5">
          <h1 className="text-4xl font-bold text-emerald-600">Login</h1>

          {/* Botão X com redirecionamento */}
          <button
            onClick={handleClose}
            className="p-1 border border-gray-300 rounded hover:bg-gray-100 transition"
            aria-label="Fechar"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18 6L6 18M6 6L18 18"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>

        {/* Botões de login social */}
        <button className="flex items-center gap-3 justify-center w-full border border-gray-300 rounded-md py-3 px-5 mb-4 hover:bg-gray-50 transition-colors text-base">
          <img
            src="https://www.svgrepo.com/show/353817/google-icon.svg"
            alt="Google"
            className="w-5 h-5"
          />
          <span>Continue com o Google</span>
        </button>

        <button className="flex items-center gap-3 justify-center w-full border border-gray-300 rounded-md py-3 px-5 mb-5 hover:bg-gray-50 transition-colors text-base">
          <img
            src="https://www.svgrepo.com/show/75117/apple-big-logo.svg"
            alt="Apple"
            className="w-5 h-5"
          />
          <span>Continue com a Apple</span>
        </button>

        {/* Separador */}
        <div className="flex items-center my-6">
          <div className="flex-grow border-t border-gray-300"></div>
          <div className="px-4 text-gray-500 text-sm">OU</div>
          <div className="flex-grow border-t border-gray-300"></div>
        </div>

        <LoginForm />
      </div>
    </div>
  )
}
