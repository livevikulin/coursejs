import React, { useState } from "react";
import Counter from "./counter";

const Counters = () => {
    const initialState = [
        { value: 2, id: 1, name: "Ложка" },
        { value: 3, id: 2, name: "Вилка" },
        { value: 7, id: 3, name: "Тарелка" },
        { value: 7, id: 4, name: "Стартовый набор минималиста" },
        { value: 7, id: 5, name: "Ненужные вещи" },
    ];
    const [counters, setCounters] = useState(initialState);
    const handleDelete = (counterId) => {
        const newCounters = counters.filter(
            (counter) => counter.id !== counterId
        );
        setCounters(newCounters);
    };
    const handleReset = () => setCounters(initialState);

    return (
        <div>
            <button className="btn btn-primary btn-sm m2" onClick={handleReset}>
                Сброс
            </button>
            {counters.map((counter) => (
                <Counter
                    key={counter.id}
                    onDelete={handleDelete}
                    {...counter}
                />
            ))}
        </div>
    );
};

export default Counters;
