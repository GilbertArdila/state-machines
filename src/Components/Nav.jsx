import React from 'react'

const Nav = ({ state, send }) => {

    const handleGoToWelcome = () => {
        send('CANCEL')
    }
    
    return (
        <nav className='Nav'>
            <h1 className='Nav-logo'>Book a fly ✈ </h1>

            {!state.matches('initialState') && <button className='Nav-cancel button' onClick={handleGoToWelcome}>Cancelar</button>}

        </nav>
    )
}

export { Nav }