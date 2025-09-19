import { useState } from "react";
import "./index.css";
export default function App() {
  return (
    <div className="App">
      <FlashCards />
    </div>
  );
}

const questions = [
  {
    id: 1,
    question: "What is the purpose of useState in React?",
    answer: "It allows components to have state variables.",
  },
  {
    id: 2,
    question: "What does useEffect do in React?",
    answer:
      "It runs side effects like data fetching, subscriptions, or DOM updates.",
  },
  {
    id: 3,
    question: "What is the initial argument in useState used for?",
    answer: "It defines the initial value of the state variable.",
  },
  {
    id: 4,
    question: "What does useState return?",
    answer:
      "An array with the current state value and a function to update it.",
  },
  {
    id: 5,
    question: "When does useEffect run by default?",
    answer: "After every render of the component.",
  },
  {
    id: 6,
    question: "How can you make useEffect run only once?",
    answer: "By passing an empty dependency array `[]`.",
  },
  {
    id: 7,
    question: "What is a dependency array in useEffect?",
    answer:
      "An array that tells React when to re-run the effect based on variable changes.",
  },
  {
    id: 8,
    question:
      "What happens if you don’t provide a dependency array to useEffect?",
    answer: "The effect runs after every render.",
  },
  {
    id: 9,
    question: "What happens if you pass an empty array `[]` to useEffect?",
    answer: "The effect runs only once after the initial render.",
  },
  {
    id: 10,
    question: "How do you update state with useState?",
    answer: "By calling the state updater function returned by useState.",
  },
  {
    id: 11,
    question: "Can useState store objects or arrays?",
    answer:
      "Yes, any type of value (primitive or complex) can be stored in state.",
  },
  {
    id: 12,
    question: "How do you update state based on the previous value?",
    answer:
      "By passing a function to the state updater, e.g., setCount(prev => prev + 1).",
  },
  {
    id: 13,
    question: "What should you return from useEffect for cleanup?",
    answer:
      "A function that cleans up side effects like event listeners or timers.",
  },
  {
    id: 14,
    question: "When is the cleanup function inside useEffect called?",
    answer: "Before the effect runs again and when the component unmounts.",
  },
  {
    id: 15,
    question: "Can you have multiple useState hooks in one component?",
    answer: "Yes, you can use as many useState hooks as needed.",
  },
  {
    id: 16,
    question: "Can you have multiple useEffect hooks in one component?",
    answer:
      "Yes, React allows multiple useEffect hooks for better separation of concerns.",
  },
  {
    id: 17,
    question:
      "What’s the difference between useEffect with no dependencies and with []?",
    answer: "No dependencies = runs after every render, [] = runs only once.",
  },
  {
    id: 18,
    question: "What problem does useEffect solve compared to class components?",
    answer:
      "It replaces lifecycle methods like componentDidMount, componentDidUpdate, and componentWillUnmount.",
  },
  {
    id: 19,
    question: "Can you call useState or useEffect conditionally?",
    answer: "No, hooks must be called at the top level of the component.",
  },
  {
    id: 20,
    question: "What’s a common use case of useEffect?",
    answer: "Fetching data from an API when a component mounts.",
  },
];

function FlashCards() {
  const [selectedId, setSelectedId] = useState(null);

  function handleClick(id) {
    setSelectedId(id !== selectedId ? id : null);
  }

  return (
    <div className="flashcards">
      {questions.map((questions) => (
        <div
          key={questions.id}
          onClick={() => handleClick(questions.id)}
          className={questions.id === selectedId ? "selected" : ""}
        >
          <p>
            {questions.id === selectedId
              ? questions.answer
              : questions.question}
          </p>
        </div>
      ))}
    </div>
  );
}
