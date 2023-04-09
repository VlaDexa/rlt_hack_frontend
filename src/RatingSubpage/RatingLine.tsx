import heart from "./../assets/heart.svg";
import filled_heart from "./../assets/filled_heart.svg";
import styles from "./RatingLine.module.css";
import map_point from "./../assets/map_point.svg"
import hammer from "./../assets/hammer.svg";
import {useState} from "react";

export function RatingLine({inn, city, org_type, rating, successful_trades}:
    {
        inn: number,
        city: string,
        org_type: string,
        successful_trades: number,
        rating: number
    }
) {
    const [liked, setLiked] = useState<boolean>(() => {
        const storedItem = localStorage.getItem(inn.toString());
        return (storedItem && storedItem === "true") || false;
    });

    function setLikedAndStore(liked: boolean) {
        setLiked(liked);
        localStorage.setItem(inn.toString(), liked ? "true" : "false");
    }

    return (
        <tr className={styles.row}>
            <td>
                {inn}
            </td>
            <td>
                <img className={styles.mini_logo} src={map_point} alt={""}/>
                {city}
            </td>
            <td>
                {org_type}
            </td>
            <td>
                <img className={styles.mini_logo} src={hammer} alt={""}/>
                {successful_trades}
            </td>
            <td>
                {rating}
            </td>
            <td>
                <img src={liked ? filled_heart: heart} alt={"Лайкнуть"} onClick={(event) => setLikedAndStore(!liked)}/>
            </td>
        </tr>
    )
}