import { useState } from "react"
import axios from "axios"

import { Name } from "./Name.jsx"
import { Description } from "./Description.jsx"
import { ProductImg } from "./ProductImg.jsx"
import { CartButton } from "./CartButton.jsx"

export const Product = ({ initialProductData }) => {
    const [name, setName] = useState(initialProductData.name)
    const [description, setDescription] = useState(initialProductData.description)
    const [image, setImage] = useState(initialProductData.imgUrl)

    return (
        <div>
            <Name
                value={name}
            />
            <Description
                value={description}
            />
            <ProductImg
                value={image}
            />
            <CartButton />
        </div>
    )
}
