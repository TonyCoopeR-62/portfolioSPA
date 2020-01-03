import React, { useState, useEffect } from 'react'

const Context = React.createContext()
const url = "https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json"

function ContextProvider({children}) {    
    
    const [photos, setPhotos] = useState([])
    const [cartItems, setCartItems] = useState([])

    useEffect(() => {
        fetch(url)
            .then(resp => resp.json())
            .then(res => setPhotos(res))
    },[])

    console.log(photos)
    
    function toggleFavorite(id) {
        const updatedArr = photos.map(photo => {
            if(photo.id === id) {
                return {...photo, isFavorite: !photo.isFavorite}
            }
            return photo
        })
        setPhotos(updatedArr)
    }

    function addToCart(images) {
        setCartItems(prevItems => [...prevItems, images])
    }

    function deleteFromCart(id) {
        setCartItems(prev => prev.filter(item => item.id !== id)) 
    }

    console.log(cartItems)
    return(
        <Context.Provider value={{photos, toggleFavorite, addToCart, cartItems, setCartItems, deleteFromCart}}>
            {children}
        </Context.Provider>
    )
}

export {ContextProvider, Context} 