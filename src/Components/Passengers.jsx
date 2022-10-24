import React,{useState} from 'react'

 const Passengers = ({send,state}) => {
    const [value, setValue] = useState('');

    const handleOnChange=(e)=>{
       setValue(e.target.value)
    }

    const goToTicket=()=>{
        send('CONTINUE')
    }

    const handleSubmit=(e)=>{
     e.preventDefault();
     setValue('');
    }
  return (
    <form onSubmit={handleSubmit} className='Passengers'>
      <p className='Passengers-title'>Agrega a las personas que van a volar ✈️</p>
      <input 
        id="name" 
        name="name" 
        type="text" 
        placeholder='Escribe el nombre completo' 
        required 
        value={value} 
        onChange={handleOnChange}
      />
      <div className='Passengers-buttons'>
        <button 
          className='Passengers-add button-secondary'
          type="submit"
        >
          Agregar Pasajero
        </button>
        <button
          className='Passenger-pay button'
          type="button"
          onClick={goToTicket}
        >
          Ver mi ticket
        </button>
      </div>
    </form>
  )
}
export {Passengers}