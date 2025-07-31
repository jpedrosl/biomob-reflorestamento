"use client"
import { Eye, EyeOff } from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import React, { useState } from "react"
import axios from "axios"

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export default function LoginForm() {
  const [showPassword, setShowPassword] = useState(false)
  const [loginData, setLoginData] = useState({ email: "", password: "" })
  const router = useRouter()

  const togglePasswordVisibility = () => setShowPassword(!showPassword)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setLoginData(prev => ({ ...prev, [name]: value }))
  }

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await axios.post(`${API_URL}/auth/login`, {
        email: loginData.email,
        password: loginData.password,
      });

      if (response.data && response.data.authenticated) {
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("refreshToken", response.data.refreshToken);
        localStorage.setItem("user", JSON.stringify(response.data.user));

        alert("Login feito com sucesso!");
        router.push("/dashboard");
      } else {
        alert("Login ou senha inválida.");
      }
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        alert(`Erro no login: ${error.response.data.message || error.response.statusText}`);
      } else {
        alert("Erro ao tentar conectar com o servidor. Tente novamente.");
      }
      console.error("Erro de login:", error);
    }
  }

  return (
    <div className="space-y-4">
      <section>
        <input
          type="text"
          name="email"
          placeholder="Usuário (email)"
          onChange={handleChange}
          className="w-full p-4 rounded-md bg-input-bg focus:outline-none focus:ring-emerald-500"
        />
      </section>

      <section className="relative">
        <input
          type={showPassword ? "text" : "password"}
          name="password"
          placeholder="Senha"
          onChange={handleChange}
          className="w-full p-4 rounded-md bg-green-100 focus:outline-none focus:ring-emerald-500"
        />
        <button
          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
          onClick={togglePasswordVisibility}
          type="button"
        >
          {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
        </button>
      </section>

      <button
        onClick={handleLogin}
        className="bg-green-100 text-emerald-700 font-medium py-3 px-6 rounded-md hover:bg-green-200 transition-colors w-32"
        type="submit"
      >
        Entrar
      </button>

      <section className="flex justify-between mt-4">
        <Link href="#" className="text-emeral-600 hover:underline">
          Esqueceu a senha?
        </Link>
        <Link href="/register" className="text-emeral-600 hover:underline">
          Cadastre-se
        </Link>
      </section>
    </div>
  )
}
