import { destinationList } from "../../data/DestinationList";
import styles from "./DestinationList.module.css"
const DestinationList = () => {
    return (
        <div>
            <h1>Destinations</h1>
            <ul className={styles.ul}>
                {destinationList.map(({ id, name, location, altitude }) => (
                    <div key={id}>
                        <li>
                            <ul className={styles.ul}>
                                <li>{name}</li>
                                <li>{location}</li>
                                <li>{altitude}</li>
                            </ul>
                        </li>
                    </div>
                ))}
            </ul>
        </div>
    )
}

export default DestinationList;