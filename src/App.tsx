import React, {useState} from 'react';
import questions from "./utils/questions";
import './App.css';
import QuestionComponent from "./components/QuestionComponent";
import MultipleChoiceComponent from "./components/MultipleChoiceComponent";
import CountdownComponent from "./components/CountdownComponent";

function App() {

    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [nbPoint, setNbPoint] = useState(0);
    const currentQuestion = questions[currentQuestionIndex];

    const handleChoiceSelection = (choice: string) => {
        setCurrentQuestionIndex(currentQuestionIndex + 1);

        if (choice === currentQuestion.answer) {
            setNbPoint(nbPoint + 1);
        }
    };

    const handleQuestionDone = () => {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
    };

    return (
        <div id="quiz">
            <h1>Quiz EcoTree</h1>
            <div className={"rounded"}></div>

            {currentQuestionIndex < questions.length
                ? <div id={"components"}>
                    <QuestionComponent question={currentQuestion.question}/>
                    <CountdownComponent nb={currentQuestionIndex} onDone={handleQuestionDone}/>
                    <MultipleChoiceComponent choices={currentQuestion.choices} onSelect={handleChoiceSelection}/>
                </div>

                : <div id={"result"}>
                    <p>Quiz terminé !</p>
                    <p>Vous avez obtenu {nbPoint} / {questions.length} !</p>
                </div>
            }
        </div>
    );
}

export default App;
