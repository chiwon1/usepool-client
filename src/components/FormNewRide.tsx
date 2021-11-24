import React, { FC, ReactElement } from 'react';
import styled from 'styled-components';

type Props = {
  handleSubmit?: React.FormEventHandler<HTMLFormElement>;
  children: ReactElement;
  InputTitle: string;
};

const FormNewRide: FC<Props> = ({ handleSubmit, children, InputTitle }) => {
  return (
    <form onSubmit={handleSubmit}>
      <Wrapper>
        <div>
          <div role="presentation">
            <Container>
              <h1>{InputTitle}</h1>
              <div>{children} </div>
            </Container>
          </div>
        </div>
      </Wrapper>
    </form>
  );
};

const Wrapper = styled.div`
  border-width: 0;
  flex-grow: 2;
  font-size: 16px;
  font-weight: 400;
  height: auto;
  line-height: 16px;
  margin: 0;
  min-height: 0;
  padding: 0;
  position: relative;
  vertical-align: baseline;
`;

const Container = styled.div`
  border-width: 0;
  box-sizing: border-box;
  font-size: 16px;
  font-weight: 400;
  line-height: 16px;
  margin: 0 auto;
  max-width: 662px;
  padding: 0;
  vertical-align: baseline;

  & > h1 {
    border-width: 0;
    box-sizing: border-box;
    color: #054752;
    font-size: 40px;
    font-weight: 500;
    line-height: 1.06;
    margin: 0;
    padding: 24px 24px 32px;
    text-align: center;
    vertical-align: baseline;
    white-space: pre-line;
  }

  & > div {
    border-width: 0;
    box-sizing: border-box;
    font-size: 16px;
    font-weight: 400;
    line-height: 16px;
    margin: 0;
    padding: 0;
    vertical-align: baseline;
    text-align: center;
  }
`;

export default FormNewRide;
