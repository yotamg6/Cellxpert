/** @jsxImportSource @emotion/react */
import { observer } from 'mobx-react-lite';
import { action } from 'mobx';
import { Box } from '../styles';

interface LetterProps {
  onClickGetNumWordsBeg: (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => void;
  letter: string;
}

const BtnNumOfWordsBegW = observer(
  ({ onClickGetNumWordsBeg, letter }: LetterProps) => {
    return (
      <>
        <Box css={{ backgroundColor: '#ff8fad', border: '15px solid #ffc0d1' }}>
          How many words begin with
          {letter ? <p> the letter {letter} </p> : <p>your chosen letter </p>}
          <br />
          <button
            css={{
              height: '30px',
              backgroundColor: '#f0aec8',
              margin: '10px',
            }}
            onClick={action((e) => {
              onClickGetNumWordsBeg(e);
            })}
          >
            GET THE NUMBER
          </button>
        </Box>
      </>
    );
  }
);

export default BtnNumOfWordsBegW;
