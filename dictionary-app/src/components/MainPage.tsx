import BtnNumOfWordsBeginW from './BtnNumOfWordsBeginW';
import BtnNumOfWordsEndW from './BtnNumOfWordsEndW';
import BtnTotalNumOfLetterInDictio from './BtnTotalNumOfLetterInDictio';
import LetterQueryForm from './LetterQueryForm';
import { observer } from 'mobx-react-lite';
import BtnNumWordsWRepConju from './BtnNumWordsWRepConju';
const MainPage = observer(
  ({
    store: {
      numOfWordsBeginW,
      numOfWordsEndW,
      numOfWordsRepInConjun,
      totalNumOfLetterInDictio,
      letter,
      title,
      errorAlert,
    },
  }: any) => {
    return (
      <>
        {/* <LetterQueryForm onChangeSetInput={setInputLetter} inputValue={letter} /> */}
        <BtnNumOfWordsBeginW onClickGetNumWordsBeg={numOfWordsBeginW} />
        <BtnNumOfWordsEndW onClickGetNumWordsEnd={numOfWordsEndW} />
        <BtnNumWordsWRepConju
          onClickGetNunWordsInConju={numOfWordsRepInConjun}
        />
        <BtnTotalNumOfLetterInDictio
          onClickGetTotalInDiction={totalNumOfLetterInDictio}
        />

        <br />
        {letter && title ? <div>{title} </div> : null}
        {errorAlert ? <div>{errorAlert}</div> : null}
      </>
    );
  }
);

export default MainPage;
