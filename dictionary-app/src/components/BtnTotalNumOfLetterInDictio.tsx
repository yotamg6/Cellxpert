/** @jsxImportSource @emotion/react */
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
