import { makeAutoObservable } from 'mobx';
import axios from 'axios';
import { Response } from '../interfaces';

class WordsStore {
  letter: string = '';
  title: string = '';
  titleLetter: string = '';
  titleMost: string = '';
  titleLeast: string = '';
  errorAlert: string = '';
  most: number = 0;
  least: number = 0;
  letterMost: string = '';
  letterLeast: string = '';
  letterResult = 0;
  isLoading: boolean = false;

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
      this.isLoading = true;
      this.letterMost = 'S';
      this.letterLeast = 'X';
      this.most = 35970;
      this.least = 304;
      const newOptions = { ...this.options };
      newOptions.params.letterPattern = `^${this.letter}`;
      const { data } = await axios.request<Response>(newOptions);
      if (data.results) {
        const { total } = data.results;
        this.setBeginResult(total);
      } else return;
    } else return;
  };

  numOfWordsEndW = async () => {
    if (this.letter) {
      this.isLoading = true;
      this.letterMost = 'E';
      this.letterLeast = 'Q';
      this.most = 55257;
      this.least = 43;
      const newOptions = { ...this.options };
      newOptions.params.letterPattern = `${this.letter}$`;
      const { data } = await axios.request<Response>(newOptions);
      if (data.results) {
        const { total } = data.results;
        this.setEndResult(total);
      } else return;
    } else return;
  };

  numOfWordsRepInConjun = async () => {
    if (this.letter) {
      this.isLoading = true;
      this.letterMost = 'L';
      this.letterLeast = 'Q';
      this.most = 20390;
      this.least = 5;
      const newOptions = { ...this.options };
      newOptions.params.letterPattern = `${this.letter}${this.letter}`;
      const { data } = await axios.request<Response>(newOptions);
      if (data.results) {
        const { total } = data.results;
        this.setConjuResult(total);
      } else return;
    } else return;
  };

  totalNumOfLetterInDictio = async () => {
    if (this.letter) {
      this.isLoading = true;
      this.letterMost = 'E';
      this.letterLeast = 'Q';
      this.most = 233040;
      this.least = 5728;
      const newOptions = { ...this.options };
      newOptions.params.letterPattern = `${this.letter}`;
      const { data } = await axios.request<Response>(newOptions);
      if (data.results) {
        const { total } = data.results;
        this.setTotalResult(total);
      } else return;
    } else return;
  };

  setBeginResult = (resu: number) => {
    this.isLoading = false;

    this.title = 'Letters in beginnings of words';

    this.titleLetter = `Number of words that begin with the letter ${this.letter} is ${resu}.`;

    this.titleMost = `The letter that is most commonly found at the beginning of words is ${this.letterMost}.`;

    this.titleLeast = `The letter that is least commonly found at the beginning of words is ${this.letterLeast}.`;

    this.letterResult = resu;
  };

  setEndResult = (resu: number) => {
    this.isLoading = false;

    this.title = 'Letters in endings of words';

    this.titleLetter = `Number of words that end with the letter ${this.letter} is ${resu}.`;

    this.titleMost = `the letter that is most commonly found at the end of words is ${this.letterMost}.`;

    this.titleLeast = `the letter that is least commonly found at the end of words is ${this.letterLeast}.

    `;
    this.letterResult = resu;
  };

  setTotalResult = (resu: number) => {
    this.isLoading = false;

    this.title = 'Total number of times letters found in the dictionary';

    this.titleLetter = `The total number of times the letter ${this.letter} appears in the dictionary is ${resu}.`;

    this.titleMost = `The most commonly used letter is ${this.letterMost}.`;

    this.titleLeast = `The least commonly used letter is ${this.letterLeast}. `;

    this.letterResult = resu;
  };

  setConjuResult = (resu: number) => {
    this.isLoading = false;

    this.title = 'Repeated letters in conjunction';

    this.titleLetter = `${resu} words have the letter ${this.letter} repeated in conjunction.`;

    this.titleMost = `The most frequent double-letter combination is ${this.letterMost}${this.letterMost}.`;

    this.titleLeast = `The least frequent double-letter combination is ${this.letterLeast}${this.letterLeast}.`;

    this.letterResult = resu;
  };

  setInputLetter = ({
    target: { value },
  }: React.ChangeEvent<HTMLInputElement>) => {
    let allowedChar = /^[a-z]+$/;
    const lowerCased = value.toLowerCase();
    if (lowerCased === '' || allowedChar.test(lowerCased)) {
      this.letter = lowerCased;
      this.title = '';
      this.errorAlert = '';
      this.letterResult = 0;
      this.most = 0;
      this.least = 0;
    } else {
      this.errorAlert = 'only one letter charachter is allowed';
      this.title = '';
    }
  };
}

export const wordsStore = new WordsStore();
