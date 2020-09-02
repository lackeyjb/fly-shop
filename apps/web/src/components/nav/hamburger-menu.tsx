import React from 'react';
import { Box, PseudoBox, PseudoBoxProps } from '@chakra-ui/core';
import { FaBars } from 'react-icons/fa';

function HamburgerMenu(props: PseudoBoxProps) {
  return (
    <PseudoBox
      as="button"
      display={{ base: 'block', md: 'none' }}
      _focus={{ outline: 0 }}
      {...props}
    >
      <Box as={FaBars} size="20px" title="Menu" />
    </PseudoBox>
  );
}

export default HamburgerMenu;
