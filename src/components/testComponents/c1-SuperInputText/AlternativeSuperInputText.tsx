import classes from "./myInput.module.css";
import React, { ChangeEvent, useState } from "react";



type InputPropsType = {
  simonSaid: string;
    onTextEnter: (value: string) => void
  onAddTask: ()=>void
};
function AlternativeSuperInputText({ simonSaid, onTextEnter, onAddTask}: InputPropsType) {
    const onTextChange = (e: ChangeEvent<HTMLInputElement>) => {
      onTextEnter(e.currentTarget.value);
    };
  
    const keyDownHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Escape') {
            onTextEnter('')
        }
        if (e.key === 'Enter') {
          onAddTask()
        }
    };
  
    return (
      <input
        className={classes.myInput}
        placeholder="Саймон говорит ..."
        value={simonSaid}
        onChange={onTextChange}
        onKeyDown={keyDownHandler}
        onFocus={(e) => onTextEnter("")}
      />
    );
}

export default AlternativeSuperInputText;
