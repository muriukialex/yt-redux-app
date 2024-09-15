import { useDispatch, useSelector } from 'react-redux';
import { questions } from '../data';
import { RootState } from '../store/store';
import { answerQuestion } from '../features';

const Quiz = () => {
    const dispatch = useDispatch();
    // get the current question, using the currentQuestionId
    const { currentQuestionIndex, isFinished } = useSelector(
        (state: RootState) => state.quiz
    );

    // handle the user inputted answer
    const handleAnswer = (answer: string) => {
        // answer the question from this point!
        dispatch(answerQuestion(answer));
    };

    if (isFinished) {
        return <h2>You've reached the end of the questions!</h2>;
    }

    return (
        <>
            <h1>Welcome to the Quiz application</h1>
            {questions[currentQuestionIndex].question}
            {questions[currentQuestionIndex].options.map((option, index) => (
                <button key={index} onClick={() => handleAnswer(option)}>
                    {option}
                </button>
            ))}
        </>
    );
};

export default Quiz;
