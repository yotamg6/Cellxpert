/** @jsxImportSource @emotion/react */
// import { jsx } from '@emotion/react';
import { observer } from 'mobx-react-lite';
import { action } from 'mobx';
import { useState, useContext } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import styled from '@emotion/styled';

import { FlexBox } from '../styles';

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
  ({ store: { letter, setInputLetter } }: any) => {
    return (
      <>
        <div>
          <FlexBox css={{ justifyContent: 'center' }}>
            <SearchBar>
              <InputContainer>
                <SearchIcon></SearchIcon>
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
              </InputContainer>
            </SearchBar>
          </FlexBox>
        </div>
      </>
    );
    // };
  }
);

export default LetterQueryForm;

// .searchBar {
//   position: absolute;
//   box-sizing: border-box;
//   width: 89.34%;
//   height: 5.27%;
//   left: 5.87%;
//   top: 25%;
//   overflow-x: scroll;
//   background: #ffffff;
//   border: 1px solid #e0e0e0;
//   border-radius: 46px;
// }

// .iconSearch {
//   position: absolute;
//   width: 7.17%;
//   height: 60%;
//   left: 3.29%;
//   top: 25%;
// }

// .searchInput {
//   border: none;
//   position: absolute;
//   left: 80%;
//   height: 20px;
//   width: 280px;
//   outline: none;
//   font-family: 'Poppins';
//   font-style: normal;
//   font-weight: 400;
//   font-size: 14px;
//   line-height: 140%;
// }

// .group145115 {
//   width: 20px;
//   height: 20px;
//   /* left: 2px;
//   top: 0px; */
// }
