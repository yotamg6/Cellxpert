import './App.css';
import { createContext } from 'react';
import { wordsStore } from './stores/WordsStore';
import { LetterInfo } from './interfaces';
import LetterQueryForm from './components/LetterQueryForm';
import MainPage from './components/MainPage';

// export const StoreContext = createContext<wordsStore();

function App() {
  return (
    // <StoreContext.Provider value={new wordsStore()}>
    <div className="App">
      <LetterQueryForm store={wordsStore} />
      <MainPage store={wordsStore} />
    </div>
    // </StoreContext.Provider>
  );
}

export default App;
