export interface LetterInfo {
  letter: string;
  title: string;
  titleLetter: string;
  titleMost: string;
  titleLeast: string;
  errorAlert: string;
  most: number;
  least: number;
  letterMost: string;
  letterLeast: string;
  letterResult: number;
  isLoading: boolean;
  setInputLetter?: (
    e: React.ChangeEvent<HTMLInputElement>
  ) => number | string | undefined | void;
  numOfWordsBeginW: (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => void;
  numOfWordsEndW: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  numOfWordsRepInConjun: (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => void;
  totalNumOfLetterInDictio: (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => void;
}
