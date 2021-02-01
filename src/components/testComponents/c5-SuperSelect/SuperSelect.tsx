import classes from "./select.module.css";
import React, {SelectHTMLAttributes, DetailedHTMLProps, ChangeEvent} from "react";

type DefaultSelectPropsType = DetailedHTMLProps<SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement>

type SuperSelectPropsType = DefaultSelectPropsType & {
    options?: Array<string>
    onChangeOption?: (option: string) => void
}

const SuperSelect: React.FC<SuperSelectPropsType> = (
    {
        options,
        onChange,
        onChangeOption,
        ...restProps
    }
) => {
    const mappedOptions=  options?.map((el, i) => {
        if (el) {
            return (
                <option key={el + i} value={el}>
                    {el}
                </option>
            )
        }
        
    }); // map options with key

    const onChangeCallback = (e: ChangeEvent<HTMLSelectElement>) => {
        onChangeOption && onChangeOption(e.currentTarget.value) // onChange, onChangeOption
        
    }

    return (
        <>
        
            <div className={classes.SelectBox}>
            <label htmlFor='options' className={classes.SelectLabel}>Choose an option</label>
            <select onChange={onChangeCallback} {...restProps} name='options' className={classes.Select}>
            {mappedOptions}
        </select>    
        </div>

        </>
    );
}

export default SuperSelect;  
