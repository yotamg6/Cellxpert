/** @jsxImportSource @emotion/react */
import { observer } from 'mobx-react-lite';
import { useContext } from 'react';
import { Box } from '../styles';

const BtnNumOfWordsEndW = observer(({ onClickGetNumWordsEnd, letter }: any) => {
  return (
    <>
      <Box css={{ backgroundColor: '#d3ff8f', border: '15px solid #e6ffc0' }}>
        How many words end with
        {letter ? <p>the letter {letter} </p> : <p>your chosen letter </p>}
        <br />
        <button
          css={{ height: '30px', backgroundColor: '#34ff34', margin: '10px' }}
          onClick={onClickGetNumWordsEnd}
        >
          GET THE NUMBER
        </button>
      </Box>
    </>
  );
});

export default BtnNumOfWordsEndW;
