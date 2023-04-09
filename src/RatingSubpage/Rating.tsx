import arrow from "../assets/arrow.svg";
import "./Rating.css";
import "../styles_from_site.css";
import React, {useState} from "react";
import magn_glass from "../assets/magn_glass.svg";
import {RatingTable} from "./RatingTable";
import {OrdererSelector} from "./OrdererSelector";

export enum Orderer {
    Orderer,
    Postavshik
}

export function Rating() {
    const [inn_query, setInnQuery] = useState("");
    const [orderer, setOrderer] = useState(Orderer.Orderer);
    const [upperLimit, setUpperLimit] = useState(20);

    return (
        <div className={"rating-wrapper"}>
        <div className={"rating content-wrapper--intro"}>
            <div className={"route"}>
                <p className={"prev-route"}>Главная</p>
                <img className={"arrow"} src={arrow} alt={""}></img>
                <p className={"current-route"}>Рейтинг заказчиков и поставщиков</p>
            </div>
            <h2 className={"rating-title"}>Рейтинг заказчиков</h2>
            <OrdererSelector type={orderer} setType={setOrderer}/>
            <div className={"search-line"}>
                <input className={"rating-input"} type={"search"} placeholder={"Введите ИНН"} pattern={"d*"} onKeyUp={(event) => {setInnQuery(event.currentTarget.value)}}/>
                <button className={"button button--primary search-button"}>
                    <img className={"magn-glass"} src={magn_glass} alt={""}/>
                    Найти
                </button>
            </div>
            <RatingTable inn_filter={inn_query} upper_limit={upperLimit}/>
            <button className={"more_button"} onClick={() => {setUpperLimit(prev => prev + 20)}}> Показать ещё 20</button>
        </div>
        </div>
    );
}