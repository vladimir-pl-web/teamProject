import React, {ChangeEvent, KeyboardEvent, useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import {setSearchValueAC} from "../../redux/reducers/find";
import {Button, TextField} from "@material-ui/core";
import styles from "./Find.module.css"

export const Find = () => {

    const dispatch = useDispatch();

    const [isChange, setIsChange] = useState(false);
    const [error, setError] = useState<string | null>('');

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
        if (error !== null) {
            setError(null)
        }
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
        <div className={styles.searchField}>
            <TextField
                error={!!error}
                helperText={error}
                label="Search"
                onKeyPress={onKeyPressHandler}
                autoFocus
                onChange={onChangesValue}
                value={searchValue}
            />
            <Button
                onClick={appendValue}
                variant="contained">
                Search
            </Button>
        </div>


    </React.Fragment>
}