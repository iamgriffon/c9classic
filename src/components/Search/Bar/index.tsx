import { Input } from '@chakra-ui/react';
import { SearchBarProps } from './types';

export function SearchBar({ handleSearch, value }: SearchBarProps) {
  return (
    <Input
      color='whiteAlpha'
      variant='unstyled'
      placeholder='Search'
      _placeholder={{ color: 'gray.300' }}
      onChange={event => handleSearch(event)}
      value={value}
    />
  )
}