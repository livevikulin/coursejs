import React, { useState } from "react";

const Counter = (props) => {
    const [value, setValue] = useState(props.value);
    const tags = ["tag1", "tag2", "tag3"];

    const formValue = () => {
        return value === 0 ? "Ноль" : value;
    };

    const getBageclasses = () => {
        let classes = "badge m-2 bg-";
        classes += value === 0 ? "danger" : "primary";

        return classes;
    };

    const handleIncrement = () => {
        setValue(value + 1);
    };

    const handleDecrement = () => {
        value > 0 ? setValue(value - 1) : 0;
    };

    return (
        <div>
            <h4>{props.name}</h4>
            <span className={getBageclasses()}>{formValue()}</span>
            <button
                onClick={handleIncrement}
                className="btn btn-secondary btn-sm"
            >
                Increment
            </button>
            <button
                onClick={handleDecrement}
                className="btn btn-secondary btn-sm"
            >
                Decrement
            </button>
            <button
                className="btn btn-danger btn-sm m-2"
                onClick={() => props.onDelete(props.id)}
            >
                Delete
            </button>
        </div>
    );
};

export default Counter;
