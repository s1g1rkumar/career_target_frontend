import React, { useState } from 'react'
import {NavLink} from 'react-router-dom'
import  "./Quize.css";
import Button from '@material-ui/core/Button';

function QuizePageHtml() {
    
    //  question start here 
    const questions = [
        {
            questionText: ' Which of the following is AJAX?',
            answerOptions: [
                {answerText: 'is a program',isCorrect: true},
                {answerText: 'is a country name',isCorrect: false},
                {answerText: 'is a football club name',isCorrect: false},
                {answerText: 'All of these',isCorrect: false}
            ]
        },
        {
            questionText: 'Which of the following are the features of Ajax?',
            answerOptions: [
                {answerText: 'Live data binding',isCorrect: false},
                {answerText: 'Declarative instantiation of client components',isCorrect: false},
                {answerText: 'Client-side template rendering',isCorrect: false},
                {answerText: 'All of the above',isCorrect: true}
            ]
        },
        {
            questionText: 'All of the above',
            answerOptions: [
                {answerText: ' Bandwidth utilization',isCorrect: false},
                {answerText: ' More interactive',isCorrect: false},
                {answerText: 'Speeder retrieval of data',isCorrect: false},
                {answerText: 'All of these',isCorrect: true}
            ]
        },
        {
            questionText: ' ______ is the sever support AJAX ?',
            answerOptions: [
                {answerText: 'WWW',isCorrect: false},
                {answerText: 'SMTP',isCorrect: false},
                {answerText: 'HTTP',isCorrect: true},
                {answerText: 'None of the above',isCorrect: false}
            ]
        },
        {
            questionText: ' what is the full form of AJAX ?',
            answerOptions: [
                {answerText: 'Asynchronous Javascript and XML',isCorrect: true},
                {answerText: 'Another Java and XML Library',isCorrect: false},
                {answerText: 'Abstract JSON and XML',isCorrect: false},
                {answerText: 'None of the mentioned',isCorrect: false}
            ]
        },
        {
            questionText: 'this is question fourth this is question fourth. ',
            answerOptions: [
                { answerText: 'answer1.4', isCorrect: false },
                { answerText: 'answer2.4', isCorrect: false },
                { answerText: 'answer3.4', isCorrect: true },
                { answerText: 'answer4.4', isCorrect: false }

            ]
        },  {
            questionText: 'this is question fourth this is question fourth. ',
            answerOptions: [
                { answerText: 'answer1.4', isCorrect: false },
                { answerText: 'answer2.4', isCorrect: false },
                { answerText: 'answer3.4', isCorrect: true },
                { answerText: 'answer4.4', isCorrect: false }

            ]
        },  {
            questionText: 'this is question fourth this is question fourth. ',
            answerOptions: [
                { answerText: 'answer1.4', isCorrect: false },
                { answerText: 'answer2.4', isCorrect: false },
                { answerText: 'answer3.4', isCorrect: true },
                { answerText: 'answer4.4', isCorrect: false }

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



