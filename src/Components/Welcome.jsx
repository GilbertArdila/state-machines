import React from 'react'

const Welcome = ({send,state}) => {
    const startBooking=()=>{
        send('START')
    }
    
  return (
    <div className='Welcome'>
    <h2 className='Welcome-title title'>¡Hoy es el día!</h2>
    <p className='Welcome-description description'>Compra tu vuelo y conoce un nuevo rincón del mundo, te van a sorprender las maravillas que hay por explorar</p>
    <button onClick={startBooking} className='Welcome-cancel button '>Comenzar</button>
  </div>
  )
}

export { Welcome}