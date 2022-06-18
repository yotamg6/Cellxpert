/** @jsxImportSource @emotion/react */
import { useContext } from 'react';
// import { StoreContext } from '../App';
import { observer } from 'mobx-react-lite';
import { action } from 'mobx';

import { css } from '@emotion/react';

const BtnTotalNumOfLetterInDictio = observer(
  // ({ store: { letter, totalResult, totalNumOfLetterInDictio } }: any) => {
  ({ onClickGetTotalInDiction }: any) => {
    // const { totalNumOfLetterInDictio, letter } = useContext(StoreContext);
    // console.log(store.letter);
    return (
      <>
        <button
          onClick={action((e) => {
            onClickGetTotalInDiction(e);
          })}
        >
          Total number
        </button>
      </>
    );
    // };
  }
);

export default BtnTotalNumOfLetterInDictio;

// the button will be placed inside a box with the full explanation of button use
