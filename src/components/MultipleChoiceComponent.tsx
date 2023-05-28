import React from 'react';

interface MultipleChoiceComponentProps {
    choices: string[];
    onSelect: (choice: string) => void;
}

const MultipleChoiceComponent: React.FC<MultipleChoiceComponentProps> = ({choices, onSelect}) => {
    const handleChoiceSelection = (choice: string) => {
        onSelect(choice);
    };

    return (
        <div id={"multipleChoiceComponent"}>
            {choices.map((choice, index) => (
                <button key={index} onClick={() => handleChoiceSelection(choice)} className={"btnChoice"}>
                    {choice}
                </button>
            ))}
        </div>
    );
};

export default MultipleChoiceComponent;
