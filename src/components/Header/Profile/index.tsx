import { Flex, Box, Text } from '@chakra-ui/react';
import Image from 'next/image';
import { ProfileProps } from './types';

export function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex align='center'>
      {showProfileData && (
        <Box mr='4' textAlign='right'>
          <Text color='gray.300' fontSize='small'>User Name </Text>
          <Text>email@email.com</Text>
          <Text as='span' fontStyle='italic' textDecoration='underline' fontSize='small' cursor='pointer'>Logout</Text>
        </Box>
      )}

      <Image src={'/c9.ico'} width={40} height={40}  />
    </Flex>
  )
}