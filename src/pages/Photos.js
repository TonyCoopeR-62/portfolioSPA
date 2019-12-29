import React, {useContext} from "react"

import Image from "../components/Image"
import {Context} from "../components/useContext"
import {getClass} from "../utils/index"

function Photos() {
    const {photos} = useContext(Context)
    
    const imageElements = photos.map((img, i) => (
        <Image key={img.id} img={img} className={getClass(i)} />
    ))
    
    return (
        <main className="photos">
            {imageElements}
        </main>
    )
}

export default Photos