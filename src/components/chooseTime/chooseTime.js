import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { timeMenus } from "../../helpers/chooseTime.helpers";
import { setSelectedTime } from "../../actions/chooseTime.actions";

import RadioOff from "../../assets/icons/disabled.svg";

import RadioOn from "../../assets/icons/enabled.svg";


import "./chooseTime.css";
export default function ChooseTime() {
    //const selectedTime = ['3 Anos', '1 ano', '1 mês']
    const { selectedTime } = useSelector(redux => redux.state);
    const dispatch = useDispatch();

    const handleClickTime = (time) => {
        
        setSelectedTime(dispatch, time)
    } 
    return (
        <div className="container-chooseTime">
            <div className="chooseTimes">
                {timeMenus.map(time => (
                    
                    <div onClick={() => {
                        handleClickTime(time);
                        for(var x =0; x < 3; x++){

                        }
                        }} key={time} className={time === selectedTime ? "chooseTime selected" : "chooseTime"}>
                        <img alt="radio" className="radio-img" src={time === selectedTime ? RadioOn : RadioOff} />
                        {time}
                    </div>
                    
                ))}
            </div>
        </div>
    );
}

