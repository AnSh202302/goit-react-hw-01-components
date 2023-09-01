import { styled } from 'styled-components';

export const FriendListItemStyled = styled('li')(() => {
  return {
    margin: '0 auto',
    marginBottom: 8,
    width: 200,
    height: 50,
    display: 'flex',
    alignItems: 'center',
    gap: 16,
    backgroundColor: '#f0e1f1',
    borderRadius: 8,
    '&:last-child': {
      marginBottom: 0,
    },
  };
});

export const IsOnlineStatus = styled('span')(({ $isOnline }) => {
  return {
    width: 16,
    height: 16,
    marginLeft: 16,
    borderRadius: '50%',
    backgroundColor: $isOnline ? 'green' : 'red',
  };
});
