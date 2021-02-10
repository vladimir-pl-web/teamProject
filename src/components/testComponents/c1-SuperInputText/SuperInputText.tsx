import React, {ChangeEvent, DetailedHTMLProps, InputHTMLAttributes, KeyboardEvent} from "react";
import s from "./SuperInputText.module.css";

type DefaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;

type InputPropsType = DefaultInputPropsType & {
    onChangeText?: (value: string) => void
    onEnter?: () => void
    error?: string
    spanClassName?: string
    touched?: boolean
};

const Input: React.FC<InputPropsType> = (
    {
        type,
        onChange, onChangeText,
        onKeyPress, onEnter,
        error,
        className, spanClassName,
        touched,
        ...restProps
    }
) => {
    const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
        onChange && onChange(e); 
        onChangeText && onChangeText(e.currentTarget.value);
    }
    const onKeyPressCallback = (e: KeyboardEvent<HTMLInputElement>) => {
        onKeyPress && onKeyPress(e);
        e.key === "Enter"
        && onEnter && onEnter(); 
    }
    const finalSpanClassName = `${s.error} ${spanClassName ? spanClassName : ""}`;
    const finalInputClassName = error && touched ? s.errorInput : '' 

    return (
        <>
            <input
                type={type}
                onChange={onChangeCallback}
                onKeyPress={onKeyPressCallback}
                className={`${s.superInput} ${finalInputClassName}`}
                {...restProps} 
            />
            {error && touched && <span className={finalSpanClassName}>{error}</span>}
        </>
    );
}

export default Input;
