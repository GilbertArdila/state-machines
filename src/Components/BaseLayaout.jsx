import React from 'react';
import { useMachine } from '@xstate/react';
import { bookingMachine } from '../Machines/bookingMachine';
import { StepsLayout } from '../Containers/StepsLayout';
import { Nav } from './Nav';


const BaseLayaout = () => {
  const [state, send] = useMachine(bookingMachine);
  console.log(state.value,state.context)

  return (
    <div className='BaseLayout'>
      <Nav send={send} state={state}
      />
      <StepsLayout send={send} state={state} />
    </div>
  )
}

export { BaseLayaout }