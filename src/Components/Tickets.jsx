import React from 'react'

const Tickets = ({send,context,state}) => {

   const{passengers,country}=state.context

    const finish=()=>{
       
        send('FINISH')
    }

  return (
    <div className='Tickets'>
        <p className="Tickets-description description">Gracias por volar con nosotros</p>
        <div className="Tickets-ticket">
            <div className="Tickets-ticket_country">{country}</div>
            <div className="Tickets-ticket_passengers">
                <span>✈</span>
                <h3>los pasajeros para este viaje son:{" "}{passengers.map((passenger)=>(
                    <p key={passenger}>{passenger}</p>
                ))}</h3>
            </div>
        </div>
        <button className="Tickets-ticket_finalizar button" onClick={finish}>Finalizar</button>
    </div>
  )
}

export {Tickets}