import {RatingHeader} from "./RatingHeader";
import style from "./RatingTable.module.css";
import {RatingLine} from "./RatingLine";
import {CompaniesReturn, ApiService} from "../openapi";
import {useEffect, useState} from "react";

export enum OrganizationForm {
    UL = "UL",
    IP = "IP",
}

export function RatingTable(props: {inn_filter: string, upper_limit: number}) {
    const [infos, setInfo] = useState<CompaniesReturn[]>([]);
    const [cities, setCities] = useState<string[]>([]);
    const [onlyLiked, setOnlyLiked] = useState(false);
    const [deals, setDeals] = useState(false);

    useEffect(() => {
        ApiService.getAllCompaniesApiGetAllCompaniesPost({
            inn: (props.inn_filter === "") ? undefined : Number(props.inn_filter),
            cities: cities,
            offset: 1,
            limit: props.upper_limit,
            rating: !deals,
            rating_by_deals: deals
        }).then(setInfo);
    }, [props, cities, deals])


    return (
        <table className={style.table}>
            <RatingHeader setCities={setCities} setOnlyLiked={setOnlyLiked} setSuccessDeals={setDeals}/>
            <tbody className={style.tbody}>
            {
                    infos.map((el) =>
                        <RatingLine key={el.id} inn={el.customer_inn} city={el.city} org_type={el.organization as OrganizationForm} successful_trades={el.success_deals} rating={Number(el.percent)} onlyLiked={onlyLiked}/>
                    )
            }
            </tbody>
        </table>
    );
}