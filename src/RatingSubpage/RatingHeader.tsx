import style from "./RatingHeader.module.css";
import filled_heart from "../assets/filled_heart.svg";
import heart from "../assets/heart.svg";
import {Dispatch, SetStateAction, useEffect, useState} from "react";
import {ApiService} from "../openapi";
import triangle from "../assets/table_triangle.svg";

type CityInfo = {
    name: string;
    selected: boolean,
}

export function RatingHeader(props: {setCities: Dispatch<SetStateAction<string[]>>, setOnlyLiked: Dispatch<SetStateAction<boolean>>, setSuccessDeals: Dispatch<SetStateAction<boolean>>}) {
    const [citiesQuery, setCitiesQuery] = useState<string>();
    const [cities, setCities] = useState<CityInfo[]>([]);
    const [isCitiesFilterOpened, setCitiesFilterOpened] = useState(false);
    const [onlyLiked, setOnlyLikedHeader] = useState(false);
    const [isAmountDealsFilterOpened, setAmountDealsFilterOpened] = useState(false);

    useEffect(() => {
        ApiService.getCitiesApiGetAllCitiesPost(citiesQuery).then((gotCities) =>
            {
                setCities(prev => {
                    return gotCities.map(el => {
                        const wasSelected = prev.filter(pel => pel.name === el)[0]?.selected ?? false;
                        return {name: el, selected: wasSelected}
                    });
                })
            }
        )
    }, [citiesQuery])

    useEffect(() => {
        props.setOnlyLiked(onlyLiked);
    }, [onlyLiked])

    function addCity() {
        props.setCities(cities.filter(el => el.selected).map(el => el.name));
    }

    let [success_filter, setSuccessFilter] = useState(false);

    useEffect(() => {
        props.setSuccessDeals(success_filter);
    }, [success_filter])

    return (
        <thead className={style.thead}>
            <tr>
                <th>ИНН</th>
                <th className={"align-middle"}>
                    <div onClick={() => {setCitiesFilterOpened((prev) => !prev)}}>
                        Регион
                        <img className={`${style.triangle} ${isCitiesFilterOpened ? style.rotated_triangle : null}`} src={triangle} alt={""}/>
                    </div>
                    <div className={`${style.dropdown_content} ${style.cities_dropdown}`} style={{display: isCitiesFilterOpened ? "block" : "none"}}>
                            <input className={style.cities_input} placeholder={"Выберите город"} onKeyUp={(event) => {setCitiesQuery(event.currentTarget.value)}}/>
                        {
                            cities.map((el) => <p key={el.name} className={`${style.cities_option} ${el.selected ? style.selected : null}`} onClick={() => {
                            el.selected = !el.selected;
                            addCity();
                        }}>{el.name}</p>)}
                    </div>
                </th>
                <th className={"align-middle"}>Форма организации</th>
                <th className={"align-middle"} onClick={() => {setSuccessFilter(prev => !prev)}}>
                    <div onClick={() => setAmountDealsFilterOpened(prev => !prev)}>
                        Количество удачных сделок
                        <img src={`${triangle}`} className={`${style.triangle} ${!success_filter ? style.rotated_triangle : null}`} alt={""}/>
                    </div>
                    {/*<div className={`${style.dropdown_content} ${style.deals_options}`} style={{display: isAmountDealsFilterOpened ? "block" : "none"}}>*/}
                    {/*    <fieldset className={style.deals_fieldset}>*/}
                    {/*        <div>*/}
                    {/*            <input type="radio" id="small" />*/}
                    {/*            <label htmlFor={"small"} className={"deals_labels"}>0-10</label>*/}
                    {/*        </div>*/}
                    {/*        <div>*/}
                    {/*            <input type="radio" id="medium" />*/}
                    {/*            <label htmlFor={"medium"} className={"deals_labels"}>11-50</label>*/}
                    {/*        </div>*/}
                    {/*        <div>*/}
                    {/*            <input type="radio" id="large" />*/}
                    {/*            <label htmlFor={"large"} className={"deals_labels"}>51-100</label>*/}
                    {/*        </div>*/}
                    {/*        <div>*/}
                    {/*            <input type="radio" id="biggest" />*/}
                    {/*            <label htmlFor={"biggest"} className={"deals_labels"}>51-100</label>*/}
                    {/*        </div>*/}
                    {/*    </fieldset>*/}
                    {/*</div>*/}
                </th>
                <th className={"align-middle"}>Основной рейтинг<img src={`${triangle}`} className={`${style.triangle} ${success_filter ? style.rotated_triangle : null}`} alt={""}/></th>
                <th className={"align-middle"}>Предсказание успеха</th>
                <th className={"align-middle"}>Только "Доверяю"<img src={onlyLiked ? filled_heart : heart} alt={""} onClick={() => setOnlyLikedHeader(prev => !prev)}></img></th>
            </tr>
        </thead>
    );
}