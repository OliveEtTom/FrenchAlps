import styles from "./Destination.module.css"
import cabin from "../../assets/cabin.svg"
const Destination = ({ name, location, altitude }) => {
    return (
        <div className={styles.div}>
            <img src={cabin} className={styles.img} ></img>
            <li>
                <ul className={styles.ul}>
                    <li><h2 className={styles.h2}>{name}</h2></li>
                    <li><h3 className={styles.h3}>{location}</h3></li>
                    <li><h4>{altitude}m</h4></li>
                </ul>
            </li>
        </div>
    )
}
export default Destination;