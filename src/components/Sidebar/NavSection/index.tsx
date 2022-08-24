import { Box, Text, Stack } from '@chakra-ui/react';
import { NavSectionProps } from './types';

export function NavSection({title, children}: NavSectionProps) {
  return (
    <Box>
      <Text fontWeight='bold' color='gray.400' fontSize='small'>{title.toUpperCase()}</Text>
      <Stack spacing='4' mt='8' align='stretch'>
        {children}
      </Stack>
    </Box>
  )
}