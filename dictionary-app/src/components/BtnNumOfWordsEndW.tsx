import { observer } from 'mobx-react-lite';
import { useContext } from 'react';
// import { StoreContext } from '../App';

// const BtnNumOfWordsEndW = () => {
const BtnNumOfWordsEndW = observer(
  // ({ store: { endResult, letter, numOfWordsEndW } }: any) => {
  ({ onClickGetNumWordsEnd }: any) => {
    // const { numOfWordsEndW, letter } = useContext(StoreContext);
    return (
      <>
        {/* Num of words that end with {letter} is {endResult} */}
        {/* <button onClick={numOfWordsEndW}>Num of words that end </button> */}
        <button onClick={onClickGetNumWordsEnd}>Num of words that end </button>
      </>
    );
    // };
  }
);

export default BtnNumOfWordsEndW;
