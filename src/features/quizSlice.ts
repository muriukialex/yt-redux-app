import { createSlice } from '@reduxjs/toolkit';
import { questions } from '../data';
/**
 * quiz slice
 *
 * Keep track of
 *
 * 1. currentQuestionIndex
 * 2. score
 * 3. isFinished
 * 4. answers
 */

interface QuestionInterface {
    currentQuestionIndex: number;
    score: number;
    isFinished: boolean;
    answers: string[];
}

const originalState: QuestionInterface = {
    currentQuestionIndex: 0,
    score: 0,
    isFinished: false,
    answers: [],
};

const quizSlice = createSlice({
    name: 'quiz',
    initialState: originalState,
    reducers: {
        // we write the logic that will drive our application
        answerQuestion: (state, action) => {
            const currentQuestionId = state.currentQuestionIndex;

            state.answers.push(action.payload);

            // current question index is going to help us know if a user has answered the question correctly or not
            if (action.payload === questions[currentQuestionId].correctAnswer) {
                state.score += 1;
            }

            // we need to know if we have reached the end of the questions list
            if (state.currentQuestionIndex === questions.length - 1) {
                state.isFinished = true;
            } else {
                state.currentQuestionIndex += 1;
            }
        },
        resetQuestions: state => {
            state.currentQuestionIndex = 0;
            state.score = 0;
            state.isFinished = false;
            state.answers = [];
        },
    },
});

export const { answerQuestion, resetQuestions } = quizSlice.actions;
const quizReducer = quizSlice.reducer;

export default quizReducer;
