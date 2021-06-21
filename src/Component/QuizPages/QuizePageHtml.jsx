import React, { useState } from 'react'
import { NavLink, useLocation, useHistory } from "react-router-dom";
import "./Quize.css";
import Button from '@material-ui/core/Button';

function QuizePageHtml() {

    //  question start here 
    const questions = [
        {
            questionText: 'What does HTML stands for?',
            answerOptions: [
                { answerText: 'Hypertext Machine language', isCorrect: false },
                { answerText: 'Hypertext Markup Language', isCorrect: true },
                { answerText: 'Hypertext and links markup language.', isCorrect: false },
                { answerText: 'Hightext machine language.', isCorrect: false }


            ]
        },
        {
            questionText: 'How is document type initialized in HTML5.?',
            answerOptions: [
                { answerText: '</DOCTYPE HTML>', isCorrect: false },
                { answerText: '</DOCTYPE>', isCorrect: false },
                { answerText: '<!DOCTYPE HTML>', isCorrect: true },
                { answerText: '</DOCTYPE html>', isCorrect: false }

            ]
        },
        {
            questionText: 'Which of the following HTML Elements is used for making any text bold ?',
            answerOptions: [
                { answerText: '<p>', isCorrect: false },
                { answerText: '<i>', isCorrect: false },
                { answerText: '<li>', isCorrect: false },
                { answerText: '<b>', isCorrect: true }

            ]
        },
        {
            questionText: ' HTML stands for -',
            answerOptions: [
                { answerText: 'HighText Machine Language', isCorrect: false },
                { answerText: 'HyperText and links Markup Language', isCorrect: false },
                { answerText: 'HyperText Markup Language', isCorrect: true },
                { answerText: 'None of these', isCorrect: false }
            ]
        },
        {
            questionText: 'The correct sequence of HTML tags for starting a webpage is -',
            answerOptions: [
                { answerText: 'Head, Title, HTML, body', isCorrect: false },
                { answerText: 'HTML, Body, Title, Head', isCorrect: false },
                { answerText: 'HTML, Head, Title, Body', isCorrect: false },
                { answerText: 'HTML, Head, Title, Body', isCorrect: true }
            ]
        },
        {
            questionText: 'Which of the following element is responsible for making the text bold in HTML?',
            answerOptions: [
                { answerText: '<pre>', isCorrect: false },
                { answerText: '<a>', isCorrect: false },
                { answerText: '<b>', isCorrect: true },
                { answerText: '<br>', isCorrect: false }
            ]
        },
        {
            questionText: ' Which of the following tag is used for inserting the largest heading in HTML?',
            answerOptions: [
                { answerText: '<h3>', isCorrect: false },
                { answerText: '<h1>', isCorrect: true },
                { answerText: '<h5>', isCorrect: false },
                { answerText: '<h6>', isCorrect: false }
            ]
        },
        {
            questionText: 'Which of the following tag is used to insert a line-break in HTML?',
            answerOptions: [
                { answerText: '<br>', isCorrect: true },
                { answerText: '<a>', isCorrect: false },
                { answerText: '<pre>', isCorrect: false },
                { answerText: '<b>', isCorrect: false }
            ]
        }
    ];
    //  question end here ...............

    const history = useHistory();
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
                                You score <span>{score}</span>   out of <span>{questions.length}</span>
                            </div>
                            <div className="btn">
                                <Button variant="contained" color="primary" style={{ outline: 'none' }}>   <NavLink to='/quiz'>
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



