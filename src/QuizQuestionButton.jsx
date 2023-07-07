import React, { useState } from 'react';
import "./QuizQuestionButton.css"

function QuizQuestionButton(props) {
    const [clickedIncorrectly, setClickedIncorrectly] = useState(false);
    const [clickedCorrectly, setClickedCorrectly] = useState(false);

    const handleClick = () => {
        if (props.button_text === props.correctAnswer) {
            setClickedCorrectly(true);
            setTimeout(() => {
                setClickedCorrectly(false);
                props.clickHandler(props.button_text);
            }, 1000); // Wait for 1 second before moving to the next question
        } else {
            setClickedIncorrectly(true);
            setTimeout(() => {
                setClickedIncorrectly(false);
                props.clickHandler(props.button_text);
            }, 1000); // Wait for 1 second before moving to the next question
        }
    };

    return (
        <div className="centerButtons">
            <button
                className={`buttonStyle ${clickedCorrectly ? 'correct' : ''} ${clickedIncorrectly ? 'incorrect' : ''}`}
                onClick={handleClick}
            >
                {props.button_text}
            </button>
        </div>
    )
}

export default QuizQuestionButton;
