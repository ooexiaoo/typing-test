const sentences = [
    "The quick brown fox jumps over the lazy dog.",
    "A journey of a thousand miles begins with a single step.",
    "To be or not to be, that is the question.",
    "All that glitters is not gold.",
    "Actions speak louder than words.",
    "Life is like a box of chocolates; you never know what you're gonna get.",
    "In three words I can sum up everything I've learned about life: it goes on.",
    "The only way to do great work is to love what you do.",
    "Don't cry because it's over, smile because it happened.",
    "To succeed in life, you need two things: ignorance and confidence."
];

const sentence = document.getElementById("sentence");
const userInput = document.getElementById("user-input");
const result = document.getElementById("result");
const startButton = document.getElementById("start-button");

let startTime;
let endTime;

function getRandomSentence() {
    const randomIndex = Math.floor(Math.random() * sentences.length);
    return sentences[randomIndex];
}

function startTest() {
    startButton.disabled = true;
    userInput.value = "";
    result.innerText = "";

    const randomSentence = getRandomSentence();
    sentence.innerText = "Type this sentence: \n\n" + randomSentence;

    startTime = Date.now();
    userInput.focus();
}

function endTest() {
    endTime = Date.now();
    const userText = userInput.value;
    const sentenceText = sentence.innerText.replace("Type this sentence:", "").trim();

    if (userText === sentenceText) {
        const totalTime = (endTime - startTime) / 1000;
        const wordsPerMinute = Math.round((sentenceText.split(' ').length / totalTime) * 60);
        result.innerText = `You typed at ${wordsPerMinute} words per minute!`;
    } else {
        result.innerText = "Try again. Your typing didn't match the sentence.";
    }

    startButton.disabled = false;
}

startButton.addEventListener("click", startTest);
userInput.addEventListener("input", function () {
    if (userInput.value === sentence.innerText.replace("Type this sentence:", "").trim()) {
        endTest();
    }
});
