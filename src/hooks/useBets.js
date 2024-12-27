import { useEffect, useState } from 'react'
import { getBetsData } from '../services/bet'
import useLoading from './useLoading'
const useBets = () => {
  const { loading, setLoading } = useLoading()
  const [bets, setBets] = useState([])

  const getBets = async () => {
    setLoading(true)
    try {
      const bets = await getBetsData()
      setBets(bets)
    } catch (err) {
      console.error('Error:', err)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    getBets()
  }, [])

  return { bets, loading }
}

export default useBets
