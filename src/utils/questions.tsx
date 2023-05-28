interface Question {
    question: string;
    choices: string[];
    answer: string;
}

const questions: Question[] = [
    {
        question: "1/ Combien de CO2 absorbe la forêt française ?",
        choices: ["30 millions de tonnes de CO2", "40 millions de tonnes de CO2", "50 millions de tonnes de CO2", "60 millions de tonnes de CO2"],
        answer: "50 millions de tonnes de CO2"
    },
    {
        question: "2/ Quelle est la biodiversité des forêts ?",
        choices: ["78%", "80%", "82%", "85%"],
        answer: "80%"
    },
    {
        question: "3/ Combien rapportent les forêts françaises ?",
        choices: ["2 milliards d'euros", "3 milliards d'euros", "4 milliards d'euros", "5 milliards d'euros"],
        answer: "3 milliards d'euros"
    },
    {
        question: "4/ Quelle est la superficie de la forêt en France ?",
        choices: ["14 millions d'hectares", "15 millions d'hectares", "16 millions d'hectares", "17 millions d'hectares"],
        answer: "17 millions d'hectares"
    },
];

export default questions;