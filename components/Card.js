import { Box, BoxProps, useColorModeValue } from '@chakra-ui/react'
import * as React from 'react'

const Card = ({children, height}) => (
  <Box
    height={height}

    bg="#ffffff"
    boxShadow={useColorModeValue('sm', 'sm-dark')}
    borderRadius="lg"
  
  >
      {children}
  </Box>
)

export default Card