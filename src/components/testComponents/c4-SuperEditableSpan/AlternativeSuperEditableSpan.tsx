import classes from "./input.module.css";
import React, { ChangeEvent, useState } from "react";


type PropsType = {
    mode: boolean
    value: string
    changeValue: (value: string) => void
    changeMode: ()=>void
}
const AlternativeSuperEditableSpan:React.FC<PropsType>=({mode, value, changeValue, changeMode})=> {
    let cls = `alert alert-info ${classes.Span}`
    const[inputValue, setInputValue]=useState<string>(value)
    const onKeyHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
        switch (e.key) {
            case 'Enter':
                changeMode()
                break
            case 'Escape': 
                setInputValue('')
                break
        }
    };

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.currentTarget.value) {
            let val = e.currentTarget.value.trim()
            if (val !== '') {
                setInputValue(val)
                changeValue(val)
            }
        }
    };
    let isInput = mode ? (
        <input
        autoFocus
        type="text"
        className="form-control"
        placeholder="type..."
        aria-describedby="addon-wrapping"
        value={inputValue}
            onKeyDown={onKeyHandler}
            onChange={onChangeHandler}
      />
    ) : (
        <span className={cls}>{value}</span>
    );
    return (
        <div className="input-group flex-nowrap">
            {isInput}
        </div>
    )
}

export default AlternativeSuperEditableSpan;
