import React,{useState} from 'react'

const Search = ({send}) => {

    const [fly, setFly] = useState('');

    const goToPassengers=()=>{
        send('CONTINUE');
    }

    const handleSelectChange=(e)=>{
        setFly(e.target.value)
    }

    const options=['Mexico','Venezuela','Colombia']
  return (
    <div className='Search'>
      <p className='Search-title'>Busca tu destino</p>
      <select id="country" className='Search-select' value={fly} onChange={handleSelectChange}>
        <option value="" disabled defaultValue>Escoge un país</option>
        {options.map((option) => <option value={option} key={option}>{option}</option>)}
      </select>
      <button onClick={goToPassengers} disabled={fly === ''} className='Search-continue button'>Continuar</button>
    </div>
  )
}

export  {Search}