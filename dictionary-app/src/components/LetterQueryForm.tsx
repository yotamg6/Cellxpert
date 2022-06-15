import { useState } from 'react';
const LetterQueryForm = () => {
  const [letterInput, setLetterInput] = useState('');
  const handleInputChange = ({
    target: { value },
  }: React.ChangeEvent<HTMLInputElement>) => {
    console.log('value', value);
    setLetterInput(value);
  };
  return (
    <>
      <div>
        <input
          type="text"
          name="fLetter"
          value={letterInput}
          onChange={handleInputChange}
        ></input>
      </div>
    </>
  );
};

export default LetterQueryForm;
