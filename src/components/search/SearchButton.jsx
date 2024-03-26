import styles from "../css/Search.module.css"

function Search (){

    return(
            <div>
            <input id={styles.input} type="text" placeholder="Search within" name="search" />
            <button id={styles.button} type="submit"></button>
            </div>
    )


}

export default Search