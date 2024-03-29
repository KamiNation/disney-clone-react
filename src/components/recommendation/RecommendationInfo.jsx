import styles from "../css/Info.module.css"


function Info(props) {
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

export default Info
