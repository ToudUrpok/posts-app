import React, { useState } from "react";

const Printer = () => {
    const [value, setValue] = useState('BITCH!');

    return (
        <div>
            <h1>{value}</h1>
            <input
                value={value}
                onChange={(e) => setValue(e.target.value)}
            />
        </div>
    )
}

export default Printer;