import { Th } from '@chakra-ui/react';
import { PanelTableHeadProps } from './types';

export function PanelTableHead({innerHTML}: PanelTableHeadProps) {
  return (
    <Th px='6' m='0 auto' color='gray.300'>
      {innerHTML}
    </Th>
  )
}