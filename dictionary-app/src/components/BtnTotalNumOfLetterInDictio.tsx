/** @jsxImportSource @emotion/react */
import { observer } from 'mobx-react-lite';
import { action } from 'mobx';
import { Box } from '../styles';

// import { css } from '@emotion/react';

interface LetterProps {
  onClickGetTotalInDiction: (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => void;
  letter: string;
}

const BtnTotalNumOfLetterInDictio = observer(
  ({ onClickGetTotalInDiction, letter }: LetterProps) => {
    return (
      <>
        <Box>
          How many times does
          {letter ? <p> the letter {letter} </p> : <p>your chosen letter </p>}
          appear in the dictionary
          <br />
          <button
            css={{
              height: '30px',
              backgroundColor: 'white',
              color: 'black',
              margin: '10px',
            }}
            onClick={action((e) => {
              onClickGetTotalInDiction(e);
            })}
          >
            GET THE TOTAL NUMBER
          </button>
        </Box>
      </>
    );
  }
);

export default BtnTotalNumOfLetterInDictio;
