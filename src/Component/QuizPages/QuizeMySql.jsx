import React, { useState } from 'react'
import {NavLink} from 'react-router-dom'
import  "./Quize.css";
import Button from '@material-ui/core/Button';

function QuizePageHtml() {
    
    //  question start here 
    const questions = [
        {
            questionText: 'Which Program Copies The Databases From One Server To Another?',
            answerOptions: [
                {answerText: ' Mysqlcopydb',isCorrect: false},
                {answerText: 'Mysqldbcopy',isCorrect: true},
                {answerText: 'Mysqlflushdb',isCorrect: false},
                {answerText: 'Mysqldbflush',isCorrect: false}
            ]
        },
        {
            questionText:  "To Use 'mysqldbcopy' Which Privileges Are Required On The Source Server?",
            answerOptions: [
                {answerText: 'CREATE',isCorrect: false},
                {answerText: 'INSERT',isCorrect: false},
                {answerText: 'SELECT',isCorrect: true},
                {answerText: 'UPDATE',isCorrect: false}
            ]
        },
        {
            questionText: "The Function 'fetchrow_hashref()' Returns Reference To Hash Of Row Values Keyed By ______",
            answerOptions: [
                {answerText: 'Row Name',isCorrect: false},
                {answerText: 'Column Name',isCorrect: true},
                {answerText: 'Table Name',isCorrect: false},
                {answerText: 'Database Name',isCorrect: false}
            ]
        },
        {
            questionText: 'Which Function Returns Reference To Array Of Row Values?',
            answerOptions: [
                {answerText: 'Fetch()',isCorrect: false},
                {answerText: 'Fetchrow_array()',isCorrect: false},
                {answerText: 'Fetchrow_array()',isCorrect: false},
                {answerText: 'Fetchrow_arrayref()',isCorrect: true}
            ]
        },
        {
            questionText: 'Which Is The Log In Which Data Changes Received From A Replication Master Server Are Written?',
            answerOptions: [
                {answerText: 'Error Log',isCorrect: false},
                {answerText: 'Binary Log',isCorrect: false},
                {answerText: 'General Query Log',isCorrect: false},
                {answerText: 'Relay Log',isCorrect: true}
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



