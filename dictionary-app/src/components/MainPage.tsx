/** @jsxImportSource @emotion/react */
import BtnNumOfWordsEndW from './BtnNumOfWordsEndW';
import BtnTotalNumOfLetterInDictio from './BtnTotalNumOfLetterInDictio';
import { observer } from 'mobx-react-lite';
import { useEffect, useState } from 'react';
import BtnNumWordsWRepConju from './BtnNumWordsWRepConju';
import BtnNumOfWordsBegW from './BtnNumOfWordsBegW';
import styled from '@emotion/styled';
import { FlexBox } from '../styles';
import BarChart from './BarCharts';
import { toast } from 'react-toastify';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import { LetterInfo } from '../interfaces';

interface LetterProps {
  store: LetterInfo;
}
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
      isLoading,
    },
  }: LetterProps) => {
    // const data = { most, least, letterMost, letterLeast, letterResult, title };
    const data = {
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
      isLoading,
    };
    const Summary = styled.div`
      display: flex;
      justify-content: center;
      margin: 5px;
    `;

    useEffect(() => {
      if (errorAlert) {
        toast.error(errorAlert);
      }
    }, [errorAlert]);

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
        {isLoading ? (
          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <CircularProgress color="secondary" size="100px" />
          </Box>
        ) : null}
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
        <BarChart letterData={data} />
      </>
    );
  }
);

export default MainPage;
