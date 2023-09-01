import { Flex, Spinner } from '@chakra-ui/react';

const LoadingSpinner = () => {
  return (
    <Flex align="center" h="calc(100vh)" w="full" justifyContent="center">
      <Spinner size="xl" />
    </Flex>
  );
};

export default LoadingSpinner;
