export interface Question {
  id: number
  question: string
  code: string
  answers: []
  correctAnswer: number
  userSelectedAnswer?: number
  isCorrectUserAnswer: boolean
}
