import React, { useState } from 'react'
import {NavLink} from 'react-router-dom'
import  "./Quize.css";
import Button from '@material-ui/core/Button';

function QuizePageHtml() {
    
    //  question start here 
    const questions = [
        {
            questionText: 'Which of the following option leads to the portability and security of Java?',
            answerOptions: [
                {answerText: 'Bytecode is executed by JVM',isCorrect: true},
                {answerText: 'The applet makes the Java code secure and portable',isCorrect: false},
                {answerText: 'Use of exception handling',isCorrect: false},
                {answerText: 'Dynamic binding between objects',isCorrect: false}
            ]
        },
        {
            questionText: 'Which of the following is not a Java features?',
            answerOptions: [
                {answerText: 'Dynamic',isCorrect: false},
                {answerText: 'Architecture Neutral',isCorrect: false},
                {answerText: 'Use of pointers',isCorrect: true},
                {answerText: 'Object-oriented',isCorrect: false}
            ]
        },
        {
            questionText: 'The \u0021 article referred to as a',
            answerOptions: [
                {answerText: 'Unicode escape sequence',isCorrect: true},
                {answerText: 'Octal escape',isCorrect: false},
                {answerText: 'Hexadecimal',isCorrect: false},
                {answerText: 'Line feed',isCorrect: false}
            ]
        },
        {
            questionText: 'What is the return type of the hashCode() method in the Object class?',
            answerOptions: [
                {answerText: 'Object', isCorrect: false},
                {answerText: 'int' ,isCorrect: true},
                {answerText: 'long', isCorrect: false},
                {answerText: 'void', isCorrect: false}
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



