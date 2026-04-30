import { useState, useEffect } from 'react'

interface Product {
  id: string
  name: string
  description: string
  quantity: number
  category: string
}

export const useStock = () => {
  const [stock, setStock] = useState<Product[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const fetchStock = async () => {
    try {
      setLoading(true)
      // Usamos la IP de tu notebook
      const response = await fetch('http://192.168.1.39:3000/api/products')
      if (!response.ok) throw new Error('Error al conectar con el servidor')

      const data = await response.json()
      setStock(data)
      setError(null)
    } catch (err: any) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchStock()
  }, [])

  // Función para eliminar (puedes luego conectarla al DELETE del backend)
  const removeProduct = (id: string) => {
    setStock((prev) => prev.filter((item) => item.id !== id))
  }

  return { stock, loading, error, refresh: fetchStock, removeProduct }
}
