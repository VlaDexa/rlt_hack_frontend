import style from "./RatingHeader.module.css";
import filled_heart from "../assets/filled_heart.svg";
import {useEffect, useState} from "react";
import {ApiService} from "../openapi";

export function RatingHeader() {
    const [citiesQuery, setCitiesQuery] = useState<string>();
    const [cities, setCities] = useState<string[]>(["Moscow"]);
    const [isCitiesFilterOpened, setCitiesFilterOpened] = useState(false);

    useEffect(() => {
        ApiService.getCitiesApiGetAllCitiesGet(citiesQuery).then(setCities)
    }, [citiesQuery])

    return (
        <thead className={style.thead}>
            <tr>
                <th>ИНН</th>
                <th className={"align-middle"} onClick={() => {setCitiesFilterOpened((prev) => !prev)}}>
                    Город
                    <div className={`${style.dropdown_content} ${style.cities_dropdown}`} style={{display: isCitiesFilterOpened ? "block" : "none"}}>
                            <input className={style.cities_input} placeholder={"Выберите город"} onKeyUp={(event) => {setCitiesQuery(event.currentTarget.value)}}/>
                        {cities.map((el) => <p className={style.cities_option}>{el}</p>)}
                    </div>
                </th>
                <th className={"align-middle"}>Форма организации</th>
                <th className={"align-middle"}>Количество удачных сделок</th>
                <th className={"align-middle"}>Рейтинг доверия</th>
                <th className={"align-middle"}>Только "Доверяю"<img src={filled_heart}></img></th>
            </tr>
        </thead>
    );
}