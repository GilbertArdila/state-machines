import React,{useState} from 'react'

const Search = ({send}) => {

    const [flight, setflight] = useState('');

    const goToPassengers=()=>{
        send('CONTINUE',{country:flight});
    }

    const handleSelectChange=(e)=>{
      setflight(e.target.value)
    }

    const options=['Mexico','Venezuela','Colombia']
  return (
    <div className='Search'>
       <p className='Search-title'>Busca tu destino</p>
      <div className="Search-container">
        <select id="country" className='Search-select' value={flight} onChange={handleSelectChange}>
        <option value="" disabled defaultValue>Escoge un país</option>
        {options.map((option) => <option value={option} key={option}>{option}</option>)}
      </select>
      <button onClick={goToPassengers} disabled={flight === ''} className='Search-continue button'>Continuar</button>
      </div>
     
      
    </div>
  )
}

export  {Search}