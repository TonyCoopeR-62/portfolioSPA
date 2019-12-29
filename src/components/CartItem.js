import React, { useContext } from "react"
import {Context} from '../components/useContext'
import useHover from '../hooks/useHover'

function CartItem({item}) {

    const {deleteFromCart, } = useContext(Context)
    const [isHovered, ref] = useHover()
    const classIcon = isHovered ? "ri-delete-bin-fill" : "ri-delete-bin-line"

    return (
        <div className="cart-item">
            <i className={classIcon} 
            ref={ref} 
            onClick={() => deleteFromCart(item.id)}
            ></i>
            <img alt="pics" src={item.url} width="130px" />
            <p>$5.99</p>
        </div>
    )
}

export default CartItem