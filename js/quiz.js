const questions = [
    {
        question: "What is the primary greenhouse gas responsible for global warming?",
        options: [
            "Carbon dioxide",
            "Methane",
            "Nitrous oxide",
            "Oxygen"
        ],
        correctAnswer: 0
    },
    {
        question: "What is the largest source of renewable energy in the world?",
        options: [
            "Solar power",
            "Wind power",
            "Hydropower",
            "Geothermal energy"
        ],
        correctAnswer: 2
    },
    {
        question: "Which of the following is a non-renewable resource?",
        options: [
            "Solar energy",
            "Coal",
            "Wind energy",
            "Hydropower"
        ],
        correctAnswer: 1
    },
    {
        question: "What is the most effective way to reduce waste?",
        options: [
            "Recycling",
            "Composting",
            "Reducing consumption",
            "Incineration"
        ],
        correctAnswer: 2
    },
    {
        question: "What does 'biodiversity' refer to?",
        options: [
            "Different species in an ecosystem",
            "Different climates in the world",
            "Different types of pollution",
            "Different energy sources"
        ],
        correctAnswer: 0
    },
    {
        question: "Which of these is a consequence of deforestation?",
        options: [
            "Loss of habitat",
            "Increased CO2 levels",
            "Soil erosion",
            "All of the above"
        ],
        correctAnswer: 3
    },
    {
        question: "What is 'e-waste'?",
        options: [
            "Excess water waste",
            "Electronic waste",
            "Energy waste",
            "Environmental waste"
        ],
        correctAnswer: 1
    },
    {
        question: "Which protocol was established to reduce greenhouse gas emissions?",
        options: [
            "Kyoto Protocol",
            "Paris Agreement",
            "Montreal Protocol",
            "Geneva Convention"
        ],
        correctAnswer: 0
    },
    {
        question: "What is the term for the variety of life in the world or in a particular habitat?",
        options: [
            "Ecosystem",
            "Biodiversity",
            "Population",
            "Biome"
        ],
        correctAnswer: 1
    },
    {
        question: "Which of the following contributes to ocean acidification?",
        options: [
            "Plastic pollution",
            "Oil spills",
            "Carbon dioxide absorption",
            "Nutrient runoff"
        ],
        correctAnswer: 2
    }
];

let currentQuestionIndex = 0;
let correctAnswers = 0;
const totalQuestions = questions.length;
const timePerQuestion = 10; // Time in seconds
let timeRemaining = timePerQuestion;
let countdownInterval;

function loadQuestion() {
    clearInterval(countdownInterval); // Clear the interval for previous question timer
    timeRemaining = timePerQuestion; // Reset the timer
    startCountdown(); // Start the countdown for the new question

    const quizContainer = document.getElementById('quiz-container');
    quizContainer.innerHTML = '';

    const questionElement = document.createElement('div');
    questionElement.className = 'question';
    questionElement.textContent = `Question ${currentQuestionIndex + 1} :  ${questions[currentQuestionIndex].question}`;
    quizContainer.appendChild(questionElement);

    const optionsList = document.createElement('ul');
    optionsList.className = 'options';

    questions[currentQuestionIndex].options.forEach((option, index) => {
        const optionItem = document.createElement('li');
        optionItem.className = 'option';

        const optionLabel = document.createElement('label');
        const optionInput = document.createElement('input');
        optionInput.type = 'radio';
        optionInput.name = 'option';
        optionInput.value = index;
        optionLabel.appendChild(optionInput);
        optionLabel.appendChild(document.createTextNode(option));
        optionItem.appendChild(optionLabel);

        optionsList.appendChild(optionItem);
    });

    quizContainer.appendChild(optionsList);

    updateProgressBar();
}

function startCountdown() {
    const timerElement = document.getElementById('time-remaining');
    timerElement.textContent = `${timeRemaining}s`;

    countdownInterval = setInterval(() => {
        timeRemaining--;
        timerElement.textContent = `${timeRemaining}s`;

        if (timeRemaining <= 0) {
            clearInterval(countdownInterval);
            nextQuestion();
        }
    }, 1000);
}

function nextQuestion() {
    const selectedOption = document.querySelector('input[name="option"]:checked');
    if (selectedOption && parseInt(selectedOption.value) === questions[currentQuestionIndex].correctAnswer) {
        correctAnswers++;
    }

    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        loadQuestion();
    } else {
        showResults();
    }

    updateProgressBar();
}

function updateProgressBar() {
    const progressBar = document.getElementById('progress-bar');
    const progressPercentage = (currentQuestionIndex / totalQuestions) * 100;
    progressBar.style.width = `${progressPercentage}%`;
}

function showResults() {
    const quizContainer = document.getElementById('quiz-container');
    quizContainer.classList.add('hidden');

    const progressContainer = document.getElementById('progress-container');
    progressContainer.classList.add('hidden');

    const nextButton = document.getElementById('next-button');
    nextButton.classList.add('hidden');

    const resultContainer = document.createElement('div');
    resultContainer.className = 'result';
    resultContainer.textContent = `You answered ${correctAnswers} out of ${totalQuestions} questions correctly.`;

    const tryAgainContainer = document.createElement('div');
    tryAgainContainer.className = 'try-again';

    const tryAgainText = document.createElement('p');
    tryAgainText.textContent = 'You have completed the quiz. Would you like to try again or finish?';

    const tryAgainButton = document.createElement('button');
    tryAgainButton.textContent = 'Try Again';
    tryAgainButton.addEventListener('click', () => {
        currentQuestionIndex = 0;
        correctAnswers = 0;
        quizContainer.classList.remove('hidden');
        progressContainer.classList.remove('hidden');
        nextButton.classList.remove('hidden');
        resultContainer.remove();
        tryAgainContainer.remove();
        loadQuestion();
    });

    const finishButton = document.createElement('button');
    finishButton.textContent = 'Finish';
    finishButton.addEventListener('click', () => {
        alert('Thank you for playing!');
        window.location.href = 'home.html'; // Change to the main window URL
    });

    tryAgainContainer.appendChild(tryAgainText);
    tryAgainContainer.appendChild(tryAgainButton);
    tryAgainContainer.appendChild(finishButton);
    document.body.appendChild(resultContainer);
    document.body.appendChild(tryAgainContainer);
}

document.getElementById('next-button').addEventListener('click', nextQuestion);

window.onload = () => {
    loadQuestion();
};
