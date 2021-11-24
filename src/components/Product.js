import { useEffect, useState } from "react";
import axios from 'axios';
import { useHistory, useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";

const apiURL= "https://fakestoreapi.com/products/";

export default function Product(props) {
    const history = useHistory();
    const dispatch = useDispatch();
    let { id } = useParams();
    const [x, setX] = useState([]);

    useEffect(()=>{
       axios.get(apiURL + id).then(res=>{
        setX(res.data);
       });
    },[]);

    function addToCart(x) {
        const action = {
            type:"ADD_TO_CART",
            payload:{
                item:x
            }
        };
        dispatch(action);
        history.push('/cart');
    }

    return <div> 
        <div key={x.id} className="product-page-item" >
            <img src={x.image} className="product-page-image"/>
            <div className="product-page-details">
                <div><b>Title : </b>{x.title}</div>
                <div><b>Price :</b> {x.price}</div>
                <div><b>Category :</b> {x.category}</div>
                <div><b>Description :</b> {x.description}</div>
                <br/>

                <div>
                    <button className="add-cart" onClick={()=> addToCart(x)}> Add to Cart</button>
                </div>
            </div>
        </div>
    </div>;
}