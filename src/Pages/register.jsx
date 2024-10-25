import { useState } from 'react'
import { motion } from 'framer-motion'

export default function Register() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    // Lógica de registro aquí
    console.log('Intento de registro con:', name, email, password, confirmPassword)
  }

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  }

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-green-100 to-green-200">
      <div className="flex flex-col md:flex-row w-full max-w-6xl mx-auto my-8 shadow-2xl rounded-xl overflow-hidden">
        <motion.div
          className="md:w-1/2 bg-cover bg-center relative"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image%201-jjQh9lOZvqX7T5NBaQ0L4IvDwEOKv9.png"
            alt="Concepto de ahorro inteligente"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-green-600/50 to-transparent" />
          <motion.div
            className="absolute bottom-0 left-0 p-8 text-white"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold mb-2">Ahorro Inteligente</h2>
            <p className="text-lg">Ilumina tu futuro financiero con SmartWallet</p>
          </motion.div>
        </motion.div>
        <motion.div
          className="md:w-1/2 bg-white p-8"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <motion.div
            className="mb-8"
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.3 }}
          >
            <img src="../img/Logo.jpg" alt="Logo de SmartWallet" className="h-10 mb-4" />
            <h1 className="text-2xl font-bold text-gray-800">Registrar cuenta</h1>
          </motion.div>
          <form onSubmit={handleSubmit} className="space-y-4">
            <motion.div variants={fadeIn} initial="hidden" animate="visible" transition={{ delay: 0.4 }}>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">Nombre</label>
              <input
                id="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md text-sm shadow-sm placeholder-gray-400
                focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500"
              />
            </motion.div>
            <motion.div variants={fadeIn} initial="hidden" animate="visible" transition={{ delay: 0.5 }}>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md text-sm shadow-sm placeholder-gray-400
                focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500"
              />
            </motion.div>
            <motion.div variants={fadeIn} initial="hidden" animate="visible" transition={{ delay: 0.6 }}>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">Contraseña</label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md text-sm shadow-sm placeholder-gray-400
                focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500"
              />
            </motion.div>
            <motion.div variants={fadeIn} initial="hidden" animate="visible" transition={{ delay: 0.7 }}>
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">Confirmar contraseña</label>
              <input
                id="confirmPassword"
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
                className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md text-sm shadow-sm placeholder-gray-400
                focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500"
              />
            </motion.div>
            <motion.div variants={fadeIn} initial="hidden" animate="visible" transition={{ delay: 0.8 }}>
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-500 hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
              >
                Registrar
              </button>
            </motion.div>
          </form>
          <motion.div
            className="mt-4"
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.9 }}
          >
            <button
              className="w-full flex justify-center py-2 px-4 border border-green-500 rounded-md shadow-sm text-sm font-medium text-green-500 bg-white hover:bg-green-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
            >
              <img src="https://www.svgrepo.com/show/2778/google.svg" alt="Logo de Google" className="mr-2 h-5 w-5" />
              Registrarse con Google
            </button>
          </motion.div>
          <motion.div
            className="mt-6 text-center text-sm text-gray-600"
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1 }}
          >
            ¿Ya tienes una cuenta? <a href="/login" className="font-medium text-green-600 hover:underline">Iniciar sesión</a>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}