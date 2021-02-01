import React, { useState } from "react";
import SuperInputText from "./c1-SuperInputText/SuperInputText";
import SuperButton from "./c2-SuperButton/SuperButton";
import SuperCheckbox from "./c3-SuperCheckbox/SuperCheckbox";
import SuperEditableSpan from "./c4-SuperEditableSpan/SuperEditableSpan";
import SuperSelect from "./c5-SuperSelect/SuperSelect";
import SuperRadio, { IRadio } from "./c6-SuperRadio/SuperRadio";
import SuperRange from "./c7-SuperRange/SuperRange";
import SuperDoubleRange from "./c8-SuperDoubleRange/SuperDoubleRange";
import classes from "./testComponents.module.scss";

const arr = ["x", "y", "z"];
  const radioArr = [{ name: 'x', checked: false }, { name: 'y', checked: false }, { name: 'z', checked: false }]
const TestComponents = () => {
  const [value, setValue] = useState<string>("");
  const [val, onChangeOption] = useState(arr[1]);
  const [radioOpt, setRadioOpt] = useState<Array<IRadio>>(radioArr);
  const [value1, setValue1] = useState(0);
      const [value2, setValue2] = useState(100);
      let disabled = value1 >= value2;


      const valueHandler = (val: number) => {
       
        setValue1(val);
       
  };
      const doubleValueHandler = (val: number[]) => {
        let val1 = val[0];
        let val2 = val[1];
        if (val1 >= val2) {
          return;
        }
        setValue1(val1);
        setValue2(val2);
      };
      const onChangeRadio = (value: string) => {
        let checkedRadio = radioOpt.map((el) => {
          if (el.name === value) {
            return { ...el, checked: true };
          } else return { ...el, checked: false };
        });
        setRadioOpt(checkedRadio);
      };
  return (
    <div className={classes.TestComponents}>
      <SuperInputText />
      <SuperButton red>Press</SuperButton>
      <SuperCheckbox>Check it</SuperCheckbox>
      <SuperEditableSpan
        value={value}
        onChangeText={setValue}
        spanProps={{ children: value ? undefined : "enter text..." }}
      />
      <SuperSelect options={arr} value={val} onChangeOption={onChangeOption} />

      <SuperRadio
        name={"radio"}
        options={radioOpt}
        onChangeOption={onChangeRadio}
      />
      <SuperRange onChangeRange={valueHandler} value={value1} />
      <SuperDoubleRange
        value={[value1, value2]}
        onChangeRange={doubleValueHandler}
        disabled={disabled}
      />
    </div>
  );
};
export default TestComponents