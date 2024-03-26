import styles from "../css/News.module.css"


function News(props) {
    const { productImage, productDesc, month, day, year } = props

    return (
        <div>
            <img src={productImage} alt="" />
            <p>News</p>
            <h4>{productDesc}</h4>
            <p> {month}{day},{year}    </p>
        </div>
    )
}

export default News
