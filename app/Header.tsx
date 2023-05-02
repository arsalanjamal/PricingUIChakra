import { Box,Heading,Text } from '@chakra-ui/react';
import React from 'react'
export const Header = () => {
  return (
    <Box textAlign={{base:"left",md:"left",lg:"center"}} 
    bg="#6B46C1" 
    pt="90px" 
    pb="250px" 
    color="white">
        <Heading>Simple Pricing for your business</Heading>
        <Text pt="10px">
          Plans that are carefully crafted to suit your business</Text>
    </Box>
  );
}
