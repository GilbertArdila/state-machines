import React from 'react';
import { Passengers, Search, Tickets, Welcome } from '../Components';

const StepsLayout = ({state,send}) => {
  
    const renderContent=()=>{
        if(state.matches('initialState')) return <Welcome send={send}/>
        if(state.matches('search')) return <Search send={send}/>

        if(state.matches('tickets')) return <Tickets send={send} state={state}/>

        if(state.matches('passengers')) return <Passengers send={send} state={state}/>

        return null;
       
    }
  return (
    <div className='StepsLayout'>
        {renderContent()}</div>
  )
}

export  {StepsLayout}