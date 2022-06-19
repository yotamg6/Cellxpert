import { observer } from 'mobx-react-lite';
import { useContext } from 'react';
import { Box } from '../styles';

const BtnNumOfWordsEndW = observer(({ onClickGetNumWordsEnd, letter }: any) => {
  return (
    <>
      <Box>
        How many words end with the{' '}
        {letter ? <p>letter {letter} </p> : <p>a chosen letter </p>}
        <br />
        <button onClick={onClickGetNumWordsEnd}>Get number of words </button>
      </Box>
    </>
  );
});

export default BtnNumOfWordsEndW;
