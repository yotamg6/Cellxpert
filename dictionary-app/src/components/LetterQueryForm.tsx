import { observer } from 'mobx-react-lite';
import { action } from 'mobx';
import { useState, useContext } from 'react';
// import { StoreContext } from '../App';

const LetterQueryForm = observer(
  ({ store: { letter, setInputLetter } }: any) => {
    // ({ onChangeSetInput, inputValue }: any) => {
    // const LetterQueryForm = () => {
    // const { inputLetter, letter } = useContext(StoreContext);
    return (
      <>
        <div>
          <input
            type="text"
            name="fLetter"
            value={letter}
            maxLength={1}
            // value={inputValue}
            // onChange={inputLetter}
            // onChange={store.inputLetter}
            onChange={action((e) => {
              setInputLetter(e);
            })}
            // onChange={action((e) => {
            //   onChangeSetInput(e);
            // })}
          ></input>
        </div>
      </>
    );
    // };
  }
);

export default LetterQueryForm;
