import React, { useState } from "react";

export default function Quiz() {
  const questions = [
    {
      questionText: "Which is the largest country in the world by population?",
      answerOptions: [
        { answerText: "India", isCorrect: false },
        { answerText: "USA", isCorrect: false },
        { answerText: "China", isCorrect: true },
        { answerText: "Russia", isCorrect: false },
      ],
    },
    {
      questionText: "When did the second world war end?",
      answerOptions: [
        { answerText: 1945, isCorrect: true },
        { answerText: 1939, isCorrect: false },
        { answerText: 1944, isCorrect: false },
        { answerText: 1942, isCorrect: false },
      ],
    },
    {
      questionText: "Which city hosted the 1996 Summer Olympics?",
      answerOptions: [
        { answerText: "Atlanta", isCorrect: true },
        { answerText: "Sydney", isCorrect: false },
        { answerText: "Athens", isCorrect: false },
        { answerText: "Beijing", isCorrect: false },
      ],
    },
    {
      questionText: "Who invented the telephone?",
      answerOptions: [
        { answerText: "Albert Einstein", isCorrect: false },
        { answerText: "Isaac Newton", isCorrect: false },
        { answerText: "Marie Curie", isCorrect: false },
        { answerText: "Alexander Graham Bell", isCorrect: true },
      ],
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [selected, setSelected] = useState();
  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = isCorrect ? currentQuestion + 1 : currentQuestion;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    }
  };
  return (
    <div className="app">
      <div className="score-section">
        You scored {score} out of {questions.length}
      </div>
      <div className="question-section">
        <div className="question-count">
          <span>Question {currentQuestion + 1}</span>/{questions.length}
        </div>
        <div className="question-text">
          {questions[currentQuestion].questionText}
        </div>
      </div>
      <div className="answer-section">
        {questions[currentQuestion].answerOptions.map((answerOption) => (
          <div className="options">
            <input
              type={"radio"}
              onChange={(e) => setSelected(e.target.value)}
              onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}
              value={answerOption.answerText}
              checked={selected === answerOption.answerText ? true : false}
              style={{ color: "white" }}
            />
            {answerOption.answerText}
          </div>
        ))}
      </div>
      <div style={{ display: "flex" }}>
        <button
          onClick={() =>
            setCurrentQuestion((currentQuestion) =>
              currentQuestion === 1 ? currentQuestion - 1 : currentQuestion
            )
          }
        >
          Previous
        </button>
        <button
          onClick={() => {
            return setCurrentQuestion((currentQuestion) =>
              currentQuestion < questions?.length - 1
                ? currentQuestion + 1
                : currentQuestion
            );
          }}
        >
          Next
        </button>
      </div>
    </div>
  );
}
