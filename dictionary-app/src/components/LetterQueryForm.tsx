/** @jsxImportSource @emotion/react */
import { observer } from 'mobx-react-lite';
import { action } from 'mobx';
import SearchIcon from '@mui/icons-material/Search';
import styled from '@emotion/styled';
import { FlexBox } from '../styles';
import { LetterInfo } from '../interfaces';

interface LetterProps {
  store: LetterInfo;
}

const SearchBar = styled.div`
  width: 20%;
  box-sizing: border-box;
  overflow-x: scroll;
  background: #ffffff;
  border: 1px solid #e0e0e0;
  border-radius: 46px;
`;
const InputContainer = styled.div`
  display: flex;
  border: none;
  height: 30%;
  outline: none;
  line-height: 140%;
`;

const LetterQueryForm = observer(
  ({ store: { letter, setInputLetter } }: LetterProps) => {
    return (
      <>
        <div>
          <FlexBox css={{ justifyContent: 'center' }}>
            <SearchBar>
              <InputContainer>
                <SearchIcon></SearchIcon>
                {setInputLetter ? (
                  <input
                    css={{
                      border: 'none',
                      height: '20px',
                      outline: 'none',
                      padding: '0',
                    }}
                    type="text"
                    name="fLetter"
                    placeholder="search"
                    value={letter}
                    maxLength={1}
                    onChange={action((e) => {
                      setInputLetter(e);
                    })}
                  ></input>
                ) : null}
              </InputContainer>
            </SearchBar>
          </FlexBox>
        </div>
      </>
    );
  }
);

export default LetterQueryForm;
