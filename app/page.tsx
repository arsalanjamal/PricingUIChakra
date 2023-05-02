'use client';
import { Pricing } from './Pricing';
// import Image from 'next/image'
// import { Inter } from 'next/font/google'
import Features from './Features';
import { Header } from './Header';
import { ChakraProvider, Heading, Text } from '@chakra-ui/react'

// import { Practice } from './Practice';
// const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <ChakraProvider>
     {/* <Practice /> */}
     <Header/>
     <Pricing/>
     <Features/>
      </ChakraProvider>    
  );    
  
}
