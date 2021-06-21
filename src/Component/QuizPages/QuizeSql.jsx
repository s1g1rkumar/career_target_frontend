import React, { useState } from 'react'
import {NavLink} from 'react-router-dom'
import  "./Quize.css";
import Button from '@material-ui/core/Button';

function QuizePageHtml() {
    
    //  question start here 
    const questions = [
        {
            questionText: 'Which of the following query would display names of all the students whose email ids are not provided?',
            answerOptions: [
                {answerText: 'select first_name, last name from students where email = 0;',isCorrect: false},
                {answerText: 'select first_name, last name from students where email = ‘ ‘;',isCorrect: false},
                {answerText: 'select first_name, last name from students where email is null;',isCorrect: true},
                {answerText: 'select first_name, last name from students where email = ‘null’;',isCorrect: false}
            ]
        },
        {
            questionText: 'Which of the following is not a character manipulation function?',
            answerOptions: [
                {answerText: 'concat',isCorrect: false},
                {answerText: 'substr',isCorrect: false},
                {answerText: ' instr',isCorrect: false},
                {answerText: 'coalesce',isCorrect: true}
            ]
        },
        {
            questionText: 'Which of the following is not true about the COUNT function?',
            answerOptions: [
                {answerText: ' COUNT(*) returns the number of rows in the table.',isCorrect: false},
                {answerText: 'COUNT(exp) returns the number of rows with non-null values for the exp.',isCorrect: false},
                {answerText: 'COUNT(DISTINCT exp) returns the number of unique, non-null values in the column.',isCorrect: false},
                {answerText: 'All are true.',isCorrect: true}
            ]
        },
        {
            questionText: 'Which of the following is true about database indexes?',
            answerOptions: [
                {answerText: 'You can create an index on one or more columns.',isCorrect: false},
                {answerText: 'Indexes always slow down the speed of query process.',isCorrect: false},
                {answerText: 'Indexes are always created automatically.',isCorrect: true},
                {answerText: 'Indexes should ideally be created on small tables.',isCorrect: false}
            ]
        },
        {
            questionText: 'Which of the following code will create an index named stu_marks_ind on the columns student_code and percentage_of_marks of the STUDENTS table?',
            answerOptions: [
                {answerText: 'It’s not possible to create an index on two columns.',isCorrect: true},
                {answerText: ' create index stu_marks_ind from students(student_code, percentage_of_marks);',isCorrect: false},
                {answerText: 'create index stu_marks_ind on students(student_code, percentage_of_marks);',isCorrect: false},
                {answerText: 'create index stu_marks_ind (student_code, percentage_of_marks) on students;',isCorrect: false}
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



