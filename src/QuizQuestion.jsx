import React, { useState, useEffect } from "react";
import QuizQuestionButton from "./QuizQuestionButton";
import "./QuizQuestion.css";

function QuizQuestion(props) {
    const [wrongAnswer, setWrongAnswer] = useState(false);

    useEffect(() => {
        setWrongAnswer(false);
    }, [props.quiz_question]);

    const handleClick = (buttonText) => {
        if (buttonText === props.quiz_question.answer) {
            props.showNextQuestionHandler();
        } else {
            setWrongAnswer(true);
            setTimeout(() => {
                setWrongAnswer(false);
                props.showNextQuestionHandler();
            }, 1000); // Wait for 1 second before moving to the next question
        }
    };

    return (
        <main className="mainStyle">
            <section className="centered">
                <p className="quizQuestion">{props.quiz_question.instruction_text}</p>
            </section>
            <section className="buttons">
                {props.quiz_question.answer_options.map((answer_option, index) => (
                    <QuizQuestionButton
                        key={index}
                        button_text={answer_option}
                        correctAnswer={props.quiz_question.answer}
                        clickHandler={handleClick}
                    />
                ))}
            </section>
            {wrongAnswer && (
                <div className={`incorrectAnswer ${wrongAnswer ? "fade-in" : ""}`}>
                    <p className="error">Sorry, that is incorrect!</p>
                </div>
            )}
        </main>
    );
}

export default QuizQuestion;
