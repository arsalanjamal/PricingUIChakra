import { Box, HStack,Icon,Text,Flex } from '@chakra-ui/react'
import React from 'react'
import { Icon1 } from './Icons/Icon1'
import { Icon2 } from './Icons/Icon2'
import { Icon3 } from './Icons/Icon3'

export default function Features()  {
  return (
  <Box width={"800px"} m="auto" mt="25px" px="50px">
<Flex direction={{base:"column",lg:"row"}}>
    <HStack mb="20px">
    <Icon as={Icon1}/>
    <Text>10 Days money back guarantee</Text>
    </HStack>
    <HStack mb="20px">
    <Icon as={Icon2}/>
    <Text>No setup fees 100% hassle-free </Text>
    </HStack>
    <HStack mb="20px">
    <Icon as={Icon3}/>
    <Text>No monthly subscription Pay once and for all </Text>
    </HStack>
    </Flex>
    </Box> 
  )
}
