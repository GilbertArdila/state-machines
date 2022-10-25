import { createMachine ,assign} from "xstate";
import { fetchCountries } from "../Utils/api";

const fillCountries={
    initial:'loading',
    states:{
        loading:{
           invoke:{
            id:'getCountries',
            src:()=>fetchCountries,
            onDone:{
                target:'success',
                actions:assign({
                    countries:(context,event)=>event.data
                })
            },
            onError:{
                target:'failure',
                actions:assign({
                    error:'Falló request'
                })
            }
           }
        },
        success:{},
        failure:{
            on:{
                RETRY:{target:'loading'}
            }
        }
    }
}


const bookingMachine=createMachine({
    
    id:'buy plane tickets',
    initial:'initialState',
    context:{
        passengers:[],
        country:'',
        countries:[],
        date:'',
        error:'',
       
    },
    states:{
        initialState:{
            on:{
                START:{
                    target:'search'
                }
            }
        },
        search:{
           
            on:{
                CONTINUE:{
                    target:'passengers',
                    actions:'setCountry'
                },
                CANCEL:'initialState'
            },
            ...fillCountries
        },
       
        passengers:{
            on:{
                CONTINUE:{
                    target:'tickets',
                    cond:'checkPassengers'
                },
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
            after:{
                20000:{
                    target:'initialState',
                    actions:'deleteContext'
                }
            },
            on:{
                FINISH:{
                    target:'initialState',
                    actions:'deleteContext'
                }
            }
        }
    }
},
{
    actions:{
        setCountry:assign({
            country:(context,event)=>event.country,
            date:(context,event)=>event.date
        }),
        setPassengers:assign(
            (context,event)=>context.passengers.push(event.newPassenger)
        ),
        deleteContext:assign((context)=>
          {
            context.country='',
            context.passengers=[]
            return context
          }

        )
       
    },
    guards:{
        checkPassengers:(context)=>{
            return context.passengers.length>0
        }
    }
})
export {bookingMachine}