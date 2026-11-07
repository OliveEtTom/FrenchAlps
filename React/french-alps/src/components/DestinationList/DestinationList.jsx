import { destinationList } from "../../data/DestinationList";
import Destination from "../Destination/Destination";
import styles from "./DestinationList.module.css"
const DestinationList = () => {
    return (
        <div>
            <h1>Destinations</h1>
            <ul className={styles.ul}>
                {destinationList.map(({ id, name, location, altitude }) => (
                    <div key={id}>
                        <Destination name={name} location={location} altitude={altitude} />
                    </div>
                ))
                }
            </ul >
        </div >
    )
}

export default DestinationList;