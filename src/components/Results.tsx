import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { questions } from '../data';
import { resetQuestions } from '../features';

const Results = () => {
    const dispatch = useDispatch();
    const { score } = useSelector((state: RootState) => state.quiz);

    const handleResetScore = () => {
        dispatch(resetQuestions());
    };

    return (
        <>
            <h1>We've reached the end</h1>
            <div>
                You've scored {score}/{questions.length}
            </div>

            <div>Reset score</div>
            <button onClick={() => handleResetScore()}>Reset questions</button>
        </>
    );
};

export default Results;
