import { useState, useEffect, useRef } from 'react'

function useHover() {

    const ref = useRef(null)

    
    const [isHovered, setHover] = useState(false)
    
    function leave() {
        setHover(false)
    }

    function enter() {
        setHover(true)
    }

    useEffect(() => {
        ref.current.addEventListener("mouseenter", enter)
        ref.current.addEventListener("mouseleave", leave)
        
        return () => {    
            ref.current.removeEventListener("mouseenter", enter)
            ref.current.removeEventListener("mouseleave", leave)
        }
    }, [])


    return [isHovered, ref]
}

export default useHover