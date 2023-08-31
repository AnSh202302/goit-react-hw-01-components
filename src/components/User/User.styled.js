import { styled } from 'styled-components';

export const WrapperProfile = styled('div')(() => {
  return {
    width: 300,
    padding: 16,
    background: '#6eabe4',
    margin: '0 auto',
    borderRadius: 8,
  };
});
export const WrapperDescription = styled('div')(() => {
  return {
    textAlign: 'center',
  };
});

export const WrapperAvatar = styled('img')(() => {
  return {
    width: '100%',
    paddingBottom: 8,
  };
});
export const Username = styled('p')(() => {
  return {
    fontSize: 24,
    fontWeight: 'bold',
    paddingBottom: 8,
  };
});
export const UserTag = styled('p')(() => {
  return {
    paddingBottom: 8,
  };
});
export const UserLocation = styled('p')(() => {
  return {
    paddingBottom: 8,
  };
});
export const StatsList = styled('ul')(() => {
  return {
    display: 'flex',
    justifyContent: 'space-evenly',
    gap: 16,
    textAlign: 'center',
  };
});
export const StatsItem = styled('li')(() => {
  return {
    display: 'flex',
    flexDirection: 'column',
  };
});
export const Label = styled('span')(() => {
  return {
    fontSize: 16,
  };
});
export const Quantity = styled('span')(() => {
  return {
    fontSize: 22,
    fontWeight: 'bold',
  };
});
