import styles from "../css/MovieList.module.css"


function MovieList(props) {
    const { productImage, productName, productDesc } = props

    return (
        <div className={styles.card}>
            <img id={styles.img} src={productImage} alt="" />
            <div className={styles.container}>
            <p>{productName}</p>
            <h4>{productDesc}</h4>
            </div>
        </div>
    )
}

export default MovieList


