import React, { useState } from 'react'

const Search = ({ send, state }) => {

  const [flight, setflight] = useState('');
  const [flightDate, setFlightDate] = useState('');

  const goToPassengers = () => {
    send('CONTINUE', { country: flight,date: flightDate });

  }

  const handleSelectChange = (e) => {
    setflight(e.target.value)
  }
  const handleDateChange = (e) => {
    setFlightDate(e.target.value)

  }

  const options = state.context.countries;
  return (
    <div className='Search'>
      <p className='Search-title'>Busca tu destino</p>
      <div className="Search-container">
        <select id="country" className='Search-select' value={flight} onChange={handleSelectChange}>
          <option value="" disabled defaultValue>Escoge un país</option>
          {options.map((option) => <option value={option.name.common} key={option.name.common}>{option.name.common}</option>)}
        </select>
        <input className='Search-container_date' type={'date'} value={flightDate} onInput={handleDateChange} />

        <button onClick={goToPassengers} disabled={flight === '' || flightDate === ''} className='Search-continue button'>Continuar</button>
      </div>


    </div>
  )
}

export { Search }