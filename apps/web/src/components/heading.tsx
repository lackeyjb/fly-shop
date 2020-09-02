import React from 'react';
import { Heading as H, HeadingProps } from '@chakra-ui/core';

function Heading(props: HeadingProps) {
  return <H fontFamily="introrustg-base2line" fontWeight="normal" {...props} />;
}

export default Heading;
