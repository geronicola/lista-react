import React from "react";

const OptionDisabled = ({valueOption, textOption}) => {
    return (
        <option value={valueOption} disabled selected> {textOption} </option>
    )
}

export default OptionDisabled;