import React, {ChangeEvent, KeyboardEvent, useCallback, useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import {setSearchValueAC} from "../../redux/reducers/find";

export const Find = () => {

    const dispatch = useDispatch();

    const [isChange, setIsChange] = useState(false);
    const [error, setError] = useState('');

    const [searchValue, setSearchValue] = useState('')

    useEffect(() => {
        if (isChange) {
            //getCards() пошел запрос за карточками
            setIsChange(false);
        }
    }, [isChange, setIsChange])

    const onChangesValue = (e: ChangeEvent<HTMLInputElement>) => {
        const inputValue = e.currentTarget.value;
        setSearchValue(inputValue);
    }
    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            appendValue();
        }
    }

    const appendValue = () => {
        if (searchValue.trim() !== '') {
            dispatch(setSearchValueAC(searchValue))
            setSearchValue("");
            setIsChange(true);
        } else {
            setError("Search value is required")
        }
    }

    return <React.Fragment>
        <div>
            <input
                onKeyPress={onKeyPressHandler}
                autoFocus
                onChange={onChangesValue}
                value={searchValue}
            />
            <button onClick={appendValue}>Search</button>
        </div>
        {error && <div>{error}</div>}

    </React.Fragment>
}