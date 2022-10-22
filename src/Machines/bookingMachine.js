import { createMachine } from "xstate";

const bookingMachine=createMachine({
    
    id:'buy plane tickets',
    initial:'initialState',
    states:{
        initialState:{
            on:{
                START:'search'
            }
        },
        search:{
            on:{
                CONTINUE:'passengers',
                CANCEL:'initialState'
            }
        },
        passengers:{
            on:{
                CONTINUE:'tickets',
                CANCEL:'initialState'
            }
        },
        tickets:{
            on:{
                FINISH:'initialState'
            }
        }
    }
})
export {bookingMachine}