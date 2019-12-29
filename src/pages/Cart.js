import React, {useContext, useState} from "react"
import {Context} from "../components/useContext"
import CartItem from "../components/CartItem"

function Cart() {
    const {cartItems, setCartItems} = useContext(Context)
    const totalCost = 5.99 * cartItems.length
    const costLocale = totalCost.toLocaleString("en-US", {style: "currency", currency: "USD"})
    const orderTextDefault = 'Place order'
    const [orderText, setOrderText] = useState(orderTextDefault)

    const cartItemElements = cartItems.map(item => (
        <CartItem key={item.id} item={item} />
    ))
    
    

    function order() {
        setOrderText('Ordering...')
        setTimeout(() => {
            setCartItems([])
            setOrderText(orderTextDefault)    
            console.log('order placed!')
        }, 3000);
    }

    return (
        <main className="cart-page">
            <h1>Check out</h1>
            {cartItemElements}
            <p className="total-cost">Total: {costLocale}</p>
            {cartItems.length === 0 ? <p>You have no items in your cart.</p> :
                <div className="order-button">
                <   button onClick={order}>{orderText}</button>
                </div>
            }
        </main>
    )
}

export default Cart