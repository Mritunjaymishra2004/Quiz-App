* React Quiz App

A fully responsive Quiz Application built with React + Tailwind CSS.
Supports Next / Previous / Skip Questions, Final Submit, Dashboard with Retake option, and Grade Calculation.

* Features

* Dashboard with:

Start Quiz button

Last attempt score & grade

Retake Quiz option

* Quiz Page:

Multiple-choice questions (10–15 from questions.json)

Next / Previous / Skip navigation

Progress bar

Final Submit option

* Results Page:

Shows total score & grade (A, B, C, D)

Displays correct & incorrect answers

Option to go back to Dashboard

* Responsive on Laptop, Smartphone, iPhone, Tablets

* Background image with transparent overlay

* Clean UI with Tailwind CSS

* Tech Stack

React (Vite)

Tailwind CSS

JavaScript (ES6+)

* Project Structure
quiz-app/
│── public/
│   ├── background.jpg
│   └── questions.json       # Question set
│── src/
│   ├── components/
│   │   ├── QuestionCard.jsx
│   │   ├── ProgressBar.jsx
│   │   └── ResultCard.jsx
│   ├── pages/
│   │   ├── Dashboard.jsx
│   │   ├── Quiz.jsx
│   │   └── Results.jsx
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
│── package.json
│── tailwind.config.js
│── README.md

* Installation & Setup

Clone the repository

git clone https://github.com/your-username/react-quiz-app.git
cd react-quiz-app


Install dependencies

npm install


Run the project

npm run dev


Build for production

npm run build

* Sample questions.json
[
  {
    "id": 1,
    "question": "What is the capital of France?",
    "options": ["Berlin", "Madrid", "Paris", "Rome"],
    "answer": "Paris"
  },
  {
    "id": 2,
    "question": "Who developed the theory of relativity?",
    "options": ["Isaac Newton", "Albert Einstein", "Nikola Tesla", "Galileo Galilei"],
    "answer": "Albert Einstein"
  }
]


* Add 10–15 questions in public/questions.json.

* Usage Flow

User starts from Dashboard.

Click Start Quiz → Goes to Quiz page.

Navigate questions with Next, Previous, Skip.

Click Final Submit → Goes to Results page.

From Results, user can go back to Dashboard & Retake Quiz.

* Screenshots (Optional)

Dashboard

Quiz Page

Results Page

* Author

Developed by Mritunjay Mishra 