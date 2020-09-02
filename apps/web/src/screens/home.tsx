import React, { Fragment, useMemo } from 'react';
import { useQuery } from 'react-query';
import { Flex, SimpleGrid, Skeleton, Text, Divider } from '@chakra-ui/core';
import { chunk } from 'lodash-es';
import { Link, RouteComponentProps } from '@reach/router';

import { client } from 'utils/api-client';
import { cacheKeys } from 'config/cache-keys';
import Heading from 'components/heading';
import HeroImage from 'components/hero-image';

function LoadingSkeleton() {
  return <Skeleton h="200px" w="200px" />;
}

function Home(_: RouteComponentProps) {
  const { data: categories = [], isLoading } = useQuery(
    cacheKeys.categories,
    () => client.get('/categories').then(({ data }) => data),
  );

  const rows = useMemo(() => chunk(categories, 3), [categories]);

  return (
    <Flex align="center" direction="column" justify="center" my={6}>
      <Heading mb={1} size="lg">
        Categories
      </Heading>

      <Divider borderColor="black" mb={10} w={1 / 12} />

      <SimpleGrid columns={3} justifyItems="center" spacing={10}>
        {isLoading ? (
          <>
            <LoadingSkeleton />
            <LoadingSkeleton />
            <LoadingSkeleton />
          </>
        ) : (
          rows.map((row, i) => (
            <Fragment key={i}>
              {row.map((category: any) => (
                <Link
                  key={category.id}
                  to={`shop/${category.name.toLowerCase()}`}
                >
                  <HeroImage image={category.image}>
                    <Flex align="center">
                      <Text color="white" fontSize="xl" fontWeight="bold">
                        {category.name}
                      </Text>
                    </Flex>
                  </HeroImage>
                </Link>
              ))}
            </Fragment>
          ))
        )}
      </SimpleGrid>
    </Flex>
  );
}

export default Home;
