import { useEffect, useState } from "react";
import axios from 'axios';
import { useHistory } from "react-router";

const apiURL= "https://fakestoreapi.com/products";

export default function ProductList() {
    const [list, setList] = useState([]);
    const history = useHistory()

    useEffect(()=>{
       axios.get(apiURL).then(res=>{
        setList(res.data);
       });
    },[])

    return <div className="product-list">
        {list.map(x=>{
            return <div key={x.id} className="product-item" onClick={() => history.push('/' + x.id)} >
                <img src={x.image} className="product-image"/>
                <div>{x.title}</div>
                <div>{x.price}</div>
            </div>
        })}
    </div>;
}