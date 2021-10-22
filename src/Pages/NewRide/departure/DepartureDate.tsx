import React, { FC, useCallback, useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';

import { NewRideContext } from '../NewRide';
import FormNewRide from '../../../components/FormNewRide';
import UI from '../../../constants/ui';

import dayjs from 'dayjs';
import DayPicker from 'react-day-picker';
import 'react-day-picker/lib/style.css';

const DepartureDate: FC = () => {
  const history = useHistory();
  const { newRideInfo, handleNewRideInfo } = useContext(NewRideContext);
  const [inputDate, setInputDate] = useState<Date>(new Date());

  const handleClick = useCallback(
    (date: Date) => {
      setInputDate(date);

      const formattedDate = dayjs(date).format('DD MMM YYYY');

      handleNewRideInfo({
        ...newRideInfo,
        departureDate: formattedDate,
      });

      history.push('/newRide/departure-time');
    },
    [newRideInfo],
  );

  return (
    <>
      <FormNewRide InputTitle={UI.DEPART_DATE_INPUT_MESSAGE}>
        <Wrapper>
          <DayPicker
            className="day-picker"
            selectedDays={new Date(inputDate)}
            onDayClick={(date) => handleClick(date)}
          />
        </Wrapper>
      </FormNewRide>
      <StyledDiv />
    </>
  );
};

const StyledDiv = styled.div`
  height: 50px;
`;

const Wrapper = styled.div`
  .day-picker {
    display: inline-block;
    font-size: 1.3rem;
  }
`;

export default DepartureDate;
