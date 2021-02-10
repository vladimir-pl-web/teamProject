import React, {ButtonHTMLAttributes, DetailedHTMLProps} from "react";
import classes from "./SuperButton.module.css";
import s from "./SuperButton.module.css";

// тип пропсов обычной кнопки, children в котором храниться название кнопки там уже описан
type DefaultButtonPropsType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;

type SuperButtonPropsType = DefaultButtonPropsType & {
    color?: string
    type?: string
    onClick?:  ()=>void
}

const SuperButton: React.FC<SuperButtonPropsType> = ({ color, className, type, onClick,  ...restProps }) => {

    const cls = [
        classes.Btn
    ]
    color && cls.push(classes[color])

    return (
        <button
            onClick = {onClick}
            className={cls.join(' ')}
            {...restProps} 
        /> 
    );
}

export default SuperButton;
