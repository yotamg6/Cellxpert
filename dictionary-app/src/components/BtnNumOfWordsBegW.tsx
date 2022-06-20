/** @jsxImportSource @emotion/react */
import { observer } from 'mobx-react-lite';
import { useContext } from 'react';
import { Box } from '../styles';

const BtnNumOfWordsBegW = observer(({ onClickGetNumWordsBeg, letter }: any) => {
  return (
    <>
      <Box css={{ backgroundColor: '#ff8fad', border: '15px solid #ffc0d1' }}>
        How many words begin with
        {letter ? <p> the letter {letter} </p> : <p>your chosen letter </p>}
        <br />
        <button
          css={{ height: '30px', backgroundColor: '#f0aec8', margin: '10px' }}
          onClick={onClickGetNumWordsBeg}
        >
          GET THE NUMBER
        </button>
      </Box>
    </>
  );
});

export default BtnNumOfWordsBegW;
