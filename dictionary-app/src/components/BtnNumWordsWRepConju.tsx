import { observer } from 'mobx-react-lite';
import { Box } from '../styles';

const BtnNumWordsWRepConju = observer(
  ({ onClickGetNunWordsInConju, letter }: any) => {
    return (
      <>
        <Box>
          How many words have the{' '}
          {letter ? <p>letter {letter} </p> : <p>same letter </p>} repeated in
          conjunction
          <br />
          <button onClick={onClickGetNunWordsInConju}>Get the number</button>
        </Box>
      </>
    );
    // };
  }
);

export default BtnNumWordsWRepConju;
