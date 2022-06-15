import { useState } from 'react';
import { getNumOfWordsBeginW, getNumOfWordsEndW } from '../getApi';
const WordBegW = () => {
  const [result, setResult] = useState();
  const [title, setTitle] = useState();
  //   const setResultState = ()=> {
  //     getNumOfWordsBeginW(input)
  //   }//should I set a state with an object containing the title and result?

  return (
    <>
      {/* <button onClick={()=>setResult(getNumOfWordsBeginW(input))}></button>*/}
    </>
  );
};

export default WordBegW;
