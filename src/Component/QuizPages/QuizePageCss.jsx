import React, { useState } from 'react'
import {NavLink} from 'react-router-dom'
import  "./Quize.css";
import Button from '@material-ui/core/Button';

function QuizePageHtml() {
    
    //  question start here 
    const questions = [
        {
            questionText: 'CSS stands for -',
            answerOptions: [
                {answerText: 'Cascade style sheets',isCorrect: false},
                {answerText: 'Color and style sheets',isCorrect: false},
                {answerText: 'Cascading style sheets',isCorrect: true},
                {answerText: 'None of the above',isCorrect: false}
            ]
        },
        {
            questionText: 'Which of the following is the correct syntax for referring the external style sheet?',
            answerOptions: [
                {answerText: '<style src = example.css>',isCorrect: false},
                {answerText: '<style src = "example.css" >',isCorrect: false},
                {answerText: '<stylesheet> example.css </stylesheet>',isCorrect: false},
                {answerText: '<link rel="stylesheet" type="text/css" href="example.css">',isCorrect: true}
            ]
        },
        {
            questionText: 'The property in CSS used to change the background color of an element is -',
            answerOptions: [
                {answerText: 'bgcolor',isCorrect: false},
                {answerText: 'color',isCorrect: false},
                {answerText: 'background-color',isCorrect: true},
                {answerText: 'All of the above',isCorrect: false}
            ]
        },
        {
            questionText: 'The property in CSS used to change the text color of an element is -',
            answerOptions: [
                {answerText: 'bgcolor',isCorrect: false},
                {answerText: 'color',isCorrect: true},
                {answerText: 'background-color',isCorrect: false},
                {answerText: 'All of the above',isCorrect: false}
            ]
        },
        {
            questionText: "The CSS property used to control the element's font-size is -",
            answerOptions: [
                {answerText: 'text-style',isCorrect: false},
                {answerText: 'text-size',isCorrect: false},
                {answerText: 'font-size',isCorrect: true},
                {answerText: 'None of the above',isCorrect: false}
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



