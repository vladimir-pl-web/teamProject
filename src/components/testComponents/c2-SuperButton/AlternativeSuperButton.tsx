import classes from "./myButton.module.css";
import React from "react";


type ButtonPropsType = {
    label: string
    onButtonAction: () => void
    
}
function AlternativeSuperButton({label, onButtonAction}:ButtonPropsType) {
    return (
        <button
            className={classes.myButton}
            onClick={onButtonAction}
        >{label}</button>
    );
}

export default AlternativeSuperButton;
