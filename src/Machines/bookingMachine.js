import { createMachine ,assign} from "xstate";

const bookingMachine=createMachine({
    
    id:'buy plane tickets',
    initial:'initialState',
    context:{
        passengers:[],
        country:'',
    },
    states:{
        initialState:{
            on:{
                START:{
                    target:'search',
                   
                }
            }
        },
        search:{
           
            on:{
                CONTINUE:{
                    target:'passengers',
                    actions:'setCountry'
                },
                CANCEL:{
                    target:'initialState',
                    actions:'deleteContext'
                }
            }
        },
        passengers:{
            on:{
                CONTINUE:'tickets',
                CANCEL:{
                    target:'initialState',
                    actions:'deleteContext'
                },
                ADD:{
                    target:'passengers',
                    actions:'setPassengers'
                }
            }
        },
        tickets:{
            on:{
                FINISH:'initialState'
            }
        }
    }
},
{
    actions:{
        setCountry:assign({
            country:(context,event)=>event.country
        }),
        setPassengers:assign(
            (context,event)=>context.passengers.push(event.newPassenger)
        ),
        deleteContext:assign(
          {
            country:'',
            passengers:[]
          }

        )
       
    }
})
export {bookingMachine}