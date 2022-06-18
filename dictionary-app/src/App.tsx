import './App.css';
import { createContext } from 'react';
import { wordsStore } from './stores/WordsStore';
import { LetterInfo } from './interfaces';
import { title } from 'process';
import LetterQueryForm from './components/LetterQueryForm';
import BtnTotalNumOfLetterInDictio from './components/BtnTotalNumOfLetterInDictio';
import BtnNumOfWordsBeginW from './components/BtnNumOfWordsBeginW';
import BtnNumOfWordsEndW from './components/BtnNumOfWordsEndW';
import MainPage from './components/MainPage';

// export const StoreContext = createContext<wordsStore();

function App() {
  return (
    // <StoreContext.Provider value={new wordsStore()}>
    <div className="App">
      <LetterQueryForm store={wordsStore} />
      <MainPage store={wordsStore} />
      {/* <LetterQueryForm /> */}
      {/* <BtnNumOfWordsBeginW store={wordsStore} />
      <BtnNumOfWordsEndW store={wordsStore} />
      <BtnTotalNumOfLetterInDictio store={wordsStore} /> */}
    </div>
    // </StoreContext.Provider>
  );
}

export default App;
