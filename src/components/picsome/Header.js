import React, { useContext } from "react"
import {Link} from "react-router-dom"
import {Context} from './useContext'

function Header() {

    const {cartItems} = useContext(Context)
    const cartClass = cartItems.length === 0 ? "ri-shopping-cart-line ri-fw ri-2x" : "ri-shopping-cart-fill ri-fw ri-2x"
    const divStyle = {
        'display':'flex',
        'align-items':'center',
        'width':'30%',
        'justify-content':'space-around'
    }
    
    return (
        <header>
            <div style={divStyle}>
                <Link to="/"><h2>Pic Some</h2></Link>
            
            <Link to="/cart">
                <i className={cartClass}></i>
            </Link>
            </div>
            <Link to="/weatherblock">
                <h2>Weather App</h2>
            </Link>

            <Link to="/memegenerator">
                <h2>Meme Generator</h2>
            </Link>

            <Link to="/gameapp">
                <h2>Speedtyping game</h2>
            </Link>
        </header>
    )
}

export default Header