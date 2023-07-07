import React, { useState } from "react";
import Quiz from "./Quiz";
import "./StartQuiz.css"

function StartQuiz() {

    const [quizStarted, setQuizStarted] = useState(false);

    const startQuiz = () => {
        return setQuizStarted(true);
    }

    return (
        <div>
            {quizStarted ? (
                <Quiz />
            ) : (
                <div className="entryPage">
                    <h1 className="title">Welcome to the GK Quiz!</h1>
                    <button className="button" onClick={startQuiz}>Click here to start Quiz.</button>
                </div>
            )}
        </div>
    );
}

export default StartQuiz;