import React, { ReactElement } from 'react';
import styled from 'styled-components';

type Props = {
  handleSubmit?: React.FormEventHandler<HTMLFormElement>;
  children: ReactElement;
  InputTitle: string;
};

const FormNewRide = ({ handleSubmit, children, InputTitle }: Props) => {
  return (
    <form onSubmit={handleSubmit}>
      <Wrapper3>
        <Wrapper4>
          <div role="presentation">
            <Wrapper5>
              <H1Wrapper>{InputTitle}</H1Wrapper>
              <Wrapper7>{children} </Wrapper7>
            </Wrapper5>
          </div>
        </Wrapper4>
      </Wrapper3>
    </form>
  );
};

const Wrapper3 = styled.div`
  -webkit-font-smoothing: antialiased;
  border-width: 0;
  box-sizing: border-box;
  flex-grow: 2;
  font-family: gt-eesti, 'Helvetica Neue', Helvetica, Arial, sans-serif;
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

const Wrapper4 = styled.div`
  -webkit-box-pack: start;
  -webkit-font-smoothing: antialiased;
  border-width: 0;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  font-family: gt-eesti, 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-size: 16px;
  font-weight: 400;
  height: auto;
  justify-content: flex-start;
  line-height: 16px;
  margin: 0;
  min-height: 0;
  padding: 0;
  vertical-align: baseline;
`;

const Wrapper5 = styled.div`
  -webkit-font-smoothing: antialiased;
  border-width: 0;
  box-sizing: border-box;
  font-family: gt-eesti, 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: 16px;
  margin: 0 auto;
  max-width: 662px;
  padding: 0;
  vertical-align: baseline;
`;

const H1Wrapper = styled.h1`
  -webkit-font-smoothing: antialiased;
  border-width: 0;
  box-sizing: border-box;
  color: #054752;
  font-family: gt-eesti, 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-size: 40px;
  font-weight: 500;
  line-height: 1.06;
  margin: 0;
  padding: 24px 24px 32px;
  text-align: center;
  vertical-align: baseline;
  white-space: pre-line;
`;

const Wrapper7 = styled.div`
  -webkit-font-smoothing: antialiased;
  border-width: 0;
  box-sizing: border-box;
  font-family: gt-eesti, 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: 16px;
  margin: 0;
  padding: 0;
  vertical-align: baseline;
  text-align: center;
`;

export default FormNewRide;
