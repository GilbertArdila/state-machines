import React from 'react'

const Tickets = ({send,context}) => {

    const finish=()=>{
        send('FINISH')
    }

  return (
    <div className='Tickets'>
        <p className="Tickets-description">Gracias por volar con nosotros</p>
        <div className="Tickets-ticket">
            <div className="Tickets-ticket_country">Colombia</div>
            <div className="Tickets-ticket_passengers">
                <span>✈</span>
            </div>
        </div>
        <button className="Tickets-ticket_finalizar" onClick={finish}>Finalizar</button>
    </div>
  )
}

export {Tickets}