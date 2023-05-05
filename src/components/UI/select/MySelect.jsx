import React from "react";
import classes from './MySelect.module.css'

const MySelect = ({options, defaultOption, selectedValue, onChange}) => {
    return (
        <select 
            className={classes.mySelect}
            value={selectedValue}
            onChange={e => onChange(e.target.value)}
        >
            <option disabled value={defaultOption.value}>{defaultOption.name}</option>
            {options.map(option =>
                <option value={option.value} key={option.value}>{option.name}</option>
            )}
        </select>
    )
}

export default MySelect;