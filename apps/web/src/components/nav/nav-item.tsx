import React from 'react';
import { Link, LinkProps } from '@chakra-ui/core';

function NavItem(props: LinkProps) {
  return (
    <Link
      as="span"
      display="block"
      mr={{ md: 8 }}
      mt={{ base: 4, md: 0 }}
      {...props}
    />
  );
}

export default NavItem;
