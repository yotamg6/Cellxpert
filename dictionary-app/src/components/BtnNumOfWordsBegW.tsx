import { observer } from 'mobx-react-lite';
import { useContext } from 'react';
import { Box } from '../styles';

const BtnNumOfWordsBegW = observer(({ onClickGetNumWordsBeg, letter }: any) => {
  return (
    <>
      <Box>
        How many words begin with the{' '}
        {letter ? <p>letter {letter} </p> : <p>a chosen letter </p>}
        <br />
        <button onClick={onClickGetNumWordsBeg}>Get number of words</button>
      </Box>
    </>
  );
});

export default BtnNumOfWordsBegW;
