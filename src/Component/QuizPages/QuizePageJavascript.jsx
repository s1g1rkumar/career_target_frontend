import React, { useState } from 'react'
import {NavLink} from 'react-router-dom'
import  "./Quize.css";
import Button from '@material-ui/core/Button';

function QuizePageHtml() {
    
    //  question start here 
    const questions = [
        {
            questionText: 'Determine the result – String(“Hello”) === “Hello”;',
            answerOptions: [
                {answerText: 'true',isCorrect: true},
                {answerText: ' false',isCorrect: false},
                {answerText: ' SyntaxError',isCorrect: false},
                {answerText: ' ReferenceError',isCorrect: false}
            ]
        },
        {
            questionText: 'What is the correct JavaScript syntax to print “DataFlair” in the console?',
            answerOptions: [
                {answerText: 'print(“DataFlair”);',isCorrect: false},
                {answerText: 'console.print(“DataFlair”);',isCorrect: false},
                {answerText: 'log.console(“DataFlair”);',isCorrect: false},
                {answerText: 'console.log(“DataFlair”);',isCorrect: true}
            ]
        },
        {
            questionText: 'Which of the following print content on the browser window?',
            answerOptions: [
                {answerText: 'document.write(“print content”);',isCorrect: true},
                {answerText: 'response.write(“print content”);',isCorrect: false},
                {answerText: 'document.write(print content);',isCorrect: false},
                {answerText: 'write(“print content”);',isCorrect: false}
            ]
        },
        {
            questionText: 'Which method will you use to round the number 24.76 to the nearest integer?',
            answerOptions: [
                {answerText: 'round(24.76);',isCorrect: false},
                {answerText: 'rnd(24.76);',isCorrect: false},
                {answerText: 'Math.round(24.76);',isCorrect: true},
                {answerText: 'Math.rnd(24.76);',isCorrect: false}
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



