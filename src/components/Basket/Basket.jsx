import React from 'react'
import { useBasket } from '../../hooks/useBasket'
import './style.css'
const Basket = () => {
  const { basketItems, totalPrice } = useBasket()
  return (
    <div className="basket-container">
      {basketItems && basketItems.length > 0 && (
        <>
          {basketItems.map((basketItem) => (
            <div className="basket-item" key={basketItem.NID}>
              <span>{`${basketItem.OC.MBS} Kod: ${basketItem.C} Maç: ${basketItem.N}`}</span>
              <span>
                <b>Oran: {basketItem.OC.O}</b>
              </span>
            </div>
          ))}
        </>
      )}
      <div className="basket-total">
        {totalPrice > 0
          ? `Toplam tutar: ${totalPrice.toFixed(2)} TL`
          : 'Henüz bir kupon oluşturmadınız'}
      </div>
    </div>
  )
}

export default Basket
