'use client'

import { HamburgerIcon } from '@chakra-ui/icons'
import { Box, Button, Container, Flex, IconButton, Menu, MenuButton, MenuItem, MenuList, SimpleGrid } from '@chakra-ui/react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import png from '../../../public/logo.png'

export default function Header() {
  return (
    <Box boxShadow={'lg'} position={'fixed'} width={"100%"} bg={"white"}>
      <Container maxW={1400}>
        <SimpleGrid templateColumns={{ lg: 'repeat(3, 1fr)', base: 'repeat(2, 1fr)' }}>
          <Box>
            <Image src={png} alt='panaverse-logo' height={100}></Image>
          </Box>
          <Flex display={{ lg: 'flex', base: 'none' }} placeItems='center' color='black' fontSize={18} fontWeight='semibold' gap={10}>
            <Link href=''>Home</Link>
            <Link href=''>About</Link>
            <Link href=''>Courses</Link>
            <Link href='https://docs.google.com/document/d/13Z4tMKQmZpMEsOc1Y_qAXbOstRolGIFupHxQFgAFl98/edit?usp=sharing'>Syllabus</Link>
          </Flex>
          <Box display={{ lg: 'initial', base: 'none' }}>
            <Button mt='25px' size='lg' colorScheme={'purple'} float='right'>Apply</Button>
          </Box>
          <Box pt='20px' display={{ lg: 'none', base: 'initial' }}>
            <Menu>
              <MenuButton float='right'
                as={IconButton}
                aria-label='Options'
                icon={<HamburgerIcon />}
                variant='outline'
              />
              <MenuList>
                <MenuItem>Home</MenuItem>
                <MenuItem>About</MenuItem>
                <MenuItem>Courses</MenuItem>
                <MenuItem>Syllabus</MenuItem>
              </MenuList>
            </Menu>
          </Box>
        </SimpleGrid>
      </Container>
    </Box>
  )
}
