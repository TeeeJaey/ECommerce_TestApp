
import { createStore } from "redux";

const initState={cart:[]};
function reducer(state=initState, action) 
{
    switch(action.type) 
    {
        case "ADD_TO_CART" : {
            const newState = {...state};
            newState.cart = [...state.cart]
            const item =action.payload.item;
            item.qty = 1;
            item.total = item.qty * item.price;
            newState.cart.push(item);
            
            return newState;
        }
        
        
        case "ADD_QTY" : {
            const newState = {...state};
            newState.cart = [...state.cart]
            const item = newState.cart.find(x=>x.id==action.payload.id);
            item.qty++;
            item.total = item.qty * item.price;
            return newState;
        }

        case "REM_QTY" : {
            const newState = {...state};
            newState.cart = [...state.cart]
            const item = newState.cart.find(x=>x.id==action.payload.id);

            if(item.qty == 1) {
                const index = newState.cart.indexOf(item);
                newState.cart.splice(index,1);
            }
            else {
                item.qty--;
                item.total = item.qty * item.price;
            }
            return newState;
        }

        case "DEL_ITEM" : {
            const newState = {...state};
            newState.cart = [...state.cart]
            const item = newState.cart.find(x=>x.id==action.payload.id);

            const index = newState.cart.indexOf(item);
            newState.cart.splice(index,1);

            return newState;
        }

        default: 
            return state;
    }

}






//#region "Redux Store"
const store  = createStore(reducer);
export default store;
//#endregion
