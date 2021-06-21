import React, { useState } from 'react'
import {NavLink} from 'react-router-dom'
import  "./Quize.css";
import Button from '@material-ui/core/Button';

function QuizePageHtml() {
    
    //  question start here 
    const questions = [
        {
            questionText: 'JSON stands for ______',
            answerOptions: [
                {answerText: 'Java Standard Output Network',isCorrect: false},
                {answerText: 'JavaScript Object Notation',isCorrect: true},
                {answerText: 'JavaScript Output Name',isCorrect: false},
                {answerText: 'Java Source Open Network',isCorrect: false}
            ]
        },
        {
            questionText: 'Which is correct format of writting JSON name/value pair',
            answerOptions: [
                {answerText: "'name : value'",isCorrect: false},
                {answerText: "'name = 'value'",isCorrect: false},
                {answerText: "'name = 'value'",isCorrect: false},
                {answerText: "'name : 'value'",isCorrect: true}
            ]
        },
        {
            questionText: '',
            answerOptions: [
                {answerText: '',isCorrect: false},
                {answerText: '',isCorrect: false},
                {answerText: '',isCorrect: false},
                {answerText: '',isCorrect: false}
            ]
        },
        {
            questionText: 'Which of the following is not a type in JSON?',
            answerOptions: [
                {answerText: 'date',isCorrect: true},
                {answerText: 'Object',isCorrect: false},
                {answerText: 'Array',isCorrect: false},
                {answerText: 'string',isCorrect: false}
            ]
        },
        {
            questionText: ' Who is the Father of JSON ?',
            answerOptions: [
                {answerText: 'Douglas Crockford',isCorrect: true},
                {answerText: 'Rasmus Lerdorf',isCorrect: false},
                {answerText: 'Douglas Michel',isCorrect: false},
                {answerText: 'Dennis Ritchie',isCorrect: false}
            ]
        },
        {
            questionText: 'What is correct MIME type for JSON ?',
            answerOptions: [
                {answerText: 'application/js',isCorrect: false},
                {answerText: 'application/json',isCorrect: true},
                {answerText: ' json/mime',isCorrect: false},
                {answerText: 'application/xml',isCorrect: false}
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



