/** @jsxImportSource @emotion/react */
import { observer } from 'mobx-react-lite';
import { Box } from '../styles';

const BtnNumWordsWRepConju = observer(
  ({ onClickGetNunWordsInConju, letter }: any) => {
    return (
      <>
        <Box css={{ backgroundColor: '#c0ffff', border: '15px solid #f1ffff' }}>
          How many words have the{' '}
          {letter ? <p>letter {letter} </p> : <p>same letter </p>} repeated in
          conjunction
          <br />
          <button
            css={{
              height: '30px',
              backgroundColor: '#3366ff',
              color: 'white',
              margin: '10px',
            }}
            onClick={onClickGetNunWordsInConju}
          >
            GET THE NUMBER
          </button>
        </Box>
      </>
    );
    // };
  }
);

export default BtnNumWordsWRepConju;
