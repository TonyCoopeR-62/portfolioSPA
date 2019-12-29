import React, { useContext } from "react"
import {Context} from "./useContext"
import PropTypes from 'prop-types'
import useHover from '../hooks/useHover'


function Image({className, img}) {

    const [isHovered, ref] = useHover()

    const {toggleFavorite, addToCart, cartItems, deleteFromCart} = useContext(Context)
    
    function heartIcon() {

        if (img.isFavorite) {
            return <i className="ri-heart-fill favorite" onClick={() => toggleFavorite(img.id)}></i>
        } else if (isHovered) {
            return isHovered && <i className="ri-heart-line favorite" onClick={() => toggleFavorite(img.id)}></i>
        } 
    }
    
    function cartIcon() {

        const inCart = cartItems.some(item => item.id === img.id)
        
        if (inCart) {
            return <i className="ri-shopping-cart-fill cart" onClick={() => deleteFromCart(img.id)}></i>
        } else if (isHovered) {
            return <i className="ri-add-circle-line cart" onClick={() => addToCart(img)}></i>
        }
    }
  
    return (
        <div 
            className={`${className} image-container`}
            ref={ref}
        >
            <img alt="pic" src={img.url} className="image-grid"/>
            {heartIcon()}
            {cartIcon()}
        </div>
    )
}

Image.propTypes = {
    className: PropTypes.string,
    img: PropTypes.shape({
        url: PropTypes.string.isRequired,
        id: PropTypes.string.isRequired,
        isFavorite: PropTypes.bool
    })
}

export default Image
