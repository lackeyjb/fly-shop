import React from 'react';
import { RouteComponentProps } from '@reach/router';
import { useQuery } from 'react-query';
import { Flex } from '@chakra-ui/core';

import { cacheKeys } from 'config/cache-keys';
import { client } from 'utils/api-client';

function Shop(props: RouteComponentProps<{ categoryName?: string }>) {
  const { data: products = [], isLoading } = useQuery(cacheKeys.shop, () =>
    client
      .get('/shop', { params: { category: props.categoryName } })
      .then(({ data }) => data),
  );
  console.log(products, isLoading);

  if (isLoading) return <div>Loading</div>;

  return (
    <Flex align="center" direction="column" justify="center" my={6}></Flex>
  );
}

export default Shop;
