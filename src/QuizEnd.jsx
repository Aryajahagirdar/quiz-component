import React from "react";
import "./QuizEnd.css"

function QuizEnd(props) {

    const handleResetClick = () => {
        props.resetClickHandler();
    }
    return (
        <div className="addStyle">
            <p className="endMessage">Thanks for playing!</p> <a className="restartLink" href='' onClick={handleResetClick}>Reset Quiz</a>
        </div>
    )
}

export default QuizEnd;