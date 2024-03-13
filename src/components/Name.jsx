import { useState } from "react"

export const Name = ({ initialProductData }) => {
    const [name, setName] = useState(initialProductData.name)

    return (
        <div> {name} </div>
    )
}
