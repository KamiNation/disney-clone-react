import styles from "../css/News.module.css"


function News(props) {
    const { productImage, productDesc, month, day, year } = props

    return (
        
        <div className={styles.card}>
            <img id={styles.img} src={productImage} alt="" />
            <div className={styles.container}>
                <p>News</p>
                <h4>{productDesc}</h4>
                <p> {month} {day}, {year}    </p>
            </div>
        </div>
    
        
    )
}

export default News
