function Character(props) {
    const { productImage, productName, productDesc } = props

    return (
        <div>
            <img src={productImage} alt="" />
            <div>
                <p>{productName}</p>
                <h4>{productDesc}</h4>
            </div>
        </div>
    )
}

export default Character
