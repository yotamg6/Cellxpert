import { observer } from 'mobx-react-lite';

const BtnNumWordsWRepConju = observer(({ onClickGetNunWordsInConju }: any) => {
  return (
    <>
      <button onClick={onClickGetNunWordsInConju}>Num of words in conju</button>
    </>
  );
  // };
});

export default BtnNumWordsWRepConju;
