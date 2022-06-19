import BtnNumOfWordsEndW from './BtnNumOfWordsEndW';
import BtnTotalNumOfLetterInDictio from './BtnTotalNumOfLetterInDictio';
import LetterQueryForm from './LetterQueryForm';
import { observer } from 'mobx-react-lite';
import BtnNumWordsWRepConju from './BtnNumWordsWRepConju';
import BtnNumOfWordsBegW from './BtnNumOfWordsBegW';
import styled from '@emotion/styled';
import { FlexBox } from '../styles';
import BarChart from './BarCharts';
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
      most,
      least,
      letterMost,
      letterLeast,
      letterResult,
    },
  }: any) => {
    const data = { most, least, letterMost, letterLeast, letterResult };
    return (
      <>
        {/* <LetterQueryForm onChangeSetInput={setInputLetter} inputValue={letter} /> */}
        <FlexBox>
          <BtnNumOfWordsBegW
            onClickGetNumWordsBeg={numOfWordsBeginW}
            letter={letter}
          />
          <BtnNumOfWordsEndW
            onClickGetNumWordsEnd={numOfWordsEndW}
            letter={letter}
          />
          <BtnNumWordsWRepConju
            onClickGetNunWordsInConju={numOfWordsRepInConjun}
            letter={letter}
          />
          <BtnTotalNumOfLetterInDictio
            onClickGetTotalInDiction={totalNumOfLetterInDictio}
            letter={letter}
          />
        </FlexBox>

        <br />
        {letter && title ? <div>{title} </div> : null}
        {errorAlert ? <div>{errorAlert}</div> : null}
        <BarChart letterData={data} />
      </>
    );
  }
);

export default MainPage;
