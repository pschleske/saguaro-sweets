

export const ProductImg = ({ value }) => {
    return (
        <>
            <img
                src={value}
                alt="image of candy"
                maxW={{ base: '200%', sm: '300px' }}
                maxH={{ base: '200%', sm: '300px' }}
            />
        </>
    )
}
