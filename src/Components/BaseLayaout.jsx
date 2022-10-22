import React from 'react';
import { useMachine } from '@xstate/react';
import { bookingMachine } from '../Machines/bookingMachine';

const BaseLayaout = () => {
    const[state,send]=useMachine(bookingMachine);
    console.log(`maquina state`,state)

  return (
    <div>BaseLayaout</div>
  )
}

export { BaseLayaout}