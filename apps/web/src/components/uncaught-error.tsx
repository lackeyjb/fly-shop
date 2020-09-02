import React from 'react';
import { Box, Button, Flex, Heading, SimpleGrid } from '@chakra-ui/core';
import { FallbackProps } from 'react-error-boundary';

function UncaughtError({ resetErrorBoundary }: FallbackProps) {
  return (
    <Flex align="center" justify="center" h="50vh">
      <SimpleGrid columns={1} spacing={6}>
        <Box>
          <Heading fontFamily="introrustg-base2line" fontWeight="normal">
            Something went wrong!
          </Heading>
        </Box>
        <Flex justify="center">
          <Button onClick={resetErrorBoundary} variantColor="teal">
            Try again
          </Button>
        </Flex>
      </SimpleGrid>
    </Flex>
  );
}

export default UncaughtError;
