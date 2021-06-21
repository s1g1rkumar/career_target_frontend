import React, { useState } from 'react'
import {NavLink} from 'react-router-dom'
import  "./Quize.css";
import Button from '@material-ui/core/Button';

function QuizePageHtml() {
    
    //  question start here 
    const questions = [
        {
            questionText: 'Which of the following is a contextual keyword in C#?',
            answerOptions: [
                {answerText: 'get',isCorrect: false},
                {answerText: ' set',isCorrect: false},
                {answerText: 'add',isCorrect: false},
                {answerText: 'All of the above.',isCorrect: true}
            ]
        },
        {
            questionText: ' Which of the following converts a type to a Boolean value, where possible in C#?',
            answerOptions: [
                {answerText: 'ToBoolean',isCorrect: true},
                {answerText: 'ToSingle',isCorrect: false},
                {answerText: 'ToChar',isCorrect: false},
                {answerText: 'ToDateTime',isCorrect: false}
            ]
        },
        {
            questionText: 'Which of the following converts a type (integer or string type) to date-time structures in C#?',
            answerOptions: [
                {answerText: 'ToString',isCorrect: false},
                {answerText: 'ToSingle',isCorrect: false},
                {answerText: 'ToChar',isCorrect: false},
                {answerText: 'ToDateTime',isCorrect: true}
            ]
        },
        {
            questionText: ' Which of the following operator creates a pointer to a variable in C#?',
            answerOptions: [
                {answerText: 'sizeof',isCorrect: false},
                {answerText: 'typeof',isCorrect: false},
                {answerText: '&',isCorrect: false},
                {answerText: '*',isCorrect: true}
            ]
        },
        {
            questionText: 'Which of the following method helps in returning more than one value?',
            answerOptions: [
                {answerText: 'Value parameters',isCorrect: false},
                {answerText: 'Reference parameters',isCorrect: false},
                {answerText: 'Output parameters',isCorrect: true},
                {answerText: 'None of the above.',isCorrect: false}
            ]
        }
    ];
    //  question end here ...............

    
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [showScore, setshowScore] = useState(false);
    const [score, setscore] = useState(0);
    

 
    const handleAnswerButtonClick = (isCorrect) => {
        if (isCorrect === true) {
            setscore(score + 1);
        }
        const nextQuestion = currentQuestion + 1;
        if (nextQuestion < questions.length) {
            setCurrentQuestion(nextQuestion);
        }
        else {
            setshowScore(true)
        }
    }


//   reviews function
    return (
        <div> 
             <div className="quize">

{/* quize code here */}


{showScore ? (
    <div className="score__section">
        <div className="score__view">
        You score <span>{score}</span>  out of <span>{questions.length}</span> 
        </div>
        <div className="btn">
        <Button variant="contained" color="primary" style={{outline:'none'}}>   <NavLink to= '/quiz'>
                Go to Quize Home
            </NavLink></Button> <Button variant="contained" style={{ outline: 'none' }} >Save Score</Button>
        </div>
    </div>
) : (
    <>
        <div className="quize__contains">
            <div className="box">
                <div className="question__section">
                    <div className="score__count">
                        <span>Question {currentQuestion + 1}</span>/{questions.length}
                    </div>
                </div>
                <div className="question__text">
                    {questions[currentQuestion].questionText}
                </div>
            </div>
            <div className="answer__section">
                {questions[currentQuestion].answerOptions.map((answerOptions) => (
                    <button onClick={() => handleAnswerButtonClick(answerOptions.isCorrect)}>{answerOptions.answerText}</button>
                ))}
            </div>
        </div>

    </>
)}
{/* quize code end here */}

</div>
</div>
    )
}

export default QuizePageHtml;



