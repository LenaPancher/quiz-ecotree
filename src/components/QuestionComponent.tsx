import React from 'react';

interface QuestionComponentProps {
    question: string;
}

const QuestionComponent: React.FC<QuestionComponentProps> = ({question}) => {
    return (
        <div>
            <h2>{question}</h2>
        </div>
    );
};

export default QuestionComponent;
