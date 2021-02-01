import { makeStyles, Slider } from "@material-ui/core";
import React from "react";


type SuperDoubleRangePropsType = {
    onChangeRange?: (value: number[]) => void
    value?: [number, number]
    disabled: boolean
    // min, max, step, disable, ...
}

const SuperDoubleRange: React.FC<SuperDoubleRangePropsType> = ({ onChangeRange, value, disabled
    // min, max, step, disable, ...
}
) => {
    // сделать самому, можно подключать библиотеки

    const handleChange = (event: any, newValue: number | number[]) => {
        onChangeRange && onChangeRange(newValue as number[]);
    };
    const useStyles = makeStyles({
        root: {
            width: 500,
            padding: '20px'
        },
    })
    const classes = useStyles()
    return (
      <div className={classes.root}>
        <Slider
          color="secondary"
          value={value}
          onChange={handleChange}
          valueLabelDisplay="auto"
          aria-labelledby="range-slider"
          disabled={disabled}
        />
      </div>
    );
}

export default SuperDoubleRange;
