import { useCallback, useMemo } from 'react'
import { useBasketContext } from '../contexts/basket'

export const useBasket = () => {
  const { basketItems, setBasketItems } = useBasketContext()

  const totalPrice = useMemo(() => {
    if (basketItems.length === 0) {
      return 0
    }

    return basketItems.reduce((acc, item) => {
      return acc * item.OC.O
    }, 1)
  }, [basketItems])

  const isBetSelected = useCallback(
    (betId, ocId) => {
      return basketItems.some((item) => item.NID === betId && item.OC.ID === ocId)
    },
    [basketItems],
  )

  const toggleBet = (bet, oc) => {
    const basketItem = {
      NID: bet.NID,
      C: bet.C,
      N: bet.N,
      OC: oc,
    }

    const betIdx = basketItems.findIndex((item) => item.NID === bet.NID)
    if (betIdx === -1) {
      setBasketItems((items) => [...items, basketItem])
      return
    }
    if (basketItems[betIdx].OC.ID === oc.ID) {
      setBasketItems((items) => items.filter((item) => item.NID !== bet.NID))
      return
    }
    const updateItems = [...basketItems]
    updateItems[betIdx] = basketItem
    setBasketItems(updateItems)
  }

  return { basketItems, toggleBet, isBetSelected, totalPrice }
}
