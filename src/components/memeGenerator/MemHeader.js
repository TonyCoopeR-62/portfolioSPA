import React from 'react'

function Header (props) {
    return (
        <header style={props.style.header}>
            <img src="http://www.pngall.com/wp-content/uploads/2016/05/Trollface.png" alt="problem?" style={props.style.headerImg}></img>
            <p style={props.style.headerP}>Meme generator</p>
        </header>
    )
}

export default Header