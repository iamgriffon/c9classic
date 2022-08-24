import { Text } from '@chakra-ui/react';
import Link from 'next/link';

export function Logo() {
  return (
    <Link href='/'>
      <Text
        fontSize={['2xl', '3xl']}
        fontWeight='body'
        letterSpacing='tight'
        w='64'
        cursor='pointer'
      >
        C9
        <Text as='span' ml='1' color='pink.500'>.</Text>
        Classic
      </Text>
    </Link>
  )
};