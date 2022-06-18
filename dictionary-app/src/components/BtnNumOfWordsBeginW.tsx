import { observer } from 'mobx-react-lite';
import { useContext } from 'react';
// import { StoreContext } from '../App';
// const BtnNumOfWordsBeginW = () => {
const BtnNumOfWordsBeginW = observer(
  // ({ store: { letter, beginResult, numOfWordsBeginW } }: any) => {
  ({ onClickGetNumWordsBeg }: any) => {
    // const { numOfWordsBeginW, letter } = useContext(StoreContext);
    return (
      <>
        {/* num of words that begin with the letter {letter} is {beginResult} */}
        {/* <button onClick={numOfWordsBeginW}>num of words that begin</button> */}
        <button onClick={onClickGetNumWordsBeg}>num of words that begin</button>
      </>
    );
    // };
  }
);

export default BtnNumOfWordsBeginW;
