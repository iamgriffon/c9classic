import { Flex, Icon } from '@chakra-ui/react';
import { RiSearchLine } from 'react-icons/ri';
import { SearchBoxProps } from './types';

export function SearchBox({children}: SearchBoxProps) {

  return (
    <Flex
      as='label'
      flex='1'
      px='8'
      ml='6'
      mb='5'
      h='10'
      maxWidth={400}
      alignSelf='center'
      alignItems='center'
      color='gray.200'
      position='relative'
      bg='gray.900'
      borderRadius='full'
    >
      { children }

      <Icon as={RiSearchLine} fontSize='20' cursor='pointer' />
    </Flex>
  )
};