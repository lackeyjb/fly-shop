import React from 'react';
import { Box, Flex, useDisclosure } from '@chakra-ui/core';
import { Link } from '@reach/router';

import HamburgerMenu from './hamburger-menu';
import NavItem from './nav-item';
import Heading from '../heading';

function Nav() {
  const { isOpen, onToggle } = useDisclosure();
  return (
    <Flex
      align="center"
      as="nav"
      bg="teal.900"
      color="white"
      justify="space-between"
      px={6}
      py={4}
      wrap="wrap"
    >
      <Flex align="center">
        <Heading as="h1" size="xl">
          <Link to="/">Flyco</Link>
        </Heading>
      </Flex>
      <HamburgerMenu onClick={onToggle} />
      <Box
        alignItems="center"
        display={{ sm: isOpen ? 'block' : 'none', md: 'flex' }}
        width={{ sm: 'full', md: 'auto' }}
      >
        <NavItem>
          <Link to="/">Home</Link>
        </NavItem>
        <NavItem>
          <Link to="/shop">Shop</Link>
        </NavItem>
        <NavItem>
          <Link to="/about">About</Link>
        </NavItem>
      </Box>
    </Flex>
  );
}

export default Nav;
