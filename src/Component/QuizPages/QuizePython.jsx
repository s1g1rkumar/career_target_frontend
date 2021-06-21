import React, { useState } from 'react'
import {NavLink} from 'react-router-dom'
import  "./Quize.css";
import Button from '@material-ui/core/Button';

function QuizePageHtml() {
    
    //  question start here 
    const questions = [
        {
            questionText: "What is output for −' ' in 'python' ?",
            answerOptions: [
                {answerText: "'python'",isCorrect: false},
                {answerText: 'False',isCorrect: false},
                {answerText: 'Name error',isCorrect: false},
                {answerText: 'True',isCorrect: true}
            ]
        },
        {
            questionText: 'Which of the following is false statement in python',
            answerOptions: [
                {answerText: 'int(144)==144',isCorrect: false},
                {answerText: "int('144')==144",isCorrect: false},
                {answerText: 'int(144.0)==144',isCorrect: false},
                {answerText: ' None of the above',isCorrect: true}
            ]
        },
        {
            questionText: 'Which operator is right-associative',
            answerOptions: [
                {answerText: '*',isCorrect: false},
                {answerText: '=',isCorrect: true},
                {answerText: '+',isCorrect: false},
                {answerText: '%',isCorrect: false}
            ]
        },
        {
            questionText: 'How to create a frame in Python?',
            answerOptions: [
                {answerText: 'Frame = new.window()',isCorrect: false},
                {answerText: 'Frame = frame.new()',isCorrect: false},
                {answerText: 'Frame = Frame()',isCorrect: true},
                {answerText: 'Frame = window.new()',isCorrect: false}
            ]
        },
        {
            questionText: 'Select the correct code to create a button under a parent window with command processButton',
            answerOptions: [
                {answerText: "Button(set.text= ''Hello'' )",isCorrect: false},
                {answerText: "Button(window ,text= ''Ok'' ,fg= ''black '')",isCorrect: false},
                {answerText: "Button(window ,text= ''Hello'' ,command=processButton)",isCorrect: true},
                {answerText: "Button(text= ''hello'' ,command=processButton)",isCorrect: false}
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
            </NavLink></Button><Button variant="contained" style={{ outline: 'none' }} >Save Score</Button> 
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



