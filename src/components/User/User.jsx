import PropTypes from 'prop-types';
import {
  WrapperProfile,
  WrapperDescription,
  WrapperAvatar,
  Username,
  UserTag,
  UserLocation,
  StatsList,
  StatsItem,
  Label,
  Quantity,
} from './User.styled';
export const User = ({
  avatar,
  username,
  tag,
  location,
  followers,
  views,
  likes,
}) => {
  return (
    <WrapperProfile>
      <WrapperDescription>
        <WrapperAvatar src={avatar} alt="User avatar" />
        <Username>{username}</Username>
        <UserTag>@{tag}</UserTag>
        <UserLocation>{location}</UserLocation>
      </WrapperDescription>

      <StatsList>
        <StatsItem>
          <Label>Followers</Label>
          <Quantity>{followers}</Quantity>
        </StatsItem>
        <StatsItem>
          <Label>Views</Label>
          <Quantity>{views}</Quantity>
        </StatsItem>
        <StatsItem>
          <Label>Likes</Label>
          <Quantity>{likes}</Quantity>
        </StatsItem>
      </StatsList>
    </WrapperProfile>
  );
};

User.propTypes = {
  avatar: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  followers: PropTypes.number.isRequired,
  views: PropTypes.number.isRequired,
  likes: PropTypes.number.isRequired,
};
