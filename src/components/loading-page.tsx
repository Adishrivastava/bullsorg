import React from 'react'

interface Props {

}

const LoadingPage = (props: Props) => {
   return (
      <div className="loading-page">
         <img src="/assets/icons/loader.svg" className="loader" alt="" />
         <img src="/assets/logos/logoBull.png" className="bull" alt="" />
      </div>
   )
}

export default LoadingPage
