'use client'

import { Box, Container, Flex, Grid, Heading, Image, SimpleGrid, Text } from '@chakra-ui/react'
import Link from 'next/link'
import React from 'react'
import png from '../../../public/Logo.png'

export default function Footer() {
    return (
        <Box boxShadow={'lg'} pt={500}>
            <Container maxW={1400}  bg='#1a202c'>
                <SimpleGrid textAlign={{ lg: 'start', base: 'center' }} spacing='20px' py='12px' templateColumns={{ base: 'repeat(1, 1fr)', lg: 'repeat(4, 1fr)' }}>
                    <Box>
                        <Heading pb='20px' color='white'>About Us</Heading>
                            <Text pt='5px' pr={{ lg: '40px', base: '0' }} color='gray'>Certified Web 3.0 and Metaverse Developer: A Nationwide Program in Karachi, Lahore, Islamabad, and Peshawar</Text>
                    </Box>
                    <Box>
                        <Heading color='white' >Useful Links</Heading>
                        <Grid pt='20px' color='gray'>
                            <Link href='/'>Home</Link>
                            <Link href='/'>About</Link>
                            <Link href='/'>Cources</Link>
                            <Link href='https://docs.google.com/document/d/13Z4tMKQmZpMEsOc1Y_qAXbOstRolGIFupHxQFgAFl98/edit?usp=sharing'>Syllabus</Link>
                        </Grid>
                    </Box>
                    <Box>
                        <Heading color='white'>Follow us</Heading>
                        <Grid pt='20px' color='gray'>
                            <Link href='https://www.facebook.com/piaic/'>Facebook Page</Link>
                            <Link href='https://www.facebook.com/groups/piaic/?ref=share'>Facebook Group</Link>
                            <Link href='https://www.instagram.com/piaicofficial/'>Instagram</Link>
                            <Link href='https://twitter.com/piaicofficial'>Twitter</Link>
                            <Link href='https://www.youtube.com/@panaverse'>YouTube</Link>
                            <Link href='https://github.com/panaverse'>GitHub</Link>

                        </Grid>
                    </Box>
                    <Box>
                        <Heading color='white'>Contact Us</Heading>
                        <Grid pt='40px' color='gray'>
                            <Link href='/'>+92-308-2220203 (WhatsApp as well)</Link>
                            <Link href='/'>education@piaic.org</Link>
                        </Grid>
                    </Box>

                </SimpleGrid>
            </Container>
        </Box>
    )
}
