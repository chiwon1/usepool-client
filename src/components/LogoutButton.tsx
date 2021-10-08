import React, { FC, useContext } from 'react';
import styled from 'styled-components';
import UI from '../constants/ui';
import axiosInstance from '../api/axios';
import { useHistory } from 'react-router-dom';
import { UserContext } from '../contexts/AuthProvider';

const LogoutButton: FC = () => {
  const history = useHistory();
  const { handleUser } = useContext(UserContext);

  const logout = async () => {
    handleUser!(null);
    await axiosInstance.post('/logout');
    history.push('/');
  };

  return (
    <ListWrapper>
      <div onClick={logout}>
        <Span>
          <span>
            <span>{UI.LOGOUT}</span>
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

export default LogoutButton;