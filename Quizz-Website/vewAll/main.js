if (!isAuthenticated()) {
    window.location.href = "../login/login.html";
} 
function isAuthenticated() {
    // Implement your authentication logic here
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    return !!isLoggedIn;
}
const html = [
    {
    question: "What does HTML stand for?",
    choices: [
    "a) Hyper Text Markup Language",
    "b) Hyperlink and Text Markup Language",
    "c) High Text Machine Language",
    ],
    correctAnswer: "a",
    },
    {
    question: "What is the correct HTML element for the largest heading?",
    choices: ["a) &lt;head&gt;", "b) &lt;h1&gt;", "c) &lt;heading&gt;"],
    correctAnswer: "b",
    },
    {
    question: "Which HTML tag is used to define an unordered list?",
    choices: ["a) &lt;ol&gt;", "b) &lt;ul&gt;", "c) &lt;li&gt;"],
    correctAnswer: "b",
    },
    
    {
    question: "Which HTML tag is used to define a hyperlink?",
    choices: ["a) &lt;url&gt;", "b) &lt;link&gt;", "c) &lt;a&gt;"],
    correctAnswer: "c",
    },
    {
    question:
    "Which HTML element is used to display a scalar measurement within a range?",
    choices: [
    "a) &lt;range&gt;",
    "b) &lt;input type='slider'&gt;",
    "c) &lt;input type='range'&gt;",
    ],
    correctAnswer: "c",
    },
    ];
    const css = [
    {
    question: "What does CSS stand for?",
    choices: [
    "a) Cascading Style Sheet",
    "b) Computer Style Sheet",
    "c) Colorful Style Sheet",
    ],
    correctAnswer: "a",
    },
    {
    question: "Which CSS property is used to control the text size?",
    choices: ["a) text-size", "b) font-size", "c) text-style"],
    correctAnswer: "b",
    },
    {
    question:
    "What is the correct CSS syntax for making all the &lt;p&gt; elements bold?",
    choices: [
    "a) p {font-weight: bold;}",
    "b) p style='text-weight: bold;'>",
    "c) p {style: bold;}",
    ],
    correctAnswer: "a",
    },
    {
    question:
    "Which CSS property is used to change the background color of an element?",
    choices: ["a) background-color", "b) color", "c) bg-color"],
    correctAnswer: "a",
    },
    {
    question: "What is the CSS box model used for?",
    choices: [
    "a) Defining the layout of a webpage",
    "b) Styling text",
    "c) Adding images",
    ],
    correctAnswer: "a",
    },
    ];
    const JavaScript = [
    {
    question: "What is JavaScript primarily used for?",
    choices: [
    "a) Styling web pages",
    "b) Enhancing the structure of HTML",
    "c) Adding interactivity to websites",
    ],
    correctAnswer: "c",
    },
    {
    question: "How do you declare a variable in JavaScript?",
    choices: ["a) var myVar;", "b) variable myVar;", "c) v myVar;"],
    correctAnswer: "a",
    },
    {
    question:
    "Which statement is used to execute a block of code repeatedly?",
    choices: ["a) if statement", "b) for loop", "c) switch statement"],
    correctAnswer: "b",
    },
    {
    question: "What is the result of '2' + 2 in JavaScript?",
    choices: ["a) 4", "b) '22'", "c) '4'"],
    correctAnswer: "c",
    },
    {
    question:
    "Which built-in method adds one or more elements to the end of an array and returns the new length of the array?",
    choices: ["a) push()", "b) pop()", "c) join()"],
    correctAnswer: "a",
    },
    ];
    
    if (localStorage.getItem("quizName") == "HTML") {
    console.log(html);
    questions = html;
    }
    
    if (localStorage.getItem("quizName") == "CSS") {
    console.log(css);
    questions = css;
    }
    if (localStorage.getItem("quizName") == "JavaScript") {
    console.log(JavaScript);
    questions = JavaScript;
    }

    const userAnswers = JSON.parse(localStorage.getItem("userAnswers"));

    let score = 0;
    JSON.parse(localStorage.getItem(""));
    const container = document.getElementById("container");

    questions.forEach(function (question, index) {
        const questionElement = document.createElement("div");
        questionElement.classList.add("question");
        questionElement.innerHTML = `
            <p>${index + 1}. ${question.question}</p>
            <ul class="choices">
                ${question.choices
                    .map(
                        (choice, choiceIndex) => `
                            <li class="choice">
                                <label class="${userAnswers[index] === String.fromCharCode(97 + choiceIndex) ? 'selected' : ''} ${question.correctAnswer === String.fromCharCode(97 + choiceIndex) ? 'correct' : 'false'}  ">
                                    <input type="radio" name="question${index}" value="${String.fromCharCode(97 + choiceIndex)}" ${userAnswers[index] === String.fromCharCode(97 + choiceIndex) ? 'checked' : ''} disabled>
                                    ${choice}
                                </label>
                            </li>
                        `
                    )
                    .join("")}
            </ul>
        `;
        container.style.border ="1px 0px";
        container.appendChild(questionElement);
        if (userAnswers[index] === question.correctAnswer) {
            score++;
        }
    });

    const scoreElement = document.createElement("div");
    const LastElement = document.createElement("div");
    scoreElement.classList.add("score");
    scoreElement.textContent = `Score: ${score}/${questions.length}`;
    scoreElement.classList.add("myScore")
    LastElement.appendChild(scoreElement);

    const returnHome = document.createElement("button");
    returnHome.classList.add("Kabseh");
    returnHome.textContent=`Return To Home`;
    returnHome.type = "button"
    LastElement.appendChild(returnHome);
    LastElement.classList.add("last-element");
    container.appendChild(LastElement);
    returnHome.onclick = function(){
        window.location.href="../homepage.html"
    }

    const correctLabels = document.querySelectorAll('.correct');
    const result= document.getElementById("result");
    correctLabels.forEach(label => {
        label.classList.add('selected');
    if(score>=3){
        container.style.backgroundColor="#fff";
        result.classList.add("result-pass");
 
        result.textContent=`Good Jop You Pass ! your Result is ${score}/${questions.length}`
    }else{
        container.style.backgroundColor="#fff"
        result.classList.add("result-fail");
        result.append(``)
        result.innerHTML=`You Failed ! your Result is ${score}/${questions.length}`
        
    }
    });
    function logout() {
        localStorage.removeItem("isLoggedIn");
        localStorage.removeItem("name");
        window.location.href = "../homepage.html";
      }