import { useSelector } from 'react-redux';
import './App.css';
import { Quiz, Results } from './components';
import { RootState } from './store/store';

function App() {
    const { isFinished } = useSelector((state: RootState) => state.quiz);

    return <>{isFinished ? <Results /> : <Quiz />}</>;
}

export default App;
