export const getNumOfWordsBeginW = async (letter) => {
  const { data } = await axios.get(
    `https://api.datamuse.com/words?sp=${letter}*`
  );
  console.log(data.length);
  if (data.length) {
    return data.length;
  } else return 0;
};

export const getNumOfWordsEndW = async (letter) => {
  const { data } = await axios.get(
    `https://api.datamuse.com/words?sp=*${letter}`
  );
  console.log(data.length);
  if (data.length) {
    return data.length;
  } else return 0;
};

export const getTotalNumOfLetterInDictio = (letter) => {
  const allWordsWLetter = () => {
    const { data } = await axios.get(
      `https://api.datamuse.com/words?sp=*${letter}*`
    );
    if (data.length) {
      return data;
    } else return 0;
  };
  const allWords = allWordsWLetter();
  if (allWords) {
    const regExLetter = new RegExp(letter + 'g');
    const wordCounts = allWords
      .map((word) => {
        const count = (regExLetter.match(word) || []).length;
        return count;
      })
      .flat();
    return wordCounts.reduce((acc, cur) => (acc += cur));
  }
};
