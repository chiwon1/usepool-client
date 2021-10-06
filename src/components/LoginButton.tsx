import React, { FC } from 'react';
import styled from 'styled-components';

import UI from '../constants/ui';
import { useHistory } from 'react-router-dom';
import { kakao } from '../config/kakao';
import { getAuth } from '../api/kakao';
import { updateToken } from '../api';

const LoginButton: FC = () => {
  const history = useHistory();

  const loginWithKakao = () => {
    kakao.Auth.login({
      success: async (res) => {
        try {
          console.log(res);
          const token = await getAuth(res.access_token);

          updateToken(token);
        } catch (err) {
          console.log('토큰 가져오기 실패');
        }
      },
      fail: (err: string) => {
        console.log(err);
      },
    });
  };

  return (
    <ListWrapper>
      <div onClick={loginWithKakao}>
        <Span>
          <span>
            <span>{UI.LOGIN}</span>
          </span>
        </Span>
      </div>
    </ListWrapper>
  );
};

const ListWrapper = styled.li`
  div {
    -webkit-box-align: center;
    -webkit-font-smoothing: antialiased;
    -webkit-tap-highlight-color: rgba(221, 221, 221, 0.4);
    align-items: center;
    background-color: initial;
    background-image: none;
    border-width: 0;
    box-sizing: border-box;
    color: #00aff5;
    display: flex;
    flex: 1 1 0;
    font-family: gt-eesti, 'Helvetica Neue', Helvetica, Arial, sans-serif;
    font-size: 16px;
    font-weight: 400;
    line-height: 16px;
    margin: 0;
    padding: 16px 24px;
    position: relative;
    text-decoration: none;
    user-select: none;
    vertical-align: baseline;
    white-space: pre-line;

    &:hover {
      background-color: #ededed;
      cursor: pointer;
    }

    &:disabled {
      cursor: default;
    }
  }
`;

const Span = styled.span`
  -webkit-box-align: center;
  -webkit-box-flex: 1;
  -webkit-font-smoothing: antialiased;
  align-items: center;
  border-width: 0;
  box-sizing: border-box;
  display: flex;
  flex-grow: 1;
  font-family: gt-eesti, 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: 16px;
  margin: 0;
  padding: 0;
  vertical-align: baseline;

  span {
    -webkit-font-smoothing: antialiased;
    border-width: 0;
    box-sizing: border-box;
    flex: 1 1 0;
    font-family: inherit;
    font-size: inherit;
    font-stretch: inherit;
    font-style: inherit;
    font-variant-caps: inherit;
    font-variant-east-asian: inherit;
    font-variant-ligatures: inherit;
    font-variant-numeric: inherit;
    font-weight: inherit;
    line-height: inherit;
    margin: 0;
    padding: 0;
    vertical-align: baseline;

    span {
      -webkit-font-smoothing: antialiased;
      border-width: 0;
      box-sizing: border-box;

      display: block;
      font-family: inherit;
      font-size: 18px;
      font-stretch: inherit;
      font-style: inherit;
      font-variant-caps: inherit;
      font-variant-east-asian: inherit;
      font-variant-ligatures: inherit;
      font-variant-numeric: inherit;
      font-weight: 400;
      line-height: 20px;
      margin: 0;
      padding: 0;
      vertical-align: baseline;
      color: #054752;
    }
  }
`;

export default LoginButton;
