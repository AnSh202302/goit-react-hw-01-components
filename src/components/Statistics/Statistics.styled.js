import { styled } from 'styled-components';

export const WrapperStatistics = styled('section')(() => {
  return {
    display: 'block',
    width: 300,
    margin: '0 auto',
    borderRadius: 8,
    padding: 16,
    backgroundColor: '#c8d9b8',
    textAlign: 'center',
    marginBottom: 20,
  };
});

export const StatisticsList = styled('ul')(() => {
  return {
    display: 'flex',
    justifyContent: 'space-around',
  };
});
export const StatisticsItem = styled('li')(() => {
  return {
    display: 'flex',
    flexDirection: 'column',
  };
});
