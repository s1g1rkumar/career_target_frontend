import React, { useState } from 'react'
import {NavLink} from 'react-router-dom'
import  "./Quize.css";
import Button from '@material-ui/core/Button';

function QuizePageHtml() {
    
    //  question start here 
    const questions = [
        {
            questionText: 'C++ was developed by _',
            answerOptions: [
                {answerText: 'Thomas Kushz',isCorrect: false},
                {answerText: 'John Kemney',isCorrect: false},
                {answerText: 'Bjarne Stroutstrup',isCorrect: true},
                {answerText: 'James Goling',isCorrect: false}
            ]
        },
        {
            questionText: 'Which one of the following is a keyword?',
            answerOptions: [
                {answerText: 'Size',isCorrect: false},
                {answerText: 'Key',isCorrect: false},
                {answerText: 'Jump',isCorrect: false},
                {answerText: 'Switch',isCorrect: true}
            ]
        },
        {
            questionText: '__ is the smallest individual unit in a program.',
            answerOptions: [
                {answerText: 'Variable',isCorrect: false},
                {answerText: 'Control',isCorrect: false},
                {answerText: 'Character',isCorrect: false},
                {answerText: 'Token',isCorrect: true}
            ]
        },
        {
            questionText: 'What is a constant that contains a single character enclosed within single quotes?',
            answerOptions: [
                {answerText: 'Character',isCorrect: true},
                {answerText: 'Numeric',isCorrect: false},
                {answerText: 'Numeric',isCorrect: false},
                {answerText: 'Floating point',isCorrect: false}
            ]
        },
        {
            questionText: 'The modulus operator uses _ character.',
            answerOptions: [
                {answerText: '+',isCorrect: false},
                {answerText: '*',isCorrect: false},
                {answerText: '/',isCorrect: false},
                {answerText: '%',isCorrect: true}
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



