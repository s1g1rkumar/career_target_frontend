import React, { useState } from 'react'
import {NavLink} from 'react-router-dom'
import  "./Quize.css";
import Button from '@material-ui/core/Button';

function QuizePageHtml() {
    
    //  question start here 
    const questions = [
        {
            questionText: ' Which of the following is true about RESTful web services?',
            answerOptions: [
                {answerText: 'Webservices based on REST Architecture are known as RESTful web services',isCorrect: false},
                {answerText: 'Webservices uses HTTP methods to implement the concept of REST architecture',isCorrect: false},
                {answerText: 'Both of the above',isCorrect: true},
                {answerText: 'None of the above',isCorrect: false}
            ]
        },
        {
            questionText: 'The Node.js modules can be exposed using',
            answerOptions: [
                {answerText: 'module.expose',isCorrect: false},
                {answerText: ' module',isCorrect: false},
                {answerText: 'module.exports',isCorrect: true},
                {answerText: 'All of the above',isCorrect: false}
            ]
        },
        {
            questionText: ' In Nodejs how node based web servers differ from traditional web servers?',
            answerOptions: [
                {answerText: 'Node based server uses a single threaded model and can serve much larger number of requests compared to any traditional server like Apache HTTP Server.',isCorrect: true},
                {answerText: 'Node based server process request much faster than traditional server.',isCorrect: false},
                {answerText: 'All of the above',isCorrect: false},
                {answerText: 'There is no much difference between the two.',isCorrect: false}
            ]
        },{
            questionText: 'What are the key features of Node.js?',
            answerOptions: [
                {answerText: 'Real time Data intensive',isCorrect: false},
                {answerText: 'Highly scalable servers for Web Applications',isCorrect: false},
                {answerText: 'Builds fast and scalable network Applications',isCorrect: false},
                {answerText: 'All of the above',isCorrect: true}
            ]
        },{
            questionText: ' Which statement executes the code of sample.js file?',
            answerOptions: [
                {answerText: 'nodejs sample.js',isCorrect: false},
                {answerText: 'node sample.js',isCorrect: true},
                {answerText: 'sample.js',isCorrect: false},
                {answerText: 'sample.js',isCorrect: false}
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



