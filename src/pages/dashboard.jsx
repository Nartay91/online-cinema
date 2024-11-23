import React from "react";
import SimpleButton from "../components/SimpleButton";

const Dashboard = () => {
    const handleButtonClick = (buttonName) => {
        console.log(`Вы нажали кнопку: ${buttonName}`);
    };

    return (
        <div>
            <h1>Добро пожаловать!</h1>
            <p>Вы успешно зарегистрировались.</p>
            <SimpleButton name={"Submit"} onClick={() => handleButtonClick("Submit")} />
            <SimpleButton name={"кликнуть"} onClick={() => handleButtonClick("кликнуть")} />
        </div>
    );
};

export default Dashboard