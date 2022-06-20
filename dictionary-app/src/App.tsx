import './App.css';
import { wordsStore } from './stores/WordsStore';
import LetterQueryForm from './components/LetterQueryForm';
import MainPage from './components/MainPage';
import MainTitle from './components/MainTitle';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <div className="App">
      <MainTitle />
      <LetterQueryForm store={wordsStore} />
      <ToastContainer />
      <MainPage store={wordsStore} />
    </div>
  );
}

export default App;
