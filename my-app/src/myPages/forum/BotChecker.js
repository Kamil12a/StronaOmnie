import { useEffect, useState, useRef } from "react";
import "./forum.css";
function BotChecker({ showBotChecker, setshowBotChecker, setShowForm }) {
  const [question, setQuestions] = useState(null);
  const question1 = useRef(null);
  const question2 = useRef(null);

  const questions = [
    {
      content: "Ile to 2*2",
      answerFalse1: "5",
      answerFalse2: "2",
      answerTrue: "4",
    },
    {
      content: "Ile to 2*2*2",
      answerFalse1: "5",
      answerFalse2: "2",
      answerTrue: "8",
    },
    {
      content: "Ile to 2*2*2*2",
      answerFalse1: "5",
      answerFalse2: "2",
      answerTrue: "16",
    },
  ];
  useEffect(() => {
    let random = Math.floor(Math.random() * 3);
    setQuestions(questions[random]);
  }, []);
  const nextQue = () => {
    let random = Math.floor(Math.random() * 3);
    setQuestions(questions[random]);
    question1.current.checked = false;
    question2.current.checked = false;
  };
  const sendForm = () => {
    setshowBotChecker(false);
  };
  return (
    <>
      {showBotChecker && (
        <div className="question-container">
          <div className="question-section">
            <h2>{question.content}?</h2>;
            <div className="question-section-answers">
              <label>
                <input ref={question1} onClick={nextQue} type="checkbox" />
                {question.answerFalse1}
              </label>
              <label>
                <input ref={question2} onClick={nextQue} type="checkbox" />
                {question.answerFalse2}
              </label>
              <label>
                <input onClick={sendForm} type="checkbox" />
                {question.answerTrue}
              </label>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default BotChecker;
