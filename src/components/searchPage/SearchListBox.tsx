import React, { ReactElement } from 'react';
import styled from 'styled-components';
import dayjs from 'dayjs';

type Props = {
  children: ReactElement;
  departFrom: string;
  arriveAt: string;
  availableNumber: number;
  departDate: string;
};

const SearchListBox = ({
  departFrom,
  arriveAt,
  availableNumber,
  children,
  departDate,
}: Props) => {
  return (
    <div>
      <div>
        <Wrapper4>
          <div />
          <Wrapper5>
            <Wrapper6 aria-hidden="true" />
            <div>
              <Wrapper7>
                <Wrapper8>
                  <H2wrapper>{dayjs(departDate).format('MM/D')}</H2wrapper>
                  <Wrapper9>
                    <Wrapper10>
                      <H1wrapper>
                        {`${departFrom} → ${arriveAt}: 
                        ${availableNumber} rides available`}
                      </H1wrapper>
                    </Wrapper10>
                  </Wrapper9>
                  {children}
                </Wrapper8>
              </Wrapper7>
            </div>
          </Wrapper5>
        </Wrapper4>
      </div>
    </div>
  );
};

const Wrapper4 = styled.div`
  opacity: 1;
`;

const Wrapper5 = styled.div`
  position: relative;
`;

const Wrapper6 = styled.div`
  position: absolute;
  background: rgb(255, 255, 255);
  width: 100%;
  height: 100%;
  z-index: 1;
  opacity: 0;
  visibility: hidden;
  transition: opacity 420ms ease-in-out 0s, visibility 420ms ease-in-out 0s;
`;

const Wrapper7 = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Wrapper8 = styled.div`
  width: 614px;
  margin: 0 auto;
`;

const H2wrapper = styled.h2`
  white-space: pre-line;
  color: rgb(5, 71, 82);
  font-size: 22px;
  line-height: 24px;
  font-weight: 500;
  padding: 24px 24px 8px;
`;

const Wrapper9 = styled.div`
  -webkit-font-smoothing: antialiased;
  border-width: 0;
  box-sizing: border-box;
  font-family: gt-eesti, 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: 16px;
  margin: 0;
  padding: 0 24px;
  vertical-align: baseline;
`;

const Wrapper10 = styled.div`
  display: flex !important;
`;

const H1wrapper = styled.h1`
  -webkit-font-smoothing: antialiased;
  border-width: 0;
  box-sizing: border-box;
  color: #708c91;
  flex: 1 1 0;
  font-family: gt-eesti, 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: 20px;
  margin: 0;
  padding: 8px 0;
  vertical-align: baseline;
  white-space: pre-line;
`;

export default SearchListBox;
