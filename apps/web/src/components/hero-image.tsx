import React from 'react';
import { PseudoBox, PseudoBoxProps } from '@chakra-ui/core';

interface HeroImageProps extends PseudoBoxProps {
  hover?: boolean;
  image?: string;
  pointer?: boolean;
}

function HeroImage(props: HeroImageProps) {
  const styleProps: PseudoBoxProps = {
    backgroundImage: props.image
      ? `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("${props.image}")`
      : props.backgroundImage,
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    cursor: 'pointer',
    display: 'flex',
    h: '200px',
    justifyContent: 'center',
    rounded: 'md',
    shadow: 'lg',
    pos: 'relative',
    w: '200px',
    _hover: { opacity: 0.7 },
  };

  if (props.hover) {
    styleProps._hover = { opacity: 0.7 };
  }

  if (props.pointer) {
    styleProps.cursor = 'pointer';
  }

  return <PseudoBox {...styleProps} {...props} />;
}

export default HeroImage;
