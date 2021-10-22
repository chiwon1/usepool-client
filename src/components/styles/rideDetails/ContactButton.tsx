import React, { FC } from 'react';
import ContactIcon from './ContactIcon';
import styled from 'styled-components';

type Props = {
  handleClick: React.MouseEventHandler<HTMLButtonElement>;
  nickname: string;
};

const ContactButton: FC<Props> = ({ handleClick, nickname }) => {
  return (
    <Wrapper17>
      <StyledButton onClick={handleClick}>
        <SpanWrapper5>
          <ContactIcon />
          <SpanWrapper4>
            <span>{`Contact ${nickname}`}</span>
          </SpanWrapper4>
        </SpanWrapper5>
      </StyledButton>
    </Wrapper17>
  );
};

const Wrapper17 = styled.div`
  margin-left: auto;
  margin-right: auto;
  max-width: 662px;
`;

const SpanWrapper4 = styled.span`
  flex: 1 1 0%;

  span {
    margin: 0px;
    font-weight: 500;
    font-size: 18px;
    line-height: 20px;
    display: block;
    color: rgb(0, 175, 245);
  }
`;

const StyledButton = styled.button`
  padding-left: 24px;
  padding-right: 24px;
  position: relative;
  display: flex;
  padding-top: 16px;
  padding-bottom: 16px;
  -webkit-box-align: center;
  align-items: center;
  flex: 1 1 0%;
  border: 0px;
  background: none;
  white-space: pre-line;
  background: none;
  text-decoration: none;
  user-select: none;
  -webkit-tap-highlight-color: rgba(221, 221, 221, 0.4);
  width: 100%;
  text-align: left;
  cursor: pointer;

  :hover {
    background-color: #ededed;
    cursor: pointer;
  }

  :disabled {
    cursor: default;
  }
`;

const SpanWrapper5 = styled.span`
  display: flex;
  -webkit-box-flex: 1;
  flex-grow: 1;
  -webkit-box-align: center;
  align-items: center;
`;

export default ContactButton;
