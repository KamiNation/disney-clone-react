import styles from "../css/Navbar.module.css"
import Search from "../search/SearchButton"


function Navbar() {
    return (
        <section id={styles.navbar}>
            <a href="https://www.disney.co.jp/"><img src="https://lumiere-a.akamaihd.net/v1/images/disney_logo_c77826a6.png?region=0,0,300,150" alt="" id={styles.disneyImage} /></a>
            
            <ul id={styles.ul}>
                
            <li className={styles.li}><a href=""  className={styles.a}>Disney Plus</a></li>
            <li className={styles.li}>   <a href=""  className={styles.a}>Shopping</a></li>
            <li className={styles.li}> <a href=""  className={styles.a}>Movie</a></li>
            <li className={styles.li}>  <a href=""  className={styles.a}>TV</a></li>
            <li className={styles.li}>    <a href=""  className={styles.a}>Parks & Resort</a></li>
            <li className={styles.li}>   <a href=""  className={styles.a}>Music</a></li>
            <li className={styles.li}>  <a href=""  className={styles.a}>Live & Events</a></li>
            <li className={styles.li}> <a href=""  className={styles.a}>Game</a></li>
            <li className={styles.li}> <a href=""  className={styles.a}>Kids</a></li>
            <li className={styles.li}> <a href=""  className={styles.a}>Company Information</a></li>
              
            </ul>

            <Search/>
        </section>
    )
}

export default Navbar