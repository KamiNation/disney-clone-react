import styles from "../css/MovieList.module.css"


function MovieList(props) {
    const { productImage, productName, productDesc } = props

    return (
        <div>
            <img src={productImage} alt="" />
            <p>{productName}</p>
            <h4>{productDesc}</h4>
        </div>
    )
}

export default MovieList


