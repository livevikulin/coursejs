import React, { useState } from "react";
import Counter from "./counter";

const Counters = ({ onReset, counters, ...rest }) => {
    return (
        <div>
            <button className="btn btn-primary btn-sm m2" onClick={onReset}>
                Сброс
            </button>
            {counters.map((counter) => (
                <Counter key={counter.id} {...counter} {...rest} />
            ))}
        </div>
    );
};

export default Counters;
