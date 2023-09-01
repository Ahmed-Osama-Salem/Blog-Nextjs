import { Switch, useColorMode } from '@chakra-ui/react';

const ToggleColorMode = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Switch
      isChecked={colorMode === 'dark'}
      onChange={toggleColorMode}
      colorScheme="teal"
      size="md"
    />
  );
};

export default ToggleColorMode;
