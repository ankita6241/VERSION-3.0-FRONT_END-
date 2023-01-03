import React from "react";
import {useCart} from 'react-use-cart';
const Card=(props)=>{
    const {addItem}= useCart();
    return(
        <div className="col-11 col-md-6 col-lg-3 mx-0 mb-4">
            <div class="card p-0 overflow-hidden h-100 img-fluid" >
                <img src={props.img} className="card-img-top img-fluid"/>
                <div className="card-body">
                    <h5 className="card-title">{props.name}</h5>
                    <p className="card-text">{props.price}</p>
                    <button className="btn btn-success" onClick={()=>addItem(props.item)}>ADD</button>
                </div>
            </div>
        </div>
    )
}
export default Card; 