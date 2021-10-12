import React, { useState } from "react";
import Counters from "./components/counters";
import NavBar from "./components/navBar";

function App() {
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

    const handleIncrement = (counterId) => {
        const onIncrementValue = counters.filter((counter) =>
            counter.id == counterId ? counter.value++ : counter.value
        );
        setCounters(onIncrementValue);
    };

    const handleDecrement = (counterId) => {
        const onDecrementValue = counters.filter((counter) =>
            counter.id == counterId
                ? counter.value > 1
                    ? counter.value--
                    : counter.value
                : counter.value
        );
        setCounters(onDecrementValue);
    };

    return (
        <div className="col-lg-8 mx-auto p-3 py-md-5">
            <main>
                <NavBar
                    totalItems={counters.reduce((a, c) => a + c.value, 0)}
                />
                <Counters
                    onIncrement={handleIncrement}
                    onDecrement={handleDecrement}
                    onReset={handleReset}
                    onDelete={handleDelete}
                    counters={counters}
                />
            </main>
        </div>
    );
}

export default App;
