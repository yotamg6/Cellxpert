import './App.css';
import { createContext } from 'react';
import { wordsStore } from './stores/WordsStore';
import { LetterInfo } from './interfaces';
import LetterQueryForm from './components/LetterQueryForm';
import MainPage from './components/MainPage';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

// export const StoreContext = createContext<wordsStore();

function App() {
  return (
    // <StoreContext.Provider value={new wordsStore()}>
    <div className="App">
      <ToastContainer />
      <LetterQueryForm store={wordsStore} />
      <MainPage store={wordsStore} />
    </div>
    // </StoreContext.Provider>
  );
}

export default App;
