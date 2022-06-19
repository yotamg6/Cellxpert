import { useContext } from 'react';
// import { StoreContext } from '../App';
import { observer } from 'mobx-react-lite';
import { action } from 'mobx';
import { Box } from '../styles';

import { css } from '@emotion/react';

const BtnTotalNumOfLetterInDictio = observer(
  ({ onClickGetTotalInDiction, letter }: any) => {
    return (
      <>
        <Box>
          How many times does
          {letter ? <p> the letter {letter} </p> : <p>a chosen letter </p>}
          appear in the dictionary
          <br />
          <button
            onClick={action((e) => {
              onClickGetTotalInDiction(e);
            })}
          >
            Get the total number
          </button>
        </Box>
      </>
    );
  }
);

export default BtnTotalNumOfLetterInDictio;
