import React from 'react'
import './loading.css'
import Lottie from 'lottie-react'
import loadingAnimation from '../../assets/loading.json'
const Loading = () => {
  return (
    <div className="loading">
      <Lottie
        animationData={loadingAnimation}
        style={{
          width: '25%',
          height: '25%',
        }}
      />
      <div className="loading-txt">
        Sizin için bahisleri hazırlıyoruz, bu biraz zaman alabilir ⏳
      </div>
    </div>
  )
}
export default Loading
