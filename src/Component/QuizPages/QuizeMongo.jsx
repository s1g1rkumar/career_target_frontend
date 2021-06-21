import React, { useState } from 'react'
import {NavLink} from 'react-router-dom'
import  "./Quize.css";
import Button from '@material-ui/core/Button';

function QuizePageHtml() {
    
    //  question start here 
    const questions = [
        {
            questionText: 'The MongoDB is written in .................... language.',
            answerOptions: [
                {answerText: 'C++',isCorrect: false},
                {answerText: 'Javascript',isCorrect: false},
                {answerText: 'C',isCorrect: false},
                {answerText: 'All of the above',isCorrect: true}
            ]
        },
        {
            questionText: ' Which of the foliowing is wrong statement -',
            answerOptions: [
                {answerText: 'MongoDB supports search by field, range queries, regular expression searches',isCorrect: false},
                {answerText: 'MongoDB can store the business subject in the minimal number of documents',isCorrect: false},
                {answerText: 'Secondary indices is not available in MongoDB',isCorrect: true},
                {answerText: 'All of the above',isCorrect: false}
            ]
        },
        {
            questionText: ' In which year the MongoDB was Initial release?',
            answerOptions: [
                {answerText: '2008',isCorrect: false},
                {answerText: '2009',isCorrect: true},
                {answerText: '2010',isCorrect: false},
                {answerText: '2011',isCorrect: false}
            ]
        },
        {
            questionText: 'A collection and a document in MongoDB is equivalent to............. concepts respectively.',
            answerOptions: [
                {answerText: 'Table and Column',isCorrect: false},
                {answerText: 'Table and Row',isCorrect: true},
                {answerText: 'Column and Row',isCorrect: false},
                {answerText: 'Database and Table',isCorrect: false}
            ]
        },
        {
            questionText: ' in how much time the MongDB writes are written to the journal?',
            answerOptions: [
                {answerText: '100 s',isCorrect: true},
                {answerText: '60 s',isCorrect: false},
                {answerText: '1 s',isCorrect: false},
                {answerText: '100 ms',isCorrect: false}
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



