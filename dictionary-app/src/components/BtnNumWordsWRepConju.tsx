/** @jsxImportSource @emotion/react */
import { observer } from 'mobx-react-lite';
import { Box } from '../styles';
import { action } from 'mobx';

interface LetterProps {
  onClickGetNunWordsInConju: (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => void;
  letter: string;
}

const BtnNumWordsWRepConju = observer(
  ({ onClickGetNunWordsInConju, letter }: LetterProps) => {
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
            onClick={action((e) => {
              onClickGetNunWordsInConju(e);
            })}
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
