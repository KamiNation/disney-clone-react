import styles from "../css/Pixar.module.css"

function Pixar(props) {
    const { productImage } = props

    return (
        
        <div className={styles.card}>
            <img id={styles.img} src={productImage} alt="" />
            
        </div>
    
        
    )
}

export default Pixar
