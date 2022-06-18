import { makeAutoObservable } from 'mobx';
import axios from 'axios';
import { LetterInfo } from '../interfaces';

class WordsStore {
  letter: string = '';
  title: string = '';
  errorAlert: string = '';

  constructor() {
    makeAutoObservable(this);
  }

  options = {
    method: 'GET',
    url: 'https://wordsapiv1.p.rapidapi.com/words/',
    params: { letterPattern: '' },
    headers: {
      'X-RapidAPI-Key': '8b0c9f2536mshc8d9eaac0051a02p16281djsnafb9e1c70f62',
      'X-RapidAPI-Host': 'wordsapiv1.p.rapidapi.com',
    },
  };

  numOfWordsBeginW = async () => {
    if (this.letter) {
      const newOptions = { ...this.options };
      newOptions.params.letterPattern = `^${this.letter}`;
      const { data } = await axios.request(newOptions);
      const { total } = data.results;
      if (total) {
        this.setBeginResult(total);
      } else return 0;
    } else return;
  };

  numOfWordsEndW = async () => {
    if (this.letter) {
      const newOptions = { ...this.options };
      newOptions.params.letterPattern = `${this.letter}$`;
      const { data } = await axios.request(newOptions);
      const { total } = data.results;
      if (total) {
        this.setEndResult(total);
      } else return 0;
    } else return;
  };

  numOfWordsRepInConjun = async () => {
    if (this.letter) {
      const newOptions = { ...this.options };
      newOptions.params.letterPattern = `${this.letter}${this.letter}`;
      const { data } = await axios.request(newOptions);
      console.log(data);
      const { total } = data.results;
      if (total) {
        this.setTotalResult(total);
      } else return 0;
    } else return;
  };

  totalNumOfLetterInDictio = async () => {
    if (this.letter) {
      const newOptions = { ...this.options };
      newOptions.params.letterPattern = `${this.letter}`;
      const { data } = await axios.request(newOptions);

      const { total } = data.results;
      if (total) {
        this.setTotalResult(total);
      } else return 0;
    } else return;
  };

  setBeginResult = (resu: number) => {
    this.title = `Number of words that begin with the letter ${this.letter} is ${resu}`;
  };

  setEndResult = (resu: number) => {
    this.title = `Number of words that end with the letter ${this.letter} is ${resu}`;
  };

  setTotalResult = (resu: number) => {
    this.title = `The total number of times the letter ${this.letter} appears in the dictionary is ${resu}`;
  };

  setInputLetter = ({
    target: { value },
  }: React.ChangeEvent<HTMLInputElement>) => {
    let allowedChar = /^[a-z]+$/;
    if (value === '' || allowedChar.test(value)) {
      this.letter = value;
    } else {
      this.errorAlert = 'only one letter charachter is allowed';
    }
  };
}

export const wordsStore = new WordsStore();

////////to do
// - turn prevent message in Main into a toast
// - make boxes with description for the buttons
// - add charts to the ui
// - if time, change the conju fun to be with regex (compute repeated)

// if (data.length) {
//   const regExLetter = new RegExp(this.letter, 'g');
//   const wordCounts = data
//     .map((wordObj: any) => {
//       const { word } = wordObj;
//       return (word.match(regExLetter) || []).length;
//     })
//     .flat();
//   const resu = wordCounts.reduce(
//     (acc: number, cur: number) => (acc += cur)
//   );
//   this.setTotalResult(resu);
