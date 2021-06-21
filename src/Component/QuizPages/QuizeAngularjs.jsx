import React, { useState } from 'react'
import {NavLink} from 'react-router-dom'
import  "./Quize.css";
import Button from '@material-ui/core/Button';

function QuizePageHtml() {
    
    //  question start here 
    const questions = [
        {
            questionText: ' Angular Js is based on',
            answerOptions: [
                {answerText: 'MVC Architecture',isCorrect: false},
                {answerText: 'Decorator pattern',isCorrect: false},
                {answerText: 'MVVM Architectural pattern',isCorrect: true},
                {answerText: 'Observer Pattern',isCorrect: false}
            ]
        },
        {
            questionText: 'AngularJS expressions are written using',
            answerOptions: [
                {answerText: '(expression)',isCorrect: false},
                {answerText: '{{expression}}',isCorrect: true},
                {answerText: '{{{expression}}}',isCorrect: false},
                {answerText: '[expression]',isCorrect: false}
            ]
        },
        {
            questionText: 'What is correct way to apply multiple filters in AngularJs.',
            answerOptions: [
                {answerText: '{{ expression | filter1 | filter2 | ... }}',isCorrect: true},
                {answerText: '{{ expression | {filter1} | {filter2} | ... }}',isCorrect: false},
                {answerText: '{{ expression - {filter1} - {filter2} - ... }}',isCorrect: false},
                {answerText: '{{ {filter1} | {filter2} | ...-expression}}',isCorrect: false}
            ]
        },
        {
            questionText: 'Which directive initializes an AngularJS application?',
            answerOptions: [
                {answerText: 'ng-init',isCorrect: false},
                {answerText: 'ng-init',isCorrect: true},
                {answerText: 'ngSrc',isCorrect: false},
                {answerText: 'ng-start',isCorrect: false}
            ]
        },
        {
            questionText: ' Which of following is not valid AngularJs Filter',
            answerOptions: [
                {answerText: 'lowercase',isCorrect: false},
                {answerText: 'orderby',isCorrect: false},
                {answerText: 'email',isCorrect: false},
                {answerText: 'currency',isCorrect: false}
            ]
        },

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



