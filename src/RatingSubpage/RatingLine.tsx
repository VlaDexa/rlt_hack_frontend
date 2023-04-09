import heart from "./../assets/heart.svg";
import filled_heart from "./../assets/filled_heart.svg";
import styles from "./RatingLine.module.css";
import map_point from "./../assets/map_point.svg"
import hammer from "./../assets/hammer.svg";
import {useState} from "react";
import {OrganizationForm} from "./RatingTable";
import yellow from "./../assets/yellow_rating.svg";
import green from "./../assets/green_rating.svg";
import red from "./../assets/red_rating.svg";

export function RatingLine({inn, city, org_type, rating, successful_trades, onlyLiked, add}:
    {
        inn: string,
        city: string,
        org_type: OrganizationForm,
        successful_trades: number,
        rating: number,
        onlyLiked: boolean,
        add: number,
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

    if (onlyLiked && !liked) return (<div></div>);

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
                {org_type == OrganizationForm.UL ? "Юридическое лицо" : "ИП"}
            </td>
            <td>
                <img className={styles.mini_logo} src={hammer} alt={""}/>
                {successful_trades}
            </td>
            <td>
                <div className={`${styles.rating} ${rating > 50 ? styles.green : rating > 30 ? styles.yellow: styles.red}`}><img src={rating > 50 ? green : rating > 30 ? yellow: red} alt={""}/>{rating}%</div>
            </td>
            <td>
                {add}
            </td>
            <td>
                <img src={liked ? filled_heart: heart} alt={"Лайкнуть"} onClick={() => setLikedAndStore(!liked)}/>
            </td>
        </tr>
    )
}