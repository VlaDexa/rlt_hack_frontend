import {Dispatch, SetStateAction} from "react";
import style from "./OrdererSelector.module.css";
import {Orderer} from "./Rating";

export function OrdererSelector(props: {type: Orderer, setType: Dispatch<SetStateAction<Orderer>>}) {
    return (
        <div className={style.back_capsule}>
            <p className={style.text} onClick={() => props.setType(Orderer.Orderer)}>
                Заказчик
            </p>
            <p className={style.text} onClick={() => props.setType(Orderer.Postavshik)}>
                Поставщик
            </p>
            <div className={`${style.slider} ${props.type == Orderer.Orderer ? style.first : style.second}`}></div>
        </div>
    );
}