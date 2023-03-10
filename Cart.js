import React from "react";
// import { toast } from "react-toastify";
import { useCart } from 'react-use-cart';
import Footer from "./Footer";
import Header from "./Header";
import Swal from "sweetalert2";

const Cart = (props) => {
    const {
        isEmpty,
        totalUniqueItems,
        items,
        totalItems,
        cartTotal,
        updateItemQuantity,
        removeItem,
        emptyCart,
    } = useCart();
    if (isEmpty) return <><Header  {...props}/> <h1 className="text-center">Your Cart is Empty</h1></>
    
    const showAlert = () => {

        Swal.fire({
            title: "Success",
            text: "Order Has Been Placed Successfully!!!",
            confirmButtonText: "Ok!", 
          }, function(){
            window.location.reload();
          });
          setTimeout(function() {
            window.location.reload();
          }, 9000);
         
    }
        return (
        <>
            <Header  {...props}/>
            <section className="py-4 container">
                <div className="row justify-content-center">
                    <div className="col-12">
                        <h5>Cart ({totalUniqueItems}) total Items:({totalItems})</h5>
                        <table className="table table-light table-hover m-0">
                            <tbody>

                                {items.map((item, index) => {
                                    return (

                                        <tr key={index}>
                                            <td>
                                                <img src={item.img} style={{ height: '6rem' }} />
                                            </td>
                                            <td>
                                                {item.name}
                                            </td>
                                            <td>{item.price}</td>
                                            <td>Quantity ({item.quantity})</td>
                                            <td>
                                                <button className="btn btn-info ms-2"
                                                 onClick={()=>updateItemQuantity(item.id,item.quantity-1)}>-</button>
                                                <button className="btn btn-info ms-2" onClick={()=>updateItemQuantity(item.id,item.quantity+1)}>+</button>
                                                <button className="btn btn-danger ms-2" onClick={()=>removeItem(item.id)}>Remove Item</button>
                                            </td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </table>
                    </div>
                    <div className="col-auto ms-auto">Total Price:{cartTotal}</div>
                    <div className="col-auto"><button className="btn btn-danger m-2" onClick={()=>emptyCart()}>Clear Cart</button></div>
                    <button className="btn btn-primary" onClick={showAlert}>Buy Now</button>
                </div>
            </section>
            <Footer />
        </>
    )
}
export default Cart;