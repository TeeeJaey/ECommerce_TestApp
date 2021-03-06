import { useEffect, useState } from "react";
import axios from 'axios';
import { useHistory } from "react-router";
import { useDispatch, useSelector } from "react-redux";


export default function Cart() {
    const dispatch = useDispatch();
    const cart = useSelector(state => state.cart);
    
    let TotalAmount = 0 ;
    cart.forEach(element => {
        TotalAmount += parseFloat(element.total);
    });


    function addQty(id) {
        const action = {
            type:"ADD_QTY",
            payload:{
                id:id
            }
        };
        dispatch(action);
    };

    function remQty(id) {
        const action = {
            type:"REM_QTY",
            payload:{
                id:id
            }
        };
        dispatch(action);
    };

    function deleteItem(id) {
        const action = {
            type:"DEL_ITEM",
            payload:{
                id:id
            }
        };
        dispatch(action);
    };

    return <div style={{margin:"50px"}}>
        <div style={{display:"flex",justifyContent:"space-between"}}>
            <div><b> My Cart </b></div>
            <div><b>TOTAL AMOUNT: </b> {TotalAmount}</div>
        </div>
        <div className="product-list">
            
            {cart.map(x=>{
                return <div key={x.id} className="product-item" >
                    <img src={x.image} className="product-image"/>
                    <div>{x.title}</div>
                    <div><b>Price:</b> {x.price}</div>
                    <div> <b> Quantity: </b>
                        <button onClick={()=>remQty(x.id)}> - </button> 
                        &nbsp; {x.qty} &nbsp;
                        <button onClick={()=>addQty(x.id)}> + </button> 
                    </div>
                    <div><button onClick={()=>deleteItem(x.id)}> Delete </button></div>
                    <div> 
                        <b> Total: </b> {x.total}  
                    </div>
                </div>
            })}
        </div>
    
    </div>;
}