import banner from "../../assets/banner.svg"
import styles from "./Banner.module.css"
const Banner = () => {
    return (
        <header>
            <h1 className={styles.header}><img src={banner} className={styles.img}></img>French Alps</h1>
        </header>
    )
}

export default Banner;