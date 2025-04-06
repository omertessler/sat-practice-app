
import { useState } from "react"
import { Button } from "@/components/ui/button"

const questions = [
  {
    id: 1,
    question: "Which choice best states the main idea of the passage?",
    passage: "Buck held Thornton in high regard, more so than any other human. Despite his wolfish instincts returning, he stayed close to Thornton, loyal and protective.",
    options: [
      "Buck has become less social since he began living with Thornton.",
      "Buck mistrusts humans and avoids them.",
      "Buck has been well liked by Thornton’s friends.",
      "Buck holds Thornton in higher regard than any other person."
    ],
    answer: 3
  },
  {
    id: 2,
    question: "Which of the following equations represents a line that passes through the point (2, 3) and has a slope of 4?",
    options: [
      "y = 4x + 1",
      "y = 3x + 2",
      "y = 4x - 5",
      "y = 4x - 5"
    ],
    answer: 0
  }
]

export default function SATPractice() {
  const [current, setCurrent] = useState(0)
  const [selected, setSelected] = useState(null)
  const [score, setScore] = useState(null)

  const handleNext = () => {
    if (selected === null) return
    const isLast = current === questions.length - 1
    if (isLast) {
      const correct = questions.filter((q, i) => q.answer === selectedAnswers[i]).length
      setScore(correct)
    } else {
      setCurrent(current + 1)
      setSelected(null)
    }
  }

  const [selectedAnswers, setSelectedAnswers] = useState([])

  const handleSelect = (index) => {
    setSelected(index)
    const updated = [...selectedAnswers]
    updated[current] = index
    setSelectedAnswers(updated)
  }

  if (score !== null) {
    return (
      <div className="p-6 max-w-xl mx-auto text-center">
        <h2 className="text-2xl font-bold mb-4">Test Complete!</h2>
        <p className="text-lg">You scored {score} out of {questions.length}</p>
      </div>
    )
  }

  const q = questions[current]

  return (
    <div className="p-6 max-w-xl mx-auto">
      <div className="mb-4">
        <h2 className="text-xl font-semibold">Question {current + 1} of {questions.length}</h2>
        {q.passage && <p className="italic my-2">{q.passage}</p>}
        <p className="mb-2">{q.question}</p>
        <ul className="space-y-2">
          {q.options.map((opt, i) => (
            <li
              key={i}
              onClick={() => handleSelect(i)}
              className={\`p-2 border rounded cursor-pointer \${selected === i ? 'bg-blue-100 border-blue-500' : 'hover:bg-gray-100'}\`}
            >
              {opt}
            </li>
          ))}
        </ul>
      </div>
      <Button onClick={handleNext} disabled={selected === null}>Next</Button>
    </div>
  )
}
