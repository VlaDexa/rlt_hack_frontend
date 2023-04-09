import {RatingHeader} from "./RatingHeader";
import style from "./RatingTable.module.css";
import {RatingLine} from "./RatingLine";
import {CompaniesReturn, ApiService} from "../openapi";
import {useEffect, useState} from "react";

export function RatingTable(props: {inn_filter: string}) {
    const [infos, setInfo] = useState<CompaniesReturn[]>([]);
    useEffect(() => {
        ApiService.getAllCompaniesApiGetAllCompaniesPost({
            customer_inn: (props.inn_filter === "") ? undefined : Number(props.inn_filter),
            offset: 1,
            limit: 20,
            rating: true,
        }).then(setInfo);
    }, [props])


    return (
        <table className={style.table}>
            <RatingHeader/>
            <tbody className={style.tbody}>
            {
                    infos.map((el) =>
                        <RatingLine key={el.id} inn={el.customer_inn} city={el.city} org_type={el.organization} successful_trades={el.success_deals} rating={el.main_rating}/>
                    )
            }
            </tbody>
        </table>
    );
}