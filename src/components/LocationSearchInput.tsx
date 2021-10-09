import React from 'react';
import styled from 'styled-components';

type Props = {
  placeholder: string;
  departFrom: string;
  handleChange: React.ChangeEventHandler<HTMLInputElement>;
};

const LocationSearchInput = ({
  placeholder,
  departFrom,
  handleChange,
}: Props) => {
  return (
    <Wrapper>
      <Wrapper6>
        <Wrapper7>
          <Wrapper8>
            <Wrapper9>
              <SpanWrapper>
                <Wrapper10 aria-hidden="true"></Wrapper10>
              </SpanWrapper>
              <SpanWrapper2></SpanWrapper2>
              <input
                type="text"
                value={departFrom}
                placeholder={placeholder}
                onChange={handleChange}
              />
            </Wrapper9>
          </Wrapper8>
        </Wrapper7>
      </Wrapper6>
      <div></div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  -webkit-font-smoothing: antialiased;
  border-width: 0;
  box-sizing: border-box;
  display: flex;
  font-family: gt-eesti, 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: 16px;
  margin: 0;
  padding: 0;
  vertical-align: baseline;
`;

const Wrapper6 = styled.div`
  -webkit-font-smoothing: antialiased;
  border-width: 0;
  box-sizing: border-box;
  font-family: gt-eesti, 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: 16px;
  margin: 0;
  overflow: hidden;
  padding: 0;
  vertical-align: baseline;
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
  opacity: 1;
  padding: 0;
  transform: translateX(0);
  transition-duration: 200ms;
  transition-property: opacity, transform;
  vertical-align: baseline;
`;

const Wrapper8 = styled.div`
  -webkit-font-smoothing: antialiased;
  border-width: 0;
  box-sizing: border-box;
  font-family: gt-eesti, 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: 16px;
  margin: 0;
  opacity: 1;
  padding: 0;
  transform: translateX(0);
  transition-duration: 200ms;
  transition-property: opacity, transform;
  vertical-align: baseline;
`;

const Wrapper9 = styled.div`
  -webkit-box-align: center;
  -webkit-font-smoothing: antialiased;
  align-items: center;
  background-color: initial;
  background-image: none;
  border-style: none;
  box-sizing: border-box;
  color: #708c91;
  cursor: pointer;
  display: flex;
  font-family: gt-eesti, 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-size: 16px;
  font-weight: 400;
  height: 40px;
  line-height: 18px;
  margin: 0;
  min-width: 0;
  overflow: hidden;
  padding: 0 0 0 8px;
  text-align: left;
  vertical-align: baseline;
  white-space: nowrap;
  width: 240px;

  &:disabled {
    cursor: default;
  }
`;

const SpanWrapper = styled.span`
  -webkit-font-smoothing: antialiased;
  border-width: 0;
  box-sizing: border-box;
  font-family: gt-eesti, 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: 18px;
  margin: 0;
  padding: 0;
  vertical-align: baseline;
`;

const SpanWrapper2 = styled.span`
  -webkit-font-smoothing: antialiased;
  border-width: 0;
  box-sizing: border-box;
  color: #708c91;
  flex: 0 1 auto;
  font-family: gt-eesti, 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-size: 18px;
  font-weight: 400;
  line-height: 20px;
  margin: 0;
  min-width: 0;
  overflow: hidden;
  padding: 0;
  text-overflow: ellipsis;
  vertical-align: baseline;
  white-space: nowrap;

  &:not(:first-child) {
    margin-left: 8px;
  }
`;

const Wrapper10 = styled.div`
  -webkit-font-smoothing: antialiased;
  background-color: #fff;
  border: 4px solid #708c91;
  border-radius: 50%;
  box-sizing: border-box;
  font-family: gt-eesti, 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-size: 16px;
  font-weight: 400;
  height: 18px;
  line-height: 18px;
  margin: 0;
  padding: 0;
  vertical-align: baseline;
  width: 18px;
`;

const ButtonWrapper1 = styled.div`
  -webkit-box-align: center;
  -webkit-font-smoothing: antialiased;
  align-items: center;
  background-color: initial;
  background-image: none;
  border-style: none;
  box-sizing: border-box;
  color: #708c91;
  cursor: pointer;
  display: flex;
  font-family: gt-eesti, 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-size: 16px;
  font-weight: 400;
  height: 40px;
  line-height: 24px;
  margin: 0 8px 0 0;
  min-width: 0;
  overflow: hidden;
  overflow: hidden;
  padding: 0;
  text-align: left;
  vertical-align: baseline;
  white-space: nowrap;

  &:disabled {
    cursor: default;
    opacity: 0;
  }

  svg {
    box-sizing: border-box;
    fill: #00aff5;
    flex: 0 0 auto;
    flex: 0 0 auto;
    transform: rotate(90deg);
  }
`;

export default LocationSearchInput;
