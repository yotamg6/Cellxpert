/** @jsxImportSource @emotion/react */
import BtnNumOfWordsEndW from './BtnNumOfWordsEndW';
import BtnTotalNumOfLetterInDictio from './BtnTotalNumOfLetterInDictio';
import LetterQueryForm from './LetterQueryForm';
import { observer } from 'mobx-react-lite';
import BtnNumWordsWRepConju from './BtnNumWordsWRepConju';
import BtnNumOfWordsBegW from './BtnNumOfWordsBegW';
import styled from '@emotion/styled';
import { FlexBox } from '../styles';
import BarChart from './BarCharts';
import { toast } from 'react-toastify';
const MainPage = observer(
  ({
    store: {
      numOfWordsBeginW,
      numOfWordsEndW,
      numOfWordsRepInConjun,
      totalNumOfLetterInDictio,
      letter,
      title,
      titleLetter,
      titleMost,
      titleLeast,
      errorAlert,
      most,
      least,
      letterMost,
      letterLeast,
      letterResult,
    },
  }: any) => {
    const data = { most, least, letterMost, letterLeast, letterResult, title };
    const Summary = styled.div`
      display: flex;
      justify-content: center;
      margin: 5px;
    `;
    if (errorAlert) {
      toast.error(errorAlert);
    }
    return (
      <>
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
        {letter && title ? (
          <Summary>
            <div
              css={{
                padding: '5px',
                margin: '5px',
                fontWeight: '700',
                textTransform: 'capitalize',
                backgroundColor: '#efffff',
                width: '720px',
                height: '100px',
                boxSizing: 'border-box',
                borderRadius: '70px',
              }}
            >
              <div>{titleLetter} </div>
              <br />
              <div>{titleMost}</div>
              <br />
              <div>{titleLeast}</div>
            </div>
          </Summary>
        ) : null}
        {errorAlert ? <div>{errorAlert}</div> : null}
        <BarChart letterData={data} />
      </>
    );
  }
);

export default MainPage;
