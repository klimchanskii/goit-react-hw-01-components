import { Box } from "components/Box";
import {randomColor} from 'randomColor'
import {Title,Item  } from './Statistics.styled'
import PropTypes from 'prop-types'

export const Statistics = ({ title, stats }) => {
    
    return (
    <Box as='section' m='6'>
        {title && <Title >{title}</Title>}
            <Box as="ul" display='flex' justifyContent='center'>
                
    {stats.map(stat => (
                <Item style={{ backgroundColor:`${randomColor()}`}} key={stat.id}>
                    <span>{stat.label}</span>
                    <span>{stat.percentage}</span>
                </Item>
            )) }
  </Box>
</Box> 

 )
    
}

Statistics.prototype = {
    title: PropTypes.string.isRequired,
    stats: PropTypes.object.isRequired,
    
}




