import { Image, TextName,TextTag,TextLocation,Quantity,Label,Stats,StatElement } from "./Profile.styled";
import { Box } from "components/Box";

import PropTypes from 'prop-types'

export const Profile = ({ username, tag, location, avatar, stats: { followers, views, likes } }) => {

return    (
    <Box mx="auto" mt="5" border='5px solid #9aa5b0' width="300px"
    borderRadius="10px">
  <Box display="flex" alignItems="center" flexDirection="column">
    <Image 
      src={avatar}
      alt="User avatar"
 
    />
            <TextName >{ username}</TextName>
            <TextTag >@{ tag}</TextTag>
            <TextLocation >{location }</TextLocation>
  </Box>

  <Stats>
    <StatElement>
      <Label >Followers</Label>
      <Quantity >{followers}</Quantity>
    </StatElement>
    <StatElement>
      <Label >Views</Label>
                <Quantity >{ views}</Quantity>
    </StatElement>
    <StatElement>
      <Label >Likes</Label>
                <Quantity >{ likes }</Quantity>
    </StatElement>
  </Stats>
</Box>)
}

Profile.propTypes = {
  stats: PropTypes.object.isRequired,
  avatar: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
};